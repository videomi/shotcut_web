---
layout: page
title: Linux Distro Package Dependencies
category: notes
---

Ubuntu 14.04 - 16.04
--------------------

required: libsox2, libsdl1.2debian, libjack0, libfftw3-3,
libgstreamer-plugins-base0.10, swh-plugins

Ubuntu 12.04
------------

required: libsox1b, libsdl1.2debian, libjack0, libfftw3-3,
libgstreamer-plugins-base0.10

optional: LADSPA plugins (apt-cache search plugins | grep LADSPA)

Fedora 17
---------

required: SDL libexif jack-audio-connection-kit

optional: ladspa-\*-plugins, for example ladspa-swh-plugins

Fedora 18
---------

required: SDL libexif jack-audio-connection-kit

optional: ladspa-\*-plugins, for example ladspa-swh-plugins

Fedora 19
---------

required: jack-audio-connection-kit mesa-libGLU

optional: ladspa-\*-plugins, for example ladspa-swh-plugins

Generic Directly Dependent Libraries
------------------------------------

basic "platform" libs: libc, libpthread, libm, libdl, librt, libz,
libstdc++, libGL, libX11, libasound (ALSA), libxml2, libpulse,
libgthread, libglib-2.0, libgobject-2.0

free codecs: libvorbis, libvorbisenc, libtheoraenc, libtheoradec,
libogg, libFLAC

common multimedia libs: libSDL-1.2, libjack, libexif, libfftw3
