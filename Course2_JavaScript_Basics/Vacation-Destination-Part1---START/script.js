(function () {
  "use strict";
  const detailsForm = document.querySelector("#destination_deatils_form");

  detailsForm.addEventListener("submit", handleFormSubmit);
  function handleFormSubmit(event) {
    event.preventDefault();

    /*
        let destName = document.querySelector("#name").value;
        let destLocation = document.querySelector("#location").value;
        let destPhoto = document.querySelector("#photo").value;
        let destDesc = document.querySelector("#description").value;
        */

    const destName = event.target.elements["name"].value;
    const destLocation = event.target.elements["location"].value;
    const destPhoto = event.target.elements["photo"].value;
    const destDesc = event.target.elements["description"].value;

    for (let i = 0; i < detailsForm.length; i++) {
      detailsForm.elements[i].value = "";
    }

    // create card here

    const destCard = createDestinationCard(
      destName,
      destLocation,
      destPhoto,
      destDesc
    );

    const wishListContainer = document.querySelector("#destinations_container");
    if (wishListContainer.children.length === 0) {
      document.querySelector("#title").innerHTML = "My Wish List";
    }

    wishListContainer.appendChild(destCard);
  }

  function createDestinationCard(name, location, photoURL, description) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.setAttribute("alt", name);
    card.appendChild(img);

    const constantPhotoUrl = "/images/signpost.jpg";

    if (photoURL === "") {
      img.setAttribute("src", constantPhotoUrl);
    } else {
      img.setAttribute("src", photoURL);
    }

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    const cardSubTitle = document.createElement("h4");
    cardSubTitle.innerText = location;
    cardBody.appendChild(cardSubTitle);

    if (description) {
      const cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.innerText = description;
      cardBody.appendChild(cardText);
    }

    const cardDeltButton = document.createElement("button");
    cardDeltButton.innerText = "Remove";
    cardDeltButton.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeltButton);

    card.appendChild(cardBody);
    return card;
  }

  function removeDestination(event) {
    const card = event.target.parentElement.parentElement;
    card.remove();
  }
})();
