const showMenu = (toggleID, navID) => {
  const toggle = document.getElementById(toggleID);
  nav = document.getElementById(navID);
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");

    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

const dropdownItems = document.querySelectorAll(".dropdown__item");

dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector(".dropdown__button");
  dropdownButton.addEventListener("click", () => {
    const showDropdown = document.querySelector(".show-dropdown");
    toggleItem(item);

    if (showDropdown && showDropdown != item) {
      toggleItem(showDropdown);
    }
  });
});
const toggleItem = (item) => {
  const dropdownContainer = item.querySelector(".dropdown__container");
  if (item.classList.contains("show-dropdown")) {
    dropdownContainer.removeAttribute("style");
    item.classList.remove("show-dropdown");
  } else {
    dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
    item.classList.add("show-dropdown");
  }
};

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".sidenav a[href^='#']");

  function scrollSuave(event) {
    event.preventDefault();

    const hrefItem = event.currentTarget.getAttribute("href");
    const section = document.querySelector(hrefItem);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollSuave);
  });
}

initScrollSuave();
