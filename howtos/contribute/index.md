---
layout: page
title: How to Contribute
category: help
---

There are a number of ways to contribute for people all skills and skill levels.

Translation
-----------

We use the
[Transifex](https://www.transifex.com/projects/p/shotcut/)
collaboration web site to translate the Shotcut user interface.
Additional languages are already started but have not yet reached the
60% minimum level to be included in a Shotcut release.

Support Other Users
-------------------

An easy way for non-programmers to help is simply to participate in the
[Shotcut Forum](https://forum.shotcut.org/) by answering user's questions.
Alternatively, consider making a tutorial video on YouTube or similar.

Report a Bug
------------

You can report a bug on the [Shotcut Forum](https://forum.shotcut.org/) using
the Bug category or on [GitHub Issues](https://github.com/mltframework/shotcut/issues/). Bug reports must include the Shotcut version, your operating system,
and the steps. It can helpful to include a screenshot, screencast video, or
project file. Please do not use this to request a feature.

Make a Preset
-------------

After you make a filter preset that you think others would like,
you can share it on the
[Shotcut Forum](https://forum.shotcut.org/) or as a
[GitHub Pull Request](https://github.com/mltframework/shotcut/pulls).
You can locate presets on your system by choosing **Settings > App Data
Directory > Show...** and navigating to the presets folder.

Make a HTML Template
-------------

Version 19.01 added support for templates for the **Overlay HTML** filter. Your
templates must contain one HTML file and any number of additional external
files such as scripts and images.
In your Shotcut install folder, look in the folder
share/shotcut/qml/filters/webvfx/templates
(Shotcut.app/Contents/Resources/shotcut/qml/filters/webvfx/templates on macOS).

The folder "plain" contains templates that do not use the WebVfx JavaScript
extension, which is needed to make parameters or properly support animations.
Thus, use the "webvfx" folder for templates that use the JavaScript extension.
This differentiation is very important for WebVfx to work properly.
The next folder down is simply a category for organization. At some point,
this will likely appear in the UI when there are many templates. The next folder
down is your template folder. The name of this folder is shown in the UI as the
name of the template. You must use a folder even if you have a single,
self-contained HTML file.

The template **Blue Middle Bar** shows one way to use SVG as an image as well 
as one way to center text.

The template **Simple Scroll** shows how to use the Web Animations polyfill to 
make the animation seek properly. It is a simple example of making a custom
parameters UI for your template! This feature only supports Qt Quick QML.
Animated templates that do not properly support seeking using JavaScript or
Web Animations will not be accepted.

You can share your template on the
[Shotcut Forum](https://forum.shotcut.org/) or as a [GitHub Pull
Request](https://github.com/mltframework/shotcut/pulls).

Add a Filter
------------

The engine has many additional filters that are not yet exposed. You can easily
add a Shotcut UI for it. In addition, WebVfx makes it possible to add custom
filters that go beyond what can be done in a HTML template including support
for keyframes. 

You can see existing filter UIs and add your own in your Shotcut install folder, look in the folder
share/shotcut/qml/filters
(Shotcut.app/Contents/Resources/shotcut/qml/filters on macOS).

See [How to Make a Plugin]({{ "/notes/make-plugins/" | prepend: site.baseurl }})
for more information. You can share your filter UI on the
[Shotcut Forum](https://forum.shotcut.org/) or as a [GitHub Pull
Request](https://github.com/mltframework/shotcut/pulls).

Write Code
----------

The biggest impact you can make is to contribute a code change and submit that
as a [GitHub Pull Request](https://github.com/mltframework/shotcut/pulls).
To make working on Shotcut code and some of its dependencies easier we provide
some SDKs with setup instructions. Of course, you are free to try to work on
the Shotcut code another way, but there is no help provided for that as it gets
very complicated quickly.

[How To Use the Linux SDK]({{ "/notes/linuxdev/" | prepend: site.baseurl }})  
[How To Use the Windows SDK]({{ "/notes/windowsdev/" | prepend: site.baseurl }})  
[How To Use the macOS SDK]({{ "/notes/macosdev/" | prepend: site.baseurl }})

All code contributions should assign copyright to Meltytech, LLC; however,
exceptions may be considered for a major contribution.
