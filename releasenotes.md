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


##### Release 20.10.31

- Removed QtWebKit and WebVfx (HTML5 components) from all builds.
- Upgraded Qt to version 5.15.1 on Linux and Windows and version 5.12.9 on macOS.
  As a result, the minimum macOS version is 10.12.
- Updated Linux build to a Ubuntu 18.04 base (glibc version 2.27).
- Completely new Windows build based on msys2, and discontinued the 32-bit build.
- Migrated Windows and Linux builds to GitHub Actions, and automated builds of AppImage and snap for Linux.
- Added **Invert** (reverse polarity) audio filter.
- Added showing the job progress in Windows taskbar button. (thanks @lolametro!)
- Added converting **Text: HTML** filters to **Text: Rich**.
  This does not retain full fidelity, but hopefully it retains the text.
- Added using the H.264 hardware encoder if HEVC not available when **Proxy > Use Hardware Encoder** is on.
- Added **Scroll to Playhead on Zoom** option to **Timeline** menu.
- Added ability to change position in **Size, Position & Rotate** by dragging anywhere inside the rectangle while also holding <kbd>Shift</kbd>.
- Added rectangle VUI help tips for various video filters.
- Added **Size, Position & Rotate > Zoom** now works in any **Size mode**!
- Added **Scroll to Playhead on Zoom** to **Keyframes** menu!
- Added keyboard shortcut for **Center the Playhead**: Ctrl+Shift+P.
- Added keyboard shortcut for **Scroll to Playhead on Zoom**: Ctrl+Alt+P.
- Added keyboard shortcut for rich text editor **Paste Text Only**:  Ctr+Shift+V
- Added common preset resolutions and aspect ratios to the **Add Custom Video Mode** dialog.
- Improved **Text: Rich** filter export on Windows and Linux when display scale is fractional (e.g. 150%).
- Improved the performance of the **Fade In Video**, **Fade Out Video**, and **Brightness** filters on multicore systems.
- Improved image quality when using **Size, Position & Rotate**.
- Changed **Export > Codec > Dual pass** to not write a video file for the first pass.
- Fixed time rulers hiding on vertical scroll in **Timeline** and **Keyframes** (regression in v20.09).
- Fixed **Crop: Rectangle > Corner radius** not exactly the same as in version 20.07 (regression in v20.09).
- Fixed a compatibility issue for some systems by downgrading FFmpeg to version 4.2 (regression in v20.09).
- Improved the **Timeline** scrolling speed and smoothness (regression in v20.09).
- Fixed **Blur: Pad incorrect** after splitting clip.
- Fixed moving the cursor in filter fields may move playhead.
- Fixed **Filters** allowed pasting filters when nothing selected.
- Fixed saving projects to Dropbox on Windows leaves temporary files.
- Fixed saving the current stock layout when switching to a custom layout.
- Fixed progress dialog appears over the convert variable frame rate dialog when dragging to **Timeline**.
- Fixed dropping file with comma in its name to **Timeline**.
- Fixed delete keyframe button in **Keyframes** may remove keyframe for another parameter.
- Fixed convert dialog for variable frame rate never appears if dragged directly to non-empty playlist or timeline.


##### Release 20.09.27

- Fixed file dialogs in various filters not openening on macOS (regression in v20.09.13).
- Fixed setting color alpha (opacity) to 0 in **Open Other > Color** and **Open Other > Text** (regression in v20.09.13).
- Fixed a possible crash when using **Center bias** in the **Crop: Source** filter (regression in v20.09.13).
- Fixed incorrect font size in **Text: Rich** filter in export on Windows when the system **Settings > Display > Scale
  and layout** > 100% (High DPI).
- Fixed **Text: Rich** filter when **Export > Video > Parallel processing** is on.
- Fixed **Text: Rich > Preset > Scroll Up/Down** when the background is not transparent.
- Added collpase & expand buttons to the **Text: Rich** editor's toolbar.
- Added **Overflow** parameter to the **Text: Rich** filter.
- Added **Paste Text Only** to the **Text: Rich** editor's menu.
- Added a **Lower Third** preset to **Text: Rich**.
- Fixed the actual workspace layout may not match the currently selected layout when restarting after a crash.
- Fixed **Filters** and **Keyframes** broken on **Source** clip after changing **Settings > Video Mode**.


##### Release 20.09.13

- Added a **Blur: Pad** video filter and made it available in Slideshow generator as **Pad Blur**.
- Added a **Text: Rich** video filter and made **Text: HTML** hidden since it is deprecated (still loads in old projects).
- Added a workspace layout switcher to the main toolbar for the new stock workspace layouts.
- Added a VUI to the **360: Transform** video filter to adjust parameters by dragging.
- Added **Set Equirectangular Projection...** to the **Jobs** menu for a successful export job. This is used to add metadata to a video file to indicate it is 360॰ video in the equirectangular projection as required by most players and web services.
- Added **Zoom to fit** icons to the **Timeline** and **Keyframes** toolbars.
- Improved the performance of the **Timeline** especially with projects over one hour long.
- Upgraded FFmpeg to version 4.3.1.
- Changed **Size and Position** to **Size, Position & Rotate** and made **Rotate and Scale** hidden (only appears in old projects).
- Replaced **Choppy**, **Crop: Circle**, and **Crop: Rectangle** filters with new versions that do not use HTML through WebVfx, which was deprecated in version 20.06.28.
- Changed the **Rutt-Etra-Izer**, **Swirl**, and **Text: 3D** filters to be hidden since they are deprecated  (still loads in old projects).
- Replaced **View > Layout > Timeline Project** with new, better **Logging**, **Editing**, **FX**, **Color**, **Audio**, and **Player** stock layouts.
- The current layout is saved automatically for each stock layout if selected, and **Restore Default Layout** is different for each stock layout.
- Changed the video track hidden icon on the System theme to be more clear and obvious.
- Show an error dialog on startup if the frei0r plugins are not installed (only affects Linux distribution packages).
- Changed the keyboard shortcut <kbd>0</kbd> to zoom timeline to fit.
- Changed the keyboard shortcut <kbd>Alt</kbd>+<kbd>0</kbd> to zoom playlist to fit.
- Changed the Timeline and Keyframes time ruler interval to 1 second when zoomed in.
- Fixed using a secure connection to get the upgrade URL.
- Fixed a rounding error for **Color Grading** video filter.
- Fixed a crash and incorrect preview scaling with more than one **Rotate and Scale** or **Size and Position** filter.
- Fixed colors when using an alpha/VP8 or alpha/VP9 export preset.
- Fixed video compositing with nothing on video track V1 or V1 hidden.
- Fixed export may fail when using extended (non-Latin-1) characters in path.
- Fixed EDL export.
- Fixed **Export**, **Convert**, or **Reverse** may fail if a temporary file it creates becomes locked on Windows.
- Fixed **Properties > Color** button not opening the color dialog with the current color.
- Fixed the **Crop: Source** video filter when using **Settings > Proxy**.
- Fixed a crash when dragging a MLT XML project file to a non-empty **Timeline**.
- Fixed the font dialog may too big or the preview inside the font dialog too big for **Text: Simple** filter.
- Fixed filters not being applied to the portion of a clip inside a transition after undo of **Cut**, **Lift**, **Remove**, **Ripple Delete**, or move.
- Fixed a crash changing speed of a clip with non-standard non-integer or variable frame rate.
- Fixed some dialogs not opening or staying in the foreground.
- Fixed some crashes in timeline overwrite mode.
- Fixed clicking the filters icon next to **Output** not opening the filters panel.


##### Release 20.07.11

- Fixed noisy sound playback on some Windows systems.
- Fixed UI layout glitches and default/minimum size of timeline too short.
- Fixed Quick Sync Video hardware encoder (h264_qsv or hevc_qsv with Quality-based VBR) not working on Windows on older Intel chips.
- Fixed **Properties > Speed** not working correctly on trimmed clip in **Source** player.
- Fixed **Stabilize** and **Normalize: Two Pass** filters not working on trimmed clip in **Source** player.


##### Release 20.06.28

