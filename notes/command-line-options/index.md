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
Usage: shotcut [options] resource

Options:
  -h, --help             Displays this help.
  -v, --version          Displays version information.
  --fullscreen           Fill the screen with the Shotcut window.
  --noupgrade            Hide upgrade prompt and menu item.
  --gpu                  Use GPU processing.
  --appdata <directory>  The directory for app configuration and data.

Arguments:
  resource               A file to open.
```

When `--appdata` is supplied the configuration key `appdatadir` is not
written is not written to the normal [configuration file/registry]({{ "/notes/configuration/" | prepend: site.baseurl }}).

`resource` can be anything that Shotcut can open such as a media file, MLT XML
project file, generic MLT XML file, or even a MLT producer specification (e.g. `noise:`).
