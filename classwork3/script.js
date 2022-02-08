//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let das = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
// let a = 0;
// while (a<das.length) {
//     console.log(das[a]);
//     a++;
// }

// 2. перебрати його циклом for
// for (let i = 0; i<das.length; i++) {
//     console.log(das[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let a = 0;
// while (a<das.length) {
//     if (a % 2 === 1) {
//         console.log(das[a]);
//     }
//     a++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i<das.length; i++) {
//     if (i % 2 === 1){
//         console.log(das[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let a = 0;
// while (a<das.length) {
//     if (a % 2 === 0) {
//         console.log(das[a]);
//     }
//     a++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i<das.length; i++) {
//     if (i % 2 === 0){
//         console.log(das[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i<das.length; i++) {
//     if (i % 3 === 0){
//         das[i] = "okten";
//         console.log(das[i]);
//     }
// }
// console.log(das);

// 8. вивести масив в зворотньому порядку.
// for (let i = das.length-1;i>=0; i--) {
//     console.log(das[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1)
// let a = das.length-1;
// while (a >= 0) {
//     console.log(das[a]);
//     a--;
// }


// 2)
// for (let i = das.length-1; i>=0; i--) {
//     console.log(das[i]);
// }


// 3)
// let a = das.length-1;
// while (a>=0) {
//     if (a % 2 === 1) {
//         console.log(das[a]);
//     }
//     a--;
// }


// 4)
// for (let i = das.length-1; i>=0; i--) {
//     if (i % 2 === 1){
//         console.log(das[i]);
//     }
// }


// 5)
// let a = das.length-1;
// while (a>=0) {
//     if (a % 2 === 0) {
//         console.log(das[a]);
//     }
//     a--;
// }


// 6)
// for (let i = das.length-1; i>=0; i--) {
//     if (i % 2 === 0){
//         console.log(das[i]);
//     }
// }