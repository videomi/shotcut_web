---
layout: page
title: How To Use the macOS SDK
category: notes
---

1. Download and install the following:
  - Qt Creator from the [Qt project](https://www.qt.io/download-open-source/) or your distribution packages.
  - [Our special build of the Qt 5.6.1 SDK that includes QtWebKit](https://s3.amazonaws.com/misc.meltymedia/shotcut-build/qt-5.6.1-osx-x86_64.tar.bz2)    
    Extract it to $HOME
  - [Shotcut SDK (541 MiB! current version 18.10.19)](http://builds.us.meltytech.s3.amazonaws.com/shotcut/shotcut-macos-sdk-181019.txz)    
    Extract it to $HOME/Projects

2. Start Qt Creator and choose **Qt Creator &gt; Preferences... &gt; Kits**  
Configure all of your settings in the Kits section.
  - Manually set the Qt version.
  ![Qt Versions](qt_versions.png)
  - Configure the project kit from the previously set Qt version.
  ![Kits](kits.png)  

3. Extract the Shotcut SDK .txz file to a new folder in $HOME called "Projects".
4. In Qt Creator open shotcut.pro from $HOME/Projects/Shotcut/src/shotcut.
5. In the Shotcut project configuration screen find **Build Settings**.  
   - Under **Build steps &gt; qmake &gt; Additional arguments** enter  
   `PREFIX=../../.. QMAKE_RPATHDIR=@executable_path/../Frameworks`
   - Under **Build Steps &gt; Make &gt; Make arguments** add "-j" for faster parallel compilation.
6. In the Shotcut project configuration screen find **Run Settings**.  
   - Under **Deployment** click **Add Deploy Step &gt; Make**, and in **Make arguments** add "install".  
   - Under **Deployment** click **Add Deploy Step &gt; Custom Process Step**,
   in **Command** enter "cp", and in **Arguments** enter  
   `-p src/Shotcut.app/Contents/MacOS/Shotcut ../../Contents/MacOS`
   - Under **Run &gt; Run configuration** click **Add &gt; Custom Executable &gt; Executable** add   `$HOME/Projects/Shotcut/Contents/MacOS/Shotcut`
   - Under **Run Environment &gt; Details** add the following environment variables:
   - Set `QML2_IMPORT_PATH` to `${QTDIR}/qml`
   - Set `QT_PLUGIN_PATH` to `${QTDIR}/plugins`

<!--
     - Set `MLT_DATA` to `${HOME}/Projects/Shotcut/src/mlt/src/modules`
     - Set `MLT_PRESETS_PATH` to `${HOME}/Projects/Shotcut/src/mlt/presets`
     - Set `MLT_PROFILES_PATH` to `${HOME}/Projects/Shotcut/src/mlt/profiles`
     - Set `MLT_REPOSITORY` to `${HOME}/Projects/Shotcut/src/mlt/src/modules`
-->


8. After clicking **Run**, you can confirm the newly built executable is the one
   that is running from the **About** dialog: the version will be today's date.
