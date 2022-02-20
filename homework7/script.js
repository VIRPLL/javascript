
// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id, name, surname, email, phone) {
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.email = email,
//     this.phone = phone
// }
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let arr = [
//     new User(1, "roman","dsa", "dsaw1@fasd.cas", 380431234523),
//     new User(2, "petro","fas", "dsaw2@fasd.cas", 380651234523),
//     new User(3, "vasya","gsd", "dsaw3@fasd.cas", 380431253523),
//     new User(4, "nastia","zx", "dsaw4@fasd.cas", 380431275523),
//     new User(5, "olia","qeda", "dsaw5@fasd.cas", 380431019523),
//     new User(6, "vika","gadas", "dsa6w@fasd.cas", 388731964523),
//     new User(7, "stas","fasa", "dsaw7@fasd.cas", 380435431123),
//     new User(8, "bogdan","vxzv", "ds8aw@fasd.cas", 380121234523),
//     new User(9, "nazar","qwda", "dsa9w@fasd.cas", 380431236523),
//     new User(10, "oleh","hdfg", "dsaw10@fasd.cas", 380431314523)
// ]

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let newFilter = arr.filter(value => {
//     return value.id % 2 === 0;
// })
// console.log(newFilter);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let newSort = arr.sort((a,b) => (a.id - b.id));
// console.log(newSort);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor (id, name, surname, email, phone, order) {
//         this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone,
//         this.order = order
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client
// let arr = [
//     new Client(1, "roman","dsa", "dsaw1@fasd.cas", 380431234523, ["mazik", "xlib"]),
//     new Client(2, "petro","fas", "dsaw2@fasd.cas", 380651234523, ["mazik"]),
//     new Client(3, "vasya","gsd", "dsaw3@fasd.cas", 380431253523, ["mazik", "xlib", "tort"]),
//     new Client(4, "nastia","zx", "dsaw4@fasd.cas", 380431275523, ["mazik", "xlib", "fish", "kebab"]),
//     new Client(5, "olia","qeda", "dsaw5@fasd.cas", 380431019523, ["mazik", "xlib", "tomat"]),
//     new Client(6, "vika","gadas", "dsa6w@fasd.cas", 388731964523, ["mazik", "xlib", "kartoha"]),
//     new Client(7, "stas","fasa", "dsaw7@fasd.cas", 380435431123, ["mazik", "xlib", "viski", "vodka", "tort"]),
//     new Client(8, "bogdan","vxzv", "ds8aw@fasd.cas", 380121234523, ["mazik", "xlib", "basturma", "viski", "tort", "kruvetka"]),
//     new Client(9, "nazar","qwda", "dsa9w@fasd.cas", 380431236523, ["mazik", "xlib", "silodka"]),
//     new Client(10, "oleh","hdfg", "dsaw10@fasd.cas", 380431314523, ["mazik"])
// ]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let newSort = arr.sort((a,b) => (a.order.length - b.order.length));
// console.log(newSort);
