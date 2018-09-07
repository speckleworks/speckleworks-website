+++
description = "Bringing data from Rhino, Grasshopper, or Dynamo live into Augmented Reality via Unity & Hololens."
date = "2018-09-06T13:08:41+01:00"
title = "Speckle, Unity and AR"
showtoc = "true"
comments = "true"
featureclass = "featured-post"
headerimg = "img/unity/SpeckleUnityHolo@2x.png"
author = "Christopher Morse"
twitter = "shoparchitects"
+++

## Introduction

Virtual and augmented realities are emerging as new and exciting ways to visualize and interact with spatial geometric data, and naturally lend themselves to Architecture Engineering and Construction applications.

In general, these technologies are currently either too new or too limited in their capabilities to have robust CAD software developed exclusively for VR and AR platforms. We therefore looked for solutions to connect existing design work flows as seamlessly as possible with immersive 3D visualization. With its open infrastructure and real-time communication, Speckle provides the perfect interface to bring geometry data from Rhino, Grasshopper, or Dynamo directly into VR and AR.

Taking advantage of Speckle's .NET client library and Unity's support for the Microsoft HoloLens, we were able to bring data from Rhino, Grasshopper, or Dynamo live into Augmented Reality with a proof-of-concept package for Unity. 

## Example

Here's an example of a nice quick vase script found in the [Grasshopper Primer] (http://grasshopperprimer.com/en/1-foundations/1-6/6_Working%20with%20Mesh%20Geometry.html):

<div class='embed-container'><iframe width="560" height="315" src="https://www.youtube.com/embed/MFDeAb54dOc?showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

## Getting Started 

The package/steps below were developed for Unity 2018.1.4f1, and are provided as a brief example to help people get started, not as a fully supported product. Your mileage will most definitely vary.

**Step 1:** Get the UnitySpeckle package from [github](https://github.com/speckleworks/SpeckleUnity)

**Step 2:** Set the Scripting Runtime Version to .NET 4.x Equivalent (found in Player Settings->Other Settings->Configuration)

**Step 3:** Drag UnitySpeckle folder into your Unity project

**Step 4:** Add SpeckleManager from Prefabs folder to the scene

**Step 5:** Set StreamID(s) and Server URL on SpeckleManager in the inspector window

**Step 6:** Set authtoken directly in the UnityReciever script

A few event bindings are included for developers to perform their own actions after receiving inputs, for example applying materials based on layer or updating custom prefabs.

![steps](/img/unity/UnitySpeckleSteps.png)

## Limitations

Currently developed as a proof-of-concept package, there is a lot missing. While the potential exists to use Unity to develop custom bespoke apps for interacting/generating/authoring data that we would want to send back through Speckle, we started with Unity primarily as a data viewer and so chose to start with just a receiver client. Additionally, to keep it as simple as possible, we chose to only visualize point, polyline, and mesh data. These are enough to allow all basic geometric data to be viewed, but may require setting up streams specifically for viewing (ie: converting curves, arcs, NURBS, etc. to meshes and polylines ahead of time) 

Another important limitation is logging into a Speckle server. Unity is a software development tool and not an end product itself. We therefore chose not to implement a generic runtime login system to the Speckle server at this time, but currently leave it up to the Unity developers to choose/implement the best method for their products for login and stream selection. 

## HoloLens Dev

Developing for the HoloLens is a little more complicated due to Universal Windows Platform using a different set of Windows libraries than desktop Windows 10 or earlier. This requires some modifications to the Speckle Core library, which have been included in SpeckleCoreUWP.dll. This library uses an alternate implementation of websockets and JSON parsing. For UWP apps, this is the only .dll needed, and is set to be included in WSAPlayer builds only, while the other .dll's are set to exclude WSAPlayer.
 
![wsa](/img/unity/UnitySpeckleWSA.png)

For NURBs data, the package currently contains a wrapper for the verb nurbs library. Unfortunately, this library is not compatible with UWP so if you are developing for the HoloLens you will need to exclude this support. Simply leave out the entire UnityNurbs folder as well as the SpeckleNurbsConverter.cs file from the Scripts folder. 

## Contribute

Speckle for Unity is still very much a work in progress and could use your help! Ask a question on the [forum](https://discourse.speckle.works/), join the conversation on [Slack](https://slacker.speckle.works), and contribute your code on [Github](https://github.com/speckleworks/).

<div class='full-width-blue blue right-only card-5'>
<h3 class='heading-about' style="">
Acknowledgements: This package was developed as part of research and development efforts at <a href="http://www.shoparc.com/">SHoP Architects</a>.
</h3>
</div>

![shop](/img/unity/shoplogo.png)

## Editor's Note
First, __huge thanks to Christopher Morse to assembling this guide!__ If you want to share a case study too, get  in  touch, and it  will  make it on the speckle website!