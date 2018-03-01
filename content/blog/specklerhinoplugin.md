+++
description = "The Speckle Rhino Plugin installation and usage notes. "
date = "2018-02-25T13:08:41+01:00"
title = "Speckle Rhino Plugin Release"
showtoc = "false"
comments = "true"
headerimg = "img/blog/rhinoPlugin@2x.png"
featureclass = "featured-post"
author = "Dimitrie Stefanescu"
twitter = "idid"
+++
We are happy to share that the Speckle Rhino Plugin has now passed *some* quality checks and is ready for testing! You can now send data through Speckle directly from Rhino, to any other Rhino file or Grasshopper definition.

Neat, huh?

## Installing

**Step 0:** Clear out any other speckle stuff. Especially check your Grasshopper libraries folder, and delete anything speckle related! 

**Step 1:** Download the [latest rhino installer](https://ci.appveyor.com/api/projects/SpeckleWorks/SpeckleRhino/artifacts/specklerhino.rhi?branch=master&job=Configuration%3DRelease). 

**Step 2:** Double click the .rhi and you should be good to go after a restart of Rhino. For optimal results, make sure you've deleted previous installs of speckle.

**Step 3:** Pop open the speckle panel.

The following steps will install both the Grasshopper plugin as well as the latest Rhino plugin. Be sure to check the releases, we've been updating quite frequently in the past.

## Usage

Here's a quick video running through some basic motions at 2x speed:
<div class='embed-container'><iframe width="560" height="315" src="https://www.youtube.com/embed/D4Bo7u6RtYA?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

First off, if you haven't, create an account on the speckle server of your choice. Not really willing or ready to [deploy your own](https://github.com/speckleworks/SpeckleServer)? Well, no worries, just use https://s003.speckle.works. 

![accounts](/img/blog/accounts.png)

Do be aware that this is a test server, therefore it can get flushed or hacked at any time, fail or generally make you cry.


![clients](/img/blog/sendreceive.png)

You can now create receivers and senders. Just select some geometry and start having fun. Clients will be saved in each file, so when you open it again, they will show up.

Other than that, enjoy!

## Bugs & Problems
Head over to our [forum and buzz](https://discourse.speckle.works). If you think it's a more of a bug rather than a question, [report it on github](https://github.com/speckleworks/SpeckleRhino/issues)!

## Kudos
This would have been impossible without the support and hard work of [@luis](https://twitter.com/luisfraguada), [@will](https://twitter.com/pearswj), the brave beta-testers at [HENN](http://www.henn.com/en#design) & that nice company that makes [Rhino](https://www.rhino3d.com/).

