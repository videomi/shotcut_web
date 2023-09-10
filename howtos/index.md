---
layout: page
title: How To Articles
---
{% assign sorted_pages = site.pages | sort:"title" %}

<div data-aaad='true' data-aa-adunit='/22815767462/shotcutorg_Desktop_728_1'></div>
<div data-aaad='true' data-aa-adunit='/22815767462/shotcutorg_Mobile_300_1'></div>
<div data-aaad='true' data-aa-adunit='/22815767462/shotcutcom_Desktop_728_1'></div>
<div data-aaad='true' data-aa-adunit='/22815767462/shotcutcom_Mobile_300_1'></div>
<div data-aaad='true' data-aa-adunit='/22815767462/shotcutapp_Desktop_728_1'></div>
<div data-aaad='true' data-aa-adunit='/22815767462/shotcutapp_Mobile_300_1'></div>

- #### [User Manual](https://forum.shotcut.org/c/docs/docs-english/)
- #### [Tutorials in the Forum](https://forum.shotcut.org/c/tutorial/5)

{% for page in sorted_pages %}
  {% if page.category == 'help' %}
- #### [{{ page.title }}]({{ site.baseurl }}{{ page.url }})
  {% endif %}
{% endfor %}
