---
layout: post
title: Compositing Improvements
date: '2014-09-03T23:09:00.002-07:00'
author: Dan Dennedy
tags: 
categories:
- blog
---

We recently released <a href="{{  "/download/" | prepend: site.baseurl | prepend: site.url }}">version 14.09</a> with new compositing features. Compositing for a track on the timeline has been available for some time by clicking the C button in the track header. However, there was no way to control the size, position, and opacity of the video or graphic. This could have been made available earlier as a filter with a UI that simply uses sliders and numeric fields, but that is not fun to use! We wanted to provide a way to more directly interact with the video to adjust the size and position. We needed to develop a new capability to overlay UI controls on top of the video using the same QML technology we use for the filters and timeline. Now that capability is available as the <i>Video User Interface</i>, or VUI for short. The new <b>Size and Position</b> and <b>Text</b> filters provide a rectangle control in the VUI.<br>
<div class="separator" style="clear: both; text-align: left;"><a href="http://3.bp.blogspot.com/-ZyouuvgScA8/VAgBnzD22yI/AAAAAAAAFgM/YWJvjFy4aac/s1600/snapshot-1409.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" src="http://3.bp.blogspot.com/-ZyouuvgScA8/VAgBnzD22yI/AAAAAAAAFgM/YWJvjFy4aac/s1600/snapshot-1409.png" height="251" width="400"></a></div><br>
There will be a video tutorial coming soon to explain how to use this in more detail. The new <b>Size and Position</b> and <b>Opacity</b> filters can be used with both GPU or CPU processing, but the new <b>Text</b> filter is only available in CPU mode. Here are the complete release notes for v14.09: <br>
<ul><li>Added WMV and WMA encode presets.</li><li>Enabled the video player zoom and pan controls for OS X.</li><li>Added <b>Size and Position</b> video filter with a rectangle control that overlays the video player.</li><li>Added a simple <b>Text</b> video filter also with rectangle control overlay. This is a dynamic text filter supports pre-defined variables: Timecode, Frame #, File date, File name.</li><li>Enabled parallel video processing for <b>Encode File</b><i> </i>on systems with more than 2 logical cores when not using GPU Processing. This makes encoding faster when using filters, transitions, and compositing.</li><li>Added an <b>Opacity</b> video filter.</li><li>Added an option on video fade filters: <b>Adjust opacity instead of fade with black</b>.</li><li>Now you can add filters to an entire track by clicking the track head and using the <b>Filters</b> panel.</li><li>New projects created with this version now load much more quickly.</li></ul>
