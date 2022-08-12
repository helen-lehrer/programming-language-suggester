//User Interface Logic
/*function hideResults() {
  document.getElementById("javascript").setAttribute("class", "hidden"); 
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
}
*/
function enterQuestions(event) {
  event.preventDefault();
  const answer1 = document.querySelector("input[name='internet']:checked").value;
  const answer2 = document.querySelector("input[name='company']:checked").value;
  const answer3 = document.querySelector("input[name='programming']:checked").value;
  const answer4 = document.querySelector("input[name='values']:checked").value;
  const answer5 = document.querySelector("input[name='work']:checked").value;

  const displayJavascript = document.getElementById("javascript").removeAttribute("class"); 
  const displayCSharp = document.getElementById("c#").removeAttribute("class");
  const displayRuby = document.getElementById("ruby").removeAttribute("class");

  let result;
  if (answer1 === '1' && (answer2 === '1' || answer2 === '2' || answer2 === '3')) {
    result = displayJavascript;
    console.log("result");
  } else if (answer1 === '2' && answer2 === '2') {
    result = displayCSharp;
    console.log("result");
  } else if ((answer1 === '2' && (answer2 === '1' || answer2 === '3')) || (answer1 === '3' && (answer2 === '1' || answer2 === '2' || answer2 === '3'))) {
    result = displayRuby;
    console.log("result");
  }

window.addEventListener("load", function() {
  /*hideResults();*/
  event.preventDefault();
  const form = document.getElementById("questions");
  form.addEventListener("submit", enterQuestions)
})
}
