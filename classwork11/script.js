// є масив -
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на ' +
// 'яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході н а яку потрібно вивест в документ всіх обраних на попередньому етапі.

// let favv = "favv";
// localStorage.setItem(favv, JSON.stringify([]));
//
// for (let user of users) {
//     let div = document.createElement("div");
//     let p1 = document.createElement("p");
//     p1.innerText = `${user.name}`;
//     let p2 = document.createElement("p");
//     p2.innerText = `${user.age}`;
//     let p3 = document.createElement("p");
//     p3.innerText = `${user.status}`;
//     let btn = document.createElement("button");
//     btn.innerText = "favorit"
//     let hr = document.createElement("hr");
//     div.append(p1,p2,p3,btn,hr);
//     document.body.appendChild(div);
//
//     btn.addEventListener("click", function () {
//         let favo = JSON.parse(localStorage.getItem(favv));
//         favo.push(user);
//         localStorage.setItem(favv, JSON.stringify(favo));
//     })
// }



