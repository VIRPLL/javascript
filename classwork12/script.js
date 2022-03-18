// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(value => value.json())
// .then(value => {
//     let div = document.createElement("div");
//         div.setAttribute("class", "posts");
//         for (let valueElement of value) {
//
//             let divValue = document.createElement("div");
//             divValue.style.padding = "10px";
//             divValue.style.border = "2px solid black";
//             divValue.setAttribute("class", "post");
//
//             let divUserId = document.createElement("div");
//             divUserId.innerText = `UserId: ${valueElement["userId"]}`
//             divUserId.style.padding = "5px";
//
//             let divId = document.createElement("div");
//             divId.innerText = `Id: ${valueElement["id"]}`
//             divId.style.padding = "5px";
//
//             let divTitle = document.createElement("div");
//             divTitle.innerText = `Title: ${valueElement["title"]}`
//             divTitle.style.padding = "5px";
//
//             let divBody = document.createElement("div");
//             divBody.innerText = `Body: ${valueElement["body"]}`
//             divBody.style.padding = "5px";
//
//             let btn = document.createElement("button");
//             btn.innerText = "All comments"
//
//             btn.onclick = (id) => {
//                 fetch('https://jsonplaceholder.typicode.com/posts/' + valueElement.id + '/comments')
//                     .then(response => response.json())
//                     .then(comments => {
//                         for (const comment of comments) {
//
//                             if (valueElement.id === comment.postId) {
//                                 let divCom = document.createElement('div');
//                                 divCom.innerHTML = `
//                                         <h3>ID: ${comment.id}</h3>
//                                         <h4>Name: ${comment.name}</h4>
//                                         <h5>Email: ${comment.email}</h5>
//                                         <h6>Body: ${comment.body}</h6>
//                                         `;
//                                 divValue.appendChild(divCom)
//                             }
//                             btn.disabled = true;
//                         }
//                     })
//             }
//
//
//             divValue.append(divUserId,divId,divTitle,divBody,btn);
//             div.appendChild(divValue);
//
//         }
//         document.body.appendChild(div);
// })