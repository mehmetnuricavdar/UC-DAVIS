(function () {
  "use strict";

  const myImages = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];
  let currentImage = 0;

  const nextPhoto = document.querySelector("#next");

  const previousPhoto = document.querySelector("#previous");

  nextPhoto.addEventListener("click", function () {
    currentImage++;
    if (currentImage > myImages.length - 1) {
      currentImage = 0;
    }
    document.querySelector("#myimage").src = myImages[currentImage];
  });

  previousPhoto.addEventListener("click", function () {
    currentImage--;
    if (currentImage < 0) {
      currentImage = myImages.length - 1;
    }
    document.querySelector("#myimage").src = myImages[currentImage];
  });
})();
