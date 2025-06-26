function scrollToElem(id) {
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
  });
}

window.addEventListener("load", () => {
  const heroLinks = document.querySelectorAll(".page-link");
  const themeSwitch = document.querySelector("#theme-switch");
  const themeSwitchContainer = document.querySelector(
    "#theme-toggle-switch-container"
  );

  let theme = "dark";

  function checkTheme() {
    if (theme === "dark") {
      themeSwitch.style.transform = "none";
      document.documentElement.style.setProperty(
        "--background-main",
        "#080a12"
      );
      document.documentElement.style.setProperty("--text", "#FFFFFF");
      document.documentElement.style.setProperty("--accent-main","#5bc0be");
      document.documentElement.style.setProperty("--accent-third","#dbb672");
      themeSwitchContainer.style.backgroundColor = "#080a12";
    } else {
      themeSwitch.style.transform = "translate(100%)";
      document.documentElement.style.setProperty(
        "--background-main",
        "#FFFFFF"
      );
      document.documentElement.style.setProperty("--text", "#000000");
      document.documentElement.style.setProperty("--accent-main","rgb(16, 87, 86)");
      document.documentElement.style.setProperty("--accent-third","rgb(146, 107, 35)");
      themeSwitchContainer.style.backgroundColor = "var(--accent-main)";
    }
  }

  checkTheme();

  heroLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (document.querySelector(link.hash) !== null) {
        e.preventDefault();
        scrollToElem(link.hash);
      }
    });
  });

  themeSwitchContainer.addEventListener("click", (e) => {
    if (theme === "dark") {
      theme = "light";
    } else {
      theme = "dark";
    }

    checkTheme();
  });
});
