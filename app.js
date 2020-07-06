// import functions and grab DOM elements

const myButton = document.getElementById(button);
console.log(myButton);

const score = document.getElementById(Result);
console.log(score);
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
});

