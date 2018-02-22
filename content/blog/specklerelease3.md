+++
description = "Queries & filters and a ton of new api methods."
date = "2017-10-01T13:08:41+01:00"
title = "Speckle 0.0.3 Released."
showtoc = "false"
comments = "false"
headerimg = "img/speckle003.png"
author = "Dimitrie Stefanescu"
twitter = "@idid"
+++

After some hacking, Speckle is ready to roll out v.0.0.3. Here's what's new:

# [Api Docs](https://speckleworks.github.io/SpeckleOpenApi/)

Improved and much expanded. A host of new methods have been added in the hope that they will make future plug-in & client development easier.
Check them out [here](https://speckleworks.github.io/SpeckleOpenApi/).

# Server side:
## Queries
The server now supports querying on stream objects as well as objects. Routes that support queries:

- [Stream objects](https://speckleworks.github.io/SpeckleOpenApi/#getobjects)
- [Stream Layer objects](https://speckleworks.github.io/SpeckleOpenApi/#getlayerobjects)
- [Object Get](https://speckleworks.github.io/SpeckleOpenApi/#objectget)
- [Objects Bulk](https://speckleworks.github.io/SpeckleOpenApi/#objectgetbulk)

## Diffing & Cloning
You can now quickly do a 'diff' between two streams, as well as branch streams off each other.

# Grasshopper: 
Some new components to help out with the work-flow and general hacking, including: 

- My Accounts - lists your speckle accounts
- My Streams - lists your speckle streams for an account
- Serialise / Deserialise objects (test the conversion to speckle and back)
- Expand Object - uses reflection to output all the values in an object.
- Stream Controller - used in combination with the Speckle Sliders Viewer for magic:

![sliders](/img/speckle-pointcontrol.gif)


# Code:

- **Speckle Server**: https://github.com/speckleworks/SpeckleServer/releases
- **Speckle Grasshopper**: https://github.com/speckleworks/SpeckleGrasshopper/releases/tag/v0.0.3-hotfix
- **Speckle Core**: https://github.com/speckleworks/SpeckleCore/releases/tag/v.0.0.3
- **Speckle Viewer**: https://github.com/speckleworks/SpeckleViewer/releases/tag/v.0.0.3
- **NEW** Speckle Sliders Viewer: https://github.com/didimitrie/SpeckleSlidersViewer/releases/tag/0.0.3