// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function plo (a,b) {
//      let result = a * b;
//     return result
// }
//
// console.log(plo(10,10));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function ploKol (r) {
//     let result = 3.14**2;
//     return result;
// }
//
// console.log(ploKol(5));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function plochil (h,r) {
//     let result = 2*3.14*h*r;
//     return result;
// }
//
// console.log(plochil(1,2));


// - створити функцію яка приймає масив та виводить кожен його елемент
// let sad = [31, 412, 12, 524, 412, 534, 121, 4124, 4121, 645];
// function vivodMas (a) {
//     for (let i = 0; i<a.length; i++) {
//         console.log(a[i]);
//     }
// }
//
// vivodMas(sad);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function parag (kilk, content) {
//     let i = 0;
//     while (i<kilk) {
//         document.write(`<p>${content}</p>`);
//         i++;
//     }
// }
//
// parag(5, "pasdakda");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function bildZone (content) {
//     document.write(`<ul>`);
//         document.write(`<li>${content}</li>`);
//         document.write(`<li>${content}</li>`);
//         document.write(`<li>${content}</li>`);
//     document.write(`</ul>`);
// }
//
// bildZone("opa");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function bildZone (content, kilkLi) {
//     document.write(`<ul>`);
//         let i = 0;
//         while (i<kilkLi) {
//             document.write(`<li>${content}</li>`);
//             i++;
//         }
//     document.write(`</ul>`);
// }
//
// bildZone("adasdadwq", 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [true, false, true, 21, 441, 123, "dasda", "FAsdas", "affsdfas"];
//
// function spusok (a) {
//     for (let i = 0; i<a.length; i++) {
//         document.write(`<ul>`);
//             if (typeof a[i] === "boolean") {
//                 document.write(`<li>${a[i]}</li>`);
//             }
//         document.write(`</ul>`);
//
//         document.write(`<ul>`);
//         if (typeof a[i] === "number") {
//             document.write(`<li>${a[i]}</li>`);
//         }
//         document.write(`</ul>`);
//
//         document.write(`<ul>`);
//         if (typeof a[i] === "string") {
//             document.write(`<li>${a[i]}</li>`);
//         }
//         document.write(`</ul>`);
//     }
// }
//
// spusok(arr);

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
//
// function objectBox (array) {
//     for (const elem of array) {
//         document.write(`<div>${elem.id} - ${elem.name} - ${elem.age}</div>`);
//     }
// }
//
// objectBox(arr);