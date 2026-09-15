// Задание 1.1 Объявление переменных и работа с const
const PRODUCT_NAME = 'Смартфон'
const PRODUCT_ARTICLE = 'A1278G5';

// PRODUCT_ARTICLE = 'A1278r5';
// При запуске с активной строкой выше происходит ошибка:
// Uncaught TypeError: Assignment to constant variable.
// Она возникает из-за того, что переменная PRODUCT_ARTICLE объявлена с помощью const,
// и ее нельзя изменить после объявления

// Задание 1.2 Объявление переменных и работа с let
let productPrice = 49999
let discountRate = 15
let isInStock = true
let shippingCost = 500

// Задание 1.3 Вычисления и преобразования типов
let discountedPrice = productPrice - (productPrice * discountRate / 100)

let discountString = String(discountRate)

console.log(
`Типы данных
Тип PRODUCT_NAME: ${typeof PRODUCT_NAME}
Тип productPrice: ${typeof productPrice}
Тип isInStock: ${typeof isInStock}
Тип discountString: ${typeof discountString}`
)

//Задание 1.4 Логика и вывод с использованием шаблонных строк
if (discountedPrice >= 5000) {
    shippingCost = 0
    console.log('Цена товара со скидкой составляет 5000 рублей или больше, доставка бесплатна')
} else {
    console.log('Цена товара со скидкой меньше 5000 рублей, цена доставки:', shippingCost)
}

console.log(
`Товар: ${PRODUCT_NAME} (Арт.: ${PRODUCT_ARTICLE})
Цена: ${discountedPrice} руб. (скидка ${discountRate} %)
Наличие: ${isInStock ? "Есть в наличии" : "Нет в наличии"}
Стоимость доставки: ${shippingCost} руб.`
)

// Проверка ошибок
console.log('Код выполнен без ошибок');