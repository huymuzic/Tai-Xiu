
// Print out console log to html
/*
(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('Result');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();
*/


function daiSiuGame() {

    var playerMoney = 1000;
    var houseMoney = 10000;
    var betAmount;
    
    var round = 1;

    while (playerMoney > 0 && houseMoney > 0) {

        console.log(`Round ${round}:`);

        console.log(`Your money: ${playerMoney}`);

        console.log(`House money: ${houseMoney}`);

        console.log("Hou much do you want to bet?");

        let betAmount = prompt("Hou much do you want to bet?");

        if (betAmount <= playerMoney) {
            console.log(`$${betAmount}`);
        }
        else {
            console.log("You don't have that much money to bet");
        }
        
        let playerChoice = prompt("Choose Tai(T) or Xiu(X)?").toUpperCase();

        console.log(`${playerChoice}`);
        
        // Roll the dice

        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var dice3 = Math.floor(Math.random() * 6) + 1;

        console.log(`The dices are: ${dice1} ${dice2} ${dice3}`)

        let diceSum = dice1 + dice2 + dice3;

        console.log(`The sum of 3 dices is ${diceSum}`);
        
        // Determine the outcome
        let playerWins;
        if (diceSum >= 4 && diceSum <= 10 && playerChoice === 'T') {
            playerMoney += betAmount;
            console.log(`You won $${betAmount}`)
        } else if (diceSum >= 11 && diceSum <= 17 && playerChoice === 'X') {
            playerMoney += betAmount;
            console.log(`You won $${betAmount}`)
        } else {
            playerMoney -= betAmount;
            console.log(`You lost $${betAmount}`)
        }

        round++;

        // Check if any party has run out of money
        if (playerMoney <= 0) {
            console.log("You're out of money. Game over!");
        } else if (houseMoney <= 0) {
            console.log("The house is out of money. You win!");
        }        

        console.log("Do you still want to continue to play?(yes/no)");

        Answer = prompt("Do you still want to continue to play?(yes/no)").toUpperCase();

        if (Answer === 'YES') {
            continue;
        }
        else {
            break;
        }

    }

}

daiSiuGame();