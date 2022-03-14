// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
//     чтобы при клике на кнопку исчезал элемент с id="text".
// let caa = document.getElementById("text");
// let btn = document.getElementById("button");
// btn.onclick = function () {
//     caa.style.display = "none";
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.getElementById("aaa");
// btn.onclick = function () {
//     btn.style.display = "none";
// }

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні
// на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let aaw = document.forms[0];
// aaw.onsubmit = function (e) {
//     let val = e.target.age.value;
//     if (val > "17" ) {
//         alert("Вам виповнилось 18");
//     }else {
//         alert("Вам ще не виповнилось 18");
//     }
// }




// - Создайте меню, которое раскрывается/сворачивается при клике
// let men = document.getElementById("menu");
// let btn = document.getElementById("btn3");
// btn.addEventListener("click", function (e) {
//     if (men.style.display === "block") {
//         men.style.display = "none";
//     } else {
//         men.style.display = "block";
//     }
// })
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let coments = [
//     {title: "Roman", body: "lorem ipsum dolo sit ameti"},
//     {title: "olieg", body: "lorem ipsum dolo sit ameti"},
//     {title: "gaal", body: "lorem ipsum dolo sit ameti"},
//     {title: "andriy", body: "lorem ipsum dolo sit ameti"},
//     {title: "nastia", body: "lorem ipsum dolo sit ameti"},
//     {title: "petro", body: "lorem ipsum dolo sit ameti"},
//     {title: "igor", body: "lorem ipsum dolo sit ameti"}
// ];
//
// let divAll = document.createElement("div");
// for (let coment of coments) {
//     let div = document.createElement("div");
//     let h3 = document.createElement("h3");
//     let p = document.createElement("p");
//     let hr = document.createElement("hr");
//     let btn = document.createElement("button");
//
//     h3.innerText = coment.title;
//     p.innerText = coment.body;
//     btn.innerText = "close";
//
//     btn.onclick = function () {
//         p.style.display = "none";
//     }
//
//     div.append(h3,p,btn,hr);
//     divAll.append(div);
// }
// document.body.append(divAll);