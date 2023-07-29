---
layout: page
title: Linux Distro Package Dependencies
category: notes
---

Ubuntu, Debian, and Mint
------------------------

required: libjack0 or libjack-jackd2

Fedora
------

required: jack-audio-connection-kit, libXScrnSaver

Generic Directly Dependent Libraries
------------------------------------

basic "platform" libs: glibc 2.31+, libpthread, libm, libdl, librt, libz, libstdc++,
libGL, libX*, libasound (ALSA), libgthread, libglib-2.0, libgobject-2.0,
libselinux, libwayland-egl, libwayland-client, libwayland-cursor

common multimedia libs: libcairo, libjack
