---
layout: page
title: Command Line Options
category: notes
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

```
Usage: shotcut [options] [FILE]...

Options:
  -h, --help                        Displays this help.
  -v, --version                     Displays version information.
  --fullscreen                      Fill the screen with the Shotcut window.
  --noupgrade                       Hide upgrade prompt and menu item.
  --gpu                             Use GPU processing.
  --clear-recent                    Clear Recent on Exit
  --appdata <directory>             The directory for app configuration and data.
  --QT_SCALE_FACTOR <number>        The scale factor for a high-DPI screen
  --QT_SCREEN_SCALE_FACTORS <list>  A semicolon-separated list of scale factors for each screen
  --QT_SCALE_FACTOR_ROUNDING_POLICY <string> How to handle a fractional display scale:
                                    Round, Ceil, Floor, RoundPreferFloor, PassThrough
  --SDL_AUDIODRIVER <string>        Which operating system audio API
                                    to use: directsound, wasapi, winmm (Windows)
                                    alsa, arts, dsp, esd, jack, pipewire, pulseaudio (Linux)

Arguments:
  [FILE]...                         Zero or more files or folders to open
```

When `--appdata` is supplied the configuration key `appdatadir`
is not written to the normal [configuration file/registry]({{ "/notes/configuration/" | prepend: site.baseurl }}).

`resource` can be anything that Shotcut can open such as a media file, MLT XML
project file, generic MLT XML file, or even a MLT producer specification (e.g. `noise:`).
