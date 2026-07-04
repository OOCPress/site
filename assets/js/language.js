export function initLanguage() {
  document.querySelectorAll('a[href*="/en/"], a[href*="/de/"]').forEach((link) => {
    link.addEventListener("click", () => {
      const lang = new URL(link.href, window.location.href).pathname
        .split("/")
        .find((part) => part === "en" || part === "de");
      if (lang === "en" || lang === "de") {
        localStorage.setItem("ooc-language", lang);
      }
    });
  });
}
