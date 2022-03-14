// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let divAll = document.createElement("div");

//
// let div1 = document.createElement("div");
// let div2 = document.createElement("div");
 // document.body.append(div1,div2);
//
// let formOne = document.createElement("form");
// formOne.setAttribute("name", "formOne")
// div1.appendChild(formOne);
// let formTwo = document.createElement("form");
// formTwo.setAttribute("name", "formTwo")
// div2.appendChild(formTwo);
//
// let btn = document.createElement("button");
// btn.innerText = "confirm";
// document.body.appendChild(btn);
//
// let inputOne = document.createElement("input");
// inputOne.setAttribute("name", "inputOne");
// let inputTwo = document.createElement("input");
// inputTwo.setAttribute("name", "inputTwo");
// formOne.append(inputOne,inputTwo);
//
// let inputTre = document.createElement("input");
// inputTre.setAttribute("name", "inputTre");
// let inputFore = document.createElement("input");
// inputFore.setAttribute("name", "inputFore");
// formTwo.append(inputTre,inputFore);
//
//
// btn.addEventListener("click", function () {
//     console.log(document.forms.formOne.inputOne.value);
//     console.log(document.forms.formOne.inputTwo.value);
//     console.log(document.forms.formTwo.inputTre.value);
//     console.log(document.forms.formTwo.inputFore.value);
// })


//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let inputOne = document.createElement("input");
// let inputTwo = document.createElement("input");
// let inputThree = document.createElement("input");
// let btn = document.createElement("button");
//
// btn.innerText = "Сформувати таблицю";
// document.body.append(inputOne,inputTwo,inputThree,btn);
//
// btn.addEventListener("click", function () {
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let text = inputThree.value;
//
//     function table (tr, td, text) {
//         let tabl = document.createElement("table");
//         tabl.style.border = "2px solid #000000"
//         let tablDiv = document.createElement("div");
//         tablDiv.appendChild(tabl);
//         document.body.appendChild(tablDiv);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement("tr");
//             tr.style.border = "2px solid #000000";
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement("td");
//                 td.style.border = "2px solid #000000";
//                 td.style.padding = "5px";
//                 td.innerText = `${text}`;
//                 tabl.appendChild(tr);
//                 tr.appendChild(td);
//
//             }
//
//         }
//     }
//     table(tr,td,text);
// })
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let opa = ["kurva","bla","zopa"];
// let input = document.createElement("input");
// input.setAttribute("type", "text");
// let btn = document.createElement("button");
// btn.innerText = "push";
// document.body.append(input, btn);
//
// btn.addEventListener("click", function () {
//     let inputVal = `${input.value}`;
//     for (let opaElement of opa) {
//         if (inputVal.includes(`${opaElement}`)) {
//             alert("opapa");
//         }
//     }
// })

//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


// let opa = ["kurva","bla","zopa"];
// let input = document.createElement("input");
// input.setAttribute("type", "text");
// let btn = document.createElement("button");
// btn.innerText = "push";
// document.body.append(input, btn);
//
// btn.addEventListener("click", function () {
//     let inputVal = `${input.value}`;
//     for (let opaElement of opa) {
//         if (inputVal.includes(`${opaElement}`)) {
//             alert("opapa");
//         }
//     }
// })