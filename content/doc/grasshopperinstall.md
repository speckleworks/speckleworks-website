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

# Step 0: What's in the box
The releases contain both the Speckle Grasshopper Clients as well as the Speckle User Data Utils (more to come). 

# Step 1: Download the latest version.
Head over to [Speckle Grasshopper's release page](https://github.com/speckleworks/SpeckleGrasshopper/releases).

If you want to grab a specific version, feel free. Nevertheless, it usually best to download the latest version (ie highest release number). 

# Step 2: Installation
Close Rhino and Grasshopper if you have them running by any chance. 

Unzip the downloaded zip and copy and paste the two folders in the Grasshopper components folder: 
```
%appdata%\Roaming\Grasshopper\Libraries
```

Make sure that all _dll_ and _gha_ files are **not** in the root folder but in their own folder called _SpeckleSendReceive_. 

# Step 3: Create Your First Account
Fire Rhino and Grasshopper up. The Speckle Components should appear in their own tab, called `Speckle`. Wow! Smooth sailing so far.

![spk](/img/ghinstall/gh-new.png)

When you will first drag a Speckle Sender or Speckle Receiver component to the canvas, a dialog will ask you to create an account (or use an existing one).

Since I'm assuming you are a new user, let's go ahead and make a new one: 

![spk](/img/ghinstall/newaccount.png)

- Server Url: use `https://s003.speckle.works/api` or, if you [deployed your own](/doc/deployaserver/), your ip/url address. 
- Email: your email address.
- Password: your password.
- Confirm: confirm your password.

Click register, and voila! You should be up and running: you can now send data between clients connected to the s003.speckle.works server. Get your friends to join in the fun 😎

# Next steps

- Read about the [Sender and Receiver components](/doc/senderreceiver/)
- Check out the super powerful [User Data Utils](/doc/userdatautils/)
- Take a break
- Ask questions on [Slack](https://slacker.speckle.works)




