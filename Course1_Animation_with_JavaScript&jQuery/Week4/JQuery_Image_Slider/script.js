$(window).on("load", () => {
  ("use strict");

  const imageCount = $("#slider ul li").length;
  const imageWidth = $("#slider ul li img").first().width();
  const totalWidth = imageWidth * imageCount + "px";

  let leftPosition = 0;
  let counter = 0;

  $("#slider ul").css("width", totalWidth);

  $("#next").click(() => {
    counter++;
    if (counter === imageCount) {
      counter = 0;
    }
    leftPosition = `-${counter * imageWidth}px`;
    $("#slider ul").animate({ left: leftPosition }, 700, "easeInQuad");
  });

  $("#previous").click(() => {
    counter--;

    if (counter < 0) {
      counter = imageCount - 1;
    }
    leftPosition = `-${counter * imageWidth}px`;
    $("#slider ul").animate({ left: leftPosition }, 700, "easeInQuad");
  });
});
