    'use strict';

    // ask for user's name
    var userName = prompt('Hey, what\'s your name?');
    var userNameResponse = userName;

    // greet user by name in an alert
    alert('Hi, ' + userName + ', thanks for stopping by!');

    // log that to console
    console.log('The user said their name is ' + userName);

    // ask first guessing game question
    var answer1 = prompt('Do you think I have any siblings?').toLowerCase();
    // user guesses "yes/no or "Y/N"

    if (answer1 === 'yes' || answer1 === 'y') {
        // right answer
        alert('You got it right!');
        console.log('The user got the correct answer (yes)')
        } else (// wrong answer) {
        //FAIL
        console.log('The user got the wrong answer (no)')
        }

    // Tell user if they are wrong or right

    // next question
