// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNum (a,b,c) {
//     if (a<b && a<c) {
//         return a
//     } else if (b<a && b<c) {
//         return b
//     } else {
//         return c
//     }
// }
// console.log(minNum(5,9,7));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function minNum (a,b,c) {
//     if (a>b && a>c) {
//         return a
//     } else if (b>a && b>c) {
//         return b
//     } else {
//         return c
//     }
// }
// console.log(minNum(15,9,7));


// - створити функцію яка повертає найбільше число з масиву
// let arr = [12, 4124, 412, 512, 7792];
// function maxArr (ada) {
//     let max = 0;
//     for (elem of ada) {
//         if (elem > max) {
//             max = elem;
//         }
//     }
//     return max;
// }
// console.log(maxArr(arr));


// - створити функцію яка повертає найменьше число з масиву
// let arr = [1221, 4124, 412, 512, 7792];
// function maxArr (ada) {
//     let min = ada[0];
//     for (elem of ada) {
//         if (elem < min) {
//             min = elem;
//         }
//     }
//     return min;
// }
// console.log(maxArr(arr));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let mas = [31,3,1,4];
// function sum (asd) {
//     let result = 0;
//     for (element of asd) {
//         result += element;
//     }
//     return result;
// }
//
// console.log(sum(mas));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let mas = [32,1,3,5,85,3,32,21];
// function serAref (asd) {
//     let result = 0;
//     for (element of asd) {
//         result += element/asd.length;
//     }
//     return result;
// }
//
// console.log(serAref(mas));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let mas = [32,1,3,5,85,3,32,21];
// function sumVid (asd) {
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
//
// console.log(sumVid(mas));

// - створити функцію яка заповнює масив рандомними числами
// function random (length) {
//     let mass = [];
//     for (let i = 0; i<length; i++) {
//         mass.push(Math.round(Math.random()*100));
//     }
//     return mass;
// }
//
// console.log(random(20));

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// function random (length, limit) {
//     let mass = [];
//     for (let i = 0; i<length; i++) {
//         mass.push(Math.round(Math.random()*limit));
//     }
//     return mass;
// }
//
// console.log(random(20, 50));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let mas =[1,2,3,4,5];
// function reverse (asd) {
//     let newMas = [];
//     for (let i = asd.length-1, r = 0; i>=0; i--, r++) {
//         newMas[r] = asd[i];
//     }
//     return newMas;
// }
//
// console.log(reverse(mas));
