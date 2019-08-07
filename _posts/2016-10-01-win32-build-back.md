---
layout: post
title: Return of the 32-bit Windows Build
author: Dan Dennedy
category: blog
---

#### Improved compatibility

Version 16.10 was released today and is available for [**DOWNLOAD**]({{ "/downloads/" | prepend: site.baseurl | prepend: site.url }}).

The 32-bit Windows version is back by popular demand! 32-bit apps still have the
significant limitation that they can only use 2 GB RAM, and Shotcut still uses
a lot of RAM. We will see what we can do to reduce memory usage in the coming
months. In the meantime, consider limiting yourself to working in 720 pixels of
vertical resolution for multitrack projects, and try to avoid using very high
resolution still images (scale them down before using them in Shotcut).

For Linux users, when we upgraded the build machine OS to Debian 8 in July
for the 16.07 version, we lost a lot of compatibility with older versions of
popular Linux distributions. Some people only lost the Stabilize filter.
When this combined with the Qt upgrade in the previous release - v16.09 - many users,
such as those on Mint 17 or Ubuntu 14.04, could no longer run the latest Shotcut.
That is fixed in this release by using Ubuntu 14.04 as the base OS image for the
build.

#### Lens Correction and 3D LUT Filters

A forum user has contributed a Lens Correction video filter. Thanks TwitchyMcJoe!
Another forum user suggested to add a 3D LUT filter. Fortunately, this was
already available through the MLT+FFmpeg engine, and it was easy to add a UI to
expose this powerful filter.

#### Merge Clips on the Timeline

If you have adjacent sub-clips from the same source clip on the timeline, now
you can right click to open the context menu and choose "Merge clip with next"
to merge the clips into one.
