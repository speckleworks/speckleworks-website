+++
demourl = ""
date = "2017-03-28T13:26:18+01:00"
title = "Grasshopper Setup"
description = "Speckle installation run through for Grasshopper / updated for 0.0.3"
draft = "false"
showtoc = "true"
headerimg = "img/ghinstall/header@4x.png"
comments = "true"
featureclass = "featured-post"
author = "Dimitrie Stefanescu"
twitter = "idid"
+++

# **Step 1:** Installation

Download the [latest rhino installer](https://ci.appveyor.com/api/projects/SpeckleWorks/SpeckleRhino/artifacts/specklerhino.rhi?branch=master&job=Configuration%3DRelease).

Double click it and restart rhino.

# Step 2: Create Your First Account
Fire Rhino and Grasshopper up. The Speckle Components should appear in their own tab, called `Speckle`. Wow! Smooth sailing so far.

When you will first drag a Speckle Sender or Speckle Receiver component to the canvas, a dialog will ask you to create an account (or use an existing one).

Since I'm assuming you are a new user, let's go ahead and make a new one:

![spk](/img/ghinstall/newaccount.png)

- Server Url: use `https://hestia.speckle.works/api/v1` or, if you [deployed your own](/doc/deployaserver/), your ip/url address. 
- Email: your email address.
- Password: your password.
- Confirm: confirm your password.

Click register, and voila! You should be up and running: you can now send data between clients connected to the s003.speckle.works server. Get your friends to join in the fun 😎

# Next steps

- Read about the [Sender and Receiver components](/doc/senderreceiver/)
- Check out the super powerful [User Data Utils](/doc/userdatautils/)
- Take a break
- Ask questions on [Slack](https://slacker.speckle.works)
