"use strict";
let num = Math.trunc((Math.random() * 20)) + 1;
console.log(num);
let curval = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        if (!guess) {
            document.querySelector('.message').textContent = "Enter your input";
        }
        else if (guess != num) {
            document.querySelector('.message').textContent = guess < num ? "Too low" : "Too high";
            if (curval >= 1) {
                curval--;
                document.querySelector('.score').textContent = curval;
            }
            if (curval == 0) {
                document.querySelector('.message').textContent = "You Lost";
            }
        }

        else {
            document.querySelector('.message').textContent = "You Won";
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = num;
            document.querySelector('.number').style.width = '30rem';
            if (curval > highscore) {
                highscore = curval;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
    });
document.querySelector('.again').addEventListener('click', function () {
    curval = 20;
    num = Math.trunc(Math.random() * 20) + 1;
    console.log(num);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = curval;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
