// Smoothscroll Script...

$("nav ul li a").click(function () {
  const thisSection = $(this).attr("href");
  const thisLink = $(this);

  $("html, body")
    .stop()
    .animate(
      { scrollTop: $(thisSection).offset().top - 200 },
      600,
      "easeOutCirc"
    );
  return false;
});

$(window).on("load", function () {
  const allLinks = $("nav ul li a");
  const posts = $("section");
  let pageTop;
  let postPos;
  let counter = 0;
  let prevCounter = 0;
  let doneResizing;

  let postTops = [];

  const resetPagePosition = () => {
    postTops = [];
    posts.each(function () {
      postTops.push(Math.floor($(this).offset().top));
    });

    const pagePosition = $(window).scrollTop() + 210;
    for (let i = 0; i < postTops.length; i++) {
      if (pagePosition > postTops[i]) {
        counter++;
      }
    }

    counter--;
    $(allLinks).removeAttr("class");
    $(allLinks).eq(counter).addClass("selected");
  };
  resetPagePosition();

  $(window).scroll(function () {
    pageTop = $(window).scrollTop() + 210;

    if (pageTop > postTops[counter + 1]) {
      counter++;
    } else if (counter > 0 && pageTop < postTops[counter]) {
      counter--;
    }

    if (counter !== prevCounter) {
      $(allLinks).removeAttr("class");
      $(allLinks.eq(counter).addClass("selected"));
      prevCounter = counter;
    }
  });
  $(window).on("resize", function () {
    clearTimeout(doneResizing);
    doneResizing = setTimeout(function () {
      resetPagePosition();
    }, 500);
  });
});
