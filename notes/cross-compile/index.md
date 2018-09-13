---
layout: page
title: How To Cross Compile Shotcut for Windows on Linux
category: hide
---

WARNING: Some of this information is out-of-date.

We are currently using 32-bit Ubuntu 14.04.

sudo apt-get install git automake autoconf libtool intltool g++ yasm
libsamplerate-dev libxml2-dev ladspa-sdk libjack-dev libsox-dev
libsdl-dev libgtk2.0-dev liboil-dev libsoup2.4-dev libexif-dev
libtheora-dev libvorbis-dev cmake libglew-dev libeigen3-dev zip nsis
xutils-dev

    cd $HOME

    wget https://s3.amazonaws.com/misc.meltymedia/shotcut-build/gtk%2B-bundle_2.24.10-20120208_win32.zip

    wget https://s3.amazonaws.com/misc.meltymedia/shotcut-build/ladspa_plugins-win-0.4.15.tar.bz2

    wget https://s3.amazonaws.com/misc.meltymedia/shotcut-build/mlt-prebuilt-mingw32.tar.bz2

    wget https://s3.amazonaws.com/misc.meltymedia/shotcut-build/qt-5.2.0-mingw48_32.tar.bz2

    wget https://s3.amazonaws.com/misc.meltymedia/shotcut-build/qt-5.2.0-gcc.tar.bz2

    tar -xjf qt-5.2.0-mingw48_32.tar.bz2

    tar -xjf qt-5.2.0-gcc.tar.bz2

    printf "[Paths]\nPrefix=$HOME/Qt/5.2.0/gcc\n" >Qt/5.2.0/gcc/bin/qt.conf

    mkdir shotcut

    cd shotcut

    wget http://raw.github.com/mltframework/shotcut/master/scripts/build-shotcut.sh

    chmod +x build-shotcut.sh

    ./build-shotcut.sh -o Win32

The artifact produced is named shotcut-setup.exe.

Qt 5.2.0 Upgrade
----------------

This requires a newer version of the mingw32 gcc compiler to produce
binaries compatible with the Qt binaries. I compiled a new one using
[MXE](http://mxe.cc) (going a little on memory):

1. `mkdir -p /opt`
1. `cd /opt`
1. `git clone -b stable !https://github.com/mxe/mxe.git`
1. edit src/gcc.mk file and add configure option --with-dwarf2
1. `make MXE_TARGETS=i686-w64-mingw32 winpthreads`
1. edit src/gcc.mk and set --enable-threads=posix
1. `make MXE_TARGETS=i686-w64-mingw32 gcc`
1. Add /opt/mxe/usr/bin/ to the PATH environment variable

The result was archived and *must* be extracted into /opt:

<https://s3.amazonaws.com/misc.meltymedia/shotcut-build/mxe-gcc-4.8.1.tar.bz2>

The build-shotcut.sh script uses the 32-bit Linux version of Qt 5 tools
qmake and lrelease. Hence, the need to install that. Besides, we use
that to also build 32-bit Linux Shotcut on the same node.

To sign the build, apt-get install libcurl4-openssl-dev and download
this to somewhere in the path:

<https://s3.amazonaws.com/misc.meltymedia/shotcut-build/osslsigncode>

For x64, mxe with gcc 4.8.2 was built:

1. `mkdir -p /opt`
1. `cd /opt`
1. `git clone -b stable !https://github.com/mxe/mxe.git gcc-4.8.2`
1. `cd gcc-4.8.2`
1. edit src/gcc.mk file and add configure option --with-sjlj
1. `make MXE_TARGETS=x86_64-w64-mingw32 winpthreads`
1. edit src/gcc.mk and set --enable-threads=posix
1. `make MXE_TARGETS=x86_64-w64-mingw32 gcc`
1. Add /opt/mxe/gcc-4.8.2/usr/bin/ to the PATH environment variable

The result was archived and *must* be extracted into /opt:

<https://s3.amazonaws.com/misc.meltymedia/shotcut-build/mxe-gcc-4.8.2-x64.tar.bz2>

Qt 5.5.0 Upgrade
----------------

Build gcc 5.1.0 rev0 with SEH exception handling and POSIX threads for
the 64-bit toolchain:

1. `mkdir -p /opt`
1. `cd /opt`
1. `git clone !https://github.com/mxe/mxe.git gcc-5.1.0`
1. `cd gcc-5.1.0`
1. `make MXE_TARGETS=x86_64-w64-mingw32.static winpthreads`
1. edit src/gcc.mk and set --enable-threads=posix
1. `make MXE_TARGETS=x86_64-w64-mingw32.static gcc libgomp`
1. edit src/gcc.mk and change --disable-libgomp to --enable-libgomp
1. `make MXE_TARGETS=x86_64-w64-mingw32.static gcc`
1. Add /opt/mxe/gcc-5.1.0/usr/bin/ to the PATH environment variable

The result was archived and *must* be extracted into /opt:

<https://s3.amazonaws.com/misc.meltymedia/shotcut-build/mxe-gcc-5.1.0-x64.tar.bz2>

Get the x64 version of Qt 5.5 from here:

<https://sourceforge.net/projects/qt64ng/files/qt/x86-64/5.5.0/mingw-5.1/seh/>

Here are the links to download the latest pre-built libraries:

<https://s3.amazonaws.com/misc.meltymedia/shotcut-build/gtk%2B-bundle_2.22.1-20101229_win64.zip>

<https://s3.amazonaws.com/misc.meltymedia/shotcut-build/mlt-prebuilt-mingw32-x64.tar.bz2>

<https://s3.amazonaws.com/misc.meltymedia/shotcut-build/swh-plugins-win64-0.4.15.tar.bz2>
