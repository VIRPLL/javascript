// //- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //    Вивести кожну змінну за допомогою: console.log , alert, document.write
// let q = "Hello";
// let w = "owu";
// let e = "com";
// let r = "ua";
// let t = 1;
// let y = 10;
// let u = -999;
// let i = 123;
// let o = 3.14;
// let p = 2.7;
// let a = 16;
// let s = true;
// let d = false;
//
// console.log(q, w, e, r, t, y, u, i, o, p, a, s, d);
// alert(q);
// alert(w);
// alert(e);
// alert(r);
// alert(t);
// alert(y);
// alert(u);
// alert(i);
// alert(o);
// alert(p);
// alert(a);
// alert(s);
// alert(d);
//
// document.write(q);
// document.write(w);
// document.write(e);
// document.write(r);
// document.write(t);
// document.write(y);
// document.write(u);
// document.write(i);
// document.write(o);
// document.write(p);
// document.write(a);
// document.write(s);
// document.write(d);
//
// //- Переприсвоїти кожній змінній з завдання значення на довільне.
// //    Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// q = "q";
// w = "w";
// e = "e";
// r = "r";
// t = "t";
// y = "y";
// u = "u";
// i = "i";
// o = "o";
// p = "p";
// a = "a";
// s = "s";
// d = "d";
//
// console.log(q, w, e, r, t, y, u, i, o, p, a, s, d);
// alert(q);
// alert(w);
// alert(e);
// alert(r);
// alert(t);
// alert(y);
// alert(u);
// alert(i);
// alert(o);
// alert(p);
// alert(a);
// alert(s);
// alert(d);
//
// document.write(q);
// document.write(w);
// document.write(e);
// document.write(r);
// document.write(t);
// document.write(y);
// document.write(u);
// document.write(i);
// document.write(o);
// document.write(p);
// document.write(a);
// document.write(s);
// document.write(d);
//
//
// //- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// let firstName = "Roman ";
// let middleName = "Mychailovich ";
// let lastName = "Savchak"
// let person = firstName+middleName+lastName;
//
//
// //- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// //    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let name0 = prompt("Імя");
// let name1 = prompt("По-Батькові");
// let year = prompt("Вік");
// alert(`Вітаю ${name0} ${name1}. Тобі ${year}`);
//
//
// //- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //    let a = 100; let b = '100'; let c = true;
// let a1 = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof(a1));
// console.log(typeof(b));
// console.log(typeof(c));
//
//

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 === 6 -> false
// 10 === 10 -> true
// 10 == 10 -> true
// 10 !== 10 -> false
// 10 < 10 -> false
// 10 > 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");  205   якщо добавляти let з number до let з string то воно добавить число збоку. в інших випадках працює коректно.
// document.write(str - a + "<br/>");   15
// document.write(str * "2" + "<br/>");  40
// document.write(str / 2 + "<br/>");  10