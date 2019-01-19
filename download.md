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

#### Current Version: 18.12.23

##### Windows
<small>(Windows 7+)</small>

<div style='float: right; text-align: center'>
To avoid ads and get automatic updates:<br>
<a href='//www.microsoft.com/store/apps/9plnffl3p6lr?ocid=badge'><img src='https://assets.windowsphone.com/85864462-9c82-451e-9355-a3d5f874397a/English_get-it-from-MS_InvariantCulture_Default.png' alt='English badge' style='width: 183px; height: 67px'/></a>
</div>

| Site 1 (FossHub)     | Site 2 (GitHub)
|-----------------------|-------------------
| [64-bit Windows installer](https://www.fosshub.com/Shotcut.html?dwl=shotcut-win64-181223.exe) | [64-bit Windows installer](https://github.com/mltframework/shotcut/releases/download/v18.12.23/shotcut-win64-181223.exe)
| [64-bit Windows portable zip](https://www.fosshub.com/Shotcut.html?dwl=shotcut-win64-181223.zip) | [64-bit Windows portable zip](https://github.com/mltframework/shotcut/releases/download/v18.12.23/shotcut-win64-181223.zip)
| [32-bit Windows installer](https://www.fosshub.com/Shotcut.html?dwl=shotcut-win32-181223.exe) | [32-bit Windows installer](https://github.com/mltframework/shotcut/releases/download/v18.12.23/shotcut-win32-181223.exe)
| [32-bit Windows portable zip ](https://www.fosshub.com/Shotcut.html?dwl=shotcut-win32-181223.zip) | [32-bit Windows portable zip](https://github.com/mltframework/shotcut/releases/download/v18.12.23/shotcut-win32-181223.zip)
{:.withborders}

---

##### macOS
<small>(64-bit macOS 10.10+)</small>

| Site 1 (FossHub) &nbsp; &nbsp; | Site 2 (GitHub)
|-----------------------|-----------------------------
| [macOS dmg](https://www.fosshub.com/Shotcut.html?dwl=shotcut-macos-signed-181223.dmg) | [macOS dmg](https://github.com/mltframework/shotcut/releases/download/v18.12.23/shotcut-macos-signed-181223.dmg)
{:.withborders}

An [unsigned app bundle is available on
GitHub](https://github.com/mltframework/shotcut/releases/download/v18.12.23/shotcut-macos-unsigned-181223.dmg) so that you
can modify the build per the Free Software license agreement.

---

##### Linux
<small>(64-bit Mint 17+, Ubuntu 14.04+, Debian 8+, Fedora 21+, Arch/Manjaro)</small>

| Site 1 (FossHub)      | Site 2 (GitHub)
|-----------------------|-------------------
| [64-bit Linux portable tar](https://www.fosshub.com/Shotcut.html?dwl=shotcut-linux-x86_64-181223.txz) | [64-bit Linux portable tar](https://github.com/mltframework/shotcut/releases/download/v18.12.23/shotcut-linux-x86_64-181223.txz)  
| [64-bit Linux AppImage](https://www.fosshub.com/Shotcut.html?dwl=Shotcut-181223.glibc2.14-x86_64.AppImage) | [64-bit Linux AppImage](https://github.com/mltframework/shotcut/releases/download/v18.12.23/Shotcut-181223.glibc2.14-x86_64.AppImage)
| [Linux Flatpak](https://flathub.org/apps/details/org.shotcut.Shotcut) | [64-bit Linux Snap](https://snapcraft.io/shotcut)
{:.withborders}

On [snap-enabled systems](https://snapcraft.io/docs/core/install), install
from the store with `snap install shotcut --classic`  
Since this snap is using classic confinement based on the portable zip above,
not all dependencies are bundled, and it has the same run-time requirements as
the portable tar.

**Linux Portable Users**: No install required, simply extract the archive and run
it. You can drag the Shotcut folder to copy and move it wherever you
want. If double-clicking the icon in your file manager does not launch
Shotcut, open Shotcut.app, and try double-clicking the shotcut shell
script. Do not try to run bin/shotcut directly. You may need to **install
JACK** from your distribution.
[Here is a page]({{ "/notes/linux-dependencies/" | prepend: site.baseurl }})
that lists some required packages for specific distributions.

---

##### Other

[Source code
archive](https://github.com/mltframework/shotcut/releases/download/v18.12.23/shotcut-src-181223.txz)
/ [GitHub repository](https://github.com/mltframework/shotcut)

[Older versions](https://github.com/mltframework/shotcut/releases/) are
available for download.


[Release Notes]({{ "/download/releasenotes/" | prepend: site.baseurl }})

`This program is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
or FITNESS FOR A PARTICULAR PURPOSE.`

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_donations">
<input type="hidden" name="business" value="pez4brian@yahoo.com">
<input type="hidden" name="lc" value="US">
<input type="hidden" name="item_name" value="Shotcut">
<input type="hidden" name="no_note" value="0">
<input type="hidden" name="currency_code" value="USD">
<input type="hidden" name="bn" value="PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>


<a href="https://www.jetbrains.com/teamcity/"><img
width="139" height="25" alt="TeamCity logo" src="{{ "/assets/img/logo_teamcity.png" | prepend: site.baseurl }}"
style="border: 0px; float: right; margin-left: 10px" title="JetBrains TeamCity"></a>
These builds are made possible by a <a href="https://www.jetbrains.com/teamcity/">TeamCity</a> server license generously donated by JetBrains.
