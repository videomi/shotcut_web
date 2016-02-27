---
layout: page
title: How To Setup a Windows Development Environment
category: notes
---
Support for this is not available. This is mainly for the lead developer
documenting his steps for future use in case he needs to do it again.

1. Download and install the x86-64 version of Qt 5.5, MinGW-w64 5.1
(seh), and Qt Creator from the [Qt64-NG project on
SourceForge](https://sourceforge.net/projects/qt64ng/).
1. In Qt Creator,
choose Tools &gt; Options &gt; Build & Run &gt; Kits. You need to
manually configure your compiler (
`C:\Qt\qt-5.5.0-x64-mingw510r0-seh-rev0\mingw64\bin\g++.exe`), Qt
Version (
`C:\Qt\qt-5.5.0-x64-mingw510r0-seh-rev0\qt-5.5.0-x64-mingw510r0-seh-rev0\bin\qmake.exe`),
and a Kit.
1. Install [Git for
Windows](https://git-for-windows.github.io/). This is optional, but it
will come in handy if you need to rebuild a dependency such as MLT with
a change.
    -   Choose "Run Git from the Windows Command Prompt" to add it to
        the PATH.
    -   Choose "Checkout Windows-style, commit Unix-style line endings."
1. (optional) Download a static build of
[pkg-config](pkg-config.exe) and put it in somewhere in
your path. From Git Bash `echo $PATH` to see your options.
C:\\Windows\\system32 is always one option.
1. This is the difficult
step because we do not yet provide downloadable SDKs. CrossCompile
the Shotcut SDK for Windows on Ubuntu 12.04 or similar (virtual
machine works). You need to run the build-shotcut.sh script with the
additional "-s" option to make a SDK build. You may have to repeat
this step occasionally depending upon if you need an updated
dependency that cannot or do not want to rebuild on
Windows directly.
1. Copy shotcut\_sdk.zip to the Windows machine and
extract it somewhere like C:\\Projects.
1. Run Qt Creator and open
shotcut.pro from C:\\Projects\\Shotcut\\src\\shotcut
1. If you did
not extract the SDK as C:\\Projects\\Shotcut; then in the Shotcut
project configuration screen, Build Settings, Build Steps, add the
following additional arguments to the qmake step and revise the path
as needed:<br>`PREFIX=E:\Projects\Shotcut`
1. In the
Shotcut project configuration screen > Run Settings >
Deployment > Add Deploy Step > Make. In Make arguments, enter
"install"
1. In the Shotcut project configuration screen > Run
Settings > Run > Add a Run Configuration >
Custom Executable. Set Executable to
`C:\Projects\Shotcut\shotcut.exe` and set Working directory to
`C:\Projects\Shotcut`
1. You can confirm the newly built executable is the
one that is running from the About dialog: the version will be
"adhoc."

Rebuilding Dependencies {#rebuilding-dependencies}
-----------------------

The section above just gets you a working environment for the Shotcut
code, but not any of its dependencies. Some of the dependencies included
in the SDK with source code can be opened and used within Qt Creator -
frei0r and webvfx. Instructions for that are not yet included. In other
cases you can use the Git Bash shell environment. Upon opening a Git
Bash shell, enter (or add to ~/.profile and restart the shell):

    export BASE="/Qt/qt-5.5.0-x64-mingw510r0-seh-rev0"
    export PATH="/c$BASE/mingw64/bin:$PATH"
    export QTDIR="c:$BASE/qt-5.5.0-x64-mingw510r0-seh-rev0"
    export CC=gcc
    export CXX=g++
    export PKG_CONFIG_PATH="c:/Projects/Shotcut/lib/pkgconfig"
    export CFLAGS="-Ic:/Projects/Shotcut/include -DHAVE_STRUCT_TIMESPEC"
    export CXXFLAGS="$CFLAGS"
    export LDFLAGS="-Lc:/Projects/Shotcut/lib -Lc:/Projects/Shotcut"
    alias make=mingw32-make

For a project's configure step, often you can supply the prefix as
`/c/Projects/Shotcut` and `make install` will work as expected. However,
sometimes you need to copy DLLs from bin/ or lib/ into
/c/Projects/Shotcut where shotcut.exe resides.

When working with git repos from the SDK on Windows, it can helpful to
issue `git config core.fileMode false` to prevent unchanged files from
appearing in git status and git diff.

Command Line Debugging {#command-line-debugging}
----------------------

When using gdb at the command line to debug, using Ctrl+C to break
execution will also exit the debugger. There is a program called
[breakgdb.exe](breakgdb.exe) ([source](debugbreak.c)) that can be used to break
execution.
