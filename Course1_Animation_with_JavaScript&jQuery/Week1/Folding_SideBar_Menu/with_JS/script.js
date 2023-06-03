(function () {
  const subMenu = document.querySelectorAll("ul li ul");

  const hideSubMenu = () => {
    subMenu.forEach((i) => (i.className = "hide-menu"));
  };
  hideSubMenu();

  const menuLinks = document.querySelectorAll(".menulink");
  menuLinks.forEach((i) =>
    i.addEventListener("click", (event) => {
      event.preventDefault();
      const thisMenu = i.parentNode.querySelector("ul");
      // thisMenu.className = "show-menu";
      if (thisMenu.classList.contains("hide-menu")) {
        hideSubMenu();

        thisMenu.className = "show-menu";
      } else {
        thisMenu.className = "hide-menu";
      }
    })
  );
})();
