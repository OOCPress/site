---
title: Buy
description: Format and sales routes for Out of Context, Second Edition.
kicker: Storefront
---

Amazon will remain one channel. This site is the canonical home for formats, companion access, updates, and direct digital routes once active.

<div class="card-grid">
{% for item in site.data.products.items %}
  <a class="product-card" href="{{ item.url | relative_url }}">
    {% include status-badge.html status=item.status %}
    <h2>{{ item.title }}</h2>
    <p>{{ item.summary }}</p>
    <dl class="card-meta-list">
      <div><dt>Included</dt><dd>{{ item.includes }}</dd></div>
      <div><dt>Delivery</dt><dd>{{ item.delivery }}</dd></div>
      <div><dt>Support</dt><dd>{{ item.legal_support }}</dd></div>
    </dl>
    <small>{{ item.accessibility }}</small>
  </a>
{% endfor %}
</div>

Before commerce goes live, the site will include final terms, privacy, accessibility, and withdrawal/refund routes.
