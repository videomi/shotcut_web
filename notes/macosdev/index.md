---
layout: page
title: How To Use the macOS SDK
category: notes
---

1. Download and install the following:
  - Qt Creator from the [Qt project](https://www.qt.io/download-open-source/) or your distribution packages.
  - Qt SDK version 5.15
  - [Shotcut SDK (1.6 GB, current version 22.11.25, Intel build)](https://s3.amazonaws.com/builds.us.meltytech/shotcut/shotcut-macos-sdk-221125.txz)  
    Extract it to $HOME/Projects

2. Extract the Shotcut SDK `.txz` file from the folder `$HOME/Projects`.
2. Edit the `includedir` and `libdir` keys in the `mltframework-7.pc` and `mlt++-7.pc` files in `$HOME/Projects/Shotcut/Contents/Frameworks/lib/pkgconfig` to have the proper prefix: `$HOME/Projects/Shotcut/Contents/Frameworks/` (you need to expand `$HOME` yourself).
3. Create a symbolic link `$HOME/Projects/Shotcut.app` pointing to `$HOME/Projects/Shotcut`.
3. In Qt Creator open `$HOME/Projects/Shotcut/src/shotcut/CMakeLists.txt`.
4. In the Shotcut project configuration screen find **Build Settings**.
4. Under **Build Environment**, add or edit the key/value pairs:
   - `PKG_CONFIG_PATH` = `${HOME}/Projects/Shotcut/Contents/Frameworks/lib/pkgconfig`
4. Under **CMake &gt; Current Configuration** add or edit the key/value pairs:
   - `CMAKE_INSTALL_PREFIX` = `~/Projects`
   - `CMAKE_INSTALL_RPATH` = `@executable_path/../Frameworks`
   - `CMAKE_INSTALL_RPATH_USE_LINK_PATH` = ON

   Alternatively, in **Addtional CMake options** enter `-DCMAKE_INSTALL_PREFIX=~/Projects -DCMAKE_INSTALL_RPATH=@executable_path/../Frameworks -DCMAKE_INSTALL_RPATH_USE_LINK_PATH=ON` and click **Run CMake**.

5. In the Shotcut project configuration screen find **Run Settings**.  
   - Under **Run &gt; Run configuration** click **Add &gt; Custom Executable &gt; Executable** add `$HOME/Projects/Shotcut/Contents/MacOS/Shotcut`
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

`for f in ~/Projects/Shotcut/Contents/Frameworks/lib/pkgconfig/*.pc; do sed -i .bak -e "s,/Users/ddennedy/shotcut-sdk/shotcut/build,$HOME/Projects/Shotcut/Contents/Frameworks," -e 's,Frameworks/lib,Frameworks,' -e 's,${exec_prefix}/lib,${exec_prefix},' $f ; done`

You might want to put the following into ~/.profile or a setup script:

```
export PATH="$HOME/Projects/Shotcut/Contents/MacOS:$PATH"
export QTDIR="$HOME/Qt/5.15.2/clang_64"
export PKG_CONFIG_PATH="$HOME/Projects/Shotcut/Contents/Frameworks/lib/pkgconfig"
export CFLAGS="-I/opt/local/include -DRELOCATABLE"
export CXXFLAGS="$CFLAGS"
export LDFLAGS="-L/opt/local/lib/libomp"
```

Sometimes, you need to `make distclean` and re-run `configure` to make a clean
in-tree (non-shadow) build. MLT has a `./reconfigure` script that invokes the
configure with the same arguments as the previous run.