- Added **Playlist > menu > Add Selected to Slideshow** slideshow generator!
- Added **Settings > Proxy** for videos and images. See the [documentation](https://forum.shotcut.org/t/proxy-editing/18517)
- Added bigsh0t 360&deg; video filters:
  - **360: Equirectangular Mask**
  - **360: Equirectangular to Rectilinear**
  - **360: Hemispherical to Equirectangular**
  - **360: Rectilinear to Equirectangular**
  - **360: Stabilize**
  - **360: Transform**
- Added **Open Other > Blip Flash** generator.
- Added 2 new Export presets: **Slide Deck (H.264)** and **Slide Deck (HEVC)**.
- Added a **Background color** parameter to the **Rotate and Scale** and **Size and Position** video filters.
- Added **Help > Topics** with keyboard shortcut <kbd>F1</kbd>.
- Added the ability to drag-n-drop from external file manager (Explorer, Finder) directly to **Timeline**.
- Added **Merge with next clip** to the timeline clip context menu. This only works for clips that are from the same source and contiguous. This is not clip grouping.
- Added returning to the original file if you **Reverse** a reversed clip.
- Added **Settings > Synchronization...** to calibrate the Shotcut player. This works while something is currently playing to help you calibrate using a known good clip.
- Added millisecond **Format** options to the **Timer** video filter.
- Added **Add a keyframe** button to the **Keyframes** panel for all parameters (previously it was missing on some paramters).
- Added the **Reduce Noise: Wavelet** video filter.
- Added a context menu (right-click) to the **Recent** panel with a **Remove** action.
- Added keyboard shortcut <kbd>;</kbd> to toggle a keyframe at the playhead position.
- Added keyboard shortcut <kbd>F2</kbd> to rename a clip.
- Added keyboard shortcut <kbd>F3</kbd> to search in **Recent**.
- Added keyboard shortcut <kbd>F11</kbd> to toggle fullscreen.
- Added **View > Enter Full Screen** on Windows, but simply maximizes due to issues with popup (dialog) windows not appearing on top.
- Added the UI files for the `bigsh0t` 360 video filters.
- Added progress dialogs in several places where time consuming activities occur that otherwise block the user interface.
- Renamed **Timeline > Master** to **Output**.
- Stop selecting **Output** (formerly Master) by default when opening a project.
- Removed **Settings > External Monitor > DVEO VidPort**.
- Export now sets color primaries automatically based on the Video Mode colorspace.
- Use Qt's internal image orientation detection instead of libexif.
- Upgraded Mesa software OpenGL in Windows build to version 19.2.7.
- Upgraded SDL audio output library in Windows build to version 2.0.12.
- The keyboard shortcut to open a playlist item is changed to <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (<kbd>Cmd</kbd>+<kbd>Return</kbd> on macOS).
- Changed the keyboard shortcut to open the web page of keyboard shorcuts to <kbd>?</kbd>.
- Change the timeline toolbar icon for **Timeline > Split** to something more clear and obvious.
- **Timeline** no longer shows thumbnails for video when the track height is at its lowest.
- The Timeline toolbar button to toggle **Scrub while dragging** is now saved to settings.
- **Export > Video > Deinterlacer** is no longer disabled when **Scan mode** is **Interlaced** (Anything that causes a change to the vertical resolution of an interlaced source is automatically deinterlaced.)
- Deprecated the following video filters. These will be removed in the next version.
  - Rutt-Etra-Izer
  - Swirl
  - Text: 3D
  - Text: HTML
- Added a **Detect** button to the **Use hardware encoder > Configure** dialog.
- Memory is now released when you choose **File > New**, **File > Close**, or **Export File**. (Previously it would keep most of it for reuse.)
- Improved constant quality rate control mode for Intel Quick Sync Video.
- Changed **Playlist > Sort > By Name** to be case insensitive.
- Improved the performance of image sequences.
- Significantly improved the performance of the automatic image padding.
- Show a project's current **Video Mode** as selected in the **Settings** menu when opened.
- Added a timecode tooltip to the mouse pointer when over the player, **Timeline,** or **Keyframes** scrub bars.
- Filter VUIs (video user interfaces) are now disabled when the filter is disabled.
- Fixed **Open Other > Audio/Video Device** on Windows with special characters in name.
- Fixed changing **Properties > Audio > Track** sometimes does not work.
- Improved A/V synchronization on speed-changed clips with **Pitch Compensation** or using the **Pitch** audio filter.
- Fixed changing **Crop: Source** video filter, **Right** parameter on an image with odd width skews the image.
- Fixed audio pops and clicks in a few places.
- Improve A/V synchronization when resampling audio rate is required.
- Fixed incorrect color when using **Export > Codec > libx264rgb**.
- Fixed the clip name after using **Properties > Convert** or **Reverse**.
- Fixed showing the waveform after undo **Detach Audio**.
- Fixed **Audio Tone** in Timeline loses focus after change in **Properties**.
- Fixed moving clip sometimes does not adjust background duration.
- Fixed **Filters**, **Timeline**, and **Keyframes** responding to touch screen.
- Fixed a crash when you use **Timeline > Append**, **Insert**, or **Overwrite** after choosing **File > Close** or **File > New**.
- Fixed <kbd>Backspace</kbd> or <kbd>Delete</kbd> key in input fields sometimes delete timeline clip.
- Fixed **Timeline > Select All** incorrectly includes clips on locked tracks.
- Fixed track filter out points are changed after reopening a project.
- Fixed the default timeline height is too short.
- Fixed **Properties > Convert** ruins filters on clips that were never selected.
- Fixed a crash when using **Crop: Source > Center bias**.
- Fixed seeking to the out point in the **Source** player when you click to seek after the out point.
- Fixed setting in > out or out < in in the **Source** player not reliably updating a playlist clip.
- Fixed saving projects with relative paths.
- Fixed keyframes for the **Level** parameter of the **Opacity** filter.
- Fixed drop-framed timecode for 59.94 fps to follow a strict cadence.
- Fixed the **Reduce Noise: Smart Blur** and **Reduce Noise: Wavelet** video filters to not overwrite the alpha channel.
- Fixed the image quality (interpolation) of a **Size and Position** or **Rotate and Scale** filter inside of a transition.
- Fixed loading image sequences when the sequence number in the file name does not start with 1.
- Fixed a crash when using JACK audio and **File > Open Other**.
- Fixed **Export > Video** not updated when open clip-only project.


##### Release 20.04.12

- Added **Properties > Speed > Pitch Compensation** for automatic pitch correction for speed changes > 0.1x.
- Added a **Replace** command to **Timeline** clip menu including blank regions with shortcut <kbd>R</kbd>.
- **Properties > Reverse** now automatically replaces a selected clip on the timeline (or in **Source** player if using that).
- Added 15 second handles when using **Properties > Reverse** on a timeline clip. Handles are extra footage before the in point or after the out point. This makes it easier to adjust edits or add transitions around reversed clips.
- Added **Properties > Duration > Timeline** to show (not editable) the duration of a timeline clip.
- Added a **Corner Pin** video filter (thanks to @sauron in the forum for the initial effort).
- Added a **Properties > Convert** button to make **Convert to Edit-friendly** in the menu more convenient (kept in the menu for now because a number of support tips reference it).
- **Properties > Convert** now automatically replaces respective clips in **Source** and **Timeline** and adds its clip to the **Playlist**.
- Fixed `=` in **Text: Simple** filter ignores all text before the sign (broken in v20.02).
- Fixed a crash when using some video filters with **Preview Scaling** and multiple video tracks:
  - **Choppy**
  - **Rutt-Etra-Izer**
  - **Swirl**
  - **Text: 3D**
  - **Text: HTML**
- Fixed Offset X and Y parameters of **Rotate and Scale** filter with **Preview Scaling**.
- Fixed video artifacts when using a video for a custom transition and **Export > Parallel processing**.
- Fixed video artifacts when using the **Distort** video filter and **Export > Parallel processing**.
- Fixed video artifacts when using the **Rotate and Scale** or **Size and Position** filters, multiple video tracks, and **Export > Parallel processing**.
- Fixed missing code-signing entitlements for macOS that caused crashes when using the following (broken in v20.02):
  - **Open Other > Audio/Video Device**
  - HTML-based video filters:
    - **Choppy**
    - **Crop: Circle**
    - **Crop: Rectangle**
    - **Rutt-Etra-Izer**
    - **Swirl**
    - **Text: 3D**
    - **Text: HTML**
- Fixed floating or docking some panels may crash on some Linux systems:
  - **Filters**
  - **Keyframes**
  - **Timeline**
- Fixed changing the name of a track in **Timeline** when leaving the field without pressing <kbd>Enter</kbd>.
- Fixed **File > Export Frame** exports uses **Preview Scaling** instead of project resolution.
- Fixed switching between **Cut** and **Dissolve** in transition properties.
- Fixed project not modified when changing transition properties.
- Fixed pressing <kbd>Enter</kbd> in **Filters** search may open a playlist item.
- Fixed a regression in **JACK** transport control (broken in v19.12).
- Fixed a missing **Timeline** track **Lock** button animation when lock prevents something.
- Fixed clips can be moved to **locked** timeline tracks (broken in v19.12).
- Fixed treating paths with Windows drive letters as relative on macOS and Linux.
- Fixed automatically relinking filters with HTML files (when app location changes or moving projects).
- Fixed **Undo** followed by **Redo** after a **Lift** or **Remove** on a transition saves the transition as `INVALID`.
- Fixed some filters than use external files broken when using network (UNC) paths on Windows:
  - **LUT (3D)**
  - **Mask: From File**
  - **Text: HTML**
- Fixed **Filters > Copy** & **Paste** does not keep filter in and out points.
- Fixed opening with a file from the command line on Linux snap or portable.
- Fixed **Export** can overwrite a source when run from command line.
- Fixed **Keyframes** previous/next buttons not using the parameter track to which they belong but rather the current track.
- Fixed opening a playlist clip or a new clip breaks filters on **Timeline > Master** if it is selected.
- Changed **Export > Video > Parallel processing** to default to *OFF* but also now it save the state between export jobs and app session.
- Added support for FFmpeg `sample_fmt` option to **Export > Other**.
- Automatically disable parallel processing on add-on bigsh0t (360) video filters.
- Stop adding `title="Anonymous Submission"` to MLT XML.
- Increased the priority of background jobs a little on macOS and Linux (still less than normal).
- Added `448k` to **Export > Audio > Bitrate**.
- Added automatically scroll the **Timeline** when you double-clock a clip to select-and-seek.
- Updated the mouse wheel behavior in **Keyframes** to match the changes to **Timeline** in version 20.02.
- Added an option to place an icon on the Desktop to the Windows installer.
- Add a cursor to the **Audio Waveform** scope.
- Removed **Export > Stream** as it is not supportable in its current state.
- Changed shortcuts <kbd>C</kbd> and <kbd>Ctrl</kbd>+<kbd>C</kbd> to work with the clip under the playhead of the current track if no clip is selected. This makes it behave similar to other editing shortcuts.
- Changed the keyboard modifier for **skim** to <kbd>Shift</kbd>+<kbd>Alt</kbd>. This prevents <kbd>Shift</kbd> (previous modifier) when selecting multiple clips from changing playhead position. 
  NOTE: On macOS, in order to scroll Timeline or Keyframes horizontally with a mouse wheel (not Magic Mouse or track pad), you must also use *one* of the following:
  - <kbd>Control</kbd>
  - <kbd>Control</kbd>+<kbd>Option</kbd>
  - <kbd>Control</kbd>+<kbd>Command</kbd>
  - <kbd>Option</kbd>+<kbd>Command</kbd>
- Changed the **Matrix** parameter of the **Dither** video filter to be a drop-down combo box without keyframes support.
- Changed **Alpha operation > Write On Clear** to **Overwrite** on some video filters to make them more clear:
  - **Mask: Simple Shape**
  - **Chroma Key: Advanced**


##### Release 20.02.17

- Added **Settings > Preview Scaling**!  
- Added **Export > Advanced > Video >Use preview scaling**.  
- Added **Views > Scopes > Video Vector**.  
- Added **Filters > Audio > Pitch**.  
- Added the ability to rename clips in **Properties**.
- Added support for using a video clip in Transition **Properties > Video**.   
- Added a few more export presets:
  * audio/ALAC
  * audio/FLAC
  * intermediate/DNxHR HQ
  * intermediate/ProRes HQ
  * intermediate/ProRes was changed to ProRes 422
- Added **Arabic** translation.
- Fixed dropping multiple files to **Playlist** in a new project (broken in v19.12.31).
- Fixed some broken keyboard shortcuts in the Turkish translation.
- Fixed **Properties > Speed** not working after a project file repair.
- Fixed clip selection after **Insert Track** or **Remove Track**.
- Fixed **Playlist > Add Selected to Timeline** creates corrupt clips (broken in v19.12.31).
- Fixed **Settings > Display Method > Software (Mesa)** on Windows (broken in v19.12.31).
- Fixed creating a **Project folder** with leading or trailing spaces.
- Fixed saving the `length` property in MLT XML as a time value independent of
  frame rate.
- Fixed starting **Text: Simple** video filter with "@" shows "0".
- Fixed seeking previous &amp; next on the first track in **Keyframes** where
  you trim a filter or use simple keyframes.
- Fixed an unexpected transition is created when moving a clip rightward
  adjacent to the next clip in **Timeline** (regression in v19.12.16).
- Fixed drag-n-drop from **Source** player to **Timeline** left player in an
  inconsistent state (broken in v19.09.14).
- Fixed an inconsistent colorspace conversion when accessing a cached image.
- Fixed **Playlist > Copy** followed by a change in **Properties** incorrectly
  changes the playlist item.
- Fixed clicking on the rectangle control may change its size.
- Fixed using the **LUT (3D)** filter with file with extended characters in its
  file path on Windows.
- Fixed a crash when using a transition on every track at the same time.
- Improved the reliability of **Timeline > Select None**.
- Changed **Timeline > Master > Properties > Frame rate** to show 6 decimal digits.
- Reduced the latency of scrubbing (regression in v19.12.31).
- Changed the video-overlay rectangle control used in some filters to allow
  changing the position by dragging from anywhere inside the rectangle.  
- Changed the **Filters** panel on macOS to prevent floating to avoid a
  frequently reported problem of the **Filters** window appearing blank/black.
- Changed **Timeline > clip context menu > Detach Audio** to not seek afterwards.
- Improved mouse wheel and trackpad behavior in **Timeline**.  
- Upgraded MLT to version 6.20.0 and WebVfx to version 1.2.0.


##### Release 19.12.31

- Fixed a **Timeline** clip corruption bug in version 19.12.16 when moving clips
  with **Ripple** on.
- Added support for moving multiple clips on the **Timeline**.
- Added two new video scopes were added: **RGB Parade** and **RGB Waveform**.
- Allow reducing track height to very short in **Timeline** and **Keyframes**.
- Fixed crackly audio playback for some Windows users.
- Fixed loading project files made before v19.06 when not using a period for a
  decimal point.
- Fixed **Lift** and **Ripple Delete** on **Timeline** not reliably removing all
  selected.
- Fixed checking **Properties > Image sequence** may not update duration in
  **Playlist**.
- Fixed the intra-VLC and non-linear-quantizer options in the XDCAM-422 and D10
  export presets.


##### Release 19.12.16

- Fixed **Scale** animation not linear in the **Rotate & Scale** filter.
- Fixed audio crackles in first couple of seconds of export.
- Fixed <kbd>Ctrl</kbd>+<kbd>A</kbd> selects all in **Playlist** as well as Timeline.
- Fixed the size and position of the **Text: HTML** editor with **Settings >
  External Monitor** enabled.
- Fixed drag-drop from **Playlist** to **Timeline** sometimes reorders the
  **Playlist**.
- Fixed **Color Grading** and **Contrast** creates a weird color after deleting
  a keyframe.
- Fixed updating `x265-params` in **Export > Other** after making changes in **Codec**.
- Fixed opening another project in the same session breaks master track filters.
- Fixed saving a preset with a slash in the name.
- Fixed export fails if the system temporary directory is not writable.
- Fixed removing some temporary files on exit.
- Fixed the timeline **Ripple All Tracks** option was not saved with history
  (before the current setting used during undo and redo).
- Fixed an image sequence in **Export > From > Playlist** may show "INVALID" on export.
- Fixed changing **Properties** (for example, image duration) not updating the **Playlist**.
- Fixed snapping to horizontal grid lines.
- Fixed **Timeline** clip context menu > **Properties** broken in v19.09.
- Fixed bad transitions created by trimming beyond media beginning or end.
- Fixed audio does not follow default device changes on Windows.
- Fixed changing the speed of the clip on the right side of a transition creates
  INVALID transition.
- Fixed track filters were not restored when undoing a **Remove Track**.
- Changed the minimum of the **Gain/Volume** filter to -70 dB.
- Removed **Settings > Deinterlacer > YADIF**. (This was causing crashes, and
  this option only affects preview, not export.)
- Added support for adding a transition in **Timeline** when dragging over a gap.
- Added support for free-form movement of clips on the **Timeline** (no more
  snapping back).
- Change the **Timeline** and **Keyframes** toolbars respond to **View > Small** Icons.
- Upgraded Mesa software OpenGL in Windows build to version 19.2.7.
- Upgraded SDL audio output library in Windows build to version 2.0.10.
- Added a limit to undo **History** configurable to new configuration key
  `undoLimit` that defaults to 1000.
- Added 3 new filters:
  * **Gradient** video filter
  *  **Scan Lines** video filter
  * **Noise Gate** audio filter
- Added a new color gradient control to the following filters:
  * **Audio Light Visualization**
  * **Audio Spectrum Visualization**
  * **Audio Waveform Visualization**
- Added **View > Scopes >  Video Zoom**.
- Added **Reverse** checkbox to the **Mask: From File** filter.
- Added **Remove Finished** to the **Jobs** menu.
- Added **Playlist > Update Thumbnails**.
- Added **Update Thumbnails** to the timeline video clip menu.
- Added keyboard shortcut <kbd>Shift</kbd>+<kbd>Escape</kbd> to give the player
  focus (take focus away from certain widgets).
- Added a **Two Column Scroll** template to the **Text: HTML** filter.


##### Release 19.10.20

- Fixed **Open Other > Audio/Video Device** capture (broken in v19.09).
- Fixed a crash in **Timeline** when you **Lift** the first clip in a track 
  (broken in v19.09).
- Fixed automatic configuration of VA-API for **Export > Use hardware encoder**
  (broken in v19.09).
- Fixed **Blend Mode** filter affects other clips on the track (if the track
    **Properties > Blend mode** was not changed).
- Fixed adding keyframes to some video filters into area after extending the clip:
  - **Text: Simple**
  - **Rotate and Scale**
  - **Size and Position**
- Fixed color picker not automatically changing alpha from 0 to 255.
- Fixed a restarted job reports stopped when completed successfully.
- Fixed HTML file names with extended UTF-8 chars on Linux.
- Fixed **Timeline** audio waveform after changing **Properties > Audio > Track**.
- Fixed a crash opening a project that includes itself by making a self-repair
  on open.
- Fixed saving the length property in MLT XML as a time value independent of
  frame rate.
- Fixed changing **Video Mode** of an opened project breaks timing of edits.
- Fixed **Timeline** ruler not synchronized with the tracks' scroll after
  resizing panel or window.
- Fixed **Timeline > Undo** after splitting the second clip of a transition
  corrupts the timeline.
- Use the main video stream by default when there is an embedded
  album/poster/thumbnail.
- Minor improvements to the **ProRes Export** preset.
- Improved performance of some video filters when using parallel processing:
  - **Blur: Exponential, Gaussian, Low Pass**
  - **Glow**
  - **Mask: Simple Shape**
  - **Reduce Noise: HQDN3D**
  - **Sharpen**
- Improved performance of track blending in areas with transparency.
- Reduced the free disk space check to 25 GB.
- Opening Matroska files containing HuffYUV or Ut Video is much faster.
- **Timeline** waveforms are dimmed instead of hidden when track is muted.
- Changed RGB video clip **Properties > Color range** to **Full** and disabled.
- Changed **Properties > Reverse** and **Convert to Edit-friendly** best option
  (MKV) to use PCM for audio.
- Changed the **Export > lossless > Ut Video** preset to the **matroska** format.
- The signed macOS app is now notarized.
- Added new video **Filters**:
  - **Choppy**
  - **Nervous** (a random selection of previous and current frame)
  - **No Sync**
  - **Trails**
  - **Vertigo**
- Added **Keyframes** toolbar buttons and keyboard shortcuts for filter-trimming
  and simple keyframes:
  * [ = set the filter start
  * ] = set the filter end
  * { = set the first simple keyframe
  * } = set the second simple keyframe
  * Alt+[ = seek previous simple keyframe
  * Alt+] = seek next simple keyframe
- Added keyboard shortcuts for **Filters**:
  * F = open the Filters panel and filter chooser. (At this point search has
focus and the first filter is selected...)
  * Up/Down - select the previous or next filter in the list
  * Enter = add the selected filter to the list
  * Shift+F = remove the selected filter from the list
- Added Thai translation.


##### Release 19.09.14

- Added the option **Play After Open** (default on) to the playlist menu to control above behavior.
- Added multi-select to **Playlist** as welll as **Select All** (Ctrl+Shift+A) and **Select None** (Ctrl+Shift+D) to its menu.
- Added multi-select to **Timeline**, which is currently limited to the remove/delete and lift operations.
- Added **Select All** (Ctrl+A) and **Select None** (Ctrl+D) to the **Timeline** menu.
- Added keyboard shortcuts for some existing **Timeline** menu actions:
  - **Insert Track** (Ctrl+Alt+I)
  - **Remove Track** (Ctrl+Alt+U)
  - **Copy Timeline to Source** (Ctrl+Alt+C)
- Added new video filters:
  - **Dither**
  - **Halftone**
  - **Posterize**
  - **Threshold**
  - **Elastic Scale** (non-linear horizontal scaling)
  - **Blend Mode** (overrides the track **Properties > Blend mode** for that clip)
- Added a **Galician** translation.
- Fixed a crash in some audio filters when using 1 or 6 channels.
- Fixed showing language **English (Great Britain)** when **English (United States)** is chosen.
- Fixed a crash bug in v19.06 when changing image sequence **Repeat** in **Properties**.
- Fixed a bug in v19.08 where dropping a video into **Playlist** on a new project does not update the **Automatic Video Mode**.
- Fixed a bug in v19.08 in the on-screen rectangle control (as used in **Text: Simple** and **Size and Position** filters among a few others).
- Fixed changing speed of a clip with a colon in the file name.
- Fixed reading MLT XML with a colon in the file name of a relative path.
- Fixed the playlist menu button disabled after removing all clips.
- Fixed reloading **Fade In Video** or **Fade Out Video** using opacity may alter the colors.
- Fixed **Convert to Edit-friendly** failing on GoPro videos.
- Fixed filters during a transition are truncated after a **Split** on the timeline.
- Fixed a bug in v19.08 where **Keyframes** becomes broken after trimming on the timeline.
- Reduced the size of the installation by 255 MiB
- Upgraded FFmpeg to v4.2.
- Increased export process priority on Windows from Low (idle) to Below Normal.
- Changed default HEVC quality to 45% so the x265 crf matches its default of 28.
- Added the clip's name to the end of a clip in **Timeline** if its block is wide enough.
- No longer seek after dropping a clip from the player to the **Timeline**.


##### Release 19.08.16

- Changed **Playlist > Open As Clip** to simply **Open**. This action now opens the playlist item directly in the **Source** player, and all changes made in **Source** (trim in/out), **Properties**, **Filters**, and **Keyframes** apply to the playlist item immediately without an explicit update.
- Added **Playlist > Copy** that opens a copy of the playlist item in **Source** just like the old behavior. This is useful if you want to trim out another shot from the same source clip or create a different sub-clip with different filtering.
- Changed double-click on a playlist item to **Open** the clip instead of **Copy** it.
- Added keyboard shortcut `Shift+C` to **Copy** a playlist item.
- Now, when you drag a clip from **Playlist** to **Timeline** the timeline shows an appropriately-size box on a track.
- Fixed a performance regression (since v19.06) in the following filters: **Chroma Hold, Flip, LUT 3D, Mirror, Noise: Fast, Reduce Noise: Smart Blur**.
- Fixed reloading the filter UI for **Rutt-Etra-Izer**, **Text: 3D**, and **Text: HTML** resets the filter trimming in **Keyframes**.
- Added support for keyframes to the **Lens Correction** and **Mosaic** video filters.
- Fixed **Swirl** when maximum = 0%
- Changed the minimum values for **Mosaic** to 0%.
- Removed the scrolling animation from the **Blank Web Animations** HTML template.
- Fixed pasting filters changes the trim and keyframes of the existing filters.
- Fixed **Crop: Circle** and **Crop: Rectangle** not clearing the canvas resulting in trails in some situations.
- Fixed color incorrect when using the **LUT 3D** filter with some other filters following it.
- Fixed reliability of the **Stabilize** video filter to write its results (.stab) file.
- Fixed showing vidstab.trf as a missing file.
- Fixed updating **Stabilize** and **Normalize: Two Pass** results to clips copied between **Source**, **Playlist**, and **Timeline**.
- Added the ability for the **Stabilize** and **Normalize: Two Pass** filters' analysis jobs to update pending export jobs.
- Added the option to run pending **Stabilize** and **Normalize: Two Pass** filters' analysis jobs on export. This only works for **Stabilize** if you are using the project folder feature. Or, if not using the project folder feature, you must click **Analyze** to assign a results file name, but you can stop the analysis job.
- Added support for interlace output to **Properties > Reverse** and **Convert to Edit-friendly** including overrides for **Scan mode** and field order.
- Improved detection of interlaced video in some files such as Ut Video in Matroska.
- Added **Comments** to image properties along with a menu button with: Copy Full File Path, Show in Folder, and Set Creation Time...
- Add resolution and refresh rates to the screens in **Settings > External Monitor** to make them easier to differentiate.
- Fixed switching between different external screens on the same GPU.
- Fixed external screen not showing on correct screen in some arrangements.
- Changed the default video quality to 55% for the **Default** and **YouTube** presets. This aligns with the x264 default crf of 23 and produces a smaller file that most people desire for upload without significant quality loss.
- Added text after **Export > Advanced > Codec > Quality** to show the generated codec-specific quality level (e.g. crf for x264).
- Fixed **Stream** broken by check for writable file.
- Fixed double-click in **Recent Projects** loading twice.
- Fixed disabling meters in the **Audio Loudness** scope not shrinking space.
- Added version metadata to the AppImage for Linux.
- Added md5sums.txt and sha256sums.txt to the GitHub releases page.
- Added saving **Timeline** track height to configuration, not only a project file.
- Fixed trimming an unselected clip in **Timeline** does not correctly adjust its filters.
- Changed **Settings > Interpolation > Nearest Neighbor** to no longer relax seek accuracy. Instead, seek accuracy is now relaxed only during trick playback (reverse, rewind, fast forward).
- Added a **Korean** translation.


##### Release 19.07.15

- Fixed **Timer** video filter shows incorrect decimals.
- Fixed clips that become INVALID were saved as uneditable text clips.
- Fixed a crash in **Wave** video filter.
- Fixed a crash when changing clip **Speed** to something very low.
- Fixed long **Projects folder** path in the **New Project** view.
- Fixed the temporary backup file is empty when saving MLT XML.
- Fixed saving existing project on Dropbox gives an error.
- Fixed advanced keyframes removed when trimming.
- Fixed loading the frame rate from an export preset.
- Fixed multiple **Stabilize** video filter analysis jobs may try to write to
the same .stab file.
- Fixed reported timecode of failed **Export** job if (**Frames/sec** is not 25
or not changed in **Advanced > Video**).
- Fixed incorrect audio waveform after **Undo** after insert/paste into **Timeline**.
- Fixed filters added to a clip with a transition are not the correct length
and not active during the transition.
- Fixed **Blur: Gaussian** filter makes bottom 3 rows of the image with black
or garbage.
- Fixed help text in the **New Project** view may be truncated without scroll bar.
- Fixed **Crop: Circle** > Radius = 100% not completely extended.
- Fixed loading image sequences that do not put leading zeroes into their
number (bug introduced in v19.06).
- Changed **Average Bitrate** for libopus audio codec to set vbr to constrained.
- Changed **Crop: Source** to use the source clip's resolution as maximum for
parameters.
- Changed the **Convert to Edit-friendly** and **Reverse** "better" option from
ProRes to DNxHR, which is faster.
- Changed the **Convert to Edit-friendly** and **Reverse** "best" option from
FFV1 to Ut Video, which is faster.
- Improved full range handling in **Convert to Edit-friendly** and **Reverse**
by respecting an override in **Properties > Color Range**.
- Improved detection of full range color in video clips.
- Changed ripple move on the Timeline to push the clips when the drop zone is a gap.
- Added " - Converted" into the suggested file name when using **Properties >
Convert to Edit-friendly...**
- Added a status message at the start of opening a project.
- Added a drop-down of common frame rates to **Export** and **Custom Video Mode**.
- Added a dialog to ask if the standard, fractional frame rate was intended in
**Export** and **Custom Video Mode**.
- Added a **HD 1080p 50 fps** video mode.


##### Release 19.06.16

- Fixed deleting the project file if there was a save error.
- Fixed reliability of **Settings > Display Method > Software** on Windows.
- Fixed **Crop: Source** filter not working with **Color** clip.
- Fixed using filters on **Color Bars** and other generator clips.
- Fixed audio filters (**Compressor, Expander, Limiter, Notch, Reverb**) broken\
on comma for decimal.
- Fixed alpha video opaque on gaps in **Timeline**.
- Fixed **Convert/Reverse** if there no audio track.
- Fixed **Measure Video Quality** broken.
- Fixed saving the app directory in XML. 
- Fixed **Alpha: Adjust > Invert** checkbox on reload.
- Fixed color eye-dropper (picker) error.
- Fixed audio **Pan** filter channel resets on reload.
- Fixed a crash using **Mirror** filter before **Rotate and Scale** or **Size
and Position**.
- Fixed poor reverse audio quality for mp4 and mkv options.
- Fixed Simple Scroll HTML template may not scroll Up or Left completely.
- Changed project file to use period for decimal point regardless of OS locale
(region/language setting).
- Changed **Export > From** to show **Source** instead of base file name.
- Improved Export Job progress and estimated time remaining.
- Changed **Timeline** ruler interval to 5 seconds.
- Renamed video filter **Circular Frame** to **Crop: Circle**.
- Renamed video filter **Crop** to **Crop: Source**.
- Renamed video filter **Text** to **Text: Simple**.
- Renamed video filter **3D Text** to **Text: 3D**.
- Renamed video filter **Overlay HTML** to **Text: HTML**.
- Renamed video filter **Blur** to **Blur: Box**.
- Renamed **Reduce Noise** video filter to **Reduce Noise: Smart Blur**.
- Changed the default for **Settings > Display Method** back to **DirectX** on
Windows.
- Changed maximum duration of **Color**, **Text**, and **Color Bars** clips to
4 hours.
- Added **Jobs** to the main toolbar.
- Reordered panel buttons on main toolbar to match **View** menu.
- Increased maximum value of Timer filter's Start Delay, Duration, and Offset
to 24 hours.
- Added **View > Show Text Under Icons** to menu.
- Added **View > Show Small Icons** to menu.
- Added support for alpha channel to **Crop: Circle**.
- Added **Crop: Rectangle** video filter with support for alpha channel.
- Added **Add Keyframe** button in Keyframes (only on parameters that show a
  curve UI).
- Added **Ripple All** button to **Timeline** toolbar.
- Added keyboard shortcuts Ctrl+0-9 to toggle the panels.
- Added Alt 0/+/- shortcuts to adjust the zoom in **Keyframes**.
- Added a vertical **Flip** video filter.
- Added **Blur: Exponential** video filter (fast and bleeds to edges).
- Added **Blur: Low Pass** video filter (fast and bleeds to edges).
- Added **Blur: Gaussian** video filter (slow and bleeds to edges).
- Added **Reduce Noise: HQDN3D** video filter.
- Added **Noise: Fast** video filter.
- Added **Noise: Keyframes** video filter.
- Added Swedish translation.


##### Release 19.04.30

- Fixed reading some AVCHD files after a camcorder splits.
- Cosmetic fixes for timecode spinner and toolbar icons on high DPI systems.
- Bundled libnsl for Linux to fix Fedora.
- Fixed **Video Waveform** scope graticule not showing on non-dark theme.
- Fixed incorrect compositing z-order after **Insert Track**.
- Fixed cosmetic problem with main toolbar using **System** theme on macOS.
- Fixed current track changes after inserting or overwriting a clip in Timeline.
- Fixed absolute paths can be introduced on Windows when using a project folder.
- Fixed sometimes showing forward slashes for file paths on Windows.
- Fixed first clip does not start at beginning when drop to Timeline after
  **File > New** or **File > Close**.
- Fixed **Properties > Convert** and **Reverse** on files with album art or
  embedded thumbnail.
- Fixed a possible crash on **File > New** or **File > Close**.
- Fixed filters on clips not extended into transition when adding a transition
  by trimming or resizing a transition.
- Fixed **Open Other  > ALSA Audio** on toolbar on Linux.
- Fixed changing **Properties > Speed** or **Color Range** on a timeline clip
  may crash.
- Fixed timeline correction when drag clip to another track and then back to
  original.
- Fixed reloading the **Mask: From File** filter resets **Threshold** keyframes.
- Fixed the **Mask: Simple Shape** filter does not work when **Width** or
  **Height** is 0%.
- Increased parameter ranges in the **Rotate and Scale** filter.
- Added verification that saved MLT XML is well-formed XML before (over-)writing
  the target file.
- Changed default **Outline Thickness** (3) and alpha of **Text** filter to
  match **Open Other > Text** and prevent a problem where the text outline is
  aliased when the clip is transparent.
- Changed the version check to use HTTPS for increased privacy.
- Added DLL redirection files for other .exe programs on Windows to prioritize
  Shotcut-provided DLLs over those in system or $path.
- Removed the buggy **Merge with next clip** from Timeline clip context menu.
- Added (creation) **Date** column to Playlist **Details** view.
- Added **Set File Date...** to the Playlist menu and item context menu.
- Added **Sort By Name** and **Sort By Date** to the Playlist menu.  
  These are single-shot sorting commands. The playlist is still fixed-ordering.
  The new options do not automatically sort new playlist entries.
- Added new video filters:
  * **Grid**
  * **Audio Dance Visualization**
  * **Audio Light Visualization**
  * **RGB Shift**
  * **Glitch**
  * **Distort**
- Added **Zoom 300%, 400%, 500%, 750%, and 1000%** to the player's zoom menu.
- Added **Settings > Drawing Method > Software (Mesa)** on Windows.  
  This is not good for performance, but it improves compatibility. Use only as
  a last resort.
- Added **Display Method > OpenGL** or **Software (Mesa)** on Linux.
- Added **Norwegian Nynorsk** translation.

##### Release 19.02.28

- Fixed opening image sequence on Windows with extended/special characters in
  file path/name.
- Fixed crash on some video clips, particularly those with Google Pixel 3 and
  likely others.
- Fixed field order with interlaced export.
- Fixed an image artifact when using keyframes with the **Mask: Simple Shape**
  filter.
- Fixed image and alpha channel integrity with transitions on clips with a
  non-opaque alpha channel.
- Fixed a crash when changing clip **Properties > Audio > Track**.
- Fixed **Properties > Video > Color Range** inaccurate after changing it.
- Fixed **Shake One Second** presets in regions that use comma for decimal point.
- Fixed moving a **Playlist** item to the end.
- Fixed more dialogs to be modal to prevent them from going behind the main
  window.
- Fixed **Overlay HTML** webvfx templates when using a project folder.
- Fixed volume slider appears before main window at launch on macOS.
- Fixed more dialogs to use sheet style on macOS.
- Fixed a few small memory leaks in MLT.
- Upgraded Qt to version 5.9.7.
- Changed **Width** and **Height** minimum to 0 for **Blur** filter.
- Set the **Save as type** list on all file save dialogs (convert, reverse,
  text, EDL, image).
- Improved the quality of Export Frame > WebP.
- Show "Not Seekable" instead of "Live" when opening a non-seeable clip (or device or stream).
- Show a status message when trying to drag from Project player.
- Prefer loading DLLs in Shotcut's install folder over those in System32.
- Default the out point of the **Color**, **Count**, and **Text** generator clips to the same as image duration (default 4 seconds).
- Added **Offset** to **Timer** video filter.
- Added **Vertical HD 30 fps** and **Vertical HD 60 fps** video modes.
- Added support for HTTPS.
- Added [`--QT_SCALE_FACTOR` and `--QT_SCREEN_SCALE_FACTORS`](https://doc.qt.io/qt-5/highdpi.html#high-dpi-support-in-qt) command line options.
- Added **English (Great Britain)** translation.

##### Release 19.01.27

- Fixed **Text** animation/keyframes not working in v19.01.24.
- Fixed distortion when a **Mirror** filter is placed before a **Size and
  Position** or **Rotate and Scale** filter.
- Fixed **Levels** filter in locales with comma for decimal point.

##### Release 19.01.24

- Fixed launch crash on Linux by excluding libdrm libraries.
- Fixed audio level changed by the **Mask : From File** filter.
- Fixed **Text** filter may have glitches with **Export > Parallel processing**
  (regression in v18.12.x).
- Fixed missing file detected when **Stabilize** filter added without clicking
  **Analyze**.
- Fixed external monitoring on Linux screen.
- Fixed unable to detect hardware encoders with spaces in the installation
  folder path.
- Fixed changing **Speed** can move a clip.
- Fixed changing **Speed** has no effect when the system region and language
  decimal separators are different.
- Fixed filter duration not adjusted when trimming a transition.
- Fixed ripple trim when clip has a transition.
- Fixed removing a transition by trimming adds some frames.
- Fixed aspect ratio for **File > Export Frame** with non-square pixel video.
- Fixed handling relative paths to external resources in the **Overlay HTML**
  editor.
- Fixed a crash opening a project after removing the bottom video track.
- Fixed the lossless/H.264 preset to be completely lossless.
- Fixed dropping a file from a file manager whose name has special/extended
  characters (e.g. `[`, `]`).
- Fixed the state of the enabled checkbox for the **Overlay HTML** filter and
  when using a color picker.
- Fixed distortion after changing the **Keyframe Type** of a keyframe for the
  **Scale** parameter in the **Rotate and Scale** filter.
- Fixed right-clicking a keyframe to open context menu may change its position.
- Upgraded FFmpeg to v4.1
- Improved **Color Grading** filter by letting all parameters go from -100% to 100%.
- Added an automatic retry without **Parallel processing** when **Export** job fails.
- Set the **Save as type** list on the **Export File** dialog on Windows when a
  preset defines a filename extension.
- Added **Center Playhead** option to the **Timeline** and **Keyframes** menus.
- Added **Slow Zoom ___, Hold ___** presets to the **Size and Position** filter.
- Added a **Chroma Hold** video filter.
- Added a **Swirl (HTML)** video filter.
- Added a simple **Templates** framework to the **Overlay HTML** filter (see
  path `Shotcut\share\shotcut\qml\filters\webvfx\templates` to add your own)
  with the following templates:
  - Blank HTML
  - Blue Middle Bar
  - Creative Commons Music
  - Blank with Web Animations
  - Simple Scroll

##### Release 18.12.23

- Fixed color accuracy of **lossless/Ut Video** preset and use yuv422p format.
- Fixed number of digits for seconds in the **Timer** video filter when using **Format > MM:SS.SS**.
- Fixed compositing completely transparent areas of alpha channel darkens output.
- Fixed some generators (**Color Bars, Ising, Lissajous, Plasma**) not working correctly in **Timeline**.
- Fixed **Settings > External Monitor > DeckLink/Intensity** can stall when **Settings > Realtime** is enabled.
- Fixed making project folder if a parent folder does not exist.
- Fixed **New Project > Start** does not save a .mlt file until you open media and save.
- Fixed launch on some Linux (e.g. gentoo) by including libselinux .
- Fixed crash when undo **Playlist > Remove All**.
- Fixed auto-saved file not removed when save and exit with no changes.
- Fixed the color accuracy of the **Color** generator.
- Fixed numeric locale bug in the **Audio Spectrum Visualization** and **Audio Waveform Visualization** filters.
- Fixed clip reloaded when leaving **Properties > Speed** with no change.
- Fixed **Settings > External Monitor** on Windows screen.
- Fixed launch crash on Linux with (Csound) csladspa < 6.11.1 installed.
- Improved color accuracy of internal RGB-to-YUV conversions.
- Changed **Quality** to 100% when using the **intermediate/ProRes** preset.
- Added 16:9, 9:16, and 1:1 aspect ratios for transition wipes.
- Moved **Properties > Reverse...** from the overflow menu to a button.
- Changed **Properties > Reverse...** to use project folder if used.
- When **Reverse** job completes, automatically open it and add it to the **Playlist**
- Start playback from the beginning if you play when the play head is at the end.
- Improved speed of the **Text** and **Timer** video filters.
- Added **View > Scopes > Video Histogram**
- Added **Preset** to some more filters:
  - **Audio Gain/Volume**
  - **Blur**
  - **Brightness**
  - **Opacity**
- Added **Preset** and simple and advanced keyframes to the **Balance** and **Pan** audio filters.
- Added a **Levels** video filter with simple and advanced keyframes!
- Added **Properties > Color Range** for video clips.
- Replace the **Mask** video filter with 3 new filters:
  - **Mask: Simple Shape**
  - **Mask: From File**
  - **Mask: Apply**

##### Release 18.11.18

- Fixed crash in Export (bug in v18.11.13).
- Fixed NVENC hardware encoders on Windows and Linux.
- Fixed VA-API hardware encoders on Linux. As a result, the Linux build is now
  based on Ubuntu 16.04 (glibc 2.23), which may reduce compatibility with older
  Linux systems.
- Fixed hardware encoder detection on Windows.
- Added **Audio Waveform Visualization** video filter.
- Added **MM:SS.SS** to **Timer** filter.
- Added IRE graticule and tooltips to the **Video Waveform** scope.
- Added support for the mouse wheel to the **Color Grading** circles.
- Added configuration setting player/warnGPU, which is a boolean that defaults true.

##### Release 18.11.13

- Added an **Advanced** mode to **Export**.
- Added **Use hardware encoder** checkbox to **Export**.
- Added VA-API hardware encoding for Linux.
- Added videotoolbox hardware encoding for macOS.
- Added **New Project** / **Recent Projects** screen.
- Added **10 Pixel Grid** and **20 Pixel Grid** options to the player grid button menu.
- Added **Spot Remover** video filter.
- Added **View > Scopes > Video Waveform**.
- Added **Settings > Video Mode > Non-Broadcast > Square 1080p 30 fps** and 60 fps.
- Added **Ut Video** presets to **Export**.
- Added signed app bundle for macOS.
- Fixed support for macOS 10.10 and 10.11.
- Fixed clearing export preset search collapses categories.
- Fixed searching export presets in categories.
- Fixed initial rectangle size for **Size and Position** filter.
- Fixed reopening **Timeline** changes zoom level.
- Fixed exit sometimes hangs.
- Fixed some filters' presets do not save any values:
  - **Key Spill: Advanced**
  - **Chroma Key: Advanced**
  - **Reduce Noise**
- Fixed A/V synchronization on some files.
- Fixed seeking on audio files with album art.
- Fixed saving multiple lines of text in preset for **Text** generator.
- Fixed crash when undoing split and transition on Timeline.
- Fixed filters not applied correctly when using **Export > From > Each Playlist Item**.
- Improved reliability of **Audio/Video Device** capture.
- Fixed **Color** generator did not signal colorspace.
- Fixed transfer characteristic conversion and full range output in **Export**.  
  (Add `mlt_image_format=rgb24`, `color_range=jpeg`, and `pix_fmt=yuvj420p` in
  **Other** for full range output.)
- Made **GPU Effects** hidden and discouraged.
- Added support for project folder to **Stabilize** and **Overlay HTML** filters.
- Increased **Scale** maximum to 500% for **Rotate and Scale** filter.
- Improved support for DDS, ICO, and WebP images.
- Bundle more library dependencies on Linux.
- Converted macOS build to standard app bundle layout.


##### Release 18.10.08

- Added support for [Intel Quick Sync Video](https://www.intel.com/content/www/us/en/architecture-and-technology/quick-sync-video/quick-sync-video-general.html) hardware-accelerated video encoders to the Windows build (in **Export > Codec** choose h264_qsv or hevc_qsv).
- Added **Grid** and **Safe Area** overlays with a toggle/menu button to the player.
- Added snapping to the grid and safe areas for the VUI rectangle control as used by **Text**, **Size and Position**, and more filters.
- Added **Open Other** to the main toolbar with a drop-down menu.
- Added the ability to drag-n-drop folders from a file manager into Shotcut.
- Added the ability to supply multiple file and folder name arguments to the shotcut command line executable.
- Added the ability to make a temporary **Custom Video Mode** (leave **Name** blank).
- Added **Settings > Video Mode > Custom > Remove....**
- Added **View > Layout > Remove....**
- Added **Settings > Clear Recent on Exit** checkbox to prevent saving data on a shared computer account.
- Added command line option `--clear-recent` to enable **Clear Recent on Exit** and hide that option in the **Settings** menu.
- Added a dialog when you click to check for an update that asks if you want to check for update automatically (at startup only) with the option to suppress the dialog indefinitely.
- Fixed audio preview distortion on Windows (regression in v18.09).
- Fixed some AAC MP4 files start in the middle.
- Fixed un-mute a track may not draw its waveforms.
- Fixed whitespace in **Text** filter removed in **Export**.
- Fixed crash adding clip to **Timeline** after removing all tracks.
- Fixed simple keyframes go missing or not all the way to 00:00.
- Fixed switching from simple to advanced keyframes in **Text**, **Rotate and Scale**, **Timer**, and **Size and Position** filters.
- Fixed a possible crash when adding a transition by trimming.
- Fixed crash on macOS after the app restarts itself when some **Settings** are changed.
- Fixed moving a clip to the left where the right edge is not a blank.
- Fixed some **Timeline** actions do not work correctly after a **Ripple** move.
- Fixed undo/redo form trim-to-transition over a blank/gap.
- Fixed **Ripple** moving a clip to the end of a track was not extending the hidden black background.
- Hide the **Text** generator if **Settings > GPU Effects** is on (incompatible).
- Fixed the **Rotate and Scale** filter preset not saving keyframes for the **Scale** parameter.
- Fixed a crash opening multiple files at once either through **File > Open** or drag-n-drop from a file manager.
- Fixed a crash closing a playlist-only project with **Automatic Video Mode**.
- Fixed changing position or removing advanced keyframes for the **Scale** parameter of the **Rotate and Scale** filter distorting the aspect ratio of the image.
- Fixed **Timeline > Split** not working if the current track is empty. (It should split the topmost clip under the playhead.)
- Fixed clicking the reset button of the **Center** checkbox of the **Crop** filter does not re-enable the other controls.
- Fixed the **Timeline** and **Keyframes** timeline rulers are incorrect after changing **Settings > Video Mode**.
- Fixed a crash when the project frame rate is very low (< 6 fps).
- Fixed a crash when switching keyframes on and off for position and size parameters in video filter such as **Size and Position**, **Text**, and **Timer**.
- Fixed trimming multiple track filters hides them.
- Fixed making a **Text** preset does not save the text (only all other parameters).
- Changed resolution restriction from a multiple of 8 to a multiple of 2.
- Improved the layout of the filter chooser in **Filters**.
- Changed **Timeline** fade controls to behave the same as **Keyframes** simple keyframes.
- Changed the **Noise** generator from opening as a live source to a clip with a duration.
- Changed drag-n-drop to **Playlist** to not automatically open the first file unless the project is empty.
- Changed the **Rotation** parameter of the **Mask** filter to use degrees, and fixed its reset button.
- Added more library dependencies to the Linux portable tar, AppImage, and snap builds including the SWH LADSPA plugins.

##### Release 18.09.16

Fixed broken color selection in the following (non-GPU) video filters:

- Chroma Key: Simple
- Chroma Key: Advanced
- Key Spill: Advanced
- White Balance

##### Release 18.09.15

- Fixed image transform regression in **Rotate and Scale**, **Size and
Position**, and **Text** filters.
- Fixed image scaling interpolation method when not using a transform filter.
- Fixed a crash applying an image transform filter to an image with alpha
channel (PNG, SVG).
- Added a highlight for the buttons in the **Filters** chooser.
- Fixed new **Ripple** and **Snapping** keyboard shortcuts not always working.
- Fixed moving a clip to another track and back not working correctly.
- Fixed dragging clips to the **Timeline** stops working.
- Fixed redo trimming the in point of clip on **Timeline** not working correctly.

##### Release 18.09.13

- Added **Ripple** support for **moving** clips including **Ripple All Tracks**.
- When **Ripple** is on and you move a clip to the right, it now
ripples (pushes) all the clips to the right instead of making a transition
(including the **Ripple All Tracks** option).
- Added **Ctrl+R** keyboard shortcut to toggle **Timeline Ripple**,  
**Ctrl+Alt+R** to toggle **Ripple All Tracks**, and  
**Ctrl+Shift+R** to toggle both.
- Improved **Snapping** behavior on the **Timeline**.
- Added **Ctrl+P** keyboard shortcut to toggle **Snapping**.
- Added **Reset Track Height** (**Ctrl+0**) to the **Timeline** menu.
- Added a **Timer** video filter.
- Added support for negative rotation to the **Rotate and Scale** filter.
- Added **Shake 1 Second - Scaled** and **Shake 1 Second - Unscaled** presets
to the Size and Position filter.
- Added a **Text** clip to the **Open Other** dialog.  
This is a convenience item that creates a transparent **Color** clip with a
**Text** filter.
- Added **Extract Sub-clip** to **Properties** menu for audio/video clip.
- Added **Export** presets for WebM VP8 and VP9 with alpha channel.
- Fixed a crash when quickly changing clip selections in the **Timeline**.
- Improved closing Shotcut more reliably and the behavior of multiple shotcut
processes.
- Fixed **Undo** beyond **Remove Track** may crash.
- Fixed a crash when moving a clip after undoing a transition.
- Fixed a crash loading project after some sequence of inserting and removing tracks.
- Fixed a crash loading an image with the wrong filename extension.
- Fixed OS audio device changes may cause Shotcut to hang.
- Fixed crash dragging simple keyframes beyond the edges of the clip.
- The 32-bit Windows build can use more memory to reduce risk of crash:  
3 GiB on 32-bit Windows and 4 GiB on 64-bit Windows.
- Improved behavior of opening WebP images.
- Fixed advanced keyframes for the **Size and Position** filter.
- Fixed inserted and then hidden video tracks become audio tracks after
re-opening the project.
- Fixed changing **Video Mode** from **Automatic** to something else with
nothing opened.
- Fixed moving a transition to another track leaves a hidden clip on the old track.
- Fixed trimming the out point of a timeline clip may change the in point of
the following clip.
- Fixed **Properties** > **Speed**, **Convert**, **Reverse**, and
**More Information** does not work sometimes after reloading a project.
- Fixed reliability of changing size and position fields with keyframes
in **Size and Position** and **Text** filters.
- Fixed trimming outward with **Ripple All Tracks** moved clips on other tracks
in the wrong direction.
- Fixed audio waveforms still appear on muted tracks after adding a track.
- Fixed edges of text with the **Text** filter may get cut off (clipped).
- Fixed **Size and Position** and **Rotate and Scale** filters may leave black
right and bottom edge of frame.
- Fixed trimming a timeline clip with **Fade In/Out Video** filters
with "Adjust opacity instead of fade with black" enabled.
- Fixed **Export** may change the actual frame rate and cause timing errors.
- Fixed reducing the **Frame/sec** in **Export** causes timing errors in the output.
- Removed the **Compositing** toggle icon from the **Timeline** track head. Now,
it is located in the track **Properties** as **Blend mode** with a **None** option.
- In the **3D Text** filter, replaced the Droid fonts with Liberation due to an
incompatible license.
- Improved the performance of changing filter parameters and scrubbing.
- Limit the number of background thumbnail and waveform generation threads to 4.
- Prevent trying to generate audio levels for waveforms for still images and
other silent sources.

##### Release 18.08.14

* Fixed regression in 18.08.11 that can put corrupt character in the .mlt XML
  project file.
* Fixed the size of an existing Text filter with animation breaks if you
  select the clip and the filter.

##### Release 18.08.11

* Fixed new crash in v18.08 changing **Settings > Video Mode** with nothing opened.
* Fixed crash while adjusting position or size in **Text** and **Size and Position** filters.
* Fixed position and size information incorrect if resolution or aspect ratio changed in **Export**.
* Fixed **Text** animation (keyframes) when not the first clip in the timeline.
* Fixed track name not editable after the track head had been selected at least once.
* Fixed right-clicking a timeline clip breaks automatic timeline scrolling during playback.
* Added Quicktime Animation **Export** preset to export video with alpha channel.
* In **Export**, let option values in **Other** tab override values generated by other fields.

##### Release 18.08.01

* Added the timecode of failure to the **Jobs** panel when an export job fails
  (makes locating problem areas in the project easier).
* Added an **Unpremultiply Alpha** video filter (handy to fix compositing for
  video clips with an alpha channel that has had its color pre-multiplied with
  its alpha).
* Fixed various crash regressions since v18.05.
* Fixed audio distortion during preview (regression in v18.07).
* Fixed custom **Export** presets broken if name contains parentheses
  (regression in v18.07).
* Fixed **Properties > Reverse...** broken if numeric region setting uses comma
  for decimal (regression in v18.07).
* Fixed **Overlay HTML** editor easily destroys default scripts (introduced in
  v18.07) if **WebVfx JavaScript extension** enabled.
* Fixed custom interlaced **Export** presets loading as progressive (regression
  in v18.07)
* Fixed **Timeline > Copy Timeline to Source > Export** fails on unsaved
  (Untitled) project.
* Fixed **Text** filter has aliased edges (regression in v18.07).
* Fixed **Stabilize** video filter not available on Linux (regression since v18.06).
* Fixed changing **Speed** in **Properties** breaks all filters on that clip
  (regression since v18.05).
* Fixed **Fade Out Video** (and keyframes in general) broken on still images
  whose in point is > 0 (regression since v18.03).
* Fixed accuracy of **Properties > Duration** for image clip on the timeline.
* Some fixes for changing **Settings > Video Mode** after starting a project.
* Fixed compositing of upper video tracks becomes broken if bottom video track
  is deleted.
* Fixed images with alpha channel (e.g. PNG) on upper video tracks have dark
  edges after compositing if the **Size and Position** or **Rotate and Scale**
  filters are not used.

##### Release 18.07

* Numerous fixes as usual.
* Changed shortcut for **Add Video Track** to `Ctrl+I`.
* Changed shortcut for **Redo** to `Ctrl+Y` on Windows.
* Added **10%** to the player zoom menu.
* Hide the VUI (video user interface) when the play head is not over the clip with the current filter.
* Renamed the Rotate filter to **Rotate and Scale**.
* Keyframes are now saved in the project file using time clock values instead of frame numbers to make them adaptive to frame rate.
* Reverted memory manager change from v18.05 pending further testing to improve stability.
* Added advanced keyframes to the **Size and Position** filter.
* Added simple and advanced keyframes to the following video filters:
  - **Rotate and Scale**
  - **Text**
  - **Glow***
  - **Contrast***
  - **Sharpen***
  - **Vignette***  
  \* = including the (still experimental) GPU filter
* Added **Copy Timeline to Source** to Timeline menu.
* Changed the audio codec to AC-3 for the edit-friendly and reverse MP4 file format.
* Changed `J` and `K` key behavior to change speed up or down before changing direction.
* Added categories to the **Export** presets (custom presets can start their name with "category)" to use a category).
* Added **View > Layout** menu for custom and stock layouts:
  - Timeline Project
  - Playlist Project
  - Clip-only Project
  - Player
* Changed the default, first-time user UI layout to **Timeline Project**.
* Changed **Properties > menu > Reverse...** to work on a trimmed clip from either **Source** or **Timeline**.
* Added **Properties** menu items to the context menus for **Timeline** and timeline clips.
* Added logic to sort GoPro files when multiple files are opened or dropped.
* Added support for setting project file name (using **File > Save**) for empty project.
* Added new HTML template for WebVfx JavaScript extensions enabled in **Overlay HTML** video filter.
* Added search field to the filter chooser in **Filters**.
* Upgraded MLT to v6.10.0

##### Release 18.06

* Many bug fixes due to introduction of keyframes and change to memory management in v18.05.
* Added simple and advanced **Keyframes** to the **Blur**, **Mask**, and **Saturation** filters.
* Added seek buttons for simple **Keyframes**.
* Added ability to add and remove advanced **Keyframes** using double-click.
* Added ability to drag advanced **Keyframes** to adjust both value and position.  
  (When dragging, hold down Ctrl key to adjust only value or Alt key to adjust only position.)
* Added double-click to toggle simple **Keyframes** controls (circles).
* Added double-click to toggle fade in/out controls (circles) on **Timeline** clip.
* Added many animated (keyframes) presets to the **Size and Position** filter.
* Added **Hue/Lightness/Saturation** video filter.
* Added **Reverse** to clip **Properties** menu.
* Added **Detach Audio** to timeline clip's context menu.
* Added 5.1 surround support to the **Copy Channel** and **Swap Channels** audio filters.
* Added caution message to GPU Effects confirmation dialog.
* Added a **Keyboard Shortcuts** link to the **Help** menu.
* Changed presets file format to YAML.
* Changed **Settings > GPU Processing** to **GPU Effects**.
* Reduced memory usage on 32-bit builds (by constraining multi-threading).
* Upgraded [FFmpeg to v4.0](http://ffmpeg.org/index.html#news).
* Integrated [AMD AMF](https://gpuopen.com/gaming-product/advanced-media-framework/) hardware-accelerated H.264 and HEVC encoders on Windows (Set **Export > Codec** to **h264_amf** or **hevc_amf**. Requires recent Radeon or AMD APU.)
* Upgraded MLT to git master ([v6.8.0](https://www.mltframework.org/blog/v6.8.0_released/) minimum required to build).

##### Release 18.05

* Added **Keyframes** for Filters:
  - Gain / Volume
  - Brightness
  - Circular Frame
  - Color Grading (no simple)
  - Opacity
  - Size and Position (simple only)
* Added support for mono and 5.1 surround sound: **Settings > Audio Channels** and **Export >Audio > Channels**.
* Added **Finnish** translation.
* Restored **GIF Animation** for Export.
* Reduced memory footprint (especially for Rotate and Size and Position filters).
* Changed **Export** default settings to reduce output size by increasing GOP and number of B frames.

##### Release 18.03

* Added a **Sketch** filter.
* Added numeric fields to the **Color Grading** filter.
* Added **All** option to **Properties > Audio > Track**.
* Added **Estonian** translation.
* Improved image loading speed on Windows.
* Improved mouse-wheel & trackpad scrolling in **Timeline**.
* Improved support for JACK Audio (Linux and macOS only).
* Upgraded FFmpeg to version 3.4 and latest vpx for much faster VP9 encoding.
* Upgrade MLT to v6.6.0.
* Upgraded SDL to version 2.0.

##### Release 18.01

* Added **Audio Spectrum Visualization** filter.
* Added support for font size and italics to **Text** filter.
* Added a **Mask** filter.
* Another important fix for accuracy of XML time values for non-integer frame rates.

##### Release 17.12

* Added icon, progress bar, and time remaining/taken to **Jobs** panel.
* Increased maximum resolution to 8192x8192.
* Indicate if variable frame rate is detected in **Properties**.
* Added **Convert to Edit-friendly...** dialog when variable frame rate or non-seekable file opened.
* Added **Convert to Edit-friendly...** to **Properties** menu for video and audio files.
* Adding, removing, and adjusting **Fade In/Out** filters now updates fade controls on the **Timeline**.
* Major speed improvements for **Timeline** rendering, especially when changing zoom level.
* Stop showing waveforms on muted tracks.
* Fixed audio crackling on some systems.
* Fixed accuracy of reading and writing time values, particularly for non-integer frame rates.

##### Release 17.11

* Changed add-filter menu to be embedded instead of popup.
* Added **Master** label to **Timeline**.
* Show filters icon on track heads if track is filtered.
* Prioritize '0' shortcut for **Timeline** over **Playlist**.
* Do not adjust timeline zoom until slider is released.
* Added warning dialog to **Export** if file cannot be written (e.g. due to permissions).
* Added warning dialog to **Export** if chosen file is in the project.
* Added warning dialog to **Export** if the drive is low on space.
* Added Nepali translation.
* Added button to Text filter to insert the # symbol.

##### Release 17.10

* Fixed multi-threaded decoding with FFmpeg v3.2.
* Added 1080p 59.94 and 60 fps video modes.
* Added support for NVENC to Export panel.

##### Release 17.09

* Show in Folder now selects the file on Windows Explorer or macOS Finder.
* Renewed the code signing certificate for the Windows installer and executable.
* Updated SDL to v2.0
* Updated FFmpeg to v3.2
* Updated x264, x265, and vp8/9 to the latest stable versions.
* Added `--noupgrade` command line option and boolean General/noupgrade option to config/registry options.

##### Release 17.08

* Increased maximum **Timeline** zoom level.
* Increased **Speed** field precision to 3 decimal places.
* Increased maximum value for **Speed** field to 200x.
* Added Norwegian Bokmål translation.

##### Release 17.06

* Change maximum duration of a still image from 10 minutes to 4 hours.
* Added Hungarian translation.
* Fixed Chinese translation.

##### Release 17.05

* Fix opening and saving files on Windows with non-Latin characters in the name or path.
* Updated translations.

##### Release 17.04

* Fix crashing on launch on the new macOS 10.12.4.
* Added Japanese translation.
* Added Turkish translation.

##### Release 17.03

* Converted the track toggle buttons to icons.
* Now, you can press Del or Backspace to delete a selected item in the Recent panel.
* Playback now pauses at the out point in the Source player.
* Some stability improvements.
* Performance boost for Size & Position and Rotate filters on multi-CPU systems.

##### Release 17.02

* Fixed drag-n-drop from other than C: drive on Windows.
* Fixed '/' getting added to front of file paths on Windows.
* Fixed the MLT XML repair tool not correctly handling decimal point in some
  configurations.
* Fixed opening a network stream.
* Improved support for image sequences.
* Improved device capture.
* Added Slovenian translation.

##### Release 17.01

* Mostly just bug fixes.
* Added Chinese Taiwan translation.

##### Release 16.12

* Added **Constrained VBR** for the video codec rate control mode to Export.
* Added **Fixed** option to video **GOP** to Export.
* New audio mixing mode that does not affect levels.
* Increased usage of floating point for audio processing to improve quality.
* Added **Occitan** translation.
* More fixes for copying filters and LUT (3D) video filter.

##### Release 16.11

* Added **portable app** feature with **Settings > App Data Directory** and `--appdata` command line argument.
* Fixed drag-n-drop to Timeline after moving clip to different track.
* Fixed **LUT (3D) filter** for languages/regions that use comma for decimal point.
* Fixed **Properties > Speed** on macOS for languages/regions that use comma for decimal point.
* Added **Gaelic** (Scottish) translation.

##### Release 16.10

* Added **32-bit Windows** build.
* Changed Linux build to be more compatible.
* Added **LUT (3D)** video filter.
* Added **Lens Correction** video filter.
* Added **Merge with next clip** to Timeline clip context menu.
* Fixed **Paste Filters** for Timeline clips and tracks.
* Removed File > Open Other > Screen.

##### Release 16.09

* Added **Tiles**, **Icons**, and **Details** view modes to Playlist.
* Added **Copy Filters** and **Paste Filters**.
* Upgraded Qt to v5.6.1 with HiDPI support. (Set environment variable QT_AUTO_SCREEN_SCALE_FACTOR=0 to turn it off.)
* Converted some 16x16 icons to 32x32 for HiDPI.
* Moved the **Timeline Zoom** slider to the toolbar.

##### Release 16.08

* Added count-down (or up) generator: **File > Open Other > Count**
* Major performance boost for opaque clips on video tracks higher than **V1** with track **C**omposite enabled and **Blend mode: Over**.

##### Release 16.07

* Added **File** > **Export Frame...**
* Added **Remove transition** to **History** by trimming a neighboring clip to
  remove it.
* Fixed version checker.

##### Release 16.06

* Show red outline on scrub bar of **Source** player to indicate selection.
* Added **Cut**, **Copy**, and **Paste** to Edit menu and Timeline tool bar.
* Changed double-click on **Timeline clip** to select+seek instead of copying to **Source** player.
* Changed Timeline keyboard shortcut **A** to append.
* Changed Timeline keyboard shortcut **C** to copy.
* Changed Timeline keyboard shortcut **Enter** to seek to start of clip.
* Added **Peak** and **True Peak** meters to the **Audio Loudness** scope.
* Added version/upgrade-checker.
* Added check for missing files when opening .mlt XML project file.
* Added dialog to locate and resolve (relink) missing files in project file.
* For clips with speed changed, added support for saving and loading relative path and file names.
* Added **Export EDL** to the **File** menu.
* Added **YouTube** preset to **Export** (which does the same thing as not changing any export settings, not selecting an export preset, or clicking Reset).
* Updated Blackmagic Design SDI/HDMI output to work with recent driver updates.

##### Release 16.05

* Mostly just fixes.
* Added **Remove** to **Jobs** panel.
* Added **25%** option to player's **Zoom** button-menu.
* Improved application logging.
* Moved status messages front and central and removed status bar.


##### Release 16.04

* Fixed frequently reported problem with black video on Export.
* Fixed a few crashing bugs.
* Added an option to Windows installer to remove registry settings to help people with new crash-on-launch problems.
* Reduced memory usage when exporting a playlist or multitrack project.
* Added **Normalize: One Pass** audio filter (existing Normalize renamed **Normalize: Two Pass**.
* Added **Audio Loudness** to View > Scopes.
* Added **Brightness** video filter for CPU and GPU.
* Added **Contrast** video filter for CPU and GPU.
* Added **Reduce Noise** video filter for CPU only.
* Install ffplay and ffprobe executables.
* Improved visual feedback about what is selected in **Timeline**, **Properties**, and **Filters** views.
* Added **More Information** to clip Properties overflow-menu.
* Added **Start Integrity Check Job** to clip Properties overflow-menu.
* Added auto-rotate for video clips with orientation metadata.
* Added a Ukranian translation.

##### Release 16.03

* Changed player tab Program to **Project**.
* Changed panel name Encode to **Export**.
* Added a **From** field to the Export panel to allow exporting the project, a
  clip loaded in the **Source** tab of the player, or or each playlist item as a batch of jobs.
* Added an export preset for animated GIF.
* Upgraded FFmpeg to v3.0.
* Upgraded MLT to v6.0.0.

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
        issues still persist on Windows, OS X)
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
