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
}
