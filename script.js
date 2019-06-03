'use strict'

let money = prompt("какой у вас бюджет");

let time = prompt("укажите дату в стиле","ДД-ММ-ГГ");

let appData = {

    money,
    time,
    expenses: {
        "x" : "y"
    } ,//ОБ РАС
    optionalExpenses: {},
    income: [],//НЕОБ РАС
};
let x = prompt("введите необходимую статью расходов");

let y = prompt("во сколько обойдется?")

let a = (money-y)/30;
console.log(a);
alert("ваш бюджет на день"  +  a + "рублей");