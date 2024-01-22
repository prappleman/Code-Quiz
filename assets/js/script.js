var timeEl = document.querySelector(".timer");
var startButtonEl = document.querySelector("#start-btn");
var startpageE1 = document.querySelector("#startpage");
var questpageE1 = document.querySelector("#questpage");


// v timer function v


var timerInterval;
var secondsLeft = 10;

startButtonEl.addEventListener('click', function setTime() {

  if (!timerInterval){
      timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds";

        if(secondsLeft <= 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);

          timeEl.textContent = "";
          
          document.getElementById("resultpage").style.display = "block";
          document.getElementById("startpage").style.display = "none";
          document.getElementById("questpage").style.display = "none";
        }

      }, 1000);
  }
document.getElementById("resultpage").style.display = "none";
document.getElementById("startpage").style.display = "none";
document.getElementById("questpage").style.display = "block";

}
);


// v all the question information v


var question1 = {
  question: "What is the official state dinosaur of Utah?",
  options: ["Allosaurus", "Stegosaurus", "Triceratops", "Velociraptor"],
  answer: "Allosaurus"
};

var question2 = {
  question: "Which natural arch is the largest in the world and located in Utah?",
  options: ["Delicate Arch", "Landscape Arch", "Rainbow Bridge", "Corona Arch"],
  answer: "Landscape Arch"
};

var question3 = {
  question: "What is the Great Salt Lake known for in terms of its water composition?",
  options: ["Freshwater", "Salinity", "Warm Temperature", "Mineral-rich"],
  answer: "Salinity"
};

var question4 = {
  question: "Which national park in Utah is famous for its slot canyons like The Narrows?",
  options: ["Arches National Park", "Bryce Canyon National Park", "Zion National Park", "Canyonlands National Park"],
  answer: "Zion National Park"
};

var question5 = {
  question: "Utah is home to the largest saltwater lake in the Western Hemisphere. What is its name?",
  options: ["Great Salt Lake", "Utah Lake", "Bear Lake", "Sevier Lake"],
  answer: "Great Salt Lake"
};

var question6 = {
  question: "In which city is the Sundance Film Festival, one of the largest independent film festivals in the U.S., held annually?",
  options: ["Salt Lake City", "Park City", "Provo", "Moab"],
  answer: "Park City"
};

var question7 = {
  question: "What is the nickname given to the unusual rock formations in Goblin Valley State Park?",
  options: ["Stone Soldiers", "Alien Rocks", "Hoodoos", "Goblins"],
  answer: "Goblins"
};

var question8 = {
  question: "Utah is famous for having 'The Greatest Snow on Earth.' Which ski resort claims this slogan?",
  options: ["Snowbird", "Park City Mountain Resort", "Deer Valley Resort", "Alta Ski Area"],
  answer: "Snowbird"
};

var question9 = {
  question: "What is the famous scenic byway in Utah that passes through red rock formations and is known for its breathtaking views?",
  options: ["Highway 12", "Route 66", "Skyline Drive", "Pacific Coast Highway"],
  answer: "Highway 12"
};

var question10 = {
  question: "The Utah Jazz is an NBA team based in which city?",
  options: ["Salt Lake City", "Provo", "Ogden", "St. George"],
  answer: "Salt Lake City"
};

document.getElementById("question").innerText = question1.question;
document.getElementById("option1").innerText = question1.options[0];
document.getElementById("option2").innerText = question1.options[1];
document.getElementById("option3").innerText = question1.options[2];
document.getElementById("option4").innerText = question1.options[3];


function nextQuestion(question) {
  document.getElementById("question").innerText = question.question;
  document.getElementById("option1").innerText = question.options[0];
  document.getElementById("option2").innerText = question.options[1];
  document.getElementById("option3").innerText = question.options[2];
  document.getElementById("option4").innerText = question.options[3];
}

var currentQuestion = 0;

function checkAnswer(userAnswer) {
    if (userAnswer === questions[currentQuestion].answer) {
        alert("Correct!");
        score = score + 1;
    } else {
        alert("Sorry, that's not correct.");
    }

    currentQuestion = currentQuestion + 1;
    nextQuestion(questions[currentQuestion]);
}


// todo - function to send question to dom

// todo - landing page has retry quiz button and initials prompt for highscores


// todo - dom change for highscore page
// todo - needs local storage to keep score