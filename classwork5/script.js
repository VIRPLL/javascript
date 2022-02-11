// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let min = (a,b,c) => {
//     if (a<b&&a<c) {
//         return a;
//     } else if (b<a&&b<c) {
//         return b;
//     } else {
//         return c;
//     }
// }
// console.log(min(15,9,6));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let max = (a,b,c) => {
//     if (a>b&&a>c) {
//         return a;
//     } else if (b>a&&b>c) {
//         return b;
//     } else {
//         return c;
//     }
// }
// console.log(max(15,21,60));


// - створити функцію яка повертає найбільше число з масиву
// let arr = [12,23,123,413,54,2121,45,12,5213,428];
// let max = (mas) => {
//     let min = mas[0];
//     for (let i=0;i<mas.length;i++) {
//         if (min<mas[i]) {
//             min=mas[i];
//         }
//     }
//     return max;
// }
// console.log(max(arr));


// - створити функцію яка повертає найменьше число з масиву
// let arr = [2,23,123,413,54,2121,45,12,5213,428];
// let min = (mas) => {
//     let min = mas[0];
//     for (let i=0;i<mas.length;i++) {
//         if (min>mas[i]) {
//             min=mas[i];
//         }
//     }
//     return min;
// }
// console.log(min(arr));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [2,23,123,413,54,2121,45,12,5213,428];
// let sum = (mas) => {
//     let result = 0;
//     for (let i=0;i<mas.length;i++) {
//         result += mas[i];
//     }
//     return result;
// }
// console.log(sum(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [2,23,123,413,54,2121,45,12,5213,428];
// let serArf = (mas) => {
//     let result = 0;
//     for (let i=0;i<mas.length;i++) {
//         result += mas[i];
//     }
//     return result/mas.length;
// }
// console.log(serArf(arr));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let sumVid = (...asd) => {
//     let max = 0;
//     let min = asd[1];
//     for (element of asd) {
//         if (max < element) {
//             max = element;
//         }
//
//         if (min > element) {
//             min = element;
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(sumVid(1,3,4,1,4,56,7,234,65,234,6));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let random = (length) => {
//     let mass = [];
//     for (let i = 0; i<length; i++) {
//         mass.push(Math.round(Math.random()*100));
//     }
//     return mass;
// }
// console.log(random(10));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// let random = (length, max) => {
//     let mass = [];
//     for (let i = 0; i<length; i++) {
//         mass.push(Math.round(Math.random()*max));
//     }
//     return mass;
// }
// console.log(random(10,90));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr =[1,2,3];
// let revers = (mas) => {
//     let newMas = [];
//     for (let i = mas.length-1, r=0; i>=0 ;i--,r++){
//         newMas[r] = mas[i];
//     }
//     return newMas;
// }
// console.log(revers(arr));
