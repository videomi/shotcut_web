---
layout: question
title: Frequently Asked Questions
permalink: /FAQ/
category: help
---
{::options auto_ids="true" /}

<!-- Shotcut Responsive -->
<ins class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-1305424236533187"
    data-ad-slot="3403753557"
    data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

* Will be replaced with the ToC
{:toc}

**See Also: [How To Articles](../howtos/)**

## Why does it crash on Windows upon launch?

Is this a new - for the first time ever - installation of Shotcut?
If NOT, and it used to work, then you may need to delete your Shotcut
registry entries and try again. The registry keys are stored at
HKEY_CURRENT_USER\Software\Meltytech\Shotcut\.

One Windows 8.1 user reported he needed to change the following in
the Compatibility tab of the Properties for the Shotcut icon/exe: Run in
compatibility mode for "Windows XP (Service Pack 2)", and "Run this
program as administrator." However, not every one needs to do that, and
we are not sure why he needed it.

* * *

## Why does it frequently crash on Windows?

While some systems have a video adapter driver with at least version 2.1
OpenGL, there may be some incompatibility between the OpenGL code in
Shotcut or Qt and the driver that causes a crash. You can try to upgrade to
the latest driver for your hardware.
Versions 15.09 and higher can also use **DirectX** when GPU processing is not
enabled, and that should improve compatibility. Try the different options under
**Settings > Display Method: OpenGL or DirectX**.

If you are using the 32-bit version of Shotcut on 64-bit Windows (it may appear
in "Program Files (x86)"), try using
the 64-bit version of Shotcut instead. You may be experiencing issues with
drivers or running into memory limitations.

