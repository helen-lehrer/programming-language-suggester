//User Interface Logic
function enterQuestions(event) {
  event.preventDefault();
  const answer1 = document.querySelector("input[name='internet']:checked").value;
  const answer2 = document.querySelector("input[name='company']:checked").value;
  const answer3 = document.querySelector("input[name='programming']:checked").value;
  const answer4 = document.querySelector("input[name='values']:checked").value;
  const answer5 = document.querySelector("input[name='work']:checked").value;
  
  const displayJavascript = document.getElementById("javascript").removeAttribute("class"); 

  const result;
  if (answer1 === '1' && (answer2 === '1' || answer2 === '3')) {
    result = displayJavascript;
  }
}
window.addEventListener("load", function() {
  const form = document.getElementById("questions");
  form.addEventListener("submit", enterQuestions)
})