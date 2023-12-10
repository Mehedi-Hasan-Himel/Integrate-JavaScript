// option - 02
function MakeRed() {
  document.body.style.backgroundColor = "red";
}

// option - 03
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option - 04
const makePurpleButton = document.getElementById("make-purple");

makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option - 05
const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option - 06
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option - 07

document.getElementById("make-golden").addEventListener('click', function () {
    document.body.style.backgroundColor="goldenrod"
 })
