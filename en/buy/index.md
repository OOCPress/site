---
title: Buy
description: Format and sales routes for Out of Context, Second Edition.
kicker: Storefront
---

Amazon will remain one channel. This site is the canonical home for formats, companion access, updates, and direct digital routes once active.

<div class="card-grid">
{% assign products = site.products | sort: 'order' %}
{% for item in products %}
  <a class="product-card" href="{{ item.url | relative_url }}">
    {% include status-badge.html status=item.status %}
    <h2>{{ item.title }}</h2>
    <p>{{ item.subtitle }}</p>
    <small>Delivery, price, and release details will be finalized before launch.</small>
  </a>
{% endfor %}
</div>

Before commerce goes live, the site will include final terms, privacy, accessibility, and withdrawal/refund routes.
