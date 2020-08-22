---
layout: page
title: How To Use the Windows SDK
category: notes
---

1. Download and install the following:

  - [Qt Creator](https://www.qt.io/download-open-source/)
  - [Our special build of the Qt 5.9.7 SDK that includes QtWebKit](https://s3.amazonaws.com/misc.meltymedia/shotcut-build/qt-5.9.7-x64-mingw540-seh.txz)  
    Extract it to C:\Qt\qt-5.9.7-x64-mingw540-seh
  - [MinGW-w64 GCC-5.4.0 for 64-bit Windows](https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/5.4.0/threads-posix/seh/x86_64-5.4.0-release-posix-seh-rt_v5-rev0.7z)  
    Extract it to C:\Qt\x86_64-5.4.0-release-posix-seh-rt_v5-rev0
  - [Shotcut SDK (1.6 GB! current version 20.07.11)](https://s3.amazonaws.com/builds.us.meltytech/shotcut/shotcut-win64-sdk-200711.zip)  
    Extract it to C:\Projects

2. Check that the following files are in the correct directories:

  - C:\Qt\x86_64-5.4.0-release-posix-seh-rt_v5-rev0\mingw64\bin\g++.exe
  - C:\Qt\qt-5.9.7-x64-mingw540-seh\bin\qmake.exe

3. Start Qt Creator and choose **Tools &gt; Options &gt; Kits**  
Configure the compilers and SDKs settings in the Kits section.

  - Manually add MinGW's `gdb.exe` debugger:
  ![Debugger Settings](debuggers_build_run.png)
  - Manually add MinGW's `g++.exe` C++ compiler:
  ![Compiler Settings](compilers_build_run2.png)
  - Manually add the Qt version:
  ![Qt Version Settings](versions_build_run.png)
  - Add a project kit from the previously set debug, compiler, and Qt version:
  ![Kit Settings](kits_build_run.png)
  - Click OK

4. Extract the Shotcut SDK .zip file to a new folder in `C:\` named "Projects" (`C:\Projects`).
5. In Qt Creator open `shotcut.pro` from `C:\Projects\Shotcut\src\shotcut`.
6. In the **Configure Project** screen, select your previously configured Kit
   and click **Configure Project**:
   ![Configure Project](configure_project.png)

7. Click **Projects** in the navigation bar on the left side of the Qt Creator window.  
   In the left column of the Shotcut project configuration screen click **Run**
   to show the **Run Settings**:
    ![Run Settings](run_settings.png)

  - In **Deployment** click **Add Deploy Step &gt; Make**.
  - In **Make arguments:** enter "install".
  - In **Run** click **Add... &gt; Custom Executable**;  
    in **Executable:** enter "C:\Projects\Shotcut\shotcut.exe":
    ![Run Settings](run_settings2.png)

8. After clicking **Run** (the green play button in bottom left of Qt Creator),
   you can confirm the newly built executable is the one that is running from the
   **Help &gt; About Shotcut...** dialog: the version will be "adhoc".

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
e.g., frei0r. Instructions for that are not yet included. In other
cases you can use the Git Bash shell environment. Upon opening a Git
Bash shell, enter (or add to ~/.profile and restart the shell):

    export PATH="/c/Qt/x86_64-5.4.0-release-posix-seh-rt_v5-rev0/mingw64/bin:$PATH"
    export QTDIR="c:/Qt/qt-5.9.7-x64-mingw540-seh"
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
