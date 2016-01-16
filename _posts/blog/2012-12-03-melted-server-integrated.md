---
layout: post
title: Melted Server Integrated
date: '2012-12-03T10:15:00.000-08:00'
author: Dan Dennedy
tags: 
categories:
- blog
---

The initial effort to integrate Shotcut with the <a href="http://www.mltframework.org/bin/view/MLT/Melted">Melted</a> video server is now available since version 12.12.03.

What is Melted video server? Basically, it is an industrial-grade media player for broadcast/linear television channels. It was the original use case and application for the MLT framework, which is also the multimedia engine for Shotcut. For many of you this will be unimportant, which is why these new features are hidden under the View menu and not given prominent location on the main toolbar. However, for the folks who are interested in Melted, this represents the first publicly available multi-platform client!<br>
<div class="separator" style="clear: both; text-align: left;"><a href="http://1.bp.blogspot.com/-Cj6IVIc3jsY/ULzll-zkaHI/AAAAAAAABuk/06nKfeesz6U/s1600/Shotcut-Melted.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-Cj6IVIc3jsY/ULzll-zkaHI/AAAAAAAABuk/06nKfeesz6U/s1600/Shotcut-Melted.png" height="203" width="320" /></a></div>This is just the initial, basic integration. There are a couple of simple enhancements planned for the near future:<br>
<ul><li>Map the server's root directory of clips to the local or network file system so that you can easily preview and trim clips and then add them to a Melted unit's playlist.</li><li>When you open a unit that streams to the network, play the stream instead of just showing black.</li></ul>