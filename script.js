'use strict'

let answer = prompt("какой у вас бюджет");
console.log(answer);

let timeData = prompt("укажите дату в стиле","ДД-ММ-ГГ");
console.log(timeData);

let appData = [answer,timeData];
console.log(appData[0]);

let expenses = prompt("Введите обязательную статью расходов в этом месяце");

let optionalExpenses = prompt("Во сколько обойдется?");

let obj = {expenses:optionalExpenses};
console.log(obj[1]);