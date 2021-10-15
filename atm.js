"use strict";
const accountInfo = require('./account');

function validatePin(){
    let prompt = require("prompt-sync")();
    let userPin =  parseInt(prompt("What is your pin?"));
    if (userPin === accountInfo.pin){
        console.log("That...is...CORRECT!");
    }
    else{
        console.log("Incorrect! Try Again!");
        validatePin();
    }
    return
};

function withdraw(){
    let prompt = require("prompt-sync")();
    let withdrawAmount = parseInt(prompt("How much would you like to withdraw?"));
    if (withdrawAmount <= accountInfo.balance){
        accountInfo.balance = accountInfo.balance - withdrawAmount;
        console.log("Withdrawing $" + withdrawAmount + " from your account, Your new balance is $" + accountInfo.balance);
    }
    else if (withdrawAmount > accountInfo.balance){
        console.log("Insufficient Funds");
        withdraw();
    }
    else {
        console.log("Invalid Entry, Try again");
        withdraw()
    }

};

// function deposit(){
//     let prompt = require("prompt-sync")();
//     let depositAmount = parseInt(prompt("How much would you like to deposit today?"));
//     if (depositAmount = isNaN){
//         console.log("That is not a valid selection!");
//         deposit()
//     }
//     else {
//         accountInfo.balance = depositAmount + accountInfo.balance;
//         console.log("You deposited $" + depositAmount + " into your account, Your new balance is $" + accountInfo.balance);
//     }

// };

function getBalance(){
    console.log("Your current balance is $" + accountInfo.balance);
};
getBalance()