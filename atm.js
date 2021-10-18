"use strict";
const accountInfo = require('./account');
const walletInfo = require('./wallet');

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

let withdrawAmount;
function withdraw(){
    let prompt = require("prompt-sync")();
    withdrawAmount = parseInt(prompt("How much would you like to withdraw?"));
    if (withdrawAmount <= accountInfo.balance){
        accountInfo.balance = accountInfo.balance - withdrawAmount;
        console.log("Withdrawing $" + withdrawAmount + " from your account, Your new balance is $" + accountInfo.balance);
        walletDeposit();
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

let depositAmount;
function deposit(){
    let prompt = require("prompt-sync")();
    depositAmount = parseInt(prompt("How much would you like to deposit today?"));
    if (depositAmount <= walletInfo.wallet){
        accountInfo.balance = accountInfo.balance + depositAmount;
        console.log("Successfully deposited $" + depositAmount + " into your account. Your new balance is $" + accountInfo.balance);
        walletWithdraw();
    }
    else if (depositAmount > walletInfo.wallet){
        console.log("You do not have that amount to deposit, check your wallet!");
        deposit();
    }
    else{
        console.log("Invalid Entry, Try again");
        deposit();
    }

};

function getBalance(){
    console.log("Your current balance is $" + accountInfo.balance);
};

function walletDeposit(){
    walletInfo.wallet = walletInfo.wallet + withdrawAmount;
    console.log("You added $" + withdrawAmount + " to your wallet. You now have $" + walletInfo.wallet + " in your wallet");
}

function walletWithdraw(){
    walletInfo.wallet = walletInfo.wallet - depositAmount;
    console.log("You took $" + depositAmount + " from your wallet for deposit to bank. Your new wallet balance is $" + walletInfo.wallet)
}

function walletBalance(){
    console.log("You currently have $" + walletInfo.wallet + " remaining in your wallet");
}

module.exports.walletBalance = walletBalance;
module.exports.walletWithdraw = walletWithdraw;
module.exports.walletDeposit = walletDeposit;
module.exports.getBalance = getBalance;
module.exports.deposit = deposit;
module.exports.withdraw = withdraw;
module.exports.validatePin = validatePin;