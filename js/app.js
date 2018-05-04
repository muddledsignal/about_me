'use strict';

/* 
About Me
    -keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."
*/

    // Ask for user's name
    var userName = prompt('Hey, what\'s your name?');
    var userNameResponse = userName;

    // Greet user by name in an alert
    alert('Hi, ' + userNameResponse + ', thanks for visiting!');

    // Log that to console
    console.log('The user said their name is ' + userNameResponse);

    // Ask first guessing game question
    function question1(){
        
        var avocadoQuestion = prompt('Do you think I like avocados?').toLowerCase();
    
        if (avocadoQuestion === 'yes' || avocadoQuestion === 'y') {
            alert('Yuck! No way!');
            console.log('The user got the wrong answer (yes)');
    
        } else if (avocadoQuestion === 'no' || avocadoQuestion === 'n') {
            alert('You\'re right. You know me well.');
            console.log('The user got the right answer (no)')
            }
    
    }


    // Second question
    function question2() {

        var giantQuestion = prompt('Am I eight feet tall?').toLowerCase();
    
        if (giantQuestion === 'yes' || giantQuestion === 'y') {
            alert('Yup, I\'m a giant!');
            console.log('The user got the answer right (yes)')
        } else if (giantQuestion === 'no' || giantQuestion === 'n') {
            alert('Nope, sorry. I\'m a giant.');
            console.log('The user got the answer wrong (no)');
        }
    }

    // Third question
    function question3(){

    
        var kittenQuestion = prompt('Do I like kittens?').toLowerCase();
    
        if (kittenQuestion === 'yes' || kittenQuestion === 'y') {
            alert('Of course I like kittens!');
            console.log('The user got the answer right (yes)');
        } else if (kittenQuestion === 'no' || kittenQuestion === 'n') {
            alert('You were way off. How could anyone not like kittens?');
            console.log('The user got the answer wrong (no)');
        }
    
        }

         // Fourth question
    function question4(){
   
        var isMyNameQuestion = prompt('Is my name Squibbley?').toLowerCase();
        
        if (isMyNameQuestion === 'yes' || isMyNameQuestion === 'y') {
                alert('Close. It\'s actually Suzanne.');
                console.log('The user got the answer wrong (yes)');
        } else if (isMyNameQuestion === 'no' || isMyNameQuestion === 'n') {
                alert('You\'re right, my name certainly is not Squibbley.')
                console.log('The user got the answer right (no)');
        }
        }

                    // Fifth question
    function question5(){
        var cottonCandyQuestion = prompt('Am I made of cotton candy?').toLowerCase();
        
        if (cottonCandyQuestion === 'yes' || cottonCandyQuestion === 'y') {
                alert('Sure, I\'ll give you that one.');
                console.log('The user got the answer right (yes)');
        
        } else if (cottonCandyQuestion === 'no' || cottonCandyQuestion === 'n') {
                alert('I\'m not NOT made of cotton candy.');
                console.log('The user got the answer wrong (no)');
        }
        }

    function question6(){
            // Sixth question
          
          // Chances === 4
          // Countdown favNumChances
      
        var favNumChances = 4;
      
        while (favNumChances > 0) {
        var favNumQuestion = prompt('Try to guess my favorite number in 4 tries or less.');
      
        if (favNumQuestion === 758) {
                  alert('You got it! You\'re a great guesser.');
                  console.log('The user got the answer right (758)');
        } else if (favNumQuestion > 758) {
                  alert('That\'s a bit too high. You\'re pretty close though.');
                  console.log('The user guessed ' + favNumQuestion);
        } else if (favNumQuestion <= 750 && favNumQuestion > 500) {
                  alert('That\'s a bit too low. You\'re close though');
        } else if (favNumQuestion <= 500 && favNumQuestion > 250) {
                  alert('Nope, that\'s too low.');
        } else if (favNumQuestion <= 250) {
                  alert('Nope, that\'s way too low.');
        }
              favNumChances--;
      
        if (favNumChances === 0 && favNumQuestion !== 758) {
                  alert('Sorry, you ran out of tries :/');
                  console.log('The user got the answer wrong')
        }
      
      
        }
      
      }
//Question 7

    function question7(){
        var userWrong = true;
        var favTvChances = 6;
        while (favTvChances > 0) {
        var favTv = prompt('Try to guess one of my favorite TV shows in 6 tries or less.').toLowerCase();
        var favTvArray = ['30 rock', 'arrested development', 'steven universe'];
        favTvChances --;
            
        console.log(favTvChances);
        for (var i = 0; i < favTvArray.length; i++) {
            if (favTv === favTvArray[i]) {
                        userWrong = false;
                        favTvChances = 0;
                        alert('You got one! Good job!');
                        console.log('The user got the answer right (' + favTv + ')');
                        
                } 
                    
                }
        if (userWrong === true && favTvChances === 0) {
                    alert('Sorry, you ran out of tries :/. BYEE!')
                    console.log('')
                    break;
        }
        
        }

    }
question1();
question2();
question3();
question4();
question5();
question6();
question7();