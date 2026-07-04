---
title: Kaufen
description: Formate und Vertriebswege für Out of Context, Zweite Ausgabe.
lang: de
kicker: Storefront
---

Amazon bleibt ein Kanal. Diese Website ist der kanonische Ort für Formate, Companion-Zugang, Updates und direkte digitale Wege, sobald sie aktiv sind.

<div class="card-grid">
{% for item in site.data.products.items_de %}
  <a class="product-card" href="{{ item.url | relative_url }}">
    {% include status-badge.html status=item.status %}
    <h2>{{ item.title }}</h2>
    <p>{{ item.summary }}</p>
    <dl class="card-meta-list">
      <div><dt>Enthalten</dt><dd>{{ item.includes }}</dd></div>
      <div><dt>Lieferung</dt><dd>{{ item.delivery }}</dd></div>
      <div><dt>Support</dt><dd>{{ item.legal_support }}</dd></div>
    </dl>
    <small>{{ item.accessibility }}</small>
  </a>
{% endfor %}
</div>

Bevor Commerce live geht, enthält die Website finale AGB-, Datenschutz-, Barrierefreiheits- und Widerrufs-/Rückerstattungswege.
