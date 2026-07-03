---
title: Companion Library
description: Downloads, field kits, source material, and companion papers for Out of Context.
kicker: Workbench
---

The main book carries the argument. The companion library carries the working materials: practice workbook, source compendium, appendix essays, and editable field kits. Treat it as optional deepening, not a prerequisite for reading the book.

<div class="filter-bar" data-filter-group>
  <button class="filter-bar__button is-active" type="button" data-filter="all">All</button>
  <button class="filter-bar__button" type="button" data-filter="coming-with-release">Coming with release</button>
  <button class="filter-bar__button" type="button" data-filter="in-preparation">In preparation</button>
</div>

<div class="card-grid">
{% assign companions = site.companions | sort: 'order' %}
{% for item in companions %}
  <a class="companion-card" href="{{ item.url | relative_url }}" data-filter-item="{{ item.status }}">
    {% include status-badge.html status=item.status %}
    <h2>{{ item.title }}</h2>
    <p>{{ item.subtitle }}</p>
    <small>{{ item.formats | join: ', ' }} · Version {{ item.version }}</small>
  </a>
{% endfor %}
</div>
