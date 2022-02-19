// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let he = 'hello world';
// let lo = 'lorem ipsum';
// let ja = 'javascript is cool';
// console.log(he.length);
// console.log(lo.length);
// console.log(ja.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let he = 'hello world';
// let lo = 'lorem ipsum';
// let ja = 'javascript is cool';
// let heUp = he.toUpperCase();
// let loUp = lo.toUpperCase();
// let jaUp = ja.toUpperCase();
// console.log(heUp);
// console.log(loUp);
// console.log(jaUp);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let he = 'HELLO WORLD';
// let lo = 'LOREM IPSUM';
// let ja = 'JAVASCRIPT IS COOL';
// let heUp = he.toLowerCase();
// let loUp = lo.toLowerCase();
// let jaUp = ja.toLowerCase();
// console.log(heUp);
// console.log(loUp);
// console.log(jaUp);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// let stringToarray = (str) => {
//     return str.split(" ");
// }
// let arr = stringToarray(str);
// console.log(arr);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => {
//     return str.substring(0, length);
// }
// console.log(delete_characters(str,7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     let a = str.replaceAll(" ","-").toUpperCase();
//     return a;
// }
// console.log(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = "javaScript";
// let firstUp = (str) => {
//     let aaa = str[0].toUpperCase() + str.slice(1);
//     return aaa;
// }
// console.log(firstUp(str));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.