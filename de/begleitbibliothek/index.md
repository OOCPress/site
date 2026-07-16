---
title: Begleitbibliothek
description: Downloads, Field Kits, Quellenmaterial und Companion-Papiere für Out of Context.
lang: de
kicker: Werkbank
---

Das Hauptbuch trägt das Argument. Die Begleitbibliothek trägt die Arbeitsmaterialien: Praxis-Workbook, Quellenkompendium, Appendix-Essays und editierbare Field Kits. Nutzen Sie sie als optionale Vertiefung, nicht als Voraussetzung für die Lektüre.

<div class="filter-bar" data-filter-group>
  <button class="filter-bar__button is-active" type="button" data-filter="all">Alle</button>
  <button class="filter-bar__button" type="button" data-filter="available">Verfügbar</button>
  <button class="filter-bar__button" type="button" data-filter="in-preparation">In Vorbereitung</button>
</div>

<div class="card-grid">
{% for item in site.data.companions.items_de %}
  <a class="companion-card" href="{{ item.url | relative_url }}" data-filter-item="{{ item.status }}">
    {% include status-badge.html status=item.status %}
    <h2>{{ item.title }}</h2>
    <p>{{ item.summary }}</p>
    <dl class="card-meta-list">
      <div><dt>Zweck</dt><dd>{{ item.audience }}</dd></div>
      <div><dt>Verwandte Kapitel</dt><dd>{{ item.related_chapters }}</dd></div>
      <div><dt>Grenze</dt><dd>{{ item.risk_boundary }}</dd></div>
    </dl>
    <small>{{ item.formats }} · Version {{ item.version }} · {{ item.action_label }}</small>
  </a>
{% endfor %}
</div>
