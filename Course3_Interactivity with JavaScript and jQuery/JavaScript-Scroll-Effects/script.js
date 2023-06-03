(function () {
  "use strict";
  const smoothScroll = (event) => {
    event.preventDefault();
    const targetID = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetID);
    const originalTop =
      Math.floor(targetSection.getBoundingClientRect().top) - 200;
    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
  };
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  window.addEventListener("load", () => {
    const posts = document.querySelectorAll("section");
    let postTops = [];
    let pageTop;
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;

    const resetPagePosition = () => {
      postTops = [];
      posts.forEach((post) => {
        postTops.push(
          Math.floor(post.getBoundingClientRect().top + window.pageYOffset)
        );
      });

      const pagePosition = window.pageYOffset + 280;
      counter = 0;

      postTops.forEach((post) => {
        if (pagePosition > post) {
          counter++;
        }
      });
      navLinks.forEach((link) => {
        link.removeAttribute("class");
      });
      const thisLink = document.querySelector(
        `nav ul li:nth-child(${counter}) a`
      );
      thisLink.className = "selected";
    };

    resetPagePosition();

    window.addEventListener("scroll", () => {
      pageTop = window.pageYOffset + 280;

      if (pageTop > postTops[counter]) {
        counter++;
        console.log(`scrolling down ${counter}`);
      } else if (counter > 1 && pageTop < postTops[counter - 1]) {
        counter--;
        console.log(`scrolling up ${counter}`);
      }
      if (counter !== prevCounter) {
        navLinks.forEach((link) => {
          link.removeAttribute("class");
        });
      }

      const thisLink = document.querySelector(
        `nav ul li:nth-child(${counter}) a`
      );
      thisLink.className = "selected";
      prevCounter = counter;
    });

    window.addEventListener("resize", () => {
      clearTimeout(doneResizing);
      doneResizing = setTimeout(() => {
        resetPagePosition();
      }, 500);
    });
  });
})();
