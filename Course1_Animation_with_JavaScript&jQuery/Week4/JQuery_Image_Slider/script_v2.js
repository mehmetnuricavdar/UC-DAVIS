$(window).on("load", () => {
  ("use strict");

  const imageCount = $("#slider ul li").length;
  const imageWidth = $("#slider ul li img").first().width();
  const totalWidth = imageWidth * imageCount + "px";

  let leftPosition = 0;
  let counter = 0;

  $("#slider ul").css("width", totalWidth);

  const slideFunc = () => {
    counter++;
    if (counter === imageCount) {
      $("#slider ul").clone().appendTo("#slider");
      $("#slider ul")
        .last()
        .css("left", imageWidth + "px");
      leftPosition = `-${totalWidth}`;
      $("#slider ul").last().animate({ left: 0 }, 700, "easeInQuad");
      $("#slider ul")
        .first()
        .animate({ left: leftPosition }, 700, "easeInQuad", () => {
          $("#slider ul").first().remove();
        });
      counter = 0;
    } else {
      leftPosition = `-${counter * imageWidth}px`;
      $("#slider ul").animate({ left: leftPosition }, 700, "easeInQuad");
    }
  };
  setInterval(slideFunc, 2000);
});
