//User Interface Logic

//hides results upon resubmission of the form
function hideResults() {
  document.getElementById("javascript").setAttribute("class", "hidden"); 
  document.getElementById("c-sharp").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
}

//gathers form data & performs branching logic to display answer
function submitQuestions(event) {
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
    document.getElementById("c-sharp").removeAttribute("class");
  } else if ((answer1 === '2' && (answer2 === '1' || answer2 === '3')) || (answer1 === '3' && (answer2 === '1' || answer2 === '2' || answer2 === '3'))) {
    document.getElementById("ruby").removeAttribute("class");
  }
}

//inputs user's name into the results
function submitName() {
  document.getElementById("c-sharp-name").innerText = document.getElementById("name-input").value;
  document.getElementById("javascript-name").innerText = document.getElementById("name-input").value;
  document.getElementById("ruby-name").innerText = document.getElementById("name-input").value;
}

//creates an event listener for the submit button 
window.addEventListener("load", function() {
  const form = document.getElementById("questions");
  form.addEventListener("submit", submitQuestions);
  form.addEventListener("submit", submitName);
});
