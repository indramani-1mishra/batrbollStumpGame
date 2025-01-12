let bat = document.getElementById("bat");
let boll = document.getElementById("boll");
let stump = document.getElementById("stump");
let userChoise = ' ';
let displayAnswer = document.getElementById("result");
let displaymove = document.getElementById("displaymove");
let resetButton = document.getElementById("reset");

let score = {
    win: 0,
    loss: 0,
    tie: 0
};

// add to locaLStorage

   function AddtoLocalstorage() {
    if(localStorage.getItem('score')){
        score = JSON.parse(localStorage.getItem('score'));
    }
};

// Get from local storage

AddtoLocalstorage();


// Initially display the score
displayAnswer.innerText = `win ${score.win} loss ${score.loss} tie ${score.tie}`;

// Event listeners for user moves
bat.addEventListener('click', function() {
    userChoise = "bat";
    console.log("User move: " + userChoise);
    let result = ComputerMovef();
    console.log("Computer move: " + result);
    let resultf1 = resultf(result, userChoise);
    console.log(resultf1);
    displaymove.innerText =`Computer move: ${result}  userChoise: ${userChoise}  win: ${resultf1}`;
   
});

boll.addEventListener('click', function() {
    userChoise = "boll";
    console.log("User move: " + userChoise);
    let result = ComputerMovef();
    console.log("Computer move: " + result);
    let resultf1 = resultf(result, userChoise);
    console.log(resultf1);
    displaymove.innerText =`Computer move: ${result}  userChoise: ${userChoise}  win: ${resultf1}`;
});

stump.addEventListener('click', function() {
    userChoise = "stump";
    console.log("User move: " + userChoise);
    let result = ComputerMovef();
    console.log("Computer move: " + result);
    let resultf1 = resultf(result, userChoise);
    console.log(resultf1);
    displaymove.innerText =`Computer move: ${result}  userChoise: ${userChoise}  win: ${resultf1}`;
});

// Reset button

resetButton.addEventListener('click', function() {
    score = {
        win: 0,
        loss: 0,
        tie: 0
    };
    displayAnswer.innerText = `win ${score.win} loss ${score.loss} tie ${score.tie}`;
    localStorage.setItem('score', JSON.stringify(score));
});

// Function for computer move
function ComputerMovef() {
    let ComputerMove = Math.floor(Math.random() * 3);
    if (ComputerMove === 0) {
        return 'bat';
    } else if (ComputerMove === 1) {
        return 'boll';
    } else if (ComputerMove === 2) {
        return 'stump';
    }
}

// Function for determining the result
function resultf(ComputerMove, usermove) {
    if (ComputerMove === 'bat' && usermove === 'boll') {
        score.loss++;
        displayAnswer.innerText = `user win ${score.win} computer win ${score.loss} tie ${score.tie}`;
        localStorage.setItem('score', JSON.stringify(score));
        return 'computer won';
    } else if (ComputerMove === 'boll' && usermove === 'bat') {
        score.win++;
        displayAnswer.innerText = `user win ${score.win} computer win ${score.loss} tie ${score.tie}`;
        localStorage.setItem('score', JSON.stringify(score));
        return 'user win';
    } else if (ComputerMove === 'bat' && usermove === 'bat') {
        score.tie++;
        displayAnswer.innerText = `user win ${score.win} computer win ${score.loss} tie ${score.tie}`;
        localStorage.setItem('score', JSON.stringify(score));
        return 'it\'s a tie';
    } else if (ComputerMove === 'stump' && usermove === 'boll') {
        score.win++;
        displayAnswer.innerText = `user win ${score.win} computer win ${score.loss} tie ${score.tie}`;
        localStorage.setItem('score', JSON.stringify(score));
        return 'user win';

    } else if (ComputerMove === 'boll' && usermove === 'stump') {
        score.loss++;
        displayAnswer.innerText = `user win ${score.win} computer win ${score.loss} tie ${score.tie}`;
        localStorage.setItem('score', JSON.stringify(score));
        return 'computer won';
    } else if (ComputerMove === 'stump' && usermove === 'stump') {
        score.tie++;
        displayAnswer.innerText = `user win ${score.win} computer win ${score.loss} tie ${score.tie}`;
        localStorage.setItem('score', JSON.stringify(score));
        return 'it\'s a tie';
    } else if (ComputerMove === 'boll' && usermove === 'bat') {
        score.win++;
        displayAnswer.innerText = `user win ${score.win} computer win ${score.loss} tie ${score.tie}`;
        localStorage.setItem('score', JSON.stringify(score));
        return 'user win';
    } else if (ComputerMove === 'boll' && usermove === 'boll') {
        score.tie++;
        displayAnswer.innerText = `user win ${score.win} computer win ${score.loss} tie ${score.tie}`;
        localStorage.setItem('score', JSON.stringify(score));
        return 'it\'s a tie';
    } else if (ComputerMove === 'bat' && usermove === 'stump') {
        score.win++;
        displayAnswer.innerText = `user win ${score.win} computer win ${score.loss} tie ${score.tie}`;
        localStorage.setItem('score', JSON.stringify(score));
        return 'user win';
    } else if (usermove === 'bat' && ComputerMove === 'stump') {
        score.loss++;
        displayAnswer.innerText = `user win ${score.win} computer win ${score.loss} tie ${score.tie}`;
        localStorage.setItem('score', JSON.stringify(score));
        return 'computer won';
    } else {
        return 'conditions not added yet';
    }
}
