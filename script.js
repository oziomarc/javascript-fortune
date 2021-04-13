var newText;
var theInput;
var buttonPress;
var theOutput;
var newBody;

document.addEventListener('DOMContentLoaded', function(){
  newText = document.getElementById("instructions");
  theInput = document.getElementById("userInput");
  buttonPress = document.getElementById("generate");
  theOutput = document.getElementById("result");
  newBody = document.getElementById("body");

  buttonPress.addEventListener('click', demonstrateFunc);
  function demonstrateFunc() {
    var red = Math.random() * 255
    var green = Math.random() * 255;
    var blue = Math.random() * 255;
    var newOutput = "rgb(" + red + "," + green + "," + blue + ")";
    newBody.style.backgroundColor = newOutput;

    var currInput = theInput.value;
    theOutput.innerText = currInput + ", you're looking quite...";

    var loadingText = ["reading the stars...", "scanning your energy field...",
    "pinpointing your cosmic coordinates..."];

    var randomText = Math.floor (Math.random() * loadingText.length);
    alert(loadingText[randomText]);
  }

});
