
//User Interface Logic
function hideResults() {
  document.getElementById("javascript").setAttribute("class", "hidden"); 
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
}

function enterQuestions(event) {
  event.preventDefault();
  hideResults();
  const answer1 = document.querySelector("input[name='internet']:checked").value;
  const answer2 = document.querySelector("input[name='company']:checked").value;
  const answer3 = document.querySelector("input[name='programming']:checked").value;
  const answer4 = document.querySelector("input[name='values']:checked").value;
  const answer5 = document.querySelector("input[name='work']:checked").value;

  if (answer1 === '1' && (answer2 === '1' || answer2 === '2' || answer2 === '3')) {
    document.getElementById("javascript").removeAttribute("class"); 
  } else if (answer1 === '2' && answer2 === '2') {
    document.getElementById("c#").removeAttribute("class");
  } else if ((answer1 === '2' && (answer2 === '1' || answer2 === '3')) || (answer1 === '3' && (answer2 === '1' || answer2 === '2' || answer2 === '3'))) {
    document.getElementById("ruby").removeAttribute("class");
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById("questions");
  form.addEventListener("submit", enterQuestions);
});
