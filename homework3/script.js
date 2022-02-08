// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let das = [3, 13, 123, 424, 421];
// let opa = ["oas", "asd", "dass", "fadsx", "fasx"];
// let assa = ["eqwasd", 123, true, false, 1];
// console.log(das, opa, assa);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let das = [];
// das[0] = 12;
// das[1] = "dasfa";
// das[2] = 412312;
// das[3] = false;
// das[4] = true;
// console.log(das);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


// for (let i = 0 ;i < 10; i++) {
//     document.write(`<div>asfasww</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i =0; i < 10; i++) {
//     document.write(`<div>number ${i} adsfasff</div>`);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let a = 0;
// while (a<20) {
//     document.write(`<h1>blok</h1>`);
//     a++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let s = 0;
// while (s<20) {
//     document.write(`<h1>number - ${s}</h1>`);
//     s++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let sad = [31, 412, 12, 524, 412, 534, 121, 4124, 4121, 645];
//
// for (ewas of sad) {
//     console.log(ewas);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let fsd = ["das", "gscv", "cxsa", "cvsw", "fewsf", "gww", "gwer", "guqewq", "gwsdf", "gwsdfq"];
//
// for ( let i = 0; i < fsd.length; i++) {
//     console.log(fsd[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let asd = [12, "fsad", true, false, 12341, "fdsaa", 1423, 21321, true, 2412];
//
// for (let i = 0; i < asd.length; i++) {
//     console.log(asd[i]);
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let asd = [12, "fsad", true, false, 12341, "fdsaa", 1423, 21321, true, 2412];
//
// for (sss of asd) {
//     if (typeof sss === "boolean") {
//         console.log(sss);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let asd = [12, "fsad", true, false, 12341, "fdsaa", 1423, 21321, true, 2412];
// for (let i = 0; i < asd.length; i++) {
//     if (typeof asd[i] === "number") {
//         console.log(asd[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let asd = [12, "fsad", true, false, 12341, "fdsaa", 1423, 21321, true, 2412];
// for (let i = 0; i<asd.length; i++) {
//     if (typeof asd[i] === "string") {
//         console.log(asd[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let das = [];
// das[0] = 12;
// das[1] = "dasfa";
// das[2] = 412312;
// das[3] = false;
// das[4] = true;
// das[5] = "fsdf";
// das[6] = "dasdff";
// das[7] = false;
// das[8] = 412412;
// das[9] = true;
//
// for (let i = 0; i<das.length; i++) {
//     console.log(das[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<10; i++) {
//     console.log(`${i} - krok   `);
//     document.write(`${i} - krok   `);
// }


// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<100; i++) {
//     console.log(`${i} - das   `);
//     document.write(`${i} - das   `);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<100; i+=2) {
//     console.log(`${i} - dff   `);
//     document.write(`${i} - dff   `);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i<100; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} - das   `);
//         document.write(`${i} - das   `);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i<100; i++) {
//     if (i % 2 === 1) {
//         console.log(`${i} - das   `);
//         document.write(`${i} - das   `);
//     }
// }