//Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = mas[0] + mas[1] + mas[2] + mas[3] + mas[4] + mas[5] + mas[6] + mas[7] + mas[8] + mas[9];
console.log(result);


//Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name: "book",
    pages: 299,
    genre: "horor"
}
console.log(book);


//Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book1 = {
    name: "book1",
    pages: 659,
    genre: "Melodram",
    author: "Roman Savchak"
}
console.log(book1);


//Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [book, book1];

console.log(books[0], books[1]);


//Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//Значення площі зберігати в змінній s.
let height = 10;
let width = 5;
let s = height * width;
console.log(s);

//Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let r = dC/2;
let v = 3.14*r**2*heightC;
console.log(v);

//У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(3,2) + m**2);
console.log(k);