Of course, there can still be other reasons we have not yet discovered.
If you believe none of the reasons above applies to you, then you can
locate your shotcut-log.txt file in AppData (see other question below
for more information) and paste it into a [bug
report](https://github.com/mltframework/shotcut/issues).

* * *

## I have trimmed my video and/or created my project, now how do I save or share it?

If you just want to save your changes to re-open it later in Shotcut,
you can save your project as a MLT XML file by clicking **Save** on the
toolbar at the top of the window. If you want to upload the video to a
web site or somehow share the result with someone as separate video
file, then click **Export** on the toolbar, which opens or raises the
Export panel. In the Export panel, there are 3 basic steps:

1. choose and click a **Preset**,
2. click **Reload** to load the current
video settings, and
3. click **Export File** at the bottom of the panel.

By default, if you have made a playlist **Export** uses the **Playlist** unless you
have put something into the **Timeline**, in which case, it uses the
timeline. Otherwise, it will Export the clip or live source (stream,
device, screen, etc.). However, you can control what is used for the source of
the export using the **From** control at the top of the **Export** panel.

* * *

## Which Export preset should I use?

It all depends; that is why there are so many of them! But here are some
suggestions:

-   Upload to a video-sharing web site: H.264 Main Profile
-   Extract the audio: Ogg Vorbis or MP3
-   Save to an intermediate file to use with another tool: DNxHD or
    lossless/ProRes - really depends on what the other tool accepts
-   Put onto my own web site: WebM and/or H.264 Main Profile
-   Screen recording (Linux only): lossless/MJPEG
-   Capture from SDI/HDMI: lossless/ProRes if your system can handle it,
    otherwise lossless/MPEG-2

* * *

## What can I do if Export is failing or getting stuck?

If a job appears to be stuck or hung (please allow ample time for percentage to
change), right-click the job in the Jobs panel and choose **Stop**. Try export
again with **Export > Video > Parallel processing** disabled (unchecked). If
there is still a problem see what percentage it reaches before failing or
hanging. Then, apply the percentage to your project duration to find the rough
time of where it seems to be having trouble. Is there something complicated or
different there? You can temporarily remove some things in this area and try
again to see if export goes further.

* * *

## How do I add text? Is there a titler?

You must apply a filter to your clip or track. There are 3 suitable
filters at this time: **3D Text**, **Overlay HTML**, and **Text**. If
you just want to use a simple background, you can use an image file, or
to use a solid color choose **File > Open Other > Color**.

See the [video tutorials]( {{ "/tutorials/" | prepend: site.baseurl }} ) for more information about the
Overlay HTML filter. Shotcut includes a simply WYSIWYG (i.e. visual)
HTML editor accessible through the **Edit** button on this filter's
control panel.

You can also create text with an external program as an image with an
alpha channel and composite it. To composite, you add a video track to
the Timeline to use as a layer. Make sure the **C** button in the new
track's header is "on" to enable compositing. Finally, you open an
image, set its Properties to adjust duration or enable an image
sequence, add it to the new video track, and further adjust its position
and duration as-needed. You might also want to apply the **Size &
Position** filter to the image clip. The image file formats that support
an alpha channel are PNG, SVG, and TGA. You can also use Quicktime
Animation format. There are many tools that can create images with alpha
channels for this purpose. Some of them include GIMP, Inkscape, Krita,
Paint.NET, Photoshop, etc. For animation, consider Blender and Synfig.

* * *

## Why is seeking so slow?

Some formats and compression methods simply make it take longer. In the
**Settings** menu set **Interpolation** to **Nearest Neighbor**. This
setting not only affects the quality of image scaling but also the
accuracy of seeking. Please be aware that this setting may cause seeking
to become less accurate resulting in some frames repeating when stepping
frame-by-frame backwards or the first several frames in the forward
direction immediately after a seek.

* * *

## Why is stepping frame-by-frame repeating the same frame?

In the **Settings** menu set **Interpolation** to something other than
**Nearest Neighbor** - **Bilinear** is recommended. When the
interpolation level is set to nearest neighbor it relaxes the accuracy
of seeking to make the responsiveness of the video player faster.

* * *

## Are there keyboard shortcuts for editing?

There is now a [page with all of the keyboard shortcuts]( {{ "/howtos/keyboard-shortcuts/" | prepend: site.baseurl }} ).\\
These shortcuts are available without holding Ctrl, Alt, or Command (macOS)
unless otherwise noted:

-   **i** and **o** set the in and out points respectively (when a clip
    is open in the player)
-   **Esc** switches the player between the player between the
    source (clip) and program (playlist or timeline) views

**Playlist**

-   **Shift+X**, **del** or **backspace** removes the selected item
-   **Shift+C** appends a clip to the playlist
-   **Shit+V** inserts a clip before the selected playlist item; appends
    if no item is selected
-   **Shift+B** updates the selected item with the clip in the player
-   **Enter** opens the playlist in the player and seeks to the selected
    cut
-   **Up** and D**own** changes the current/selected item
-   **Ctrl+Up** and **Ctrl+Down** moves the selected item up or down
-   **1** through **0** selects the Nth item ( **0** is ten)

**Timeline**

-   **z**, **Del** or **Backspace** *lifts* the selected shot from the
    timeline without affecting the positions of the other shots on the
    track
-   **x**, **Shift+Del** or **Shift+Backspace** removes the selected
    shot in a ripple fashion such that following shots on the track
    shift to the left
-   **c** appends a clip to the current track
-   **v** <span style="background-color: transparent;"> inserts a
    clip at the playhead position on the current track, splitting the
    shot under the playhead if necessary, and acts in a ripple fashion
    shifting all shots following the play head to shift to the
    right</span>
-   **b** <span style="background-color: transparent;">
    over-writes on the current track with the clip in the player without
    affecting the positions of any shots following the duration of the
    clip</span>
-   **Up** <span style="background-color: transparent;"> and
    </span> **Down** <span style="background-color:
    transparent;"> changes the current track</span>
-   **0, -, =**<span style="background-color:
    transparent;">adjusts the zoom level of the timeline (0 resets to
    default, center position on slider; = zooms in and is the same key
    as + without needing to press shift)</span>

Just like j, k, and l for playback transport control, the bare i, o, x,
v, b are very common shortcuts use by other professional video editing
software from Apple, Avid, Lightworks, and others.

P.S. While it is rather obvious to use cursor left and right keys for
single frame stepping, there is another technique so you do not have to
remove your fingers from the JKL: while holding down K, tap J to step
left or tap L to step right.

* * *

## The keyboard shortcuts do not seem to be working.

