// option - 01 - getElementsByTagName
const liCollection = document.getElementsByTagName("li");
// console.log(liCollection);

for (const li of liCollection) {
  // console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName("h1");
for (const h1 of allHeadings) {
  // console.log(h1.innerText);
}
//  option - 02 - getElementById
const fruitsTitle = document.getElementById("fruits-title")
fruitsTitle.innerText = "Fruit change by js"

//  option - 03 - getElementsByClassName
const places = document.getElementsByClassName("important-places")
for (const place of places) {
  //  console.log(place.innerText);
}

//   option - 04 -  querySelector
//   option - 05 -  querySelectorAll

const someLi = document.querySelectorAll(".fruits-container li");
// console.log(someLi);
for (const li of someLi) {
  console.log(li);
}