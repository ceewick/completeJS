/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function() {
var Question, randQuestion, userGuess;

// Question Constructor
Question = function(actualQuestion,multipleChoices,correctAnswer) {
    this.actualQuestion = actualQuestion;
    this.multipleChoices = multipleChoices;
    this.correctAnswer = correctAnswer;
    this.showQA = function() {
        console.log(actualQuestion);
        for (x=0; x < (multipleChoices.length); x++) {
            var answers = multipleChoices[x];
            var answerID = x;
            console.log(answerID,answers);
        }
    }
        this.checkUserAnswer = function(userChoice) {
        if (multipleChoices[userChoice] === correctAnswer) {
            console.log(multipleChoices[userChoice]+' Answer is Correct!!');
        } else {
            console.log('Incorrect, '+multipleChoices[userChoice]+' was not it');
        }
    }
}
// Questions
var q1 = new Question('Capital of Georgia?',
                    ['Savannah','Atlanta','Mobile','Macon'],
                    'Atlanta');

var q2 = new Question('React is a framework for what programming language',
                    ['C#','Java','Redux','JavaScript'],
                    'JavaScript');

var q3 = new Question('Atlanta NFL team?',
                    ['Falcons','Ravens','Hawks','Braves'],
                    'Falcons');
var allQuestions = [q1,q2,q3];


randQuestion = function(allQuestionsarra) {
    // Pick random question from array of questions
    var slot = Math.floor(Math.random() * (allQuestionsarra.length));
    q = allQuestionsarra[slot];
    return q;
} 

var y = randQuestion(allQuestions);
y.showQA();
var userAnswer = parseInt(prompt('Please select the correct answer.'));
y.checkUserAnswer(userAnswer);

}) ();
// var checkUserAnswer = function() {
//     var question = randQuestion(allQuestions);
//     var qAndA = y.showQA();
//     var userGuess = prompt(y.checkAnswer());
//     if (userGuess === typeof(NaN)) {
//             console.log('You entered a non-number!');
//         }
//     console.log('chhoice = '+userGuess)
//     y.checkAnswer(userGuess);
//     }

// checkUserAnswer();


// var q = y.actualQuestion;
// var c = y.multipleChoices;
// console.log(qa);
// prompt(q+y.showQA());
// y.checkAnswer(0);

// y.checkAnswer();
// // User input answer
// userGuess = 0; //prompt('Which do you think is answer?');
// if (x.multipleChoices[userGuess]Question.correctAnswer
// console.log(x.multipleChoices);//[userGuess]);

// answer = q1.correctAnswer
// ans = q2.multipleChoices;
// console.log(ans[0]);

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/
