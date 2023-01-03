var listOfColours = ["blue", "red", "yellow", "pink", "powderblue", "lime", "indigo"];

document.querySelector(".button").addEventListener("click", function () {

  var randomNumber = Math.random();
  randomNumber = randomNumber * listOfColours.length;
  randomNumber = Math.floor(randomNumber);

  var selectorRandomColour = listOfColours[randomNumber];

  document.querySelector("body").style.backgroundColor = "" + selectorRandomColour;

  document.getElementsByTagName("h1")[0].lastElementChild.innerHTML = selectorRandomColour;
  document.getElementsByTagName("h1")[0].lastElementChild.style.color = "blue";
});


function changeColour(listOfColours) {

}
