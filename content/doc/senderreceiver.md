+++
title = "Speckle Sender & Receiver"
description = "A snappy intro to data sending in grasshopper."
showtoc = "true"
date = "2017-04-03T19:14:24+01:00"
comments = "true"
headerimg = "img/sendreceive/header.png"
author = "Dimitrie Stefanescu"
twitter = "idid"
+++


<h1>Before you begin:</h1>

- Make sure you go through <a href="https://speckle.works/doc/grasshopperinstall/">the installation guide.</a>
- Sending data back and forth is also much more fun when having access to a second human that you can actually send data to, or receive data from.

# 1. Speckle Sender
The Speckle Sender is one of the two basic Speckle components. What it does is very simple: it sends data to other Speckle Receivers.

<h2>Instantiation:</h2>

Once you create a Speckle Sender, a dialog box will ask you which Speckle Account to use. If you've followed the installation guide, you already should have an existing Speckle Account.

Double click on the one you want to use, and voila! you get a rather boring grasshopper component.

<h2>Adding inputs:</h2>

![spk](/img/sendreceive/zui.gif)

This component uses the **Grasshopper ZUI**. Zoom in and click on the plus button on the input parameter side. You can add as many input parameters as you like, and give them any name you want.

<h2>Update Frequency:</h2>

There are two main methods/events: 

- Data Send Events (geometry + metadata): debounced at `1000ms` (1s)
- MetaData Send Events (metadata): debounced at `500ms` (.5s)

<h2>Size Limits & How to Overcome Them:</h2>

The payload size of any given event is limited to 3mb. If you exceed this much, simply create another Speckle Sender. 


# 2. Speckle Receiver

The Speckle Receiver listens for updates at a specific stream id. It dynamically recreates the structure of the sender.

<h2>Instantiation:</h2>

Same initial instructions apply as for the Speckle Sender. Once on the canvas, set the `id` input parameter to the one you want to listen to.

Please bear in mind one important aspect: stream ids are unique for each Speckle Server. As such, if you create sender with a specific account, a receiver can only listen to it if it is using the same account.

<h2>Off-line sender?</h2>

No problem. The receiver will pull the latest update from the Speckle Server.

# 3. Name Sync

![spk](/img/sendreceive/namesync.gif)

Changing the Sender Component's name will change the name of the stream. This can be rather informative for large projects.

# 4. Inputs & Outputs Sync

![spk](/img/sendreceive/layersync.gif)

We are treating input parameters as "layers". Add, remove, change their names! All the Speckle Receivers will be updated with the new parameters, as outputs. Name them!


# 5. Structure & Trees

![spk](/img/sendreceive/structure.gif)

In Grasshopper, the Speckle Senders and Receivers maintain data structure:

- single item -> single item
- list -> list
- tree -> tree

This covers the main functionality of the speckle senders and receiver components for grasshopper. There's a few more secrets in store (like history), but they're yet to be properly implemented. 
