---
layout: page
title: Download
permalink: /download/
category: about
---

We pledge that our downloads are always free of
malware, spyware, and adware. Furthermore, we refuse to bundle any software
unrelated to Shotcut such as browser toolbars or download managers.
However, we can only provide that guarantee if you come to this website
to download.

<!-- Shotcut Responsive -->
<ins class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-1305424236533187"
    data-ad-slot="3403753557"
    data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

#### Current Version: 18.09.16

##### Windows
<small>(Windows 7+)</small>

| Site 1 (GitHub)     | Site 2 (FossHub)
|-----------------------|-------------------
| [64-bit Windows installer](https://github.com/mltframework/shotcut/releases/download/v18.09.16/shotcut-win64-180916.exe) | [64-bit Windows installer](https://www.fosshub.com/Shotcut.html/shotcut-win64-180916.exe)
| [64-bit Windows portable zip](https://github.com/mltframework/shotcut/releases/download/v18.09.16/shotcut-win64-180916.zip) | [64-bit Windows portable zip](https://www.fosshub.com/Shotcut.html/shotcut-win64-180916.zip)
| [32-bit Windows installer](https://github.com/mltframework/shotcut/releases/download/v18.09.16/shotcut-win32-180916.exe) | [32-bit Windows installer](https://www.fosshub.com/Shotcut.html/shotcut-win32-180916.exe)
| [32-bit Windows portable zip ](https://github.com/mltframework/shotcut/releases/download/v18.09.16/shotcut-win32-180916.zip) | [32-bit Windows portable zip](https://www.fosshub.com/Shotcut.html/shotcut-win32-180916.zip)
{:.withborders}

---

##### macOS
<small>(64-bit macOS 10.8+)</small>

| Site 1 (GitHub) &nbsp; &nbsp; | Site 2 (FossHub)
|-----------------------|-----------------------------
| [macOS dmg](https://github.com/mltframework/shotcut/releases/download/v18.09.16/shotcut-macos-x86_64-180916.dmg) | [macOS dmg](https://www.fosshub.com/Shotcut.html/shotcut-macos-x86_64-180916.dmg)
{:.withborders}

**macOS users**: since the application is not signed, you need to
control-click the app icon and choose **Open** from the context menu the
first time you run it.

---

##### Linux
<small>(64-bit Mint 17+, Ubuntu 14.04+, Debian 8+, Fedora 21+, Arch/Manjaro)</small>

| Site 1 (GitHub)     | Site 2 (FossHub)
|-----------------------|-------------------
| [64-bit Linux portable](https://github.com/mltframework/shotcut/releases/download/v18.09.16/shotcut-linux-x86_64-180916.tar.bz2) | [64-bit Linux portable](https://www.fosshub.com/Shotcut.html/shotcut-linux-x86_64-180916.tar.bz2)  
| [64-bit Linux AppImage](https://github.com/mltframework/shotcut/releases/download/v18.09.16/Shotcut-180916.glibc2.14-x86_64.AppImage) | [64-bit Linux AppImage](https://www.fosshub.com/Shotcut.html/Shotcut-180916.glibc2.14-x86_64.AppImage)
| [Linux Flatpak](https://flathub.org/apps/details/org.shotcut.Shotcut) | [64-bit Linux Snap](https://snapcraft.io/shotcut)
{:.withborders}

On [snap-enabled systems](https://snapcraft.io/docs/core/install), install the
from the store with `snap install shotcut --classic`  
Since this snap is using classic confinement based on the portable zip above,
not all dependencies are bundled, and it has the same run-time requirements as
the portable zip.

**Linux Portable Users**: No install required, simply extract the archive and run
it. You can drag the Shotcut folder to copy and move it wherever you
want. If double-clicking the icon in your file manager does not launch
Shotcut, open Shotcut.app, and try double-clicking the shotcut shell
script. Do not try to run bin/shotcut directly. You may need to install
the following dependencies from their distribution (the exact names may
vary): SDL, libexif, and JACK. A number of the audio filters such as
Band Pass, Bass & Treble, Compressor, Delay, Expander, High Pass, Limiter,
Low Pass, Notch, and Reverb requires that you install the SWH LADSPA plugins
package, which is commonly available in all distributions.
[Here is a page]({{ "/notes/linux-dependencies/" | prepend: site.baseurl }}) that lists some required packages
for specific distributions.

---

##### Other

[Source code
archive](https://github.com/mltframework/shotcut/releases/download/v18.09.16/shotcut-src-180916.tar.xz)
/ [GitHub repository](https://github.com/mltframework/shotcut)

[Older versions](https://github.com/mltframework/shotcut/releases/) are
available for download.


[Release Notes]({{ "/download/releasenotes/" | prepend: site.baseurl }})

`This program is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
or FITNESS FOR A PARTICULAR PURPOSE.`

<a href="https://www.jetbrains.com/teamcity/"><img
width="139" height="25" alt="TeamCity logo" src="{{ "/assets/img/logo_teamcity.png" | prepend: site.baseurl }}"
style="border: 0px; float: right; margin-left: 10px" title="JetBrains TeamCity"></a>
These builds are made possible by a <a href="https://www.jetbrains.com/teamcity/">TeamCity</a> server license generously donated by JetBrains.
