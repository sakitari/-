// Индивидуальное задание
taskDate = new Date(taskDate) // Иначе daysDiff возвращает NaN
taskDate.setHours(0, 0, 0, 0) // Нужно для корректного вычисления daysDiff
const currentDate = new Date() 
currentDate.setHours(0, 0, 0, 0)
let daysDiff = Math.floor((taskDate - currentDate) / (1000 * 60 * 60 * 24))
let taskComplete = true
