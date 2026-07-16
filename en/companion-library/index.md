---
title: Companion Library
description: Downloads, field kits, source material, and companion papers for Out of Context.
kicker: Workbench
---

The main book carries the argument. The companion library carries the working materials: practice workbook, source compendium, appendix essays, and editable field kits. Treat it as optional deepening, not a prerequisite for reading the book.

<div class="filter-bar" data-filter-group>
  <button class="filter-bar__button is-active" type="button" data-filter="all">All</button>
  <button class="filter-bar__button" type="button" data-filter="available">Available</button>
  <button class="filter-bar__button" type="button" data-filter="in-preparation">In preparation</button>
</div>

<div class="card-grid">
{% for item in site.data.companions.items %}
  <a class="companion-card" href="{{ item.url | relative_url }}" data-filter-item="{{ item.status }}">
    {% include status-badge.html status=item.status %}
    <h2>{{ item.title }}</h2>
    <p>{{ item.summary }}</p>
    <dl class="card-meta-list">
      <div><dt>Purpose</dt><dd>{{ item.audience }}</dd></div>
      <div><dt>Related chapters</dt><dd>{{ item.related_chapters }}</dd></div>
      <div><dt>Boundary</dt><dd>{{ item.risk_boundary }}</dd></div>
    </dl>
    <small>{{ item.formats }} · Version {{ item.version }} · {{ item.action_label }}</small>
  </a>
{% endfor %}
</div>
