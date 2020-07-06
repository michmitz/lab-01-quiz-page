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
    resultSpan.textContent = name + ' Quiz Score: ' + score;
});

