export function initLanguage() {
  document.querySelectorAll('a[href^="/en/"], a[href^="/de/"]').forEach((link) => {
    link.addEventListener("click", () => {
      const lang = link.getAttribute("href")?.split("/")[1];
      if (lang === "en" || lang === "de") {
        localStorage.setItem("ooc-language", lang);
      }
    });
  });
}
