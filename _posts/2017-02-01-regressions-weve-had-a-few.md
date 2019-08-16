---
layout: post
title: Regressions, We've Had a Few
author: Dan Dennedy
category: blog
---
Lately, we have been focused primarily on bug fixes, and sometimes a bug fix
introduces a new, often times worse bug, which is called a regression. Due to
major regressions in v17.01 all users are strongly encouraged to  
[**UPGRADE TO VERSION 17.02**]({{ "/download/" | prepend: site.baseurl | prepend: site.url }}).

* Fixed drag-n-drop from other than C: drive on Windows.
* Fixed '/' getting added to front of file paths on Windows.
* Fixed the MLT XML repair tool not correctly handling decimal point in some
  configurations.
* Fixed opening a network stream.
* Improved support for image sequences.
* Improved device capture.
* Added Slovenian translation.

All device capture now occurs in the background. This makes it possible to record
voice overs while playing the project. I plan to make a video to show how to do
this soon.
