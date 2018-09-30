/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// var scores, roundScore, activePlayer, dice;

// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;

// dice = Math.floor(Math.random() * 6) + 1;
// console.log('dice ='+dice);

// document.querySelector('#current-'+ activePlayer).textContent = dice;
// // document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>'
// document.querySelector('#name-' + activePlayer).textContent = 'Bob';

// // ** inner html instead text comment for html

// var totalScore = document.querySelector('#score-0').textContent;
// console.log(totalScore);
// // above is a 'Getter' <- gets it and logs

// document.querySelector('.dice').style.display = 'none'; 
// to cite a class, instead of above '#', use '.'
// style the css. Change display attribute to none. Changes HTML in page. CSS atttributes?

/** ******  Events ************ 
 * notifications that something happened on our page. clicking button, pressing key, scrolling, resize a window
 * 
 * Event listener = a function that performs an action based on event. Waits for event to happen
 * - set up event handler
 * - callback function
 * - anonymous function
 * - another way to select elements by ID; 
 * - how to change the image in an <img> element
 */
// var scores, roundScore, activePlayer, gamePlaying;
// //// above are init. MUST declare at the top to be global variable


// /// all below added to 'init' function

// // scores = [0,0];
// // roundScore = 0;
// // activePlayer = 0;

// // document.querySelector('#name-' + activePlayer).textContent = 'Bob';
// // document.querySelector('.dice').style.display = 'none'; 

// // //// Below - When have ID, use getElementByID because faster. Notice, not using CSS ('#' or '.[class]')
// // //// Set values to '0' - not in HTMl but in JavaScript
// // document.getElementById('score-0').textContent = '0';
// // document.getElementById('score-1').textContent = '0';
// // document.getElementById('current-0').textContent = '0';
// // document.getElementById('current-1').textContent = '0';

// init();

// ////  button to roll dice
// // function btn() {
// //     //Do something here
// // }
// // btn();
// // document.querySelector('.btn-roll').addEventListener('click', btn);
// // above == callback - callback is a function that gets called from another function (we do not call)
// // below == anonymous function -  we don't want to use btn function anywhere else. function that doesn't have name, cannot be re-used

// //// Event Listener = roll dice button
// document.querySelector('.btn-roll').addEventListener('click', function() {
//     if(gamePlaying) {

//     // Make button click
//     // 1. Random Number
//     var dice = Math.floor(Math.random() * 6)+1;
//     // different than above global variable 'dice', as this moves variable to function's scope. Changes execution context
//     // 2. Display dice result
//     var diceDOM = document.querySelector('.dice');
//         diceDOM.style.display = 'block';
//         diceDOM.src = 'dice-'+dice+'.png';
//     // document.querySelector('.dice').style.display = 'block';

//     // 3. Update the roundScore IF the number !== 1
//     if (dice !== 1) {
//         roundScore += dice;
//         document.querySelector('#current-'+activePlayer).textContent = roundScore;
//         // console.log(dice);
//     } else {
//         // //// Next Player
//         // //// ternary operator
//         // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//         // roundScore = 0;
//         //  //// above = 'if activePlayer = 0, then activePlayer = 1, else = 0
//         // //// document.querySelector('#current-'+activePlayer).textContent = roundScore;
//         // document.getElementById('current-0').textContent = roundScore;
//         // document.getElementById('current-1').textContent = roundScore;

//         // // document.querySelector('.player-0-panel').classList.remove('active');
//         // // document.querySelector('.player-1-panel').classList.add('active');
//         // /// above problem. The class active class goes to player 1 when rolls a 0, but doesnt go to player 0 when play 1 rolls a 1
//         // document.querySelector('.player-0-panel').classList.toggle('active');
//         // document.querySelector('.player-1-panel').classList.toggle('active');

//         // document.querySelector('.dice').style.display = 'none';
//         nextPlayer(); // function created below
//         // console.log(dice);
//     }
// }

// });

// //// Event Listener - 'Hold' button
// document.querySelector('.btn-hold').addEventListener('click', function(){
//     // Add CURRENT score to global 'score'
//     scores[activePlayer] += roundScore;

//     // Update the UI via DOM manipulation
//     // document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
//     document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
//     // console.log(scores);
    
//     // Check if player won the game
//     if (scores[activePlayer] >= 20) {
//         document.getElementById('name-'+activePlayer).textContent = 'WINNER';
//         document.querySelector('.dice').style.display = 'none';
//         document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
//         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
//         gamePlaying = false;
//     } else {
//         nextPlayer();
//     }
//     // Next Player
//     // nextPlayer();
// });

// function nextPlayer() {
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     roundScore = 0;

//     document.getElementById('current-0').textContent = 0;
//     document.getElementById('current-1').textContent = 0;

//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');

//     document.querySelector('.dice').style.display = 'none';
// }

// //// Game initialization
// document.querySelector('.btn-new').addEventListener('click',init);
// //// above is not init() because do not want init to be immediately called

// function init() {
//     scores = [0,0];
//     activePlayer = 0;
//     roundScore = 0;
//     gamePlaying = true;

//     document.querySelector('.dice').style.display = 'none'; 

//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');

//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');

    //// always remove, because might potentially be 2x active classes


//// State variable = tells us the definition of system. Need when to remember something, ie - is a game playing or not ? In this app, it's placed in the init


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
// to add dice, duplicate dice in HTML


var scores, roundScore, activePlayer, gamePlaying, winningScore, previousRole;

init();

//// Event Listener = roll dice button
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {

    // Make button click
    // 1. Random Number
    var dice = Math.floor(Math.random() * 6)+1;
    var dice2 = Math.floor(Math.random() * 6)+1

    // 2. Display dice result
    document.getElementByID('dice-1').style.display = 'block';
    document.getElementByID('dice-2').style.display = 'block';
    document.getElementByID('dice-1').src = 'dice-'+dice+'.png';
    document.getElementByID('dice-2').src = 'dice-'+dice2+'.png';

    // // 3. If player roles 6 twice in a row, loses ENTIRE score
    if ((dice === 6 || dice2===6) && (previousRole[0] === 6 || previousRole[1] === 6)) {
        console.log('two * sixes in a row!');
        scores[activePlayer] = 0;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
        alert('Two 6 in a row!!!');
        nextPlayer();
    } 
    // 4. Update the roundScore IF the number !== 1
    if (dice !== 1 && dice2 !== 1) {
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }    
    previousRole = [dice, dice2];
    }
});

//// Event Listener - 'Hold' button
document.querySelector('.btn-hold').addEventListener('click', function(){
    // Add CURRENT score to global 'score'
    scores[activePlayer] += roundScore;
    // Update the UI via DOM manipulation
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    
    // Check if player won the game
    if (scores[activePlayer] >= winningScore) {
        document.getElementById('name-'+activePlayer).textContent = 'WINNER';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        nextPlayer();
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    previousRole = 0;
}

//// Game initialization
document.querySelector('.btn-new').addEventListener('click',init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    previousRole = 0;

    document.querySelector('.dice').style.display = 'none'; 

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    // Ask player for Winning Score parameter
    winningScoreVar = prompt('Default winning score\'s 100. If you\'d like a different winning score, please input. Otherwise, press enter to default to 100', '0');
    try {
        winningScore = parseFloat(winningScoreVar);
    } catch(winningScoreVar) {
        winningScore = winningScoreVar;
    }
    if (winningScore >= 1) {
        winningScore = winningScoreVar;
    } else {
        winningScore = 10;
    }

    // } 
};












