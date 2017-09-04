---
layout: page
title: Linux Distro Package Dependencies
category: notes
---

Ubuntu, Debian, and Mint
------------------------

required: libsox2 libsdl2-2.0-0 libjack0

optional: swh-plugins

Fedora
------

required: jack-audio-connection-kit mesa-libGLU SDL2

optional: ladspa-swh-plugins

Generic Directly Dependent Libraries
------------------------------------

basic "platform" libs: libc, libpthread, libm, libdl, librt, libz,
libstdc++, libGL, libX11, libasound (ALSA), libxml2, libpulse,
libgthread, libglib-2.0, libgobject-2.0

free codecs: libvorbis, libvorbisenc, libtheoraenc, libtheoradec,
libogg, libFLAC

common multimedia libs: libSDL-2.0, libjack, libexif
