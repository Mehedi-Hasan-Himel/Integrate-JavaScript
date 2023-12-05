const liCollection = document.getElementsByTagName("li");
// console.log(liCollection);

for (const li of liCollection) {
  console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName("h1");
for (const h1 of allHeadings) {
  console.log(h1.innerText);
}
 
const fruitsTitle = document.getElementById("fruits-title")
fruitsTitle.innerText = "Fruit change by js"

const places = document.getElementsByClassName("important-places")
for (const place of places) {
   console.log(place.innerText);
}

