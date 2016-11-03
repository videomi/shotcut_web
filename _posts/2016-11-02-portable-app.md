---
layout: post
title: Version 16.11 - Now a Portable App
author: Dan Dennedy
category: blog
---
Version 16.11 was released today and is available for [**DOWNLOAD**]({{ "/download/" | prepend: site.baseurl | prepend: site.url }}).

By popular demand, this version includes a new so-called portable app feature.
A portable app is one that can be run without having to install and register
components into the system. Rather, it is a self-contained folder for the
executable and its bundled dependencies. Shotcut has always been
portable in this sense regardless
of the operating system. Portable apps can be put on a
USB stick/drive and run from there. Then, you can use the app from
computer-to-computer simply by plugging the USB stick.
However, to be truly portable, the app should also use the USB
stick to store settings and other app data.

Like most apps, Shotcut has an app data directory wherein it stores its
thumbnails/waveforms database, presets, and log file. Normally,
it stores settings in a platform-defined manner such as the registry on Windows
or a plist file in ~/Library on macOS. Now, you can set the app directory using
the command line option "--appdata <dirctory>" or the **Settings > App Data Directory**
menu. When you do, then settings are instead saved in an INI file in the designated
folder. If you use the menu, Shotcut will try to migrate everything from the
current location to the new location only if there is not existing Shotcut
data in the new location. Otherwise, it simply lets you start using the
new directory adopting the settings and data. If you use the command line option,
the new menu item is hidden making it possible to integrate the app into
an app launcher/updater more seamlessly.

Here are some other changes in this version:

* Fixed drag-n-drop to Timeline after moving clip to different track.
* Fixed **LUT (3D) filter** for languages/regions that use comma for decimal point.
* Fixed **Properties > Speed** on macOS for languages/regions that use comma for decimal point.
* Added **Gaelic** (Scottish) translation.
