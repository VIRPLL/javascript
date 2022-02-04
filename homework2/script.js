// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt("Число від 0 до 59");
//
// if (time >= 0 && time <= 14) {
//     console.log("Перша частина")
// } else if (time >= 15 && time <= 29) {
//     console.log("Друга частина")
// } else if (time >= 30 && time <= 44) {
//     console.log("Третя частина")
// } else if (time >= 45 && time <= 59) {
//     console.log("Четверта частина")
// } else {
//     console.log("Wrong");
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt("Число від 1 до 31");
//
// if (day >= 1 && day <= 10) {
//     console.log("Перша частина")
// } else if (day >= 11 && day <= 20) {
//     console.log("Друга частина")
// } else if (day >= 21 && day <= 31) {
//     console.log("Третя частина")
// } else {
//     console.log("Wrong");
// }


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
// let test = confirm();
// test ? console.log('+') : console.log('-')


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt("Ведіть число");
//
// if (a !== 0) {
//     console.log("true");
// } else {
//     console.log("wrong");
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер
//     дня тижня і на екрані відображається інфа що заплановано на цей день.

// let day = +prompt("day")
//
// switch (day) {
//     case 1:
//         console.log("camping")
//         break
//     case 2:
//         console.log("driving")
//         break
//     case 3:
//         console.log("swiming")
//         break
//     case 4:
//         console.log("runung")
//         break
//     case 5:
//         console.log("wolking")
//         break
//     case 6:
//         console.log("swiming")
//         break
//     case 7:
//         console.log("camping")
//         break
//     default:
//         console.log("wrong")
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = +prompt("year");
//
// if (year % 4 === 0) {
//     console.log("yes");
// }
//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
// let answer = prompt("„Яка «офіційна» назва JavaScript?“")
//
// if (answer === "ECMAScript") {
//     console.log("«Правильно!»");
// } else {
//     console.log("«Не знаєте? ECMAScript!»")
// }