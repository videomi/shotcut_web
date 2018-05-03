---
layout: page
title: How To Use the Linux SDK
category: notes
---

1. Download and install the following:
  - Qt Creator from the [Qt project](https://www.qt.io/download-open-source/) or your distribution packages.
  - [Our special build of the Qt 5.6.1 SDK that includes QtWebKit](https://s3.amazonaws.com/misc.meltymedia/shotcut-build/qt-5.6.1-ubuntu14.04-x86_64.tar.bz2)    
    Extract it to $HOME/Qt
  - [Shotcut SDK (546 MiB! current version 18.05.03)](http://builds.us.meltytech.s3.amazonaws.com/shotcut/shotcut-linux-x86_64-sdk-180503.tar.bz2)    
    Extract it to $HOME/Projects

2. Start Qt Creator and choose **Tools &gt; Options &gt; Build &amp; Run**  
Configure all of your settings in the Build & Run section.
  - Manually set the Qt version.
  ![Version Settings](versions_build_run.png)
  - Configure the project kit from the previously set Qt version.
  ![Kit Settings](kits_build_run.png)  

3. Extract the Shotcut SDK .bz2 file to a new folder in $HOME called "Projects".
4. In Qt Creator open shotcut.pro from $HOME/Projects/Shotcut/Shotcut.app/src/shotcut.
5. In the Shotcut project configuration screen find **Build Settings**.  
   - Under **Build steps &gt; qmake &gt; Additional arguments** add "MLT_PATH=../../.. PREFIX=../../.."
   - Under **Build Steps &gt; Make &gt; Make arguments** add "-j" for faster parallel compilation.
6. In the Shotcut project configuration screen find **Run Settings**.  
   - Under **Deployment** click **Add Deploy Step &gt; Make**, and in **Make arguments** add "install".  
   - Under **Run &gt; Run configuration** click **Add &gt; Custom Executable &gt; Executable** add "/home/_____/Projects/Shotcut/Shotcut.app/bin/shotcut".  
   - Under **Run Environment &gt; Details** add the following environment variables:
     - Set LD_LIBRARY_PATH to /home/_____/Projects/Shotcut/Shotcut.app/lib:/home/_____/Qt/5.6.1/gcc_64/lib:/home/_____/Projects/Shotcut/Shotcut.app/src/build-shotcut-Desktop_Qt_5_6_1_GCC_64bit-Debug/mvcp:/home/_____/Projects/Shotcut/Shotcut.app/src/build-shotcut-Desktop_Qt_5_6_1_GCC_64bit-Debug/CuteLogger
     - Set MLT_DATA to /home/_____/Projects/Shotcut/Shotcut.app/share/mlt
     - Set MLT_PRESETS_PATH to /home/_____/Projects/Shotcut/Shotcut.app/share/mlt/presets
     - Set MLT_PROFILES_PATH to /home/_____/Projects/Shotcut/Shotcut.app/share/mlt/profiles
     - Set MLT_REPOSITORY to /home/_____/Projects/Shotcut/Shotcut.app/lib/mlt
     - Set QML2_IMPORT_PATH to /home/_____/Qt/5.6.1/gcc_64/qml
     - Set QT_PLUGIN_PATH to /home/_____/Qt/5.6.1/gcc_64/plugins

7. Go back to **Edit** mode, right-click "shotcut" in the project tree, and choose **Rebuild**.

8. After clicking **Run**, you can confirm the newly built executable is the one
   that is running from the **About** dialog: the version will be today's date.
