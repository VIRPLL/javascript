let keyId = "userId";
let id = localStorage.getItem(keyId);
fetch("https://jsonplaceholder.typicode.com/users" + "/" + id)
.then(user => user.json())
.then(user => {
    let divUser = document.createElement("div");
    divUser.setAttribute("class", "divUser");
    divUser.innerHTML = `
        <h3>Id : ${user.id}</h3>
        <p><b>Name :</b> ${user.name}</p>
        <p><b>User name :</b> ${user.username}</p>
        <p><b>Email :</b> ${user.email}</p>
        <div><b>Address : </b>
            <p class="ad"><b>Street :</b> ${user.address.street}</p>
            <p class="ad"><b>Suite :</b> ${user.address.suite}</p>
            <p class="ad"><b>City :</b> ${user.address.city}</p>
            <p class="ad"><b>Zip-code :</b> ${user.address.zipcode}</p>
            <div class="ad"><b>Geo :</b>
                <p class="ads"><b>Lat :</b> ${user.address.geo.lat}</p>
                <p class="ads"><b>Lng :</b> ${user.address.geo.lng}</p>
            </div>
        </div>
        <p><b>Phone :</b> ${user.phone}</p>
        <p><b>Website :</b> ${user.website}</p>
        <div><b>Company :</b>
            <p class="ad"><b>Name :</b> ${user.company.name}</p>
            <p class="ad"><b>Catch Phrase :</b> ${user.company.catchPhrase}</p>
            <p class="ad"><b>Bs :</b> ${user.company.bs}</p>
        </div>
    `;
    let btn = document.createElement("button");
    btn.innerText = `Post of current user`
    btn.onclick = function () {
        fetch("https://jsonplaceholder.typicode.com/users/" + id + "/posts")
            .then(posts => posts.json())
            .then(posts => {
                let divAllPost = document.createElement("div");
                divAllPost.setAttribute("class", "allPost")
                for (const post of posts) {
                    let divPost = document.createElement("div");
                    divPost.setAttribute("class", "post");
                    divPost.innerHTML = `
                        <p><b>Title :</b></p>
                        <p>${post.title}</p>
                    `;
                    let aPost = document.createElement("a");
                    aPost.setAttribute("href", "post-details.html");
                    aPost.setAttribute("class", "ap")
                    aPost.innerText = `Post details`;
                    aPost.onclick = function () {
                        let keyPost = "postId";
                        localStorage.setItem(keyPost, `${post.id}`);
                    };

                    divPost.appendChild(aPost);
                    divAllPost.appendChild(divPost);
                    divUser.appendChild(divAllPost);
                }
            })
        btn.disabled = true;
    }

    divUser.appendChild(btn);
    document.body.appendChild(divUser);
})