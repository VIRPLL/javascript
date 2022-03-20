let keyId = "userId";
let id = localStorage.getItem(keyId);
let keyPost = "postId";
let idPost = localStorage.getItem(keyPost);
fetch("https://jsonplaceholder.typicode.com/posts/" + idPost)
    .then(post => post.json())
    .then(post => {
        let divAll = document.createElement("div");
        divAll.setAttribute("class", "all");
        let divPost = document.createElement("div");
        divPost.setAttribute("class", "dda");
        divPost.innerHTML = `
             <p><b>User Id :</b> ${post.userId}</p>
             <p><b>Post Id :</b> ${post.id}</p>
             <p><b>Title :</b> ${post.title}</p>
             <p><b>Body :</b> ${post.body}</p>
        `;
        let btn = document.createElement("button");
        btn.innerText = `Comments`;
        btn.onclick = function () {
                fetch("https://jsonplaceholder.typicode.com/posts/" + idPost + "/comments")
                    .then(comments => comments.json())
                    .then(comments => {
                            let divAllCom = document.createElement("div");
                            divAllCom.setAttribute("class", "ddas")
                            for (const comment of comments) {
                                    let divComment = document.createElement("div");
                                    divComment.setAttribute("class", "com");
                                    divComment.innerHTML = `
                                        <p><b>Post Id : </b>${comment.postId}</p>
                                        <p><b>Comment Id : </b>${comment.id}</p>
                                        <p><b>Name : </b>${comment.name}</p>
                                        <p><b>Email : </b>${comment.email}</p>
                                        <p><b>Body : </b>${comment.body}</p>
                                    `;
                                    divAllCom.appendChild(divComment);
                                    divPost.appendChild(divAllCom);
                            }
                        })
                btn.disabled = true;
        }

        divPost.appendChild(btn);
        divAll.appendChild(divPost);
        document.body.appendChild(divAll);
    });

