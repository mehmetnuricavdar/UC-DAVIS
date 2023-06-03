for (let i = 0; i < 10; i++) {
  console.log(i);
}

// ###### Loops in Array ######

const colors = ["red", "green", "yellow", "white", "black"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//reverse order

for (let i = 4; i >= 0; i--) {
  console.log(colors[i]);
}

// The For .... Of Loop

const food = [
  "grapes",
  "cheese",
  "bread",
  "olives",
  "tomatoes",
  "tea",
  "coffee",
  "cookies",
];

for (let items of food) {
  console.log(items);
}

//Strings as Arrays

const statement = "A string can be treated like an array";
for (let letter of statement) {
  console.log(letter);
}

// ############# While Loop #########

let incrementor = 0;
let text = "";

while (incrementor < 10) {
  text += `The incrementor has gone up to ${incrementor} \n`;
  incrementor++;
}
console.log(text);

//
let i = 0;
let text2 = "";
while (i < 5) {
  text2 += `The i is ${i} and it's square is ${i * i} \n`;
  i++;
}

console.log(text2);

//

const myArray = [];
let int = 0;
while (i < 6) {
  myArray.unshift(int);
  int++;
}
console.log(myArray);
