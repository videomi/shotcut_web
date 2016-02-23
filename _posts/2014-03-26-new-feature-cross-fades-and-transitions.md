---
layout: post
title: New Feature - Cross-fades and Transitions!
date: '2014-03-26T21:00:00.002-07:00'
author: Dan Dennedy
tags: 
categories:
- blog
---

As of version 14.03.26, audio cross-fades and video transitions have been added. Even though some other video editors also do it this way, it may be different for some. So, we made a tutorial to help get you started.<br>

<div><iframe allowfullscreen="" frameborder="0" height="240" src="//www.youtube.com/embed/NUDCcq6WcJU" width="426"></iframe></div>

A very brief textual explanation is that you overlap <i>adjacent</i> clips on the <i>same</i> track either by drag-n-drop or by trimming. By default this creates a video dissolve with audio cross-fade. To change that, select the transition on the <b>Timeline</b> and view <b>Properties</b> to make a video wipe or to manually control the audio mix. Custom wipes can be provided by a grayscale image, and there are links to locations where you can get wipes that others have created in the <a href="{{  "/FAQ/#where-can-i-get-more-transitions" | prepend: site.baseurl | prepend: site.url }}">FAQ</a>.<br><br>This new feature does support GPU processing if your system supports that. However, while making this addition, GPU processing broke on Mac OS X in version 14.03.25, fixed in version 14.03.27.

There are still some sharp edges on this new feature that we will continue to improve. For example, currently Shotcut lets you (re)size the transition when there are not enough excess frames in the "handles" before the in point and after the out point of your shots. We need to add some limiters on the actions around that.
