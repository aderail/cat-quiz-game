const question = {
    text: "You wake up at 3am. What do you do?",
    answers: ["Go back to sleep", "Cause chaos", "Find someone to bother"]
  };
  document.getElementById("quiz-container").innerHTML = `
  <h2>${question.text}</h2>
  `;