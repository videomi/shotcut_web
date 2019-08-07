---
layout: post
title: New Release, Web Site & Forum
author: Dan Dennedy
category: blog
---
Version 16.03 is now available for [download]({{ "/downloads/" | prepend: site.baseurl | prepend: site.url }}).

* Changed player tab **Program** to **Project**.
* Changed panel name **Encode** to **Export**.
* Added a **From** field to the Export panel to allow exporting the project, a
  clip loaded in the **Source** tab of the player, or or each playlist item as a batch of jobs.
* Added an export preset for animated GIF.
* Upgraded FFmpeg to v3.0.
* Upgraded MLT to v6.0.0.

[Read More]({{ page.url | prepend: site.baseurl | prepend: site.url }})

![v16.03 screenshot]({{ "/assets/img/blog/2016-03-01-screenshot.png" | prepend: site.baseurl | prepend: site.url }})

<!--more-->

Thanks to a new team member, Chris, we have an all [new site design](https://www.shotcut.org/)!
Not only is it responsive and mobile-friendly, but it also has a more modern,
fresh design that is easier to navigate. It is also easier to maintain, has
better server performance, and is served over HTTPS.
We also have a new [discussion forum](https://forum.shotcut.org/).

Lastly, here is more information about the new release. Among the many new
features and fixes in the new [FFmpeg 3.0 release](http://www.ffmpeg.org/index.html#news),
this version contains a much improved AAC audio encoder and a new Cineform HD
decoder. Also, with this update, Shotcut provides proper conversions between
Rec. 601 and Rec. 709 color spaces.

Some of the renaming in Shotcut is intended to make things more expected and 
obvious. Most people, especially novices, are not acquainted with video switchers
and the legacy editing systems that gave rise to the term "Program monitor."
Likewise, most people are looking for an **Export** function rather than "Encode."
In addition, you no longer need to save and close the project, fire up another
instance of Shotcut, or use another app to transcode a file in the middle of
working on a project. You can simply open a file and select the
appropriate option from the **From** field at the top of the **Export** panel.
Furthermore, if you want to batch encode a bunch of clips or shots to the same
format, you can add them to the **Playlist** and choose **Each Playlist Item**.
