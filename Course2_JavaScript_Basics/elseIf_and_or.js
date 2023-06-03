const colors = ["red", "green", "yellow", "white", "black"];
const selectedColor = colors[3];

if (selectedColor == "red") {
  console.log("Selected color is red");
} else if (selectedColor == "green") {
  console.log("Selected color is green");
} else if (selectedColor == "yellow") {
  console.log("Selected color is yellow");
} else if (selectedColor == "white") {
  console.log("Selected color is white");
} else if (selectedColor == "black") {
  console.log("Selected color is black");
} else {
  console.log("no selected color");
}

// ####### Switch Statements ########

const ranks = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"];
const degree = ranks[2];

switch (degree) {
  case "First":
    console.log("Here is the first");
    break;
  case "Second":
    console.log("Here is the Second");
    break;
  case "Third":
    console.log("Here is the Third");
    break;
  case "Fourth":
    console.log("Here is the Fourth");
    break;
  case "Fifth":
    console.log("Here is the Fifth");
    break;
  case "Sixth":
    console.log("Here is the Sixth");
    break;
  default:
    console.log("That's all!");
}

// ########## && AND || OR #############

const goodMood = true;
const gotSleep = true;

if (goodMood && gotSleep) {
  console.log("Today it is worth to live!");
} else {
  console.log("I am grumpy");
}

const gotBreakfast = true;
const gotLunch = true;
const gotDinner = false;

if (gotBreakfast || gotLunch || gotDinner) {
  console.log("I am not starving");
} else {
  console.log("STARVING!!!!");
}
