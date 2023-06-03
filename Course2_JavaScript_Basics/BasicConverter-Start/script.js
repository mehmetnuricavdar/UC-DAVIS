(function () {
  "use strict";

  document
    .querySelector("#convert")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let distance = parseFloat(document.querySelector("#distance").value);
      const conversion = (distance * 1.609344).toFixed(3);
      const answer = document.querySelector("#answer");

      if (distance) {
        
        answer.innerHTML = `<h2>The ${distance} miles converts to ${conversion} kilometers</h2>`;
      } else {
        answer.innerHTML = "<h2>Please provide a number!</h2>"
      }
    });
})();
