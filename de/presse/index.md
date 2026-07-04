---
title: Presse
description: Pressekit, Beschreibungen, Themen und Medienkontakt für Out of Context.
lang: de
kicker: Presse
---

## Kurzbeschreibung

{{ site.data.press.short_description_de }}

## Mittlere Beschreibung

{{ site.data.press.medium_description_de }}

## Themen

{% for topic in site.data.press.topics_de %}
- {{ topic }}
{% endfor %}

## Kontakt

[{{ site.data.press.contact }}](mailto:{{ site.data.press.contact }})
