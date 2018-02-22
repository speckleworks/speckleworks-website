+++
description = "How to use the SpeckleCore .NET base api classes to talk directly with the Speckle API from a scripting component."
date = "2017-10-04T13:08:41+01:00"
title = "SpeckleCore (.NET) in Grashopper"
showtoc = "true"
comments = "false"
headerimg = "img/datamodels.png"
author = "Dimitrie Stefanescu"
twitter = "idid"
+++

You can easily hack your own Speckle Components with the SpeckleCore BaseSpeckleApiClient class. Here are some really quick scripts I've hacked up together in a c# scripting component.

It's a nice easy way of exploring the API, albeit you pay the price of fiddling around Grasshopper's event loop (or lack thereof).

## Getting Started
1. Make sure you've installed the [Speckle Grasshopper Components](https://github.com/speckleworks/SpeckleGrasshopper/releases). 
2. Create a C#/VB Scripting Component in Grasshopper.
3. Right Click, select "Manage Assemblies" and add the SpeckleCore.dll and SpeckleRhinoConverter.dll if needed.

If you get stuck, [here is the grasshopper defintion!](/img/blobs/SpeckleCore.Hacks.gh)!

Please note that you might need to set the "Managed Assemblies" of the scripting components, and don't forget to use your email and password that **you have already registered with** on the speckle server of your choice.

## A note on Async and Sync
**SpeckleCore**'s methods come in two falvours, _Sync_ and _Async_. I will not go into details here, but if you don't want the UI stuck, you'll need to invoke off the main thread. 

I've ended up invoking them using either
{{< highlight "C#" "" >}}
Rhino.RhinoApp.Invoke( new Action( ( ) => {
  var response = myClient.DoSomethingSync()
}));
{{</highlight>}}
or: 
{{< highlight "C#" "" >}}
myClient.DoSomethingAsync.ContinueWith( taskResult => {
  //...
});
{{</highlight>}}

You play.

## Login
This script will send a login request to the server and return with you api token. It will also set the AuthToken field in the provided client, and output it too (so you can reuse it afterwards in the definiton without authenticating everytime).

{{< highlight "C#" "" >}}
 private void RunScript(object Client, string Email, string Password, ref object Response, ref object ClientOut)
  {
    BaseSpeckleApiClient myClient = Client as BaseSpeckleApiClient;

    // Output stuff first, as we might return from the actual method and not get to the bottom
    Response = myResponse;

    // If the response is not null, set the AuthToken value of the client and output it as well
    if(myResponse != null) myClient.AuthToken = myResponse.ApiToken;
    ClientOut = myClient;

    // check if we really need to invoke a new login:
    // 1) Are the inputs there?
    // 2) Are the inputs different than the last ones?
    if((Email != null && Password != null && myClient != null) && (_Email != Email || _Password != Password))
    {
      // Store the inputs so we can compare new vs. old
      _Email = Email; _Password = Password;

      // Invoke the method from outside the main thread
      Rhino.RhinoApp.MainApplicationWindow.Invoke(new Action(() =>
        {
        // store the response
        myResponse = myClient.UserLogin(new PayloadAccountLogin() { Email = Email, Password = Password });
        // trigger a component refresh
        this.Component.ExpireSolution(true);
        }));
    }
  }

  // <Custom additional code> 
  ResponseAccountLogin myResponse = null;
  string _Email, _Password;
  // </Custom additional code>
{{</highlight>}}

## Create Object
This script will take a GeometryBase object, convert it, and save it in the database. It will then output the saved SpeckleObject, complete with his **DatabaseId** (called _ObjectId_ in the response).

{{< highlight "C#" "" >}}
private void RunScript(object Client, GeometryBase Obj, ref object Response, ref object SpkObject)
  {
    // set output first
    Response = myResponse;
    SpkObject = myObject;

    // Get and cast the client
    BaseSpeckleApiClient myClient = Client as BaseSpeckleApiClient;

    // Return if null
    if(myClient == null) return;

    // Create a fresh converter if we don't have one
    if(myConverter == null) myConverter = new RhinoConverter();

    // Exit if no object to send to the db
    if(Obj == null) return;

    // Convert the object
    myObject = myConverter.ToSpeckle(Obj);

    // Check if we have a new object
    if(myObject.Hash != _myObject.Hash) {
      Rhino.RhinoApp.MainApplicationWindow.Invoke(new Action(() =>
        {
        // Create a payload and put in the converted object
        PayloadSingleObject myPayload = new PayloadSingleObject() { Object = myObject };

        myResponse = myClient.ObjectCreate(myPayload);

        // Set the database id to the converted object
        myObject.DatabaseId = myResponse.ObjectId;
        // Save the old object so we can compare upstairs
        _myObject = myObject;

        this.Component.ExpireSolution(true);
        }));
    }
  }

  // <Custom additional code> 
  RhinoConverter myConverter = null;
  SpeckleObject myObject = null;
  ResponsePostObject myResponse = null;
  SpeckleObject _myObject = new SpeckleObject() { Hash = ""};
  // </Custom additional code> 
{{</highlight>}}

## Create Many Objects 
Slightly different, and introduces the complexity of understanding if we actually have a new request or not.

