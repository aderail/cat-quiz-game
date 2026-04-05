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
      { text: "Very funny", type: "option3" }, //Mayor
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
    text: "Do you like your coffee hot or ice?",
    answers: [
      { text: "Hot! Hot! Hot!", type: "option2" }, //Strider
      { text: "Cold like my soul", type: "option3" }, //Mayor
      { text: "I'm not big on coffee", type: "option1" }, //Arya
      { text: "A frappacino!", type: "option4"} //Athena
    ]
  },
  //question 10
  {
    text: "You're going to die.",
    answers: [
      { text: "I'm already dead, baby!", type: "option3" }, //Mayor
      { text: "Thanks for the existential crisis", type: "option2" }, //Strider
      { text: "And I'll live my life to the fullest!", type: "option4" }, //Athena
      { text: "AAAAAHHHHHHH", type: "option1"} //Arya
    ]
  },
  
];

let scores = { option1: 0, option2: 0, option3: 0, option4: 0 };
let currentQuestion = 0;

const music = document.getElementById("bgMusic");

function startQuiz() {
  music.volume = 0;
  music.play();

  fadeInAudio(music, 4000);

  document.getElementById("start").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("progress-container").style.display = "block";

  showQuestion();
  updateProgressBar();
}

function fadeInAudio(audio, duration) {
  let volume = 0;
  const step = 0.05;
  const intervalTime = duration / (1 / step);

  audio.volume = 0;

  const fade = setInterval(() => {
    volume += step;

    if (volume >= 1) {
      audio.volume = 1;
      clearInterval(fade);
    } else {
      audio.volume = volume;
    }
  }, intervalTime);
}

function updateProgressBar() {
  const progress = ((currentQuestion) / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
  document.getElementById("progress-cat").style.left = progress + "%";
}

function showQuestion() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestion];

  const questionElem = document.createElement("h2");
  questionElem.textContent = q.text;

  // Shake text
  questionElem.classList.remove("shake-light", "shake-strong");
  void questionElem.offsetWidth;

  if (currentQuestion === 3) {
    questionElem.classList.add("shake-light");
  }

  if (currentQuestion === 6) {
    questionElem.classList.add("shake-light");
  }

  if (currentQuestion === 9) {
    questionElem.classList.add("shake-strong");
  }

  container.appendChild(questionElem);

  const pauseQuestions = [3, 6, 9];

if (pauseQuestions.includes(currentQuestion)) {
  music.pause();
} else {
  if (music.paused) {
    music.currentTime = music.currentTime;
    music.play();
    fadeInAudio(music, 4000);
  }
}

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;

    btn.onclick = () => {
      scores[answer.type]++;

      const isLastQuestion = currentQuestion === questions.length - 1;

      if (isLastQuestion) {
        document.getElementById("progress-bar").style.width = "100%";
        document.getElementById("progress-cat").style.left = "100%";

        setTimeout(() => {
          showResult();
        }, 300);

        return;
      }

      currentQuestion++;
      updateProgressBar();
      showQuestion();
    };

    container.appendChild(btn);
  });
}

function showResult() {
  music.play();
  fadeInAudio(music, 4000);

  const container = document.getElementById("quiz-container");
  document.getElementById("progress-container").style.display = "none";

  let maxScore = Math.max(...Object.values(scores));
  let resultType = Object.keys(scores).find(key => scores[key] === maxScore);

  let resultText = "";
  let resultImage = "";
  let resultDescription = "";

  if (resultType === "option1") {
    resultText = "Arya:";
    resultImage = "pictures/arya.jpg";
    resultDescription = "Scaredy cat much? You prefer the slow life - grab a snack, boot up your PC, and you're in for the night. Sure, people might think you're introverted and shy. But you're known to speak words of wisdom if prompted... okay, sometimes they're long tangents about your favorite hobbies.";
  }
  if (resultType === "option2") {
    resultText = "Strider:";
    resultImage = "pictures/strider.jpg";
    resultDescription = "Note to self: stay on your good side. You'll defend yourself and your friends fiercly. Your drive to achieve your goals outweighs any fear life might bring you. That's not to say you're completely crazy - sun bathing or feeling the breeze on your whiskers can be quite nice.";
  }
  if (resultType === "option3") {
    resultText = "Mayor:";
    resultImage = "pictures/mayor.jpg";
    resultDescription = "(RIP to my baby boy <3) Wise beyond your years, or have you just realized holding grudges isn't worth anything? Not a lot of things phase you, including dark humor. Whether life is total chaos or soft like your fur, you're just happy to be with those you love.";
  }
  if (resultType === "option4") {
    resultText = "Athena:";
    resultImage = "pictures/athena.jpg";
    resultDescription = "You're no cat! How you're still alive, the world may never know. But you're the life of the party (or maybe slightly attention seeking). You'll make lemons out of lemonade, chocolate out of poop. Your poop, specifically. Hygiene isn't high on your list of priorities, is it?";
  }

  container.innerHTML = `
  <div class="result-wrapper">
    <img src="${resultImage}" alt="result image" class="result-image">
    <div class="result-text">
      <h2>${resultText}</h2>
      <p>${resultDescription}</p>
      <button id="restart-btn">Replay Quiz</button>
    </div>
  </div>
`;

  document.getElementById("restart-btn").onclick = () => {
    scores = { option1: 0, option2: 0, option3: 0, option4: 0 };
    currentQuestion = 0;

    showQuestion();
    updateProgressBar();
    document.getElementById("progress-container").style.display = "block";
  }
}