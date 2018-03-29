+++
demourl = ""
date = "2017-06-05T13:26:18+01:00"
title = "Speckle Model Viewer"
description = "A quick runthrough the Speckle Online Viewer (release 1)"
name = ""
draft = "false"
showtoc = "true"
headerimg = "img/onlineviewer/headerimg4c.png"
comments = "true"
author = "Dimitrie Stefanescu"
twitter = "idid"
+++
# Examples 

<div style='text-align: center; width: 100%;'>
<a href="https://s003.speckle.works/view/?rkp4LVi-b" style='margin-left: 2px; text-decoration: none; border: 0; '><img style='width: 47%;' src="/img/onlineviewer/ex1@0.75x.png" alt=""></a>
<a href="https://s003.speckle.works/view/?SJQTff1fW,Hyl7AQ1GZ" style='margin-left: 2px; text-decoration: none; border: 0; '><img style='width: 47%;' src="/img/onlineviewer/ex3@0.75x.png" alt=""></a>
<br>
<br>
<a href="https://s003.speckle.works/view/?H1YX_M4GZ,Sk8rGmNfb" style='margin-left: 2px; text-decoration: none; border: 0; '><img style='width: 47%;' src="/img/onlineviewer/ex2@0.75x.png" alt=""></a>
<a href="https://s003.speckle.works/view/?Hk8lgC8W-,BJqlzkPZb" style='margin-left: 2px; text-decoration: none; border: 0; '><img style='width: 47%;' src="/img/onlineviewer/ex4@0.75x.png" alt=""></a>
</div>

<!-- 
</div>
</div>
</div>
<iframe src="https://s003.speckle.works/view/?H1YX_M4GZ,Sk8rGmNfb" style="width:80%;height:600px;left:10%;position:relative;" frameborder="0"></iframe>
<div class="grid section-block article-block">
<div class="row">
<div class="col col-10-of-12 col-m4-of-4 article"> -->

# Viewing Streams
Any stream that's sent through speckle can be viewed online. 

That's quite simple. Just head over to https://s003.speckle.works/view/ and click the red plus button in the corner. 

For the hackers, just appednd your streamIds to the url after a question mark, like this: https://s003.speckle.works/view/?H1YX_M4GZ,Sk8rGmNfb

You can log in or just continue as a guest. Logging in allows you to save views and change layer materials.

<h2>Overlaying streams</h2>

As you can see, you are not restricted to the number of streams you can view at the same time. This is to encourage modularity - so split up your models in whatever pieces makes sense.

# Feature: Data Richness

My favourite is viewing object user data. You have attached some custom user data in grasshopper, using the [Speckle Custom User Data plugin](https://speckle.works/doc/userdatautils/), it will be displayed in the browser if you click on the respective object.

![img](/img/onlineviewer/userdata.png)

There is a planned "tabular" interface that will help you export directly csvs (or json)

# Feature: Layers and Materials
Change colours, edge display, wireframes, transparency. PS: You can't do that for coloured meshes. They use their vertex colours, so you can't assign them an absolute colour. 

![img](/img/onlineviewer/layers.png)

# Feature: Comments
If you're logged in you can leave annoying view-linked comments. Clicking on one will *swoooosh* you back to that view.
![img](/img/onlineviewer/swoosh.gif)
You can swoosh swoosh a lot. It's great fun.



# Deployment
Head over to github: https://github.com/didimitrie/SpeckleViewer and clone the repo. You will need to modify the ./dist/config.js file to fit your deployment details. It's rather self-descriptive, it just exports a global object with info: 
```
var SpkAppConfig = {
  serverUrl: 'http://localhost:8080',
  allowGuestAccess: true,
  logoUrl: 'https://company.png'
}

window.SpkAppConfig = SpkAppConfig
```

It's rather important to serve things to `https` and make sure the server is allowing `cors`.

# Bugs
Please file any issues you encounter in the github repo: 
Head over to github: https://github.com/didimitrie/SpeckleViewer/issues




