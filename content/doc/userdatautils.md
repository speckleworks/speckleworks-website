+++
title = "Speckle User Data Utils"
description = "Delivering the Rich in Data Rich Design: create your own custom smart objects."
showtoc = "true"
comments = "true"
date = "2017-04-04T11:42:56+01:00"
headerimg = "img/userdata/header.png"
draft = "false"
author = "Dimitrie Stefanescu"
twitter = "idid"
+++

<h1>Before you begin:</h1>

<p><strong>Download the custom user data utils from here: <a href='https://github.com/didimitrie/SpeckleUserDataUtils/tree/dev/releases'>https://github.com/didimitrie/SpeckleUserDataUtils/tree/dev/releases</a>. They are no longer bundled with the main Speckle Sender Receiver distribution, sorry!</strong>
</p>

To use with Speckle, make sure you go through <a href="https://speckle.works/doc/grasshopperinstall/">the installation guide.</a>

# Introduction

The Speckle User Data Utilities deliver the "Rich" in the "Data Rich Design". Similar to [Elefront](http://www.elefront.info/) and other plugins that I might not know of, they allow you to easily define and attach a set of properties to geometry objects.

Objects with attached user data, if baked, will not loose it. As such, you can reference them again in Grasshopper and you will be able to retrieve that user data. 

Furthermore, you can even send them through the Speckle Sender! When they come out on the other side, in a Speckle Receiver, they will have said user data attached to them.

In the background they work with Rhino's [ArchivableDictionary](http://developer.rhino3d.com/api/RhinoCommonWin/html/T_Rhino_Collections_ArchivableDictionary.htm) class.

They are extremely simple to use. 

# Creating Custom Properties

![spk](/img/userdata/create.gif)

The takeaways: 

- the input parameter name becomes the object's key
- the value of the input parameter becomes the object's value

# Nested Properties: Turtles All The Way Down

You can store three types of data: Numbers, Strings and **Other Custom Properties.**

![spk](/img/userdata/turtles.gif)

This allows you to easily create nested properties and store object information in logical groups that you can create to suit your specific project needs. It's up to you. 


# Attaching Properties To Geometry

![spk](/img/userdata/AttachUserData.png)

Using the **Set User Data** component, just plug in the objects you want attach data to and created properties. 

<h3>Baking User Data</h3>

If you bake objects in Rhino with user data attached to them it will be serialised: when you reference them back into Grasshopper, you will be able to extract that user data. 

# Getting Properties From Geometry

![spk](/img/userdata/GetUD.png)

Using the **Get User Data** component, plug in the objects you want to extract the user data from and get out the dictionaries.

Once you got the User Data, use the **Expand User Data** to, well, get the properties out again. Note that if you use nested properties you will need to **Expand User Data** the respective nested property too. 

![spk](/img/userdata/filter.png)
You can now filter your objects based on their properties using standard Grasshopper functionality. 

# Exporting

You have two options to export them: JSON and CSV. 

<h3>JSON Strings</h3>

The most faithful representation. Straightforward, and nothing complicated: 
```
[
  {
    "type": "side_panel",
    "centre": "0.0, -8.0, 20.0",
    "dist_attractor": 13.83970326936719,
    "scale_factor": 0.53810463458171542,
    "normal_vector": {
      "x": -1.4791141972893965E-31,
      ...
    }
  },
  {
    "type": "hex_panel",
    "scale_factor": 0.38469562983428035,
    "material": "reddish-like_glossy",
    "otherProperty": { ... }
  },
  {...}
]
```

Note that you always get out an array of json objects.

<h3>CSV</h3>

When exporting to CSV, the JSON structure is essentially "flattened". First row will always contain all the property keys. Following there's one row per object, with null values inserted where they don't correspond. Let's say you have the following UDs:

```
[
    {
        X: 42,
        Y: {
            nested_1: "hello",
            nested_2: "world"
        }
    },
    {
        random_prop: 123
    }
]
```

This will result in the following csv file: 
```
ROW 0: X, Y.nested_1, Y.nested_2, random_prop
ROW 1: 42, hello, world, null
ROW 2: null, null, null, 123
```

# Baking and Referencing

As mentioned above, if you bake your smart objects into Rhino proper, you will be able to retrieve the user data when you reference them again in grasshopper. 

# Sending via Speckle

Objects that have user data attached to them can be sent through the Speckle Sender without loosing their "smartness": the properties will remain attached to the object, and in the near future, you will be even able to directly query the Speckle Server based on them. Neat, no? 

For a tutorial on how to send data via Speckle, [check this tutorial out!](/doc/senderreceiver)