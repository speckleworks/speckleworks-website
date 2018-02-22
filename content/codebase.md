+++
date = "2017-04-21T14:59:00+01:00"
title = "Codebase: The Speckle Ecosystem"
description = "Speckle Ecosystem: The Speckle Server, .NET Client Libraries, and more."
layout = "codebase"
headerimg = "img/codebase/ecosystem.png"
+++
<!-- ![spk](/img/codebase/ecosystem.svg) -->

<!-- # This is the Speckle Codebase Ecosystem. -->

The Speckle Ecosystem is a work in progress collection of libraries and application plugins. At the center of it is the Speckle Server, which coordinates all communication activities.

# Code Repositories
All code is licensed under the MIT Licence. 

---

# Speckle Server
<h3>
<a href="https://github.com/didimitrie/Speckle-Server">
    <i class="black fa fa-github "></i>
    Github Repo
</a> 
</h3>

The Speckle Server coordinates communications between the various SpeckleClients. It provides a basic accounts system, stream coordination, design data collation and retrieval, live update events and a basic querying mecahnism. 

# Speckle Common 

<h3>
<a href="https://github.com/didimitrie/SpeckleCommon">
    <i class="black fa fa-github "></i>
    Github Repo
</a> 
</h3>
<h3>
<a href="https://www.nuget.org/packages/Speckle.SpeckleCommon/r">
    <i class="black fa fa-cubes "></i>
    Nuget package (prerelease)
</a> 
</h3>

.NET Core library. Exposes the following:

- SpeckleSender 
- SpeckleReceiver
- SpeckleConverter: inherit from this class

# Speckle Account Manager 

<h3>
<a href="https://github.com/didimitrie/SpeckleAccountManager">
    <i class="black fa fa-github "></i>
    Github Repo
</a> 
</h3>
<h3>
<a href="https://www.nuget.org/packages/Speckle.AccountManagerPopup/">
    <i class="black fa fa-cubes "></i>
    Nuget package (prerelease)
</a>  
</h3>

This is an annoying popup that allows you to select a Speckle Account or create a new one. Displayed as a modal in the Grasshopper Components.

# Speckle Rhino Converter

<h3>
<a href="https://github.com/didimitrie/SpeckleRhinoConverter">
    <i class="black fa fa-github "></i>
    Github Repo
</a> 
</h3>
<h3>
<a href="https://www.nuget.org/packages/Speckle.RhinoConverter/">
    <i class="black fa fa-cubes "></i>
    Nuget package (prerelease)
</a>  
</h3>

Converts RhinoCommon objects to Speckle Objects and back.

# Speckle Grasshopper

<h3>
<a href="https://github.com/didimitrie/SpeckleGrasshopper">
    <i class="black fa fa-github "></i>
    Github Repo
</a> 
</h3>

Speckle Clients implemented in Grasshopper. Required dependencies are SpeckleCommon, SpeckleRhinoConverter, SpeckleAccountManager and SpeckleCommon.

# Speckle Rhino

<h3>
Repo Coming Soon.
</h3>

WIP.

# Speckle Browser Receiver

<h3>
<a href="https://github.com/didimitrie/SpeckleReceiverBrowser">
    <i class="black fa fa-github "></i>
    Github Repo
</a> 
</h3>

Speckle Receiver Client for the browser. A live example can be toyed with here: [https://app.speckle.works/receiver/example/](https://app.speckle.works/receiver/example/)


<!-- ![spk](/img/codebase/flow.svg) -->