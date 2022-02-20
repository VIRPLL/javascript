// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function car (model, vurobnuk, year, max_spid, obem) {
//     this.model = model,
//         this.vurobnuk = vurobnuk,
//         this.year = year,
//         this.max_spid = max_spid,
//         this.obem = obem,
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${max_spid} на годину`);
//         },
//         this.info = function () {
//             for (let key in this) {
//                 if (typeof this[key] !== "function") console.log(`${key} - ${this[key]}`);
//             }
//         },
//         this.increaseMaxSpeed = function (newSpid) {
//             this.max_spid = max_spid + newSpid;
//         },
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         },
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         }
// }
// let carAdd = new car("jetta","volkswagen",2013,250,2);
// carAdd.drive();
// carAdd.info();
// carAdd.increaseMaxSpeed(100);
// carAdd.drive();
// carAdd.changeYear(2019);
// carAdd.info();
// carAdd.addDriver("roman");
// carAdd.info();


//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class car2 {
//     constructor(model, vurobnuk, year, max_spid, obem) {
//         this.model = model,
//             this.vurobnuk = vurobnuk,
//             this.year = year,
//             this.max_spid = max_spid,
//             this.obem = obem
//     }
//         drive () {
//         console.log(`їдемо зі швидкістю ${this.max_spid} на годину`);
//         };
//         info () {
//             for (let key in this) {
//                 if (typeof this[key] !== "function") console.log(`${key} - ${this[key]}`);
//             }
//         };
//         increaseMaxSpeed (newSpid) {
//             this.max_spid = this.max_spid + newSpid;
//         };
//         changeYear (newValue) {
//             this.year = newValue;
//         };
//         addDriver (driver) {
//             this.driver = driver;
//         };
// }
// let carAdd = new car2("jetta","volkswagen",2013,250,2);
// carAdd.drive();
// carAdd.info();
// carAdd.increaseMaxSpeed(100);
// carAdd.drive();
// carAdd.changeYear(2019);
// carAdd.info();
// carAdd.addDriver("roman");
// carAdd.info();
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку