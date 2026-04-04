const questions = [
  //question 1
  {
    text: "If you woke up 3am, what would you do?",
    answers: [
      { text: "Go back to sleep", type: "option4" }, //Athena
      { text: "Eat a snack", type: "option1" }, //Arya
      { text: "Get up to no good", type: "option2" }, //Strider
      { text: "Look for cuddles", type: "option3"} //Mayor
    ]
  },
  //question 2
  {
    text: "Oh no! You dropped a slice of pizza on the floor.",
    answers: [
      { text: "Aw, man", type: "option3" }, //Mayor
      { text: "I'll find something else to eat", type: "option4" }, //Athena
      { text: "The world is a dark and cruel place", type: "option1" }, //Arya
      { text: "NOM NOM NOM NOM", type: "option2"} //Strider
    ]
  },
  //question 3
  {
    text: "How many days could you go without a shower?",
    answers: [
      { text: "I've definitely missed a day or two", type: "option2" }, //Strider
      { text: "0. I have to shower every day", type: "option1" }, //Arya
      { text: "Sometimes the depressy hits, ok?", type: "option3" }, //Mayor
      { text: "That's what deoderant is for!", type: "option4"} //Athena
    ]
  },
  //question 4
  {
    text: "Don't freak out, but there's something behind you...",
    answers: [
      { text: "OH MY GOD WHAT", type: "option1" }, //Arya
      { text: "Very funny.", type: "option3" }, //Mayor
      { text: "I dare somebody to TRY to harm me", type: "option2" }, //Strider
      { text: "Ooh, new friend!", type: "option4"} //Athena
    ]
  },
  //question 5
  {
    text: "Your friend just broke your fancy china. How would you react?",
    answers: [
      { text: "Why would they do that?", type: "option1" }, //Arya
      { text: "They're no longer my friend", type: "option2" }, //Strider
      { text: "Let's break the rest of the china!", type: "option4" }, //Athena
      { text: "Things happen, oh well", type: "option3"} //Mayor
    ]
  },
  //question 6
  {
    text: "Have you ever been in a fight?",
    answers: [
      { text: "Plenty", type: "option2" }, //Strider
      { text: "Do verbal ones count?", type: "option1" }, //Arya
      { text: "No, but I could win one", type: "option4" }, //Athena
      { text: "I'd just walk away", type: "option3"} //Mayor
    ]
  },
  //question 7
  {
    text: "How long would it take someone to notice you're missing?",
    answers: [
      { text: "Hours", type: "option4" }, //Athena
      { text: "A day or two", type: "option2" }, //Strider
      { text: "Hopefully within a couple weeks", type: "option1" }, //Arya
      { text: "A while...", type: "option3"} //Mayor
    ]
  },
  //question 8
  {
    text: "What does a day to yourself sound like?",
    answers: [
      { text: "Catching up on some hobbies at home", type: "option3" }, //Mayor
      { text: "Let's go party!", type: "option4" }, //Athena
      { text: "Spending time in nature", type: "option2" }, //Strider
      { text: "Staying up until 4am playing video games", type: "option1"} //Arya
    ]
  },
  //question 9
  {
    text: "You're going to die.",
    answers: [
      { text: "I'm already dead, baby!", type: "option3" }, //Mayor
      { text: "Thanks for the existential crisis", type: "option4" }, //Athena
      { text: "And I'll live my life to the fullest!", type: "option2" }, //Strider
      { text: "AAAAAHHHHHHH", type: "option1"} //Arya
    ]
  },
  //question 10
  {
    text: "Do you like your coffee hot or ice?",
    answers: [
      { text: "Hot! Hot! Hot!", type: "option2" }, //Strider
      { text: "Cold like my soul", type: "option3" }, //Mayor
      { text: "I'm not big on coffee", type: "option1" }, //Arya
      { text: "A frappacino!", type: "option4"} //Athena
    ]
  }
];

let scores = { option1: 0, option2: 0, option3: 0, option4: 0 };
let currentQuestion = 0;

function startQuiz() {
  document.getElementById("start").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = ""; // clear previous question

  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestion];
  const questionElem = document.createElement("h2");
  questionElem.textContent = q.text;
  container.appendChild(questionElem);

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.onclick = () => {
      scores[answer.type]++;
      currentQuestion++;
      showQuestion();
    };
    container.appendChild(btn);
  });
}

function showResult() {
  const container = document.getElementById("quiz-container");

  let maxScore = Math.max(...Object.values(scores));
  let resultType = Object.keys(scores).find(key => scores[key] === maxScore);

  let resultText = "";
  let resultImage = "";

  if (resultType === "option1") {
    resultText = "Arya: blah blah";
    resultImage = "pictures/arya.jpg";
  }
  if (resultType === "option2") {
    resultText = "Strider: blah blah";
    resultImage = "pictures/strider.jpg";
  }
  if (resultType === "option3") {
    resultText = "Mayor: blah blah";
    resultImage = "pictures/mayor.jpg";
  }
  if (resultType === "option4") {
    resultText = "Athena: You're no cat!";
    resultImage = "pictures/athena.jpg";
  }

  container.innerHTML = `
    <h1>Your Result</h1>
    <p>${resultText}</p>
    <img src="${resultImage}" alt="result image" style="width:300px; height: 400px; border-radius:15px; margin:20px 0;">
  `;
}