Sometimes the keyboard "focus" might be captured by something in the GUI
causing the shortcuts to not function. In that case, click the video
preview region to return focus to the player.

* * *

## Shotcut will not start on Linux...

Some file managers do not like the launcher icon provided with the
binary download from this site. The launcher icon was tested
successfully on GNOME Nautilus and KDE Dolphin.

1. open a terminal/console window
2. cd to the location where you have extracted Shotcut
3. enter `Shotcut.app/shotcut`\\
Please do not try to run bin/shotcut; always use the wrapper script in the Shotcut.app
folder! If it still does not start, then it should report that some
libraries could not be loaded.

* * *

## What are the minimum system requirements?

Operating system: 32- or 64-bit Windows 7 - 10, Apple macOS 10.8 - 10.10, or
64-bit Linux with at least glibc 2.13.

CPU: x86-64 Intel or AMD; at least one 2 GHz core for SD, 2 cores for
HD, and 4 cores for 4K.

GPU: OpenGL 2.0 that works correctly and is compatible. On Windows, you
can also use a card with good, compatible DirectX 9 or 11 drivers. We do
not have a list.

RAM: At least 4 GB for SD, 8 GB for HD, and 16 GB for 4K.

Hard drive: yes, get one; the bigger, the better :-)

Network: Shotcut does NOT require access to the network to activate,
check a subscription, or send usage analytics. However, some links in
the Help menu do link out to this web site. If you have files on a fast
(at least 1 Gb/s) network share you can access them from there through
your operating system.

* * *

## All I see is white or green instead of video, and I know there is video in this file....

First, use **Properties** to see if the **Video** tab is disabled. If it
is disabled, then Shotcut is not compatible with this format or codec.
If the video tab is enabled, more than likely OpenGL (or also DirectX on
Windows) is not working on your system, or it is too old. First, make
sure **GPU Processing** is disabled in **Settings**. GPU processing
requires OpenGL version 3.2. When it is disabled, you only need OpenGL
version 2.0 (or also DirectX on Windows). If you are on Windows, after
ensuring GPU processing is disabled, try forcing the usage of DirectX by
choosing **Settings > Display Method > DirectX (ANGLE)**.

* * *

## Can I have multiple versions installed at the same time?

Yes. Simply rename your existing program folder to put the version
number in it or move it out-of-the-way to another location.

On **Windows**, the installer is mostly just a fancy zip extractor that also
adds a start menu item. So, you can install the new version to a
different location, or rename the existing folder to prevent it from
being overwritten. Then, you can just navigate to whichever program
folder you want in Explorer and run shotcut.exe.

On **macOS**, you do not
need to copy Shotcut to the /Applications folder - that is merely a
suggestion. Simply drag Shotcut out of the .dmg to wherever you like and
rename the app bundle to put the version number into it. Or, rename the
existing version to move it out of the way before copying Shotcut from
the .dmg.

The same concepts apply to **Linux**, where Shotcut is simply
delivered as a compressed tar archive. However, on Linux, it is
important to understand that the launch icon always looks in
Shotcut.app; so, either version the folder containing the launch icon or
have multiple, versioned Shotcut.app folders and run the launch *script*
that is inside of it.

* * *

## How do I cut or trim a clip without encoding or transcoding it?

This is not supported, and there are currently no plans to support it.
We recommend that you use VirtualDub or Avidemux for that.

* * *

## Why do I not have the \_\_ filter?

-   Some filters are not compatible with GPU Processing.
-   Some filters cannot be applied to a track or the entire timeline (i.e. Master).
    Please check what is currently selected. The top of the Filters panel shows
    the name of what is selected.
-   By design, we do not make all LADSPA and frei0r filters available
    through the UI. We do not want to present a confusing generic
    interface to all available plugins and overwhelm users with so many,
    often redundant, options. Also, the Shotcut team wants to better
    understand the filters we are providing and ensure each one is
    operating as intended with MLT. If you are manually authoring XML,
    then you can add any filter you want.
-   Sometimes a MLT plugin may fail to load due to a missing or
    incompatible library. Shotcut downloads provide all dependencies for
    Windows and macOS, but it may rely upon some libraries provided by
    distribution packages on Linux.

* * *

