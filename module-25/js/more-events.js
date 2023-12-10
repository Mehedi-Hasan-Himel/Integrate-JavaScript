document.getElementById("btn-more").addEventListener("click", function () {
  console.log("event triggered");
});
document.getElementById("text-field").addEventListener("focus", function () {
  console.log("Event triggered inside the input field");
});
document.getElementById("text-field").addEventListener("blur", function () {
  console.log("Event triggered inside the input field");
});
