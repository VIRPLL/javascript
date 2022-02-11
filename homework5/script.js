// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let spr = (a,b) => a * b;
// console.log(spr(10,10));

// - створити функцію яка обчислює та повертає площу кола
// let skol = (r) => 3.14*r**2;
// console.log(skol(5));

// - створити функцію яка обчислює та повертає площу циліндру
// let saa = (a,b) => 2*3.14*a*b;
// console.log(saa(1,2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let sad = [31, 412, 12, 524, 412, 534, 121, 4124, 4121, 645];
// let vivodMas = (mas) => {
//     for (i = 0; i<mas.length; i++) {
//         console.log(mas[i]);
//     }
// }
// vivodMas(sad);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let vivodText = (text) => document.write(`<p>${text}</p>`);
// vivodText("opa");

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let vivodUl = (text) => {
//     document.write(`<ul>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//     document.write(`<ul>`);
// }
// vivodUl("opa");

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let vivodUlAdap = (text, kilk) => {
//     document.write(`<ul>`);
//         for (i=0;i<kilk;i++){
//             document.write(`<li>${text}</li>`);
//         }
//     document.write(`</ul>`);
// }
// vivodUlAdap("opa", 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [true, false, true, 21, 441, 123, "dasda", "FAsdas", "affsdfas"];
// let spisok = (mas) => {
//     document.write(`<ol>`);
//     for (i=0;i<mas.length;i++) {
//         if (typeof mas.length[i] === "boolean") {
//             document.write(`<li>${mas[i]}</li>`);
//         } else if (typeof mas.length[i] === "number") {
//             document.write(`<li>${mas[i]}</li>`);
//         } else {
//             document.write(`<li>${mas[i]}</li>`);
//         }
//     }
//     document.write(`</ol>`);
// }
// spisok(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     {
//         id: 1,
//         name: "Roman",
//         age: 23
//     },
//     {
//         id: 2,
//         name: "Marta",
//         age: 30
//     },
//     {
//         id: 3,
//         name: "Nastia",
//         age: 22
//     }
// ];
// let objectBox = (array) => {
//     for (const elem of array) {
//         document.write(`<div>${elem.id} - ${elem.name} - ${elem.age}</div>`);
//     }
// }
// objectBox(arr);