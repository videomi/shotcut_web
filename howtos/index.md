---
layout: page
title: How To Articles
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

- #### [User Manual](https://forum.shotcut.org/c/docs/docs-english/)
- #### [Tutorials in the Forum](https://forum.shotcut.org/c/tutorial/5)

{% for page in sorted_pages %}
  {% if page.category == 'help' %}
- #### [{{ page.title }}]({{ site.baseurl }}{{ page.url }})
  {% endif %}
{% endfor %}
