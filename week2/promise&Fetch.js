function getUser(userId) {
    fetch(`http:/jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => { return res.json() })
        .then(data => {
            console.log("user name: ", data.username);
            // return data;
        }).catch(err => console.log(err))
}


//  execrise 2
function getPost(postId) {
    fetch(`http:/jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => { return res.json() })
        .then(data => {
            console.log("post title: ", data.title);
            // return data;
        }).catch(err => console.log(err))
}

//execrise 3
function getUserEmail(userId) {
    fetch(`http:/jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => { return res.json() })
        .then(data => {
            console.log("user email: ", data.email);
            // return data;
        }).catch(err => console.log(err))
}


//execrise 4
function listUserTodos(userId) {
    fetch(`http:/jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(res => res.json())
        .then(data => console.log(`user ${userId}  has ${data.length} todos`))
        .catch(err => console.log(err))
}

//exercise  5
function checkPostExists(postId) {
    fetch(`http:/jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then((data) => {
            postId === data.id ? console.log("post exist") : console.log("post not found")
        })
        .catch(() => console.log(err))

}

// checkPostExists(6)
// exercise 6

function fetchWithDelay(url, delay) {
    setTimeout(() => {
        fetch(url)
            .then(res => res.text())
            .then(data => console.log(`First 50 chars: ${data.slice(0, 50)}`))
    }, delay)
        .catch(err => console.log(err));
}

// fetchWithDelay(`http:/jsonplaceholder.typicode.com/users/1`,5000)


// exercise 7
function showKeys(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log("keys:", Object.keys(data)))
        .catch(err => console.log(err))
}

// showKeys("http:/jsonplaceholder.typicode.com/posts/1")

//exercise 8
function grtUserFirstPost(userId) {
    fetch(`http:/jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => { return res.json() })
        .then(data => {
            // console.log("user name: ", data);`
            // return data;
        }).then(() =>
            fetch(`http:/jsonplaceholder.typicode.com/posts?userId=${userId}`))
        .then(res => res.json())
        .then(allPosts => allPosts[0])
        .then(firstTitle => console.log(`first post title: ${firstTitle.title}`))
        .catch(err => console.log(err))
}

// grtUserFirstPost(1)


// exercise 
function getPostCommentsCount(postId) {
    fetch(`http:/jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => {
            if (Object.keys(data).length === 0) throw new Error("post not found")
        })
        .then(() => fetch(`http:/jsonplaceholder.typicode.com/comments/?postId = ${postId}`))
        .then(res => res.json())
        .then(data => console.log(`post have ${data.length} comments`))
        .catch(err => console.log(err))

}

// getPostCommentsCount(1)


// exercise 10
function todoAndUser(todoId) {
    fetch(`http:/jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(res => res.json())
        .then(data => data.id)
        .then((userId) => fetch(`http:/jsonplaceholder.typicode.com/users/${userId}`))
        .then()

}
todoAndUser(20)