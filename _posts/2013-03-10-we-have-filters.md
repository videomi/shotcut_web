---
layout: post
title: We Have Filters
date: '2013-03-10T11:57:00.001-07:00'
author: Dan Dennedy
tags: 
categories:
- blog
---

As of version 13.03.10, there are now several video filters available. Thanks to <a href="http://mltframework.blogspot.com/2013/02/mlt-adds-gpu-image-processing.html">Movit and MLT</a>, these filters run on the GPU using OpenGL Shading Language for speedy, high quality, 16-bit (per color component) linear float processing! There are also some CPU-based ones (8-bit integer with gamma); you switch between them by using the GPU Processing option in the Settings menu. This provides a convenient way to compare them. The GPU filter processing even works in conjunction with simultaneous SDI/HDI monitoring. Also, it works for background encoding jobs. The screenshot on the <a href="http://www.shotcut.org/">Shotcut homepage</a> has been updated. Oh yeah, I almost forgot to mention that with the GPU-powered Color Grading filter, we now offer 3 way color wheels. :-)