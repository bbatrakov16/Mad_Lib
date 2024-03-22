// Mad Lib with JavaScript

// Event Listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

// Event Function
function buildMadLib() {
  // Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let noun2 = document.getElementById("noun-2").value;
  let adjective2 = document.getElementById("adjective-2").value;

  // Process
  let result =
    '"There are too many ' +
    pluralNoun +
    " on this " +
    adjective +
    ' airplane!", I scremed. "Somebody has to ' +
    verb +
    " on the " +
    noun +
    ' to solve this problem." "Or I will go to ' +
    noun2 +
    " myself, unless someone " +
    adjective2 +
    ' decides to do it for me," I added.';
  // Output
  document.getElementById("result").innerHTML = result;
}

// Mad Lib (2) with JavaScript

// Event Listener
document
  .getElementById("mad-lib-2-btn")
  .addEventListener("click", buildMadLib2);

// Event function
function buildMadLib2() {
  // Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let noun = document.getElementById("noun").value;
  let verb = document.getElementById("verb").value;
  let adjective2 = document.getElementById("adjective-2").value;
  let noun2 = document.getElementById("noun-2").value;

  // Process
  let result2 =
    "Many " +
    pluralNoun +
    " were made thanks to " +
    adjective +
    " " +
    noun +
    " which in turn " +
    verb +
    " humanity to reach unprecented heights in the filed of " +
    adjective2 +
    " " +
    noun2;

  // Output
  document.getElementById("result2").innerHTML = result2;
}

// Event Listener (background)
document
  .getElementById("mad-lib-2-btn")
  .addEventListener("click", changeBackground);

// Event function
function changeBackground() {
  document.getElementById("the-html").style.background =
    "url(images/20-Scientific-Discoveries-That-Changed-the-World.jpg)";
  document.getElementById("the-html").style.backgroundSize = "cover";
  document.getElementById("the-html").style.backgroundRepeat = "no-repeat";
}

// Event Listener (font and border)
document.getElementById("mad-lib-2-btn").addEventListener("click", changeFont);

// Event function
function changeFont() {
  document.getElementById("plural-noun").style.fontFamily =
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
  document.getElementById("plural-noun").style.border = "2px solid #06068b";

  document.getElementById("adjective").style.fontFamily =
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
  document.getElementById("adjective").style.border = "2px solid #06068b";

  document.getElementById("verb").style.fontFamily =
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
  document.getElementById("verb").style.border = "2px solid #06068b";

  document.getElementById("noun").style.fontFamily =
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
  document.getElementById("noun").style.border = "2px solid #06068b";

  document.getElementById("noun-2").style.fontFamily =
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
  document.getElementById("noun-2").style.border = "2px solid #06068b";

  document.getElementById("adjective-2").style.fontFamily =
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
  document.getElementById("adjective-2").style.border = "2px solid #06068b";
}

// Event Listener (go back to original page)
document.getElementById("mad-lib-btn").addEventListener("click", comeBack);

// Event function
function comeBack() {
  document.getElementById("the-html").style.background =
    "url(images/plane.jpg)";
  document.getElementById("the-html").style.backgroundSize = "cover";
  document.getElementById("the-html").style.backgroundRepeat = "no-repeat";

  document.getElementById("plural-noun").style.fontFamily =
    "Arial, Helvetica, sans-serif";
  document.getElementById("plural-noun").style.border = "1px solid grey";

  document.getElementById("adjective").style.fontFamily =
    "Arial, Helvetica, sans-serif";
  document.getElementById("adjective").style.border = "1px solid grey";

  document.getElementById("verb").style.fontFamily =
    "Arial, Helvetica, sans-serif";
  document.getElementById("verb").style.border = "1px solid grey";

  document.getElementById("noun").style.fontFamily =
    "Arial, Helvetica, sans-serif";
  document.getElementById("noun").style.border = "1px solid grey";

  document.getElementById("noun-2").style.fontFamily =
    "Arial, Helvetica, sans-serif";
  document.getElementById("noun-2").style.border = "1px solid grey";

  document.getElementById("adjective-2").style.fontFamily =
    "Arial, Helvetica, sans-serif";
  document.getElementById("adjective-2").style.border = "1px solid grey";
}
