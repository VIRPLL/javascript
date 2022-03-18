// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((respons) => respons.json())
//     .then(respons => {
//         let div = document.createElement("div");
//         div.setAttribute("class", "divaaa");
//         for (let responElement of respons) {
//
//             let divRespon = document.createElement("div");
//             divRespon.style.padding = "10px";
//             divRespon.style.border = "2px solid black";
//             divRespon.setAttribute("class", "post");
//
//             let divUserId = document.createElement("div");
//             divUserId.innerText = `UserId: ${responElement["userId"]}`
//             divUserId.style.padding = "5px";
//
//             let divId = document.createElement("div");
//             divId.innerText = `Id: ${responElement["id"]}`
//             divId.style.padding = "5px";
//
//             let divTitle = document.createElement("div");
//             divTitle.innerText = `Title: ${responElement["title"]}`
//             divTitle.style.padding = "5px";
//
//             let divBody = document.createElement("div");
//             divBody.innerText = `Body: ${responElement["body"]}`
//             divBody.style.padding = "5px";
//
//
//             divRespon.append(divUserId,divId,divTitle,divBody);
//             div.appendChild(divRespon);
//
//         }
//         document.body.appendChild(div);
//     })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch("https://jsonplaceholder.typicode.com/comments")
// .then((value) => value.json())
// .then(value => {
//     let div = document.createElement("div");
//     div.setAttribute("class", "awwa");
//     for (let valueElement of value) {
//
//             let divValue = document.createElement("div");
//             divValue.style.padding = "10px";
//             divValue.style.border = "2px solid black";
//             divValue.setAttribute("class", "comments");
//
//             let divPostId = document.createElement("div");
//             divPostId.innerText = `PostId: ${valueElement["postId"]}`
//             divPostId.style.padding = "5px";
//
//             let divId = document.createElement("div");
//             divId.innerText = `Id: ${valueElement["id"]}`
//             divId.style.padding = "5px";
//
//             let divName = document.createElement("div");
//             divName.innerText = `Name: ${valueElement["name"]}`
//             divName.style.padding = "5px";
//
//             let divEmail = document.createElement("div");
//             divEmail.innerText = `Email: ${valueElement["email"]}`
//             divEmail.style.padding = "5px"
//
//             let divBody = document.createElement("div");
//             divBody.innerText = `Body: ${valueElement["body"]}`
//             divBody.style.padding = "5px";
//
//
//             divValue.append(divPostId,divId,divName,divEmail,divBody);
//             div.appendChild(divValue);
//
//         }
//         document.body.appendChild(div);
//     }
// )