---
layout: page
title: How To Use the macOS SDK
category: notes
---

1. Download and install the following:
  - Qt Creator from the [Qt project](https://www.qt.io/download-open-source/) or your distribution packages.
  - Qt SDK version 5.12 or later
  - [Shotcut SDK (985 MB current version 21.08.29)](https://s3.amazonaws.com/builds.us.meltytech/shotcut/shotcut-macos-sdk-210829.txz)  
    Extract it to $HOME/Projects

2. Extract the Shotcut SDK .txz file to a new folder in $HOME called "Projects".
3. In Qt Creator open shotcut.pro from $HOME/Projects/Shotcut/src/shotcut.
4. In the Shotcut project configuration screen find **Build Settings**.  
   Under **Build steps &gt; qmake &gt; Additional arguments** enter  
   `PREFIX=../../.. QMAKE_RPATHDIR=@executable_path/../Frameworks`
5. In the Shotcut project configuration screen find **Run Settings**.  
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

6. After clicking **Run**, you can confirm the newly built executable is the one
   that is running from the **About** dialog: the version will be today's date.


Rebuilding Dependencies {#rebuilding-dependencies}
-----------------------

You still might need to get some dependencies from MacPorts (or Homebrew, untested).

You can use the following command to revise all of the pkg-config files to
your installation path:

`for f in Shotcut/Contents/Frameworks/lib/pkgconfig/*.pc; do sed -i .bak -e "s,/Users/ddennedy/BuildAgent/work/ef55b932ce3c3e94/shotcut/build,$HOME/Projects/Shotcut/Contents/Frameworks," -e 's,Frameworks/lib,Frameworks,' -e 's,${exec_prefix}/lib,${exec_prefix},' $f ; done`

You might want to put the following into ~/.profile or a setup script:

```
export PATH="$HOME/Projects/Shotcut/Contents/MacOS:$PATH"
export QTDIR="$HOME/Qt/5.8.7/clang_64"
export PKG_CONFIG_PATH="$HOME/Projects/Shotcut/Contents/Frameworks/lib/pkgconfig"
export CFLAGS="-I/opt/local/include -DRELOCATABLE"
export CXXFLAGS="$CFLAGS"
export LDFLAGS="-L/opt/local/lib/libomp"
```

Sometimes, you need to `make distclean` and re-run `configure` to make a clean
in-tree (non-shadow) build. MLT has a `./reconfigure` script that invokes the
configure with the same arguments as the previous run.
