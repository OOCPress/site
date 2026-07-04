---
title: Rahmenwerke
description: Das Fünf-Rahmenwerke-Betriebssystem, um kontexttragende Arbeit wieder aufzubauen.
lang: de
kicker: Betriebssystem
---

Die fünf Rahmenwerke sind kein Persönlichkeitsmodell, kein Transformationsprogramm und keine neue Bürokratie. Sie sind die minimalen Container, die eine Organisation braucht, wenn Freiheit Urteilskraft statt Verwirrung hervorbringen soll.

Die Sequenz ist bewusst praktisch: Wert sichtbar machen, die Vier Kontextringe trennen, Entscheidungsrechte benennen, Konflikt routen und Formation schützen. Zeitliche Architektur - Review-Rhythmen, Aufzeichnungen, Übergaben und geteilte Präsenz - hält das System lebendig.

<div class="card-grid card-grid--frameworks">
{% for item in site.data.frameworks.items_de %}
  <a class="framework-card" href="{{ item.url | relative_url }}">
    <span>{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
    <h2>{{ item.title }}</h2>
    <p>{{ item.subtitle }}</p>
    <small>{{ item.repair }}</small>
  </a>
{% endfor %}
</div>
