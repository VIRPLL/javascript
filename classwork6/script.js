// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let norm = (str) => {
//     return str.replaceAll(".."," ").replaceAll("---"," ").replaceAll("__"," ");;
// }
// console.log(norm(n1));
// console.log(norm(n2));
// console.log(norm(n3));
//
//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let randomArr = (kilkist, kinets) => {
//     let arr = [];
//     for (let i=0;i<kilkist;i++) {
//         arr.push(Math.round(Math.random()*kinets));
//     }
//     return arr;
// }
// console.log(randomArr(10,101));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let randomArr = (kilkist, kinets) => {
//     let arr = [];
//     for (let i=0;i<kilkist;i++) {
//         arr.push(Math.round(Math.random()*kinets));
//     }
//     return arr.sort((a,b) => (a - b));
// }
//
// console.log(randomArr(10, 101));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let randomArr = (kilkist, kinets) => {
//     let arr = [];
//     for (let i=0;i<kilkist;i++) {
//         arr.push(Math.round(Math.random()*kinets));
//     }
//     return arr.filter(value => value % 2 === 0);
// }
//
// console.log(randomArr(10,101));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let randomArr = (kilkist, kinets) => {
//     let arr = [];
//     for (let i=0;i<kilkist;i++) {
//         arr.push(Math.round(Math.random()*kinets));
//     }
//     return arr.map(value => value.toString());
// }
// console.log(randomArr(10,101));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let nums = [11,21,3];
// let sortNums = (arr, direction) => {
//     if (direction === "+") return arr.sort((a,b) => (a - b));
//     if (direction === "-") return arr.sort((a,b) => (b - a));
// }
// console.log(sortNums(nums, "-"));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let newSort = coursesAndDurationArray.sort((a,b) => (b.monthDuration - a.monthDuration));
// console.log(newSort);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let newFilt = coursesAndDurationArray.filter(value => {
//     return  value.monthDuration > 5;
// });
// console.log(newFilt);