## Is Shotcut free for commercial use?

Yes, because the software is made available under the GPLv3 license, it
supports [The Free Software Definition](https://www.gnu.org/philosophy/free-sw.html),
which includes:
> The freedom to run the program as you wish, for any purpose (freedom 0).

* * *

## Where are the log, presets, database, and settings stored?

Currently, the database is used to store thumbnail and waveform data,
but it will likely grow to include more things over time.

**Windows**

The log, database, and presets are stored in
%LOCALAPPDATA%\\Meltytech\\Shotcut\\. In the Explorer location bar, enter
"%LOCALAPPDATA%" and press Enter. Then look for Meltytech\\Shotcut.

The settings are
stored in the registry at key
HKEY\_CURRENT\_USER\\Software\\Meltytech\\Shotcut\\.

**Linux**

The log, database, and presets are stored in
\~/.local/share/Meltytech/Shotcut/ where '\~' is your home directory, of
course.

The settings are stored in \~/.config/Meltytech/Shotcut.conf, which is a
text file in INI format.

**macOS**

The log, database, and presets are stored in \~/Library/Application
Support/Meltytech/Shotcut/, where '\~' is your home directory, of
course.

The settings are stored in
\~/Library/Preferences/com.Meltytech.Shotcut.plist, which is a [binary
plist](https://developer.apple.com/library/mac/documentation/Darwin/Reference/Manpages/man5/plist.5.html)
file.

* * *

## What is the history of Shotcut?

Shotcut was originally
[announced](http://permalink.gmane.org/gmane.comp.lib.fltk.general/2397)
in November, 2004! You can read more about it from a
[backup of its original website](https://web.archive.org/web/20050401015503/http://users.pandora.be/acp/shotcut/).
The current version of Shotcut is a complete rewrite with none of the
original requirements in mind. The original Shotcut was created by
Charlie Yates, a MLT co-founder and original lead developer. Since Dan
Dennedy, another MLT co-founder and its current lead, wanted to create a
new editor based on MLT, he simply chose to [reuse the
name](http://mltframework.blogspot.com/2011/12/end-of-2011-update.html)
since he liked it so much. The current Shotcut had its origins as the
[MLT BuildOnMe project](https://github.com/mltframework/BuildOnMe).
BuildOnMe was created in January, 2011 as a minimal, example project of
how to use MLT in a cross-platform Qt 4 project. Eventually, Dan sought
to replace the aging Melted GTK+ client, Rugen, with a cross-platform
replacement and needed an app on which to easily test the cross-platform
compatibility of new MLT features such as
[WebVfx](https://github.com/mltframework/webvfx#readme) and
[Movit](https://movit.sesse.net/).
That led him to fork BuildOnMe and start Shotcut.

* * *

## How do I make subtitles?

If you are strictly asking about subtitles or closed captions, Shotcut
does not read, make, edit, or pass-through subtitles. There is planned
the ability to read, show, pass-through, and burn-in subtitles, but
there is no estimated time of arrival. We recommend that you try the
free, open source, cross-platform subtitle editor
[Aegisub](http://www.aegisub.org/).

However, if you are just asking about the ability to put/overlay text in
your video, use the **Text**, **3D Text**, or **Overlay HTML** filter.
Since it is a filter, that means you need something to which to apply
it. If you just want a solid color, choose **File > Open Other >
Color**. You can also use a picture/photograph just like a video clip by
opening it and adding it to your playlist or timeline.

* * *

## How do I change the speed of the video?

This is implemented as of version 16.01. With a clip open in the source
player or selected in the timeline, choose **Properties** and look for
the **Speed** field. Shotcut only provides simple frame dropping or
duplicating. However, if the frame rate of your source footage is higher
than the Video Mode (under Settings menu), then you can achieve a fairly
smooth slow motion. If you are looking for more sophisticated results
using more advanced optical flow techniques, we recommend you try the
free, open source, cross-platform tool
[slowMoVideo](http://slowmovideo.granjow.net/).

* * *

## How can I edit the audio at the wave/sample level?

Shotcut does not offer that, but we recommend to try the free, open
source, cross-platform tool [Audacity](http://audacityteam.org/).
