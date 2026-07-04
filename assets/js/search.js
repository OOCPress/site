let pagefind;

function searchMessages() {
  if (document.documentElement.lang === "de") {
    return {
      empty: "Geben Sie einen Suchbegriff ein.",
      unavailable: "Die Suche ist nach dem Pagefind-Build verfügbar.",
      none: "Keine Ergebnisse gefunden."
    };
  }

  return {
    empty: "Type a search term to begin.",
    unavailable: "Search is available after the Pagefind build step.",
    none: "No results found."
  };
}

async function loadPagefind() {
  if (pagefind) return pagefind;
  try {
    pagefind = await import(`${window.OOC?.baseurl || ""}/pagefind/pagefind.js`);
    await pagefind.init();
    return pagefind;
  } catch (_error) {
    return null;
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function runSearch(query, resultsNode) {
  const messages = searchMessages();
  const trimmed = query.trim();
  if (!trimmed) {
    resultsNode.innerHTML = `<p>${messages.empty}</p>`;
    return;
  }

  const pf = await loadPagefind();
  if (!pf) {
    resultsNode.innerHTML = `<p>${messages.unavailable}</p>`;
    return;
  }

  const search = await pf.search(trimmed);
  const results = await Promise.all(search.results.slice(0, 10).map((result) => result.data()));

  if (!results.length) {
    resultsNode.innerHTML = `<p>${messages.none}</p>`;
    return;
  }

  resultsNode.innerHTML = results.map((result) => `
    <article class="search-result">
      <a href="${result.url}">${escapeHtml(result.meta.title || result.url)}</a>
      <small>${[result.filters?.type?.[0], result.meta.status, result.url].filter(Boolean).map(escapeHtml).join(" · ")}</small>
      <p>${result.excerpt || ""}</p>
    </article>
  `).join("");
}

function bindSearchInput(input, results) {
  if (!input || !results) return;
  let timeout;
  input.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => runSearch(input.value, results), 180);
  });
}

export function initSearch() {
  const panel = document.querySelector("[data-search-panel]");
  const openers = document.querySelectorAll("[data-search-open]");
  const closers = document.querySelectorAll("[data-search-close]");
  const panelInput = panel?.querySelector("[data-search-input]");
  const panelResults = panel?.querySelector("[data-search-results]");
  const pageInput = document.querySelector(".search-form--page [data-search-input]");
  const pageResults = document.querySelector(".search-form--page ~ [data-search-results]");
  let lastSearchTrigger = null;

  const openPanel = (trigger) => {
    if (!panel) return;
    lastSearchTrigger = trigger || document.activeElement;
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    panelInput?.focus();
  };

  const closePanel = () => {
    if (!panel) return;
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    if (lastSearchTrigger instanceof HTMLElement) {
      lastSearchTrigger.focus();
    }
  };

  openers.forEach((button) => button.addEventListener("click", () => openPanel(button)));
  closers.forEach((button) => button.addEventListener("click", closePanel));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && panel?.classList.contains("is-open")) {
      closePanel();
    }
  });

  bindSearchInput(panelInput, panelResults);
  bindSearchInput(pageInput, pageResults);

  if (pageInput && pageResults) {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) {
      pageInput.value = q;
      runSearch(q, pageResults);
    }
  }
}
