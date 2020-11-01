---
layout: page
title: Technical Notes
---
{% assign sorted_pages = site.pages | sort:"title" %}
<!-- Shotcut Responsive -->
<ins class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-1305424236533187"
    data-ad-slot="3403753557"
    data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% for page in sorted_pages %}
  {% if page.category == 'notes' %}
- #### [{{ page.title }}]({{ site.baseurl }}{{ page.url }})
  {% endif %}
{% endfor %}
