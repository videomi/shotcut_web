---
layout: page
title: Release Notes
permalink: /download/releasenotes/
category: other
---

<!-- Shotcut Responsive -->
<ins class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-1305424236533187"
    data-ad-slot="3403753557"
    data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

These are brief notes about known problems and feature additions. See
[News]({{ "/blog" | prepend:site.baseurl }}) or the [git
log](https://github.com/mltframework/shotcut/commits/master) for more
information.

##### Release 16.02

-   Audio waveforms on timeline are updated incrementally as progress is made.
-   Allow dual pass encoding for CBR.
-   Added Show Video Thumbnails option to the timeline menu.
-   Added Rebuild Audio Waveform to a timeline clip's context menu.

##### Release 16.01

-   Added **Speed** parameter to Properties for an audio/video clip.
-   Added **Properties** views for track and timeline when selected.
    Click track head to select track; click the timeline's cornerstone
    (top left block) to select the timeline.
-   Added **Blend mode** to track properties (not available in GPU
    processing mode; only applies when compositing is enabled in the
    track header).
-   Added **Alpha Channel: View** video filter.
-   Added **Alpha Channel: Adjust** video filter.
-   Added **Chroma Key: Simple** video filter.
-   Added **Chroma Key: Advanced** video filter.
-   Added **Key Spill: Simple** video filter.
-   Added **Key Spill: Advanced** video filter.
-   And, as usual, a bunch of fixes and translation updates.

Note: none of the above, new video filters can utilize GPU-processing at
this time.

##### Release 15.12

-   Added crash recovery for untitled sessions.
-   Added Slovak translation.

##### Release 15.11

-   Added Rutt-Etra-Izer video filter.
-   Added audio/video device and screen capture for OS X.
-   Added screen capture for Windows.
-   Added Application Log to View menu.
-   Added Save button to text viewer dialogs (logs, XML).
-   Added video Deinterlace, Interpolation, and Parallel-processing
    options to Encode panel.
-   Reorganize the Settings menu and added headings.
-   Added Close action to File menu.
-   Added keyboard shortcuts for trimming on Timeline: I, Shift+I,
    O, Shift+O.
-   Added support for ripple trimming on Timeline.

##### Release 15.10

-   Mostly just bug fixes.
-   Added **Dutch** translation.
-   Added **Russian** translation.
-   Added project check and repair function.

##### Release 15.09

-   Added **Scrub Audio** to Settings menu.
-   Added **Display Method** to Settings menu (Windows only).
-   Added **Portugal Portuguese** translation.
-   Added **Mute** audio filter.
-   Updated Qt to v5.5.
-   Updated FFmpeg to v2.7.

##### Release 15.08

-   Added a Greek translation.
-   Added a **Ripple All Tracks** option to the Timeline menu.
-   4 new audio dynamics filters:
    -   Compressor
    -   Delay
    -   Expander
    -   Limiter
    -   Reverb

##### Release 15.07

-   4K UHD support
-   5 new video filters:
    -   Old Film: Dust
    -   Old Film: Grain
    -   Old Film: Projector
    -   Old Film: Scratches
    -   Old Film: Technocolor
-   5 new audio filters:
    -   Bass & Treble (3-band graphic equalizer)
    -   Band Pass
    -   High Pass
    -   Low Pass
    -   Notch
-   Added **Insert Track** and **Remove Track**.
-   New default Encode settings produce a better quality H.264 MP4 file.
-   Composite now defaults to on/enabled for new video tracks.

##### Release 15.06

-   Added 64-bit Windows build.
-   Added **Audio Spectrum** analyzer.
-   Changed audio **Gain** filter to use dB and log scale.
-   Added a toggle button to **Lock** a track.
-   Changed **Insert** and **Ripple Delete** to ripple across all
    unlocked tracks.
-   Changed keyboard shortcut to adjust track height to Ctrl+-
    and Ctrl+=.
-   Added keyboard shortcuts to toggle track:
    -   **Mute** - Ctrl+M
    -   **Hide** - Ctrl+H
    -   **Lock** - Ctrl+C

##### Release 15.05

-   Add **Distort** option to Size and Position filter.
-   Add video **Cut** option to Transition Properties.
-   Code-sign Windows executable and installer.
-   In Timeline, operate on clip under the play head if nothing
    is selected.
-   New keyboard shortcuts for Timeline:
    -   Select clip under play head: Ctrl+Space.
    -   Move selection one item to the right/left: Ctrl+Right/Left.
    -   Blanks can be selected to remove/ripple-delete: X or Shift+Del
        or Shift+Backspace.
    -   Deselect everything: Ctrl+D.
    -   Open As Clip: Enter/Return.

##### Release 15.04

-   Added an audio tone generator (in File > Open > Other).
-   Now you can set a new default duration for audio or video
    fade filters.
-   The WebM VP9 encode preset enables multi-threaded encoding.

##### Release 15.03

-   Add Update button to Playlist panel.
-   Double-clicking a successfully completed Encode job, now opens the
    result in Shotcut.
-   Consolidate GPU and Video filters in Filter menu.
-   Add View > Scopes > Audio Waveform.
-   Move audio peak meter to View > Scopes > Audio Peak Meter and
    main toolbar button.
-   Move volume slider to player toolbar icon.

##### Release 15.02

-   Add x265 codec.
-   Add video quality measurement tool.
-   No longer auto-plays upon opening a playlist or multitrack project.
-   Auto-select all text upon giving a timecode field focus.

##### Release 15.01

-   Only a few bug fixes and translation updates.

##### Release 14.12

-   New filter menu allows you favorite filters and see only favorites.
-   CPU-based video filters can be added after GPU-based filters.

##### Release 14.11

-   The HTML5 features are finally available on Windows!
-   Add source code editing to the HTML editor.
-   Add 3D Text filter based on WebGL, typeface.js, and three.js.
-   Add support for DirectShow devices on Windows in the Open
    Other dialog.
-   Add the [Opus audio codec](http://www.opus-codec.org/).
-   Change the VP9 WebM preset to use the Opus audio codec.
-   Add support for the \#localtime\# keyword to the Text filter (no
    button yet).
-   Restart instead of simply closing the app when changing the GPU or
    language settings.
-   Change the Redo keyboard shortcut to Ctrl+Y on Windows only.
-   Save file paths in MLT XML with relative names for assets in the
    same folder or sub-folder. This makes it easier to use a relocatable
    project folder.
-   Add scale and offset parameters and a preset widget to the
    Rotate filter. Usually after rotating a video, part of the image has
    been clipped. These new parameters provide control for that clipping
    processing including no clipping.
-   Add Italian translation.

##### Release 14.10

-   Maintenance release to fix some bugs.
-   Added Polish translation.
-   Restored FFV1 encoding and preset.
-   Change Leap Motion control: close hand to pause, open hand
    to shuttle.

##### Release 14.09

-   Added WMV and WMA encode presets.
-   Enabled the video player zoom and pan controls for OS X.
-   Added *Size and Position* video filter with a rectangle control that
    overlays the video player.
-   Added a simple *Text* video filter also with rectangle
    control overlay. This is a dynamic text filter supports pre-defined
    variables: *Timecode, Frame \#, File date, File name*.
-   Enabled parallel video processing for *Encode File* on systems with
    more than 2 logical cores when not using *GPU Processing*. This
    makes encoding faster when using filters, transitions,
    and compositing.
-   Added an *Opacity* <span style="background-color:
    transparent;"> video filter. </span>
-   Added an option on video fade filters: *Adjust opacity instead of
    fade with black*.
-   Now you can add filters to an entire track by clicking the track
    head and using the *Filters* panel.
-   New projects created with this version now load much more quickly.

##### Release 14.08

-   Now the Stabilize video filter really does work on Windows.
-   Added a Gamma menu item to the Settings menu when in GPU mode, which
    performs gamma correction. Previously, the display gamma was fixed
    at sRGB, but now you can choose Rec. 709. Previously, when applying
    a GPU filter, Shotcut would output sRGB gamma when encoding to a
    Y'CbCr file, and that has been removed/fixed.
-   Transfer characteristic (gamma) metadata is now written to video
    files that support it (e.g., H.264).
-   The filter UI layout now automatically adapts to a horizontal or
    vertical layout to suit more workspace layouts.
-   Upgraded FFmpeg to version 2.3.

##### Release 14.07

-   add "Remove Old Program Files" option to Windows installer
-   ask to exit if there are unfinished jobs
-   fix crash when loading invalid XML
-   add auto-save
-   fix frames repeating at end of some clips
-   fix Stabilize filter on Windows
-   add elegant combination slider and spinner control and revise all
    filter UIs to use it
-   cleanup all filter UIs to be consistent with other areas of UI
    panels
-   improve tooltips on timeline track headers
-   fix bug that gives you a MLT-XML GPU warning when the Balance or Pan
    filters are in a project
-   Save to app config the folder path name of last saved project XML.
    Then, use this path to default save dialogs such as next XML or
    video stabilization data.
-   On OS X, when using System theme, stack the display volume and mute
    toggles so these widgets do not appear so wide.
-   Workaround for the Stabilize filter's analysis job crashing on
    Windows.<br>The analysis job still crashes at the end, but
    the data is still created and usable. So, go ahead and try to use
    the data regardless of the job's failure.
-   Make adjusting image duration on timeline easier.<br>Now,
    the Duration field in Properties adjusts the out point, and the
    actual duration is 10 minutes. This lets you add just a few seconds
    to the Timeline by default but then stretch or shrink the image clip
    on the timeline up to 10 minutes. If you need more than 10 minutes,
    add the clip to the track again.

##### **Release 14.06**

-   upgrade x264 to git master and FFmpeg to v2.2
-   check compatibility of MLT XML with current GPU processing mode
-   introduce logging program activity to text file
-   more fixes for file names with extended characters on Windows
-   fix opening files with path/name with extended characters on Windows
-   upgrade to Movit 1.1.1 and replace GLEW with libepoxy

##### Release 14.05 and Earlier

-   14.04.29: fix crash on Windows w/GPU upon closing Color Grading
    filter UI
-   14.04.17: add Wave filter
-   14.04.14: fix huge memory leak introduced in v14.04.05 while working
    with interlaced clips with GPU Processing enabled
-   14.04.12: fix Overlay HTML filter appearing in filter list as
    Circular Frame
-   14.04.09: now provide 3 simultaneous color wheels for CPU-based
    Color Grading filter
-   14.04.08: add Catalan language
-   14.04.04: require shift key to make editing keyboard shortcuts
    target the playlist instead of the timeline
-   14.04.03: improved reliability for some FLV files and music with
    album art
-   14.04.01:
    -   restore Crop filter for GPU
    -   fix drag-n-drop from playlist to timeline
-   14.03.27: fix GPU processing on OS X
-   14.03.26:
    -   add GPU support for video wipe transitions
    -   fix aspect ratio of encoding on Windows in locales that use
        comma for decimal point (broken since 14.02.27)
-   14.03.25: GPU processing upgrades broke on OS X
-   14.03.24: add transition properties and video wipes
-   14.03.23: add transition by trimming
-   14.03.19: add resizing transition
-   14.03.17: display a time delta while moving, trimming, and fading on
    timeline
-   14.03.12: add initial support for cross-fade audio and video
-   14.03.11: add Open XML As Clip to File menu
-   14.03.09: in Encode, lock-down video parameters for presets that
    have specific resolution and framerate
-   14.03.07:
    -   add search for encode presets
    -   add Show Audio Waveforms toggle to timeline menu
-   14.03.02: add seeking to previous and next edit points using |<
    and >| buttons or alt+left/right keyboard shortcuts
-   14.03.01: add Fade In and Fade Out audio filters and Fade From Black
    and Fade To Black video filters with special timeline fader controls
-   14.02.27:
    -   more fixes for locales using comma for decimal point on Windows
    -   add a Set Default button for duration to the image properties
        panel
-   14.02.18:
    -   add insert and overwrite for drag-n-drop into timeline
    -   add option to scrub over timeline when dragging clips into
        timeline or within it
    -   show clip properties for selected shot on timeline
-   14.02.17: fix overwrite spanning multiple clips & gaps and undo for
    that
-   14.02.15: fix a luma (brightness) change when applying non-GPU
    filters
-   14.02.14: fix undoing a split
-   14.02.13:
    -   fix drag-n-drop from Source player to Timeline on Windows and OS
        X
    -   add keyboard shortcut 'S' to split clip under playhead on
        current track
-   14.02.12: fix encoding with GPU processing on Windows
-   14.02.11:
    -   fix GPU processing on Windows (where compatible)
    -   new video stabilization (
        [faster](http://public.hronopik.de/vid.stab/)) and audio
        normalization ( [EBU R128](https://tech.ebu.ch/loudness))
        filters <br>(video stabilization still crashes on
        Windows 8, but works for us on Windows 7 and other OS)
-   14.02.08: rework integration of playlist and timeline and change
    player tabs to Source / Program
-   14.02.05: add external monitoring on additional system monitor
-   14.02.04: track compositing fixes
-   14.02.03: fix crash on startup on Windows with dock title bars
    hidden
-   14.02.01:
    -   fix accuracy of edits when saving and loading project XML in
        locales with radix not a period
    -   set the UI locale from the language or host OS locale so that
        radix appears and interpreted correctly
    -   add Restore Layout to View menu
    -   add Show Title Bars to View menu
-   14.01.30: add Split At Playhead to context menu of clip on timeline
-   14.01.29: add saving and loading of playlist in a timeline project
-   14.01.28: upgrade FFmpeg libs to v2.1
-   14.01.27: reduce GPU memory usage with GPU processing
-   14.01.25: fix crash using audio only clip on Windows
-   14.01.23: fix inserting into playlist by menu or keyboard command
    (fix for OS X is in v14.01.24)
-   14.01.21: fix broken MP3 encode preset and sometimes wrong aspect
    ratio in encode
-   14.01.20: add Vignette and Diffusion (GPU only) filters
-   14.01.14: improve GPU processing performance
-   14.01.05 - 14.01.18: various timeline bug fixes
-   14.01.05: added insert and overwrite edits
-   14.01.02:
    -   fix GPU processing to work with Timeline
    -   re-enable GPU processing for Windows (still only partially works
        on some systems)
-   13.12.30:
    -   fix broken timeline on Windows
    -   fix putting Timeline panel in a tab stacked with other panels
    -   let Timeline panel be moved to top of window or floated
-   13.12.29: timeline broken on Windows
-   13.12.28: add multitrack timeline
-   13.12.26: fix OS X build broken since v13.12.21 due to Qt upgrade
-   13.12.22: upgrade Qt to version 5.2.0
-   13.11.21:
    -   fix process not completely closing on Windows
    -   fix broken keyboard shortcuts when not using English
-   13.11.18: add Invert and Sepia Tone video filters
-   13.11.17: add OpenGL version and extension test
-   13.11.15: add thumbnail caching
-   13.11.08:
    -   fix keyboard cursor left/right and page/up down (on Linux,
        issues still persist on WIndows, OS X)
    -   add Stabilize video filter
    -   add Downmix audio filter
    -   add Swap Channels audio filter
-   13.11.06: add audio Normalize filter
-   13.10.31:
    -   add player zoom button
    -   broke keyboard cursor left/right and page up/down for navigating
        video (workaround: click on scrub bar to give it focus)
-   13.10.29: fix H.264 encoding on Windows - broken since 13.10.02
-   13.10.28: add Rotate video filter
-   13.10.21:
    -   fix encode when GPU is enabled (regression since 13.09.30)
    -   add DeckLink keyer capability
    -   add WebVfx producer widget so you can set HTML generator
        transparent (handy for keying HTML)
-   13.10.17: add audio Pan and Balance filters
-   13.10.16: fix loading tractor-based MLT XML files (e.g. from
    Kdenlive or OpenShot)
-   13.10.15: fix Leap Motion for Linux and Windows
-   13.10.11
    -   disable Leap Motion in Linux builds
    -   fix opening correct file from Recent search
    -   add first audio filters
-   13.10.10: conflict between QtWebKit and libLeap on Linux resulting
    in crash when loading HTML over HTTP
-   13.10.09: crashes in Recent panel when opening new (not in recent)
    file (downloads deleted since high visibility crash)
-   13.10.08: add search field to Recent panel
-   13.10.02 - 13.10.07: writes incorrect playlist
-   13.09.21: Best known version before Qt 5 upgrade
