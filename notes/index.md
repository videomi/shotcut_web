---
layout: page
title: Technical Notes
---
{% assign sorted_pages = site.pages | sort:"title" %}

<div data-aaad='true' data-aa-adunit='/22815767462/shotcutorg_Desktop_LargeAd_1'></div>
<div data-aaad='true' data-aa-adunit='/22815767462/shotcutorg_Mobile_300_1'></div>
<div data-aaad='true' data-aa-adunit='/22815767462/shotcutcom_Desktop_LargeAd_1'></div>
<div data-aaad='true' data-aa-adunit='/22815767462/shotcutcom_Mobile_300_1'></div>
<div data-aaad='true' data-aa-adunit='/22815767462/shotcutapp_Desktop_LargeAd_1'></div>
<div data-aaad='true' data-aa-adunit='/22815767462/shotcutapp_Mobile_300_1'></div>

{% for page in sorted_pages %}
  {% if page.category == 'notes' %}
- #### [{{ page.title }}]({{ site.baseurl }}{{ page.url }})
  {% endif %}
{% endfor %}
