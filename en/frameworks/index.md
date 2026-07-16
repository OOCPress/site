---
title: Frameworks
description: The five-framework operating system for rebuilding context-bearing work.
kicker: Operating System
---

The five frameworks are not a personality model, a transformation program, or a new bureaucracy. They are the minimum containers an organization needs if it wants freedom to produce judgment rather than confusion.

The sequence is deliberately practical: make value legible, separate the Four Rings of Context, name decision rights, route conflict, and protect the rung. Temporal architecture - review rhythms, records, handoffs, and shared presence - keeps the whole system alive, rather than standing as a sixth framework.

<div class="card-grid card-grid--frameworks">
{% assign frameworks = site.frameworks | where_exp: "item", "item.order < 60" | sort: 'order' %}
{% for item in frameworks %}
  <a class="framework-card" href="{{ item.url | relative_url }}">
    <span>{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
    <h2>{{ item.title }}</h2>
    <p>{{ item.subtitle }}</p>
    <small>{{ item.repair }}</small>
  </a>
{% endfor %}
</div>

<div class="section__header section__header--tight">
  <p class="kicker">Getting Started</p>
  <h2>Turning the five frameworks into a sequence.</h2>
  <p>Not a sixth framework - a practical adoption path built from the five above.</p>
</div>

<div class="card-grid card-grid--sequence">
{% assign sequence = site.frameworks | where_exp: "item", "item.order >= 60" %}
{% for item in sequence %}
  <a class="framework-card framework-card--sequence" href="{{ item.url | relative_url }}">
    <h2>{{ item.title }}</h2>
    <p>{{ item.subtitle }}</p>
    <small>{{ item.repair }}</small>
  </a>
{% endfor %}
</div>
