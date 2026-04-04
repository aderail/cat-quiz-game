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
      { text: "0. I have to shower every day", type: "option1" }, //Arya
      { text: "I've definitely missed a day or two", type: "option2" }, //Strider
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
    text: "question 5.",
    answers: [
      { text: "Aw, man", type: "option1" },
      { text: "I'll find something else to eat", type: "option2" },
      { text: "The world is a dark and cruel place", type: "option3" },
      { text: "NOM NOM NOM NOM", type: "option4"}
    ]
  },
  //question 6
  {
    text: "question 6.",
    answers: [
      { text: "Aw, man", type: "option1" },
      { text: "I'll find something else to eat", type: "option2" },
      { text: "The world is a dark and cruel place", type: "option3" },
      { text: "NOM NOM NOM NOM", type: "option4"}
    ]
  },
  //question 7
  {
    text: "question 7.",
    answers: [
      { text: "Aw, man", type: "option1" },
      { text: "I'll find something else to eat", type: "option2" },
      { text: "The world is a dark and cruel place", type: "option3" },
      { text: "NOM NOM NOM NOM", type: "option4"}
    ]
  },
  //question 8
  {
    text: "question 8.",
    answers: [
      { text: "Aw, man", type: "option1" },
      { text: "I'll find something else to eat", type: "option2" },
      { text: "The world is a dark and cruel place", type: "option3" },
      { text: "NOM NOM NOM NOM", type: "option4"}
    ]
  },
  //question 9
  {
    text: "question 9.",
    answers: [
      { text: "Aw, man", type: "option1" },
      { text: "I'll find something else to eat", type: "option2" },
      { text: "The world is a dark and cruel place", type: "option3" },
      { text: "NOM NOM NOM NOM", type: "option4"}
    ]
  },
  //question 10
  {
    text: "question 10.",
    answers: [
      { text: "Aw, man", type: "option1" },
      { text: "I'll find something else to eat", type: "option2" },
      { text: "The world is a dark and cruel place", type: "option3" },
      { text: "NOM NOM NOM NOM", type: "option4"}
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
  document.getElementById("quiz-container").style.display = "none";

  let maxScore = Math.max(...Object.values(scores));
  let resultType = Object.keys(scores).find(key => scores[key] === maxScore);

  let resultText = "";
  if (resultType === "option1") resultText = "Arya: Morning pizza lover!"; //Arya
  if (resultType === "option2") resultText = "Strider: Balanced fruit fan!"; //Strider
  if (resultType === "option3") resultText = "Mayor: Nighttime candy chaos!"; //Mayor
  if (resultType === "option4") resultText = "Athena: Nighttime candy chaos!"; //Athena

  document.getElementById("result").textContent = `Your result: ${resultText}`;
}