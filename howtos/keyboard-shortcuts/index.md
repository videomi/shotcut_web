---
layout: page
title: Keyboard Shortcut Reference
category: help
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

| Action                | Windows/Linux<br>Shortcut            | OS X Shortcut
|-----------------------|--------------------------------------|----------------------
| ***Main Menu***       |                                      |
| Open File             | Ctrl+O                               | Cmd+O
| Open Other            | Ctrl+Shift+O                         | Cmd+Shift+O
| Save                  | Ctrl+S                               | Cmd+S
| Save As               | Ctrl+Shift+S                         | Cmd+Shift+S
| Quit                  | Ctrl+Q                               | Cmd+Q
| Undo                  | Ctrl+Z                               | Cmd+Z
| Redo                  | Windows: Ctrl+Y, Linux: Ctrl+Shift+Z | Cmd+Shift+Z
| Fullscreen            | Ctrl+Shift+F                         | Ctrl+Cmd+F
| ***Player***          |                                      |
| Play                  | L or Space                           |
| Pause                 | K or Space                           |
| Rewind                | J                                    |
| Fast Forward          | L                                    |
| Set In                | I                                    |
| Set Out               | O                                    |
| Next Frame            | Right or K+L                         |
| Previous Frame        | Left or K+J                          |
| Forward One Second    | Page Down                            |
| Backward One Second   | Page Up                              |
| Forward Two Seconds   | Shift+Page Down                      |
| Backward Two Second   | Shift+Page Up                        |
| Forward 5 Seconds     | Ctrl+Page Down                       | Cmd+Page Down
| Backward 5 Seconds    | Ctrl+Page Up                         | Cmd+Page Up
| Forward 10 Seconds    | Shift+Ctrl+Page Down                 | Shift+Cmd+Page Down
| Backward 10 Seconds   | Shift+Ctrl+Page Up                   | Shift+Cmd+Page Up
| Seek Start            | Home                                 |
| Seek End              | End                                  |
| Seek Next Edit        | Alt+Right                            |
| Seek Previous Edit    | Alt+Left                             |
| Switch Source/Program | Esc                                  |
| ***Timeline***        |                                      |
| Add Audio Track       | Ctrl+U                               | Cmd+U
| Add Video Track       | Ctrl+Y                               | Cmd+Y
| Close                 | Ctrl+W                               | Cmd+W
| Append                | C                                    |
| Ripple Delete         | X or Shift+Del or Shift+Backspace    |
| Lift                  | Z or Del or Backspace                |
| Insert                | V                                    |
| Overwrite             | B                                    |
| Split                 | S                                    |
| Select Track Below    | Down                                 |
| Select Track Above    | Up                                   |
| Zoom In               | =                                    |
| Zoom Out              | -                                    |
| Reset Zoom            | 0                                    |
| Make Tracks Shorter   | Ctrl+-                               | Cmd+-
| Make Tracks Taller    | Ctrl+=                               | Cmd+=
| Reload                | F5                                   |
| Select under playhead | Ctrl+Space                           |
| Move selection left   | Ctrl+Left                            | Cmd+Left
| Move selection right  | Ctrl+Right                           | Cmd+Right
| Move selection up     | Ctrl+Up                              | Cmd+Up
| Move selection down   | Ctrl+Down                            | Cmd+Down
| Deselect All          | Ctrl+D                               | Cmd+D
| Open As Clip          | Enter                                |
| Toggle Mute track     | Ctrl+M                               |
| Toggle Hide track     | Ctrl+H                               |
| Toggle Lock track     | Ctrl+L                               |
| ***Playlist***        |                                      |
| Append                | Shift+C                              |
| Delete                | Shift+X, Del or Backspace            |
| Insert                | Shift+V                              |
| Update                | Shift+B                              |
| Move Up               | Ctrl+Up                              | Cmd+Up
| Move Down             | Ctrl+Down                            | Cmd+Down
| Select Item N         | 1 2 3 4 5 6 7 8 9 0                  |
| Open Selected         | Enter or double-click                |
| Goto/Seek             | Shift+Enter or Shift+double-click    |
{:.withborders}

### Other Notes

#### Player

Press and hold **Shift** to **skim** - scrub/seek using the horizonal
position of the mouse cursor without clicking and dragging.

#### Timeline

While dragging shot or trimming, press and hold **Alt** to temporarily
**suspend snapping**. On Linux, pressing Alt before dragging will
usually move the app window; so, press Alt after you start dragging.

Press and hold **Shift** to **skim** - scrub/seek using the horizonal
position of the mouse cursor without clicking and dragging.

#### Entering Time Values

Timecode fields - such as the prominent one at the bottom of the player
- do not require you to enter a full timecode value. There are some
short-hand ways to enter time values. First of all, a number with no
colons (e.g., 100) is a **frame number**. Remember, frame numbers start
at 0; so 100 is the 101-th frame! Including a colon (:) makes it
interpret as **timecode** (HH:MM:SS:FF where FF = frames) or a **clock**
value (HH:MM:SS.MS where MS = milliseconds or any fraction of a second).
The difference between the two is that the last field is delimited by a
colon or decimal point (a comma in some locales). Next, not all of the
fields of the time value need to be included. For example, you can enter
"::1.0" for one second. However, not all of the separators need to be
included - they are evaluated from right-to-left. Thus, for our example,
"1:" is short for one second; however, ":1.0" or ":1." is also one
second but not "1.0" because it does not contain a colon. ":1.5" is one
and a half seconds. "1::" is one minute. "1:30:" is one minute and
thirty seconds. "1:::" is one hour.

<!-- Shotcut Responsive -->
<ins class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-1305424236533187"
    data-ad-slot="3403753557"
    data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
