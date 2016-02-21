---
layout: post
title: Beauty Is More Than Skin Deep
date: '2013-10-01T22:55:00.003-07:00'
author: Dan Dennedy
tags: 
categories:
- blog
---

Shotcut recently received a major technology upgrade of some of its components. For the technical folks, it has been upgraded to <a href="http://www.qt-project.org/">Qt 5</a>! This will make it faster and easier to develop filter control panels and the forthcoming timeline. You see, the engine for Shotcut - MLT - has hundreds of audio and video filters available. After making a few in Shotcut it became obvious we did not want to keep making them using the traditional method. In addition:<br>
<ul><li>2 new custom UI themes/skins - light and dark - using clean, symbolic icons (in addition to the traditional "system" theme)<br></li><li>extended support for high DPI displays such as the Retina MacBook Pro - in particular, for the video viewport</li></ul>
<div><a href="http://3.bp.blogspot.com/-vIedTbSGm4E/Uk70enTx1LI/AAAAAAAACnk/QgEjBSlhbRo/s1600/shotcut-htmleditor-themes.png" imageanchor="1" style="clear: left; display: inline !important; margin-bottom: 1em; margin-right: 1em; text-align: left;"><img border="0" src="http://3.bp.blogspot.com/-vIedTbSGm4E/Uk70enTx1LI/AAAAAAAACnk/QgEjBSlhbRo/s1600/shotcut-htmleditor-themes.png" height="72" width="400"></a></div>

Here comes the "more than skin deep part." While everyone else has been working on getting video into HTML5, we have been working on getting HTML5 into video! The MLT plugin WebVfx uses Qt and WebKit technology - both of which have also been upgraded - to do just that. With this new version of Shotcut, WebVfx is getting more exposure, initially through 2 new filters:<br>
<ul><li>Circular Frame: mainly a proof-of-concept, this demonstrates a filter whose processing is implemented in HTML5 canvas with a user interface implemented in QML to control its parameters.</li><li>Overlay HTML: just like it sounds. You can choose a HTML file on the file system and it will be rendered with a transparent background (if not set) over the video. Don't write HTML? There is a simple WYSIWYG HTML editor included. Did I mention it is simple? Feel free to try out some of the new HTML animation tools that are becoming available from <a href="http://html.adobe.com/edge/animate/">Adobe</a>, <a href="http://www.google.com/webdesigner/">Google</a>, <a href="http://www.sencha.com/products/animator">Sencha</a>, and <a href="http://www.mixeek.com/">others</a>.</li></ul>Unfortunately, we could not get all of this new stuff working correctly on Windows; so we had to disable support for GPU processing and the WebVfx integration on Windows at this time. The last Qt 4 version of Shotcut will <a href="http://www.shotcut.org/bin/view/Shotcut/OlderBuildsWindows">remain available</a> for download for a while.<br>
