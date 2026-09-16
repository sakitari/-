// Задание 1.1 Работа с арифметическими операторами и преобразованием типов
const currentYear = new Date().getFullYear()

let birthYear = Number(prompt('Введите год рождения:'))
let guests = Number(prompt('Введите количество гостей, которых планируете взять с собой (максимум 4):'))
let maxPeople = 5

let userAge = currentYear - birthYear
let allPeoples = 1 + guests

console.log(
`Ваш возраст: ${userAge} лет.
Общее количество человек: ${allPeoples}.`
)

//Задание 1.2 Работа с операторами сравнения и логическими операторами
if (userAge >= 18 && allPeoples <= maxPeople) {
    console.log(
    `Пользователь совершеннолетний и общее количество человек не превышает установленный лимит: ${maxPeople}.
    Регистрация разрешена.`
    )
} else if (allPeoples > maxPeople) {
    console.log(`
    Превышено допустимое число человек.
    Регистрация не разрешена.`)
} else {
    console.log(`
    Пользователь не достиг совершеннолетия.
    Регистрация не разрешена`)
}

// Задание 1.3 Глубокая работа с преобразованием типов и шаблонными строками
let userName = prompt('Введите свое имя:')
userName = userName.toUpperCase()

let favNum = prompt('Введите любимое число:')
let numFavNum = Number(favNum)

console.log(
`Пользователь: ${userName}
Любимое число: ${favNum}
Тип числа: ${typeof(favNumStr)}
Возраст: ${userAge}`
)

console.log(
typeof(userName),
typeof(userAge),
typeof(favNum),
typeof(numFavNum)
)

// Проверка ошибок
console.log('Код выполнен без ошибок')