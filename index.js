'use strict';

// 1. On clicking check, it should grab the valueinside it.
// 2.Check datatype.. and do the appropriate changes
// 3.If no input display the message..No Number
// 4.Now you gotta GENERATE A RANDOM NUMBER BETWEEN
//  1-20 AND compare it with the input value. clg same if same!
// 5. Diplay Appropriate message too high too low correct no etc
// 6.Change scores correct +1 else -1

let score = 20
let secretNumber = Math.floor(Math.random() * 20) + 1; 
let highscore = 0;
let hasWon = false;


document.querySelector('.check')
        .addEventListener('click' , function() {
            
            if(!hasWon){
                const guess = Number(document.querySelector('.guess').value);

            if (!guess) {
                document.querySelector('.message').textContent = "No Number!"
            } else if (guess === secretNumber) {

                hasWon = true;
                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('.message').textContent = "Correct Number!";
                score ++;
                document.querySelector('.score').textContent = score;
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';

                if(score > highscore){
                    highscore = score;
                    document.querySelector('.highscore').textContent = highscore;
                }

                document.querySelector()

            }  else if(guess > secretNumber) {
                if(score > 1)
                {document.querySelector('.message').textContent = "Go Lower 😉";
                score --;
                document.querySelector('.score').textContent = score;}
                else {
                    document.querySelector('.message').textContent = "You lost the game! 🥲"
                    score = 0;
                    document.querySelector('.score').textContent = score;
                }
            } else if(guess < secretNumber) {
                if(score > 1){
                    document.querySelector('.message').textContent = "Go Higher ";
                    score --;
                    document.querySelector('.score').textContent = score;
                }else {
                    document.querySelector('.message').textContent = "You lost the game! 🥲"
                    score = 0;
                    document.querySelector('.score').textContent = score;
                }
            }
        }});



document.querySelector('.again').addEventListener('click',function() {
    hasWon = false;
    score = 20
    secretNumber = Math.floor(Math.random() * 20) + 1;


    document.querySelector('.message').textContent = 'Guess the number!';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = " ";

            }
);



