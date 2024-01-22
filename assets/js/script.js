// button variables
var startButtonEl = document.querySelector("#start-btn");
var questButtons = document.querySelectorAll(".quest-btn");
var retryButtonE1 = document.querySelector("#retry-btn");


// page variables
var startpageE1 = document.querySelector("#startpage");
var questpageE1 = document.querySelector("#questpage");


// timer variables
var timeEl = document.querySelector(".timer");
var timerInterval;
var secondsLeft = 61;



// timer function (start button)

startButtonEl.addEventListener('click', function setTime() {
  if (!timerInterval){
      timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds";

        if(secondsLeft <= 0) {
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



// timer reset (retry button)

retryButtonE1.addEventListener('click', function setTime() {

  currentQuestion = 0;
    secondsLeft = 60;
    displayQuestion(questions[currentQuestion]);


    clearInterval(timerInterval);
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds";

        if(secondsLeft <= 0) {
          clearInterval(timerInterval);
          timeEl.textContent = "";
          
          document.getElementById("resultpage").style.display = "block";
          document.getElementById("startpage").style.display = "none";
          document.getElementById("questpage").style.display = "none";
        }

      }, 1000);
  
document.getElementById("resultpage").style.display = "none";
document.getElementById("startpage").style.display = "none";
document.getElementById("questpage").style.display = "block";
    }
);



// question information

var questions = [
  {
  question: "What is the official state dinosaur of Utah?",
  options: ["Allosaurus", "Stegosaurus", "Triceratops", "Velociraptor"],
  answer: "Allosaurus"
},
{
  question: "Which natural arch is the largest in the world and located in Utah?",
  options: ["Delicate Arch", "Landscape Arch", "Rainbow Bridge", "Corona Arch"],
  answer: "Landscape Arch"
},
{
  question: "What is the Great Salt Lake known for in terms of its water composition?",
  options: ["Freshwater", "Salinity", "Warm Temperature", "Mineral-rich"],
  answer: "Salinity"
},
{
  question: "Which national park in Utah is famous for its slot canyons like The Narrows?",
  options: ["Arches National Park", "Bryce Canyon National Park", "Zion National Park", "Canyonlands National Park"],
  answer: "Zion National Park"
},
{
  question: "Utah is home to the largest saltwater lake in the Western Hemisphere. What is its name?",
  options: ["Great Salt Lake", "Utah Lake", "Bear Lake", "Sevier Lake"],
  answer: "Great Salt Lake"
},
{
  question: "In which city is the Sundance Film Festival, one of the largest independent film festivals in the U.S., held annually?",
  options: ["Salt Lake City", "Park City", "Provo", "Moab"],
  answer: "Park City"
},
{
  question: "What is the nickname given to the unusual rock formations in Goblin Valley State Park?",
  options: ["Stone Soldiers", "Alien Rocks", "Hoodoos", "Goblins"],
  answer: "Goblins"
},
{
  question: "Utah is famous for having 'The Greatest Snow on Earth.' Which ski resort claims this slogan?",
  options: ["Snowbird", "Park City Mountain Resort", "Deer Valley Resort", "Alta Ski Area"],
  answer: "Snowbird"
},
{
  question: "What is the famous scenic byway in Utah that passes through red rock formations and is known for its breathtaking views?",
  options: ["Highway 12", "Route 66", "Skyline Drive", "Pacific Coast Highway"],
  answer: "Highway 12"
},
{
  question: "The Utah Jazz is an NBA team based in which city?",
  options: ["Salt Lake City", "Provo", "Ogden", "St. George"],
  answer: "Salt Lake City"
}];



// display questions function

var currentQuestion = 0;

function displayQuestion(question) {
  document.getElementById("question").innerText = question.question;
  document.getElementById("option1").innerText = question.options[0];
  document.getElementById("option2").innerText = question.options[1];
  document.getElementById("option3").innerText = question.options[2];
  document.getElementById("option4").innerText = question.options[3];
}



// next question

function nextQuestion() {

  setTimeout(function() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      displayQuestion(questions[currentQuestion]);
    } else {

      clearInterval(timerInterval);

      timeEl.textContent = "";
          
      document.getElementById("resultpage").style.display = "block";
      document.getElementById("startpage").style.display = "none";
      document.getElementById("questpage").style.display = "none";
    }
  }, 500);
}



// score variables

var score = 100;
var penaltyForIncorrect = 10;
var penaltyForUnanswered = 10;



// correct answer checker (button color changer)
questButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (button.textContent === questions[currentQuestion].answer) {
      console.log(score)
      nextQuestion();
      button.style.backgroundColor = 'green';
      button.style.color = 'white';

      setTimeout(function() {
        button.style.backgroundColor = '';
        button.style.color = 'black';
      }, 500);
    } else {
      button.style.backgroundColor = 'red';
      button.style.color = 'white';

      // Deduct points and time for incorrect answer
      score -= penaltyForIncorrect;
      secondsLeft -= penaltyForIncorrect;

      setTimeout(function() {
        button.style.backgroundColor = '';
        button.style.color = 'black';
      }, 500);
    }

    // Display score and handle end of quiz
    updateScore();
  });
});

function updateScore() {
  document.getElementById("score").innerText = "Score: " + score;
}

// Function to check the end of the quiz
function checkEndOfQuiz() {
  if (currentQuestion === questions.length - 1) {
    clearInterval(timerInterval);
    timeEl.textContent = "";



    //!!!!!!!NEEDS TO BE FIXED 
    var spareTime = secondsLeft;
    score += spareTime;

    var unansweredQuestions = questions.length - (currentQuestion + 1);
    var unansweredPenalty = unansweredQuestions * penaltyForUnanswered;
    score -= unansweredPenalty;

    // Display the final score and other result elements
    document.getElementById("resultpage").style.display = "block";
    document.getElementById("startpage").style.display = "none";
    document.getElementById("questpage").style.display = "none";
  }
}

// start question display
displayQuestion(questions[currentQuestion]);


// Display initial score
updateScore();





//add how ever many seconds that are left as points
//subtract 10 points for any questions you couldnt get to in the time limit

//come up with final score and save to local storage

//when quiz is over prompt user to save their score to the leaderboard with their initials
//call back results for highscore html