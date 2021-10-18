const atmInfo = require('./atm')

atmInfo.validatePin();

function mainMenu(){
    let prompt = require("prompt-sync")();
    let menu = parseInt(prompt("Hello! What would you like to do today? Please choose a number. 1.Check Balance 2.Make a withdrawal 3.Make a deposit 4.Check your wallet 5.Quit"));
    switch(menu){
        case 1:
            atmInfo.getBalance();
            mainMenu();
        case 2:
            atmInfo.withdraw();
            mainMenu();
        case 3:
            atmInfo.deposit();
            mainMenu();
        case 4:
            atmInfo.walletBalance();
            mainMenu();
        case 5:
            console.log("Goodbye!");
            process.exit();
    }
}

mainMenu();