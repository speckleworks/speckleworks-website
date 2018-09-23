+++
description = "So you want to stream data between Grasshopper and Dynamo? This guide will get you started!"
date = "2018-09-22T13:08:41+01:00"
title = "Data streaming between Grasshopper and Dynamo"
showtoc = "true"
comments = "true"
featureclass = "featured-post"
headerimg = "img/guide/guide.png"
author = "Matteo Cominetti"
twitter = "teocomi"
+++
So you want to stream data between Grasshopper and Dynamo? This guide will get you started!

## Installation
### Requirements
- Rhino 6 + Grasshopper
- Dynamo 2.0

### Grasshopper
Speckle for Grasshopper is distributed together with Speckle for Rhino, in a single installer. 

- Download the installer from [here](https://ci.appveyor.com/api/projects/SpeckleWorks/SpeckleRhino/artifacts/specklerhino.rhi?branch=master&job=Configuration%3DRelease).
- Close Rhino&Grasshopper
- Run the installer
- Open Rhino&Grasshopper

![1537456434532](/img/guide/1537456434532.png)

⚠️ Make sure that, when double clicking the installer, it is opened by the *Rhino Package Installer*, and not by an older version of Rhino like *Rhinoceros 5*.

You now have both Speckle for Rhino and **Speckle for Grasshopper** installed.

![1537456901566](/img/guide/1537456901566.png)

### Dynamo

Speckle for Dynamo is distributed via the Dynamo package manager.

- Fire up Dynamo
- Click on *Packages > Search for a Package...*
- Search for "speckle" and click *Install* (search might be <u>very slow</u> from time to time!)

![1537457135278](/img/guide/1537457135278.png)

You now have **Speckle for Dynamo** installed.

![1537457187824](/img/guide/1537457187824.png)



## Account creation

To use Speckle you need a Speckle Account, the first time you use a Speckle plugin you'll be prompted for your details, but you'll also be able to create one.

You only need one Speckle Account to use Speckle, but you could have more if, for instance, your company was running a self hosted version. 

Let's go ahead and create one, you can do so from the Grasshopper **or** the Dynamo client.

In **Grasshopper**, drag and drop the *Data Sender* or *Data Receiver* components on the canvas.

![1537457464215](/img/guide/1537457464215.png)

In **Dynamo**, click on the *Speckle Sender* or *Speckle Receiver* to place the on the graph.

![1537457525739](/img/guide/1537457525739.png)

(Yes, I agree with you, we need to standardize naming, but at least icons are the same!)

Now, in both cases, you'll see the following window:

![1537457889305](/img/guide/1537457889305.png)

For *Server Url* use:

`https://hestia.speckle.works/api/v1`

Unless, of course, you [deployed your own](https://speckle.works/doc/deployaserver/). Fill in the other fields and click *Register*!

If everything went smooth so far, we'll be ready to start sending and receiving data. If not, **get in touch**, and we'll try to troubleshoot:

- on the [forum](https://discourse.speckle.works/), for general discussions
- on [github](https://github.com/speckleworks), to report bugs/feature requests
- on [slack](http://speckle-works.slack.com), to chat with the community



### Changing account

In **Grasshopper**, each time you place a component you'll be prompted to select what account to use.

In **Dynamo**, after selecting an account, it becomes the **default** one. But you can change it and add new ones at any time from *View > Speckle Accounts*:

![1537461939189](/img/guide/1537461939189.png)


## Hello Speckle!

Let's send and receive our first **stream**! A stream, in Speckle terms, is a set of data that can be sent and received. A stream has a unique ID (**streamId**) used to identify it, it also has **layers**, which are used to group data in the stream.

More info on streams can be found in the [Speckle docs](https://speckle.works/doc/coredatamodels/).

In **Grasshopper**, place a Sender component (or reuse the one created previously) and create a panel with some text, then connect the panel to one of the input ports of the Sender, just like so:

![1537459297992](/img/guide/1537459297992.png)

Now, right click on the Sender and then select to copy the streamId to clipboard:

![1537459159288](/img/guide/1537459159288.png)

In **Dynamo**, place a Receiver node:

![1537459420963](/img/guide/1537459420963.png)

Then, either paste the streamId or use the friendly *paste button*, and....

![mind blown](https://media1.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif)



Here's a full gif of the process, it took us 4 mouse clicks, but we made it! We now  have real time data streaming between Grasshopper and Dynamo. Just try changing the text, and you'll see it update automatically.

![speckle-basic](/img/guide/speckle-basic.gif)



## Working with streams 

Let's now go through other features and things that can be done with streams.

### Set a stream name

Optional, but good to keep our streams organized. 

In **Grasshopper**, right click on the Sender and set the component Name:

![1537461209453](/img/guide/1537461209453.png)

In **Dynamo**, similarly, right click and select *Rename Node...*:

![1537461278786](/img/guide/1537461278786.png)

### Find a stream by name

In **Grasshopper**, you'll need to use a few components, more specifically the Accounts + Streams + Expand Object:

![1537461555475](/img/guide/1537461555475.png)

In **Dynamo**, just use the Streams node and select/search the name:

![speckle-basic2](/img/guide/speckle-basic2.gif)

### Add/Remove inputs

You can add and remove inputs from a Sender component/node, these correspond to the **stream layers**, in Speckle terms.

In **Grasshopper**, zoom on the component until you see these + and - signs:

![1537462182235](/img/guide/1537462182235.png)

In **Dynamo**, click on the + and - buttons:

![1537462250778](/img/guide/1537462250778.png)

### Rename inputs/layers

In **Grasshopper**, right click on the **input** itself:

![1537462494319](/img/guide/1537462494319.png)

In **Dynamo**, right click on the *node > Rename Inputs...*:

![1537462570526](/img/guide/1537462570526.png)

### Support for multiple data types

Speckle supports natively many data types like text, numbers, geometry primitives, lines, meshes etc... Here you can find a comprehensive list:

https://github.com/speckleworks/SpeckleDynamo/issues/10

![1537463244196](/img/guide/1537463244196.png)



### Support for nested lists / data trees

Speckle will automatically convert data trees to nested lists and vice versa:

![1537464067342](/img/guide/1537464067342.png)

### Add Custom User Data

Geometry sent with Speckle can have *User Data* attached to it, which is a way of adding *extra* information/properties/metadata. User Data is structured as a dictionary and you'll need ad-hoc *set* and *get* nodes/components to attach/retrieve it. 

![1537464815824](/img/guide/1537464815824.png)



## Conclusion

This guide has shown how to get started with Speckle and its core features, now it's time for you to play around with it! Make sure to report all bugs you might encounter, and please keep in mind that while all the examples show sending from Grasshopper and Receiving in Dynamo, it's as easy to to the opposite.


<div class='full-width-blue blue right-only card-5'>
<h3 class='heading-about' style="">
Acknowledgements: This guide was written thanks to <a href="http://www.arup.com/">Arup</a>!
</h3>
</div>

![shop](/img/guide/ArupLogo.png)

## Editor's Note
Kudos to Matteo for writing this up 🙇🏻‍♂️ (and uh, together with [mr pickmans](https://twitter.com/alvpickmans), writing up the dynamo plugin!) You can follow him on [twitter](https://twitter.com/teocomi), check his [blog out](http://teocomi.com/#blog) and, if inclined, stalk him on [github](https://github.com/teocomi).