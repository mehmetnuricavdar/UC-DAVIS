(function () {
  "use strict";
  let convertType = "miles";
  const heading = document.querySelector("h1");
  const intro = document.querySelector("p");
  const answerDiv = document.querySelector("#answer");
  const form = document.querySelector("#convert");

  document.addEventListener("keydown", function (event) {
    const key = event.code;

    if (key === "KeyK") {
      convertType = "kilometers";
      heading.innerHTML = "Kilometers to Miles Converter";
      intro.innerHTML =
        "Type in a number of kilometers and click the button to convert the distance to miles.";
    } else if (key === "KeyM") {
      convertType = "miles";
      heading.innerHTML = "Miles to Kilometers Converter";
      intro.innerHTML =
        "Type in a number of miles and click the button to convert the distance to kilometers.";
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let distance = parseFloat(document.querySelector("#distance").value);

    if (distance) {
      if (convertType === "kilometers") {
        const conversion = (distance * 1.609344).toFixed(3);
        answerDiv.innerHTML = `<h2>The ${distance} miles converts to ${conversion} kilometers</h2>`;
      } else if (convertType === "miles") {
        const conversion = (distance / 1.609344).toFixed(3);
        answerDiv.innerHTML = `<h2>The ${distance} kilometers converts to ${conversion} miles</h2>`;
      }
    } else {
      answerDiv.innerHTML = "<h2>Please provide a number</h2>";
    }
  });
})();
