let myString = "I am really hungry for some";
console.log(myString);
let myUpperString = myString.toUpperCase();
console.log(myUpperString);

let reallyLocation = myString.search("really");
console.log(reallyLocation);

let specialWord = myString.substr(reallyLocation, 6);
console.log(specialWord);

specialWord = specialWord.toUpperCase();
console.log(specialWord);

let newString = myString.replace("really", specialWord);
console.log(newString);

const foods = ["grapes", "cheese", "bread", "olives"];

console.log(`${myString} ${foods[0]}`);

for (let food of foods) {
  console.log(`${myString} ${food}`);
}

for (let i = 0; i < foods.length; i++) {
  console.log(`${myString} ${foods[i]}`);
}

// ###### Loop + Selection
for (let i = 0; i < foods.length; i++) {
  if (i % 2 === 0) {
    console.log(`${myString} ${foods[i].toUpperCase()}`);
  } else {
    console.log(`${myString} ${foods[i]}`);
  }
}
