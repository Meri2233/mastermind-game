var readlineSync = require('readline-sync');

function calcScore() {
    let posObj = {
        correctPos: 0,
        incorrectPos: 0
    }
    let randomNum1 = Math.floor(Math.random() * 5) + 1;
    let randomNum2 = Math.floor(Math.random() * 5) + 1;
    let randomNum3 = Math.floor(Math.random() * 5) + 1;
    let randomNum4 = Math.floor(Math.random() * 5) + 1;

    let randomNum = randomNum1 + "" + randomNum2 + "" + randomNum3 + "" + randomNum4
    console.log(randomNum);

    for (let i = 0; i < 10; i++) {
        var guessNum = readlineSync.question(`Enter your guess (${10 - i} guesses left): `);
        for (let i = 0; i < guessNum.length; i++) {
            let index = randomNum.indexOf(guessNum[i]);

            if (randomNum[i] === guessNum[i]) {
                posObj.correctPos++;
            }
            else if (index !== -1 && index !== i) {
                posObj.incorrectPos++;
            }
        }
        if (guessNum === randomNum) {
            console.log("You Won");
            break;
        }
        console.log(posObj)
        posObj.correctPos = 0;
        posObj.incorrectPos = 0;
    }
}

calcScore()


