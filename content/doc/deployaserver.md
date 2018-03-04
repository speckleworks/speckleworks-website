+++
title = "Deploying a Speckle Server"
description = "Become a hacker and get your own private speckle server!"
showtoc = "true"
comments = "true"
date = "2017-09-04T11:42:56+01:00"
headerimg = "img/blog/speckleserver.png"
draft = "false"
featureclass = "featured-post"
author = "Dimitrie Stefanescu"
twitter = "idid"
+++

<h3>If you're looking for a quicker way, just follow the <a href="https://github.com/speckleworks/SpeckleServer">docker instructions in the readme of the speckle server repo</a>.</h3>

Please note: this is a quite insecure way of deploying the speckle server. It is, nevertheless, fast and gives a quick satisfaction :) You can follow this tutorial for a local install just as well; just skip to part 3 (install mongo).

# Step 1: Setup on [DigitalOcean](https://m.do.co/c/947a2b5d7dc1)*
Go to [digitalocean.com](https://m.do.co/c/947a2b5d7dc1)* and create a VM running Ubuntu 16.04.3. Choose a region that's convenient for you. 

![do](/img/do-1.png)

<small> _* Affliate link. You get $10 free!_</small>

# Step 2: SSH'ing
Now that we have a VM, note down its IP address. We are ready to access it via the command line and proceed with the following steps. 

- On OSX or equivalents: `ssh root@dropletip`. 
- On windows, you will need to use [PuTTY](http://www.putty.org/) or equivalents. 

For a thorough setup, follow this [digital ocean tutorial](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04) on how to setup your server. Security is not the focus of this tutorial, nevertheless, it *is rather important* to follow best practices.

For the purposes of this tutorial, we're going to continue with the `root` user. Please be aware this is not a good practice.

# Step 3: Install Mongo
To install mongodb, there's a [handy tutorial over on digital ocean](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04) that guides you through the process.

**Please note, do not allow external access.** We work under the assumption that this is a self-contained VM. Any access to the database will be through either ssh or the server. 

# Step 5: Install NodeJS
Install node using nvm, which stands for [Node Version Manager](https://github.com/creationix/nvm). It will make your life easier when you'll want to upgrade or switch versions. Follow their [instructions](https://github.com/creationix/nvm#installation), or:

Run this command in the terminal: 
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
```
It will copy the latest install script for nodejs and then execute it. 

Check that it worked: `nvm ls-remote`. If you get an error, simply close the terminal and login in again.

Install node 8.5.0 or later: `nvm install 8.5.0`. Speckle Server has been known to run on earlier versions too - but you never know! 

Check that you have completed the install by testing node: `node -v` should now output the version you've selected to install.

# Step 6: Clone the Speckle Server repo
Clone the Speckle Server repository into a folder of your choice.
First: 

```bash
mkdir ~/Apps
cd ~/Apps
```

Then grab the latest dev release:
```bash
git clone https://github.com/speckleworks/SpeckleServer.git
```

Afterwards, let's install the node dependecies:
```bash
cd SpeckleServer
npm install
```

To see that things are working, let's run the application: `node server.js`. It should, by default, work! Note though, that you won't be able to access it form outside the server; there's a few extra steps going for that to happen.

# Step 7: Blast off
If you don't have a domain name, and just want to use speckle out of the box, follow the following steps to edit the `config.js` file.

Edit the config file using nano: `nano config.js`. Change the following according to your circumstances: 

1. Change the default port to `80`
2. Change the rest api url to your droplet's ip address.
3. Change the ws url to your droplet's ip address.

Optionally, change your server name too to something that it will distinguish it from others, i.e. "Dimitrie's Amazing Server".

![nano](/img/nano-droplet.png)

To save your changes with nano, press _ctrl + x_, then _y_ and hit _enter_. We can now run the speckle server and hopefully all will be well!

```bash
node server.js
```

If you now head over to your droplet's ip adress in a browser, you should be be seeing the following:

![server blank](/img/serverblank.png)

Of course, the address bar should read _http://YOURDROPLETIP_. If you see that, all works! 

You're ready to play with your grasshopper components and start sending data around. Enjoy!

# Future steps

Please remember that this is an insecure install. Furthermore, because you're running without a SSL certificate, in some cases the websockets are blocked. There might also be issues with gzip compression too. 

Ideally you would run the Speckle Server under a proxy like NGINX. Here are a few extra steps:  

1. Secure your server properly.
2. Get a domain name and point its DNS records to your VM's ip.
3. Setup nginx.
4. Don't forget UFW (firewall).