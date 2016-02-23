---
layout: page
title: User Interface Conventions
---

1. Use GridLayout with 3 columns. First column for label, 3rd column for
undo button, middle column for everything else. That means you might
need a RowLayout for some clusters of controls in the middle column (ala
SliderSpinner). The RowLayout might need a spacer item with
fillWidth:true or similar to prevent controls from stretching way out
and looking stupid. The SliderSpinners look good stretched out, but I
dislike overly stretched combo boxes.
When we add parameter animation, there will be a fourth column for the stopwatch button to add
the parameter to the animation timeline.

1. Right align the label. I know
some people may not like it, but it is the direction I chose and want to
stay in. I want to maintain style consistency.

1. Regarding labels more broadly:
  - Do not follow field labels with a colon! You see, the left edge of
    the control to which the label is right-aligned already already
    provides a separator. The exception, of course, is when there is
    another label to the right or something else with no edge/box.
  - Capitalize the first word only for field labels.
  - Capitalize each word for buttons, menu items, and
    control-group headings.
  - Only add the ellipses on menu items that open a dialog, not
    on buttons. I find the ellipses to be ugly without really adding
    much value, and on buttons they just make them needlessly wider. 1 I
    removed the "spacing: 8" on rows & between columns. The QWidget
    default spacing is 5, and the Quick default spacing is 4. Removing
    the 8 makes the QML more consistent with QWidget defaults without
    having to clutter our QML with spacing details.
