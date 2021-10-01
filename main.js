//variables definition

var currentDisplay = document.querySelector("#screenDisplay");
var buttons = document.querySelectorAll("#number");
var deleteBtn = document.querySelector("#del");
var resetBtn = document.querySelector("#reset");
var equalBtn = document.querySelector("#equal");
var operatorBtn = document.querySelectorAll("#operator");
var dotBtn = document.querySelector("#dot");
var theme1 = document.querySelector("#one");
var theme2 = document.querySelector("#two");
var theme3 = document.querySelector("#three");

//**************changing themes by the function themeChanger************************************************************

theme1.addEventListener("change", function() {
  if (theme1.checked) {
    themeChanger(1);
  }
});


theme2.addEventListener("change", function() {
  if (theme2.checked) {
    themeChanger(2);
  }
});

theme3.addEventListener("change", function() {
  if (theme3.checked) {
    themeChanger(3);
  }
});

function themeChanger(number) {
  switch (number) {
    case 1:
      document.getElementById("body-background").className = "body-background";
      document.getElementById("calc").className = "calc";
      document.getElementById("theme-title").className = "theme-title";
      document.getElementById("theme-switch").className = "theme-switch";
      document.getElementById("screen").className = "screen";
      document.getElementById("screenDisplay").className = "num-screen";
      document.getElementById("keypad").className = "keypad";
      document.querySelectorAll("#number").forEach((Element) => {
        Element.className = "calc-key"
      });
      document.querySelectorAll("#operator").forEach((Element) => {
        Element.className = "calc-key"
      });
      document.querySelector("#dot").className = "calc-key";
      document.getElementById("del").className = "del";
      document.getElementById("reset").className = "reset";
      document.getElementById("equal").className = "equal";

      break;

    case 2: {
      document.getElementById("body-background").className = "body-background2";
      document.getElementById("calc").className = "calc2";
      document.getElementById("theme-title").className = "theme-title2";
      document.getElementById("theme-switch").className = "theme-switch2";
      document.getElementById("screen").className = "screen2";
      document.getElementById("screenDisplay").className = "num-screen2";
      document.getElementById("keypad").className = "keypad2";
      document.querySelectorAll("#number").forEach((Element) => {
        Element.className = "calc-key2"
      });
      document.querySelectorAll("#operator").forEach((Element) => {
        Element.className = "calc-key2"
      });
      document.querySelector("#dot").className = "calc-key2";
      document.getElementById("del").className = "del2";
      document.getElementById("reset").className = "reset2";
      document.getElementById("equal").className = "equal2";
      break;
    }

    case 3: {
      document.getElementById("body-background").className = "body-background3";
      document.getElementById("calc").className = "calc3";
      document.getElementById("theme-title").className = "theme-title3";
      document.getElementById("theme-switch").className = "theme-switch3";
      document.getElementById("screen").className = "screen3";
      document.getElementById("screenDisplay").className = "num-screen3";
      document.getElementById("keypad").className = "keypad3";
      document.querySelectorAll("#number").forEach((Element) => {
        Element.className = "calc-key3"
      });
      document.querySelectorAll("#operator").forEach((Element) => {
        Element.className = "calc-key3"
      });
      document.querySelector("#dot").className = "calc-key3";
      document.getElementById("del").className = "del3";
      document.getElementById("reset").className = "reset3";
      document.getElementById("equal").className = "equal3";
      break;

    }
    default:

  }

}
//***************Calculator functions********************************************

//the function checks if it is possible to add a dot in the Mathematical expression

function isDotPossible() {

  if (currentDisplay.innerHTML.lastIndexOf(".") < currentDisplay.innerHTML.lastIndexOf("+")) {
    return true;
  } else if (currentDisplay.innerHTML.lastIndexOf(".") < currentDisplay.innerHTML.lastIndexOf("-")) {
    return true;
  } else if (currentDisplay.innerHTML.lastIndexOf(".") < currentDisplay.innerHTML.lastIndexOf("*")) {
    return true;
  } else if (currentDisplay.innerHTML.lastIndexOf(".") < currentDisplay.innerHTML.lastIndexOf("/")) {
    return true;
  } else return false;

}


//the function limits the number of characters in the display

function isDisplayFull() {

  if (currentDisplay.innerHTML.length < 13) {
    return false;
  } else return true;
}


//event listener for numbers
buttons.forEach((Element) => {

  Element.addEventListener("click", function() {
    if (isDisplayFull() == false) {
      currentDisplay.innerHTML += Element.innerHTML;
    }
  })

});


//event listener for opertaors
operatorBtn.forEach((Element) => {

  Element.addEventListener("click", function() {
    if ((currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] !== "+") && (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] !== "-") && (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] !== "*") && (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] !== "/") && (isDisplayFull() == false)) {

      if (Element.innerHTML == "x") {

        var multi = "*";
        currentDisplay.innerHTML += multi;

      } else {

        currentDisplay.innerHTML += Element.innerHTML;
      }
    }

  })
});


//event listener for dots

dotBtn.addEventListener("click", function() {
  if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] !== "." && isDisplayFull() == false) {

    if (currentDisplay.innerHTML.includes(".") == false) {
      currentDisplay.innerHTML += this.innerHTML;

    } else if (currentDisplay.innerHTML.includes(".") == true && isDotPossible() == true) {


      currentDisplay.innerHTML += this.innerHTML;
    }


  }

});

//event listener for delete button
deleteBtn.addEventListener("click", function() {
  currentDisplay.innerHTML = currentDisplay.innerHTML.substring(0, (currentDisplay.innerHTML.length - 1));

});

//event listener for reset button

resetBtn.addEventListener("click", function() {
  currentDisplay.innerHTML = "";

});

//event listener for equal button

equalBtn.addEventListener("click", function() {
  if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] !== "+" && "-" && "x" && "/" && ".") {

    currentDisplay.innerHTML = eval(currentDisplay.innerHTML);
  }

});
