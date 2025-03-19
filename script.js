let names = [
  "Bill",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Steven",
  "Larry",
  "Paula",
  "Laura",
  "Jim",
];

for (let name of names) {
  const firstChar = name.charAt(0).toLowerCase();
  if(firstChar === "j") {
    speekGoodBye(name)
  } else { 
    speekHello(name);
  }
}
console.log("=====");

const threshold = 110;

console.log("Ascii:");

for (let name of names) {
  const asciiSum = name
    .charAt(name.length - 1)
    .toLowerCase()
    .charCodeAt(0);
  console.log(`${name} (ascii sum last letters: ${asciiSum})`);

  if(asciiSum > threshold) {
    speekHello(name)
   } else {
    speekGoodBye(name);
   }
}