const question = {
  text: "You wake up at 3am. What do you do?",
  answers: ["Go back to sleep", "Cause chaos", "Find someone to bother"]
};

document.getElementById("quiz-container").innerHTML = `
<h2>${question.text}</h2>
`;

function quiz() {
  // initialize all possible results to 0
  var option1 = 0;
  var option2 = 0;
  var option3 = 0;
  
  // format questions like this (increment personality types based on answer)
  var ans = prompt("What food do you like? a. pizza, b. fruit, or c. candy?");
  if (ans === "a") {
      option1++;
  }
  if (ans === "b") {
      option2++;
  }
  if (ans === "c") {
      option3++;
  }

  // You can add more questions and logic here
}