{{< highlight "C#" "" >}}
  private void RunScript(object Client, List<GeometryBase> Objs, ref object Response, ref object SpkObjects)
  {
    // set output first
    Response = myResponse;
    SpkObjects = myObjects;

    // Get and cast the client
    BaseSpeckleApiClient myClient = Client as BaseSpeckleApiClient;

    // Return if null
    if(myClient == null) return;

    // Create a fresh converter if we don't have one
    if(myConverter == null) myConverter = new RhinoConverter();

    // Exit if no object to send to the db
    if(Objs == null || Objs.Count == 0) return;

    // Convert the object
    myObjects = myConverter.ToSpeckle(Objs).ToList();

    // Calculate a hash for the request
    var bigHash = "";
    myObjects.ForEach(obj => bigHash += obj.Hash);
    var requestHash = CreateMD5(bigHash);

    // Check if we have a new request.
    // Note: this is not a good way of doing it; the grasshopper sender
    // component takes care of this by doing a diff on the list, and implements
    // a cache too, so that previously sent objects do not get sent again.
    if(requestHash != _requestHash) {
      // Create a payload and put in the converted objects
      PayloadMultipleObjects myPayload = new PayloadMultipleObjects() { Objects = myObjects };

      myClient.ObjectCreateBulkAsync(myPayload).ContinueWith(tres =>
        {
        myResponse = tres.Result;

        // Set the database id to the converted objects
        int k = 0;
        myResponse.Objects.ForEach(id =>
          {
          myObjects[k++].DatabaseId = id;
          });

        // Save the request hash
        _requestHash = requestHash;

        this.Component.ExpireSolution(true);
        });
    }
  }

  // <Custom additional code> 
  RhinoConverter myConverter = null;
  List<SpeckleObject> myObjects = null;
  string _requestHash = "";
  ResponsePostObjects myResponse = null;


  // ref: https://msdn.microsoft.com/en-us/library/system.security.cryptography.md5%28v=vs.110%29.aspx
  public string CreateMD5(string input)
  {
    // Use input string to calculate MD5 hash
    using (System.Security.Cryptography.MD5 md5 = System.Security.Cryptography.MD5.Create())
    {
      byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(input);
      byte[] hashBytes = md5.ComputeHash(inputBytes);

      // Convert the byte array to hexadecimal string
      System.Text.StringBuilder sb = new System.Text.StringBuilder();
      for (int i = 0; i < hashBytes.Length; i++)
      {
        sb.Append(hashBytes[i].ToString("X2"));
      }
      return sb.ToString();
    }
  }

  // </Custom additional code> 
{{</highlight>}}

## Get Object
Gets a Speckle Object by its database id.

{{< highlight "C#" "" >}}
private void RunScript(object Client, string ObjectId, ref object Response, ref object SpkObject, ref object RhObject)
  {
    // Get and cast the client
    BaseSpeckleApiClient myClient = Client as BaseSpeckleApiClient;

    // Create a fresh converter if we don't have one
    if(myConverter == null) myConverter = new RhinoConverter();

    // Set outputs
    Response = myResponse;
    SpkObject = myObject;
    if(myObject != null) RhObject = myConverter.ToNative(myObject);

    // Check if we have a new request
    if(ObjectId != _ObjectId)
      Rhino.RhinoApp.MainApplicationWindow.Invoke(new Action(() =>
        {
        _ObjectId = ObjectId;

        // Note: Since this is Rhino, we can omit the 'displayValue' field for
        // any objects we get back, as the converter relies on the encoded value.
        myResponse = myClient.ObjectGet("omit=displayValue", ObjectId);
        myObject = myResponse.SpeckleObject;
        this.Component.ExpireSolution(true);
        }));
  }

  // <Custom additional code> 

  RhinoConverter myConverter = null;

  SpeckleObject myObject = null;

  ResponseObjectGet myResponse = null;

  string _ObjectId = null;

  // </Custom additional code> 
});
{{</highlight>}}

## Get Many Objects
 {{< highlight "C#" "" >}}
 // Get and cast the client
    BaseSpeckleApiClient myClient = Client as BaseSpeckleApiClient;

    // Create a fresh converter if we don't have one
    if(myConverter == null) myConverter = new RhinoConverter();

    // Set outputs
    Response = myResponse;
    SpkObjects = myObjects;
    if(myObjects != null) RhObjects = myConverter.ToNative(myObjects);


    PayloadObjectGetBulk myPayload = new PayloadObjectGetBulk() { Objects = ObjectIds };

    // Check if we have a new request: this is a bad way of doing it
    // Quite inelegant, but here's to hacks
    if(_myPayload.ToJson() != myPayload.ToJson()) {
      _myPayload = myPayload;
      myClient.ObjectGetBulkAsync("omit=displayValue", myPayload).ContinueWith(tres =>
        {

        myResponse = tres.Result;
        myObjects = myResponse.Objects;
        this.Component.ExpireSolution(true);
        });
    }
  }

  // <Custom additional code> 

  RhinoConverter myConverter = null;

  List<SpeckleObject> myObjects = null;

  ResponseGetObjects myResponse = null;

  PayloadObjectGetBulk _myPayload = new PayloadObjectGetBulk();
{{</highlight>}}


## Going Further:

You can basically prototype/play with any methods that talk with the SpeckleApi:

- updating objects
- creating, updating, diffing and cloning streams
- adding layers to streams
- [...]

Hope this wet your appetite. 
