---
layout: post
title: Tiles and Icons Views for Playlist
author: Dan Dennedy
category: blog
---
Thanks to Shotcut developer, Harald, new **Tiles** and **Icons** Playlist view modes were added to the new version 16.09, which is now available for [DOWNLOAD]({{ "/download/" | prepend: site.baseurl | prepend: site.url }}). The old view mode is still available and named **Details**.

<a data-rel="prettyPhoto" href="{{ "/assets/img/blog/screenshot-playlist-tiles.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/blog/screenshot-playlist-tiles.png" | prepend: site.baseurl | prepend: site.url }}" alt="Playlist Tiles View" width="201" height="238"></a>
<a data-rel="prettyPhoto" href="{{ "/assets/img/blog/screenshot-playlist-icons.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/blog/screenshot-playlist-icons.png" | prepend: site.baseurl | prepend: site.url }}" alt="Playlist Icons View" width="201" height="238"></a>

[Read More]({{ page.url | prepend: site.baseurl | prepend: site.url }})

<!--more-->

Another new feature is the ability to **Copy** and **Paste Filters**. Look for the new icons in the Filters panel next to the +/- icons. At this time, this copies everything in the list. In the next version, I will make it copy only enabled filters (multi-selection is not available for this list).

This version also upgrades the app/GUI toolkit we use to a more recent version 5.6.1. Not only does that bring in some general fixes but also adds HiDPI support for Windows 10 and Linux including the video viewport. We have had support for Retina on macOS for some time, but this new version allowed us to fixup some icons and extend it to Windows and Linux! Please be aware that this really only properly supports 2x density. Therefore, if you run Windows 10 Settings > Display > 150%, then it converts to 2x in the HiDPI support (150% -> 1.5 -> round -> 2). This can make your Qt 5.6+ apps appear bigger than perhaps you expect/like. If you want to turn this off set an environment variable QT_AUTO_SCREEN_SCALE_FACTOR to 0. Of course, there are several other important [fixes](https://github.com/mltframework/shotcut/milestone/22?closed=1) to Shotcut and MLT as well in this release.

