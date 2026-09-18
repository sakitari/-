// Индивидуальное задание

// Запрос и вывод данных
let userName = prompt('Введите свое имя:')
let taskName = prompt('Введите название задачи:')
let taskDate = new Date(prompt('Введите дату выполнения задания (ГГГГ-ММ-ДД):'))
let dateStr = String(taskDate)
const currentDate = new Date()
currentDate.setHours(0, 0, 0, 0)
taskDate.setHours(0, 0, 0, 0)

let daysDiff = Math.floor((taskDate - currentDate) / (1000 * 60 * 60 * 24))

console.log(
`Здравствуйте, ${userName}!
Ваша задача: ${taskName}
Дата выполнения задачи: ${taskDate}
Осталось дней: ${daysDiff}`)

// Проверка
if (daysDiff <= 5) {
    console.log(`Дней до конца срока выполнения задачи: ${daysDiff}! Осталось мало времени.`)
} else {
    console.log('Желаю продуктивного дня :)')
}