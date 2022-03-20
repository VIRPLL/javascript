fetch("https://jsonplaceholder.typicode.com/users")
.then(users => users.json())
.then(users => {
    let divAll = document.createElement("div");
    divAll.setAttribute("class", "divAll")
    for (const user of users) {

        let divUser = document.createElement("div");
        divUser.setAttribute("class", "divUser")

        let h3 = document.createElement("h3");
        h3.innerText = `User : ${user.id}`;

        let p = document.createElement("p");
        p.innerText = `${user.name}`;

        let a = document.createElement("a");
        a.setAttribute("href", "user-details.html ")
        a.innerText = `User details`;
        a.onclick = function () {
            let keyId = "userId";
            localStorage.setItem(keyId, `${user.id}`)
        };

        divUser.append(h3,p,a);
        divAll.appendChild(divUser);
    }
    document.body.appendChild(divAll);
})