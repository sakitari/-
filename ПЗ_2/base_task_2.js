// Задание 1.1 Работа с арифметическими операторами и преобразованием типов
const currentYear = new Date().getFullYear()
let birthYear = Number(prompt('Введите год рождения:'))
let userAge = currentYear - birthYear
console.log(`Ваш возраст: ${userAge} лет`)