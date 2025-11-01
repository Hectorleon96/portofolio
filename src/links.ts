const headerLinks = document.querySelectorAll<HTMLAnchorElement>(
  "header a[data-header-link]"
);

const savedLink = sessionStorage.getItem("activeLink");

if (savedLink) {
  headerLinks.forEach((link) => {
    link.dataset.headerActive =
      link.dataset.headerLink === savedLink ? "true" : "false";
  });
}

headerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerLinks.forEach((l) => (l.dataset.headerActive = "false"));
    link.dataset.headerActive = "true";

    const linkId = link.dataset.headerLink ?? "";
    sessionStorage.setItem("activeLink", linkId);
  });
});

const headerTitle = document.querySelector<HTMLTitleElement>("h1")!;

headerTitle.addEventListener("click", () => {
  sessionStorage.removeItem("activeLink");
  headerLinks.forEach((link) => (link.dataset.headerActive = "false"));
});
