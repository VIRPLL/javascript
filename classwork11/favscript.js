const favoritesKey = 'favv';
const users = JSON.parse(localStorage.getItem(favoritesKey));


for (let user of users) {
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerText = `${user.name}`;
    let p2 = document.createElement("p");
    p2.innerText = `${user.age}`;
    let p3 = document.createElement("p");
    p3.innerText = `${user.status}`;
    let hr = document.createElement("hr");
    div.append(p1,p2,p3,hr);
    document.body.appendChild(div);
}