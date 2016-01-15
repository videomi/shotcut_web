---
layout: post
title: Encoding now available!
date: 2012-08-10 13:15:00
author: Dan Dennedy 
categories:
- blog
---

Encoding is now implemented and available since version 12.08.10. It is still young and needs additional testing and tweaking; however, it basically works on all platforms. It also supports batch encoding, but currently the control over the queue is limited to simply canceling a running job (right-click a running job to open its context menu).

When you are playing a live source, encoding acts as a capture function. That is particularly handy for the Blackmagic Design SDI/HDMI input, but on Linux you can also use it for screen recording and webcam (V4L2) and audio recording.

In addition, it also supports a streaming output as an alternative to file output, but you really need to know what you are doing to take advantage of it at this time. I have pre-populated the stream URL field to something suitable for MPEG-2 Transport Stream; so, to use that, set the format to mpegts and choose codecs that mpegts supports: MPEG-1, MPEG-2, MPEG-4, H.264, AAC, AC-3, MP2, MP3.