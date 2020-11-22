var rl = require('readline-sync');
const chalk = require('chalk');

var userName = rl.question(chalk.greenBright.bold("What is your Name?\n"));

console.log(chalk.blueBright.bold("\n"+ "Hello "+ userName + ", Welcome To the General knowledge quiz.\n"));

console.log(chalk.bgCyan.bold("Quiz Instructions"));
console.log(chalk.yellow("1. This quiz has total of five questions."));
console.log(chalk.yellow("2. Only enter the respective alphabet of correct option. Not full answer."))
console.log(chalk.yellow("3. For every correct attempt, you will be rewarded 4 points."));
console.log(chalk.yellow("4. For every wrong attempt, you will be deducted 1 point."));
console.log(chalk.yellow("5. For no attempt, you will be rewarded 0 points."));
console.log(chalk.yellow("***Typical JEE format. Lol.\n"));

console.log(chalk.bgCyan.bold("Leaderboard"));
console.log(chalk.yellow.bold("Name:         points"));
console.log(chalk.blueBright.bold("Keerthana      20"));
console.log(chalk.blueBright.bold("Nikhil         20"));
console.log(chalk.blueBright.bold("Lavanya        20\n"));

var questions = [
    	{
		question: "1. How many consonants are there in the English alphabets?\na) 19\nb) 20\nc) 21\nAns: ",
		answer: 'c'
	},
      {
    question: "2. Which animal is known as the 'Ship of the desert?'\na) horse\nb) camel\nc) lion\nAns: ",
    answer: 'b'
  },
      {
    question: "3. How many colors are there in a rainbow?\na) 7\nb) 8\nc) 10\nAns: ",
    answer: 'a'
  },
      {
    question: "4. Which festival is called as festival of light?\na) dussehra\nb) holi\nc) diwali\nAns: ",
    answer: 'c'
  },
      {
    question: "5. Which is the fastest animal on the land?\na) tiger\nb) cheetah\nc) lion\nAns: ",
    answer: 'b'
  },
    
];

var start = rl.question(chalk.hex('#FFA500')("Type YES to start Quiz\n"));

var score = 0;
var userAnswer;

if (start === "YES" || start === "yes" || start === "Yes" || start === "YEs") {
    console.log("\n");
    function play(question, answer) {
    userAnswer = rl.question(chalk.redBright.bold(question));
   
   if (userAnswer === answer) {
      score = score + 4;
      console.log(chalk.greenBright("Correct! Your score: "+ score));
    } else if (userAnswer === ""){

    } else {
      score--;
      console.log(chalk.red('Wrong!! Your score: '+ score));
    }
  }

  for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i].question;
  var currentAnswer = questions[i].answer;

  play(currentQuestion, currentAnswer);
  console.log("\n")
  }
} else {
  console.log("Okay, Comback later.");
}

if (score === 20) {
  console.log(chalk.greenBright.bold("YAY! You won this quiz."));
} else {
  console.log(chalk.redBright.bold("Your Final score is "+ score + ". To win this quiz, your score should be 20.\nBetter Luck next time."));
}