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

#### Recommended Stable Version: 21.03.21

<div class="OSTEST">
  <p>
  We think your OS is
    <span id="pOSTEST" style="font-style: italic">
      Well, we don't actually know.
      Either JavaScript is disabled, or I am not working quite right.
      So, I am showing you all the options.
    </span>
  </p>
  <p>
    Show downloads for
    <a class="show_links" id='os_linux'>GNU/Linux</a>&nbsp;| 
    <a class="show_links" id='os_mac'>macOS</a>&nbsp;| 
    <a class="show_links" id='os_win'>Microsoft&nbsp;Windows</a>&nbsp;| 
    <a class="show_links" id='os_all'>All</a>
  </p>
</div>

{:.win}
##### Windows
<small class="win">(64-bit Windows 7+)</small>

<div class="win" style='float: right; text-align: center'>
To avoid ads and get automatic updates:<br>
<a href='//www.microsoft.com/store/apps/9PLNFFL3P6LR?cid=storebadge&ocid=badge'><img src='https://developer.microsoft.com/store/badges/images/English_get-it-from-MS.png' alt='Get it from Microsoft Store' style='width: 284px; height: 104px;'/></a>
</div>

{:.win}
| Site 1 (FossHub)     | Site 2 (GitHub)
|-----------------------|-------------------
| [Windows installer](https://www.fosshub.com/Shotcut.html?dwl=shotcut-win64-210321.exe) | [Windows installer](https://github.com/mltframework/shotcut/releases/download/v21.03.21/shotcut-win64-210321.exe)
| [Windows portable zip](https://www.fosshub.com/Shotcut.html?dwl=shotcut-win64-210321.zip) | [Windows portable zip](https://github.com/mltframework/shotcut/releases/download/v21.03.21/shotcut-win64-210321.zip)
{:.withborders}

---
{:.win}

{:.mac}
##### macOS
<small class="mac">(64-bit macOS 10.12+)</small>

{:.mac}
| Site 1 (FossHub) &nbsp; &nbsp; | Site 2 (GitHub)
|-----------------------|-----------------------------
| [**Intel macOS**](https://www.fosshub.com/Shotcut.html?dwl=shotcut-macos-signed-210321.dmg) | [**Intel macOS**](https://github.com/mltframework/shotcut/releases/download/v21.03.21/shotcut-macos-signed-210321.dmg)
| [ARM64 macOS](https://www.fosshub.com/Shotcut.html?dwl=shotcut-macos-ARM64-210518.dmg) | [ARM64 macOS](https://github.com/mltframework/shotcut/releases/download/v21.05.18/shotcut-macos-ARM64-210518.dmg)
{:.withborders}

{:.mac}
An [unsigned app bundle is available on
GitHub](https://github.com/mltframework/shotcut/releases/download/v21.03.21/shotcut-macos-unsigned-210321.dmg) so that you
can modify the build per the Free Software license agreement.

---
{:.mac}

{:.linux}
##### GNU/Linux

<div class="linux" style='float: right; text-align: center'>
<small>To avoid ads and get automatic updates:</small><br>
<a href='https://flathub.org/apps/details/org.shotcut.Shotcut'><img
width='186' height='62' alt='Download on Flathub'
src='https://flathub.org/assets/badges/flathub-badge-en.png'/></a>
<br>
<a href='https://snapcraft.io/shotcut'><img width='186' height='60'
alt='Download on Snap Store' 
src='https://raw.githubusercontent.com/snapcore/snap-store-badges/master/EN/%5BEN%5D-snap-store-black.png'></a>
</div>

<small class="linux">(64-bit Mint 19+, Ubuntu/Pop!_OS 18.04+, Debian 10+, Fedora 28+, Manjaro 17.1+, MX Linux 19+, elementary OS 5+)</small>

{:.linux}
| Site 1 (FossHub)      | Site 2 (GitHub)
|-----------------------|-------------------
| [Linux portable tar](https://www.fosshub.com/Shotcut.html?dwl=shotcut-linux-x86_64-210321.txz) | [Linux portable tar](https://github.com/mltframework/shotcut/releases/download/v21.03.21/shotcut-linux-x86_64-210321.txz)  
| [Linux AppImage](https://www.fosshub.com/Shotcut.html?dwl=shotcut-linux-x86_64-210321.AppImage) | [Linux AppImage](https://github.com/mltframework/shotcut/releases/download/v21.03.21/shotcut-linux-x86_64-210321.AppImage)
{:.withborders}

{:.linux}
**Linux portable tar users**: No install required, simply extract the archive and run
it. You can drag the Shotcut folder to copy and move it wherever you
want. If double-clicking the icon in your file manager does not launch
Shotcut, open Shotcut.app, and try double-clicking the shotcut shell
script. Do not try to run bin/shotcut directly. You may need to **install
JACK** from your distribution.
[Here is a page]({{ "/notes/linux-dependencies/" | prepend: site.baseurl }})
that lists some required packages for specific distributions.

{:.linux}
**Snap Users**: On [snap-enabled systems](https://snapcraft.io/docs/core/install), install
from the store with `snap install shotcut --classic`  
Since this snap is using classic confinement based on the portable zip above,
not all dependencies are bundled, and it has the same run-time requirements as
the portable tar.

---
{:.linux}

##### Other

File checksums for downloads are available in
[md5sum](https://github.com/mltframework/shotcut/releases/download/v21.03.21/md5sums.txt)
or [sha256sum](https://github.com/mltframework/shotcut/releases/download/v21.03.21/sha256sums.txt) format.

[Source code
archive](https://github.com/mltframework/shotcut/releases/download/v21.03.21/shotcut-src-210321.txz)
/ [GitHub repository](https://github.com/mltframework/shotcut)

[Older versions](https://github.com/mltframework/shotcut/releases/) are
available for download.

[Release Notes]({{ "/download/releasenotes/" | prepend: site.baseurl }})

<form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="hosted_button_id" value="XD364WFCHD46N" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>

`This program is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
or FITNESS FOR A PARTICULAR PURPOSE.`

<script src="{{ "/assets/js/platform.js" | prepend: site.baseurl }}"></script>
<script src="{{ "/assets/js/platform-display.js" | prepend: site.baseurl }}"></script>
