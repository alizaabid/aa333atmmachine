#! /urs/bin/env node
import inquirer from "inquirer";
let myBalance = 15000;
let myPin = 55555;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("congratulation, correct pin code!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select one operation",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"],
        },
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        let total = myBalance - amountAnswer.amount;
        if (myBalance > amountAnswer.amount) {
            console.log("your remainimg balance is" + total);
        }
        else {
            console.log("sorry,insufficient balance");
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`${myBalance}`);
    }
    else if (operationAnswer.operation === "fastcash") {
        let cashmoney = await inquirer.prompt([
            {
                name: "money",
                message: "how much money you want to cash",
                type: "list",
                choices: ["5000", "10000", "15000"],
            },
        ]);
        let money = myBalance - cashmoney.money;
        if (cashmoney.money === "5000") {
            console.log("your remaining balance is" + money);
        }
        else if (cashmoney.money === "10000") {
            console.log("your remaining balance is" + money);
        }
        else if (cashmoney.money === "15000") {
            console.log("your remaining balance is" + money);
        }
    }
}
else {
    console.log("please enter the correct pin");
}
