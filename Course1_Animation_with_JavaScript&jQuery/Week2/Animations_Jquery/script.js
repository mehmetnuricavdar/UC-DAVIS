(function () {
  "use strict";
  $("#hidebox").click(() => {
    $("#box").hide(500);
  });

  $("#showbox").click(() => {
    $("#box").show(400);
  });

  $("#togglebox").click(() => {
    $("#box").toggle(500, () => alert("Done!"));
  });

  $("#slideupbox").click(() => {
    $("#box2").slideUp("slow");
  });

  $("#slidedownbox").click(() => {
    $("#box2").slideDown(2000, "swing");
  });

  $("#slidetogglebox").click(() => {
    $("#box2").slideToggle(2000, "easeInOutElastic");
  });

  $("#fadeoutbox").click(() => $("#box3").fadeOut(2000));

  $("#fadeinbox").click(() => {
    $("#box3").fadeIn(3000, "swing");
  });

  $("#fadeto20box").click(() => {
    $("#box3").fadeTo(3000, 0.2);
  });

  $("#fadeto100box").click(() => {
    $("#box3").fadeTo(3000, 1);
  });

  $("#growbox").click(() => {
    $("#box4").animate({
      width: "710px",
      height: "710px",
      "border-radius": "50px",
    });
  });

  $("#growtext").click(() => {
    $("#box4").animate({ fontSize: "24px", color: "#333" });
  });

  $("#movebox").click(() => {
    $("#box4").animate({ left: "+=300" }, 3000);
  });

  $("#doall").click(() => {
    $("#box4").animate({ width: "710px", fontSize: "36px", left: "+=300px" });
  });

  $("#sequence").click(() => {
    $("#box4").animate({ width: "710px" }, 1500, () => {
      $("#box4").animate({ fontSize: "30px" }, 1500, () => {
        $("#box4").animate({ left: "+=300px" }, 1500);
      });
    });
  });
})();
