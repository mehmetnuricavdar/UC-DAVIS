(function () {
  "use strict";

  const tabs = document.querySelectorAll("#tabs>ul>li>a");

  const selectTab = (event) => {
    event.preventDefault();
    tabs.forEach((tab) => {
      tab.removeAttribute("class");
    });

    event.target.className = "active";

    const thisTab = event.target.getAttribute("href");
    const thisContent = document.querySelector(thisTab);
    const oldContent = document.querySelector(".visible");
    oldContent.className = "visuallyhidden";
    oldContent.addEventListener(
      "transitionend",
      () => {
        oldContent.className = "hidden";
        thisContent.className = "visible visuallyhidden";
        setTimeout(() => {
          thisContent.classList.remove("visuallyhidden");
        }, 500);
      },
      { capture: false, once: true, passive: false }
    );
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", selectTab);
  });
})();
