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

## Installing

Download the [latest installer](https://github.com/speckleworks/SpeckleInstaller/releases/latest). This installer bundles together all the stable application plugins, namely Rhino, Grasshopper and Dynamo. It does not require admin privileges, so double click with confidence!

Please note: if you have previously installed speckle for rhino via the .rhi for "all users", you will need to uninstall it manually first by deleting the rhino plugin from its installation folder. You can find the installation folder in Rhino's Plugin Options dialog.

Finally, pop open the speckle panel by typing `SpecklePanel` in Rhino's command line.

## Usage

Here's a quick video running through some basic motions at 2x speed:
<div class='embed-container'><iframe width="560" height="315" src="https://www.youtube.com/embed/D4Bo7u6RtYA?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

First off, if you haven't, create an account on the speckle server of your choice. Not really willing or ready to [deploy your own](https://github.com/speckleworks/SpeckleServer)?

Well, no worries, just use `https://hestia.speckle.works/api`! Note to users of `s003.speckle.works`: it will be deprecated. I've released [Speckle 1.0.0-beta](https://speckle.works/log/versionone/) and all rhino plugins have been upgraded.

![accounts](/img/blog/accounts.png)

Do be aware that this is a test server, therefore it can get flushed or hacked at any time, fail or generally make you cry.


![clients](/img/blog/sendreceive.png)

You can now create receivers and senders. Just select some geometry and start having fun. Clients will be saved in each file, so when you open it again, they will show up.

Other than that, enjoy!

## Bugs & Problems
Head over to our [forum and buzz](https://discourse.speckle.works). If you think it's a more of a bug rather than a question, [report it on github](https://github.com/speckleworks/SpeckleRhino/issues)!

## Kudos
This would have been impossible without the support and hard work of [@luis](https://twitter.com/luisfraguada), [@will](https://twitter.com/pearswj), the brave beta-testers at [HENN](http://www.henn.com/en#design) & that nice company that makes [Rhino](https://www.rhino3d.com/).

