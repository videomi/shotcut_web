---
layout: post
title: Improved Stabilize and Normalize (EBU R128)
date: '2014-02-11T20:03:00.000-08:00'
author: Dan Dennedy
tags: 
categories:
- blog
---

Thanks to contributing developers, Stabilize and Normalize filters are improved as of version 14.02.11. Normalize is now based on <a href="https://tech.ebu.ch/loudness">EBU R128</a> technology provided through <a href="https://github.com/jiixyj/libebur128">libebur</a>. This gives better results because R128 is based on perceived loudness instead of RMS or peak volume. Stabilize is using the latest and greatest version of <a href="http://public.hronopik.de/vid.stab/">vid.stab</a> making it faster and yielding better quality results.