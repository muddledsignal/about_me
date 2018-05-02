'use strict';

    // Ask for user's name
    var userName = prompt('Hey, what\'s your name?');
    var userNameResponse = userName;

    // Greet user by name in an alert
    alert('Hi, ' + userNameResponse + ', thanks for visiting!');

    // Log that to console
    console.log('The user said their name is ' + userNameResponse);


    // Ask first guessing game question
    var answer1 = prompt('Do you think I like avocados?').toLowerCase();
    var answer1Response = answer1;

    if (answer1Response === 'yes' || answer1Response === 'y') {

        alert('You\'re right. You know me well.');
        console.log('The user got the right answer (no)')

    } else (answer1Response === 'no' || answer1Response === 'n') {
        alert('Yuck! No way!');
        console.log('The user got the wrong answer (yes)');
        }

    // Second question
    var answer2 = prompt('Am I eight feet tall?').toLowerCase();
    var answer2Response = answer2;

    if (answer2Response === 'yes' || answer2Response === 'y') {
        alert('Yup, I\'m a giant!');
        console.log('The user got the answer right (yes)');
    } else (answer2Response === 'no' || answer2Response === 'n') {
        alert('Nope, sorry. I\'m a giant.");
        console.log('The user got the answer wrong (no)');
    }

    // Third question
    var answer3 = prompt('Do I like kittens?').toLowerCase();
    var answer3Response = answer3;

    if (answer3Response === 'yes' || answer3Response === 'y') {
        alert('Of course I like kittens!');
        console.log('The user got the answer right (yes)');
    } else (answer3Response === 'no' || answer3Response === 'n') {
        alert('You were way off. How could anyone not like kittens?');
        console.log('The user got the answer wrong (no)');
    }

    // Fourth question
    var answer4 = prompt('Is my name Squibbley?').toLowerCase();
    var answer4Response = answer4;

    if (answer4Response === 'yes' || answer4Response === 'y') {
        alert('Close. It\'s actually Suzanne.');
        console.log('The user got the answer wrong (yes)');
    } else (answer4Response === 'no' || answer4Response === 'n') {
        alert('You\'re right, my name certainly is not Squibbley.')
        console.log('The user got the answer right (no)');
    }
        
    // Fifth question
    var answer5 = prompt('Am I made of cotton candy?').toLowerCase();
    var answer5Response = var answer5;

    if (answer5Response === 'yes' || answer5Response === 'y') {
        alert('Sure, I\'ll give you that one.');
        console.log('The user got the answer right (yes)');

    } else (answer5Response === 'no' || answer5Response === 'n') {
        alert('I\'m not NOT made of cotton candy.');
        console.log('The user got the answer wrong (no)');
    }