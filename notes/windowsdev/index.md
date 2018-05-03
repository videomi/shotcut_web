---
layout: page
title: How To Setup a Windows Development Environment
category: notes
---

1. Download and install the following:
  - [Qt Creator](https://www.qt.io/download-open-source/)
  - [Our special build of the Qt 5.6.1 SDK that includes QtWebKit](https://s3.amazonaws.com/misc.meltymedia/shotcut-build/qt-5.6.1-x64-mingw510r0-seh.tar.bz2)    
    Extract it to C:\Qt\qt-5.6.1-x64-mingw510r0-seh
  - [MinGW 5.1 for Windows 64 bit](https://s3.amazonaws.com/misc.meltymedia/shotcut-build/x86_64-5.1.0-release-posix-seh-rt_v4-rev0.7z)  
    Extract it to C:\Qt\x86_64-5.1.0-release-posix-seh-rt_v4-rev0
  - [Shotcut SDK (1.24 GB! current version 18.05.03)](http://builds.us.meltytech.s3.amazonaws.com/shotcut/shotcut-win64-sdk-180503.zip)  
    Extract it to C:\Projects

2. Check that the following files are in the correct directories:
  - C:\Qt\x86_64-5.1.0-release-posix-seh-rt_v4-rev0\mingw64\bin\g++.exe
  - C:\Qt\qt-5.6.1-x64-mingw510r0-seh\bin\qmake.exe

3. Start Qt Creator and choose **Tools &gt; Options &gt; Build &amp; Run**  
Configure all of your settings in the Build & Run section.
  - Manually set the debugger to MinGW's gdb.exe.
  ![Debug Settings](debuggers_build_run.png)
  - Manually set the compiler to MinGW's g++.exe
  ![Compiler(2/2) Settings](compilers_build_run2.png)
  - Manually set the Qt version.
  ![Version Settings](versions_build_run.png)
  - Configure the project kit from the previously set debug, compiler, and Qt version.
  ![Kit Settings](kits_build_run.png)  

4. Extract the Shotcut SDK .zip file to a new folder in C:\ called "Projects" (C:\Projects).
5. In Qt Creator open shotcut.pro from C:\Projects\Shotcut\src\shotcut.
6. In the Shotcut project configuration screen find **Run Settings**.
  - Go to **Deployment &gt; Add Deploy Step &gt; Make**. In **Make arguments**, enter "install"
  - Go to **Run &gt; Add &gt; Custom Executable**.  
    Set **Executable** to "C:\Projects\Shotcut\shotcut.exe"
    ![Run Settings](run_settings.png)

7. Set your build settings in the Shotcut project configuration so that the build steps include MinGW make steps.
    <a href="build_settings.png">
    <img src="build_settings.png" alt="Project"></a>
8. After clicking Run, you can confirm the newly built executable is the one that is running from the About
   dialog: the version will be "adhoc".

### Final Project

<a href="project.png">
<img src="project.png" alt="Project"></a>
<a href="final.png">
<img src="final.png" alt="Final"></a>

Rebuilding Dependencies {#rebuilding-dependencies}
-----------------------

The section above just gets you a working environment for the Shotcut
code, but not any of its dependencies. Some of the dependencies included
in the SDK with source code can be opened and used within Qt Creator -
frei0r and webvfx. Instructions for that are not yet included. In other
cases you can use the Git Bash shell environment. Upon opening a Git
Bash shell, enter (or add to ~/.profile and restart the shell):

    export PATH="/c/Qt/x86_64-5.1.0-release-posix-seh-rt_v4-rev0/mingw64/bin:$PATH"
    export QTDIR="c:/Qt/qt-5.6.1-x64-mingw510r0-seh"
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
[breakgdb.exe](https://s3.amazonaws.com/misc.meltymedia/shotcut-build/breakgdb.exe) ([source](https://s3.amazonaws.com/misc.meltymedia/shotcut-build/debugbreak.c)) that can be used to break
execution.
