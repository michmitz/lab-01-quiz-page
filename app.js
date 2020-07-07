// import functions and grab DOM elements
import { countsAsAYes } from './unicornUtils.js';

const myButton = document.getElementById('button');
console.log(myButton);

const resultSpan = document.getElementById('result');
console.log(resultSpan);
// initialize state

// set event listeners to update state and DOM

myButton.addEventListener('click', () => {
    const name = prompt("What's your name?");
    console.log(name);

    const consent = confirm('Do you really want to take this quiz?');
    if (consent === false) {
        return;
    }

    const answer1 = prompt('Are unicorns beautiful?');
      //Answer: yes

    const answer2 = prompt('Are unicorns the same thing as narwhals?');
      //Answer: no

    const answer3 = prompt('Are unicorns real?');
     //Answer: yes
    
    let score = 0;

    if (countsAsAYes(answer1)) {
        score++;
    }

    if (!countsAsAYes(answer2)) {
        score++;
    }

    if (countsAsAYes(answer3)) {
        score++;
    }

    console.log(score);

    let response = `${name}! You scored ${score} out of 3 points!`;
    
    resultSpan.textContent = response;
    
    
    
    /* Code from example project
    
    let response = 'Your name is ' + name;

    if (correctAnswers >= 1) {
        response += ' And you know your JavaScript!';
    } else {
        response += ' And you need to brush up on getting to know JavaScript';
    }
    result.textContent = response;
    
    */
});


