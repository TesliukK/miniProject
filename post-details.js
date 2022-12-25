const url = new URL(location.href)
const id = url.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/posts/` + id)
    .then(value => value.json())
    .then(posts => {
        const block = document.createElement('div')
        document.body.appendChild(block)
        block.innerText = `Id: ${posts.id} 
        Title: ${posts.title}
        Body: ${posts.body}`
    })

fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(value => value.json())
    .then(comments => {
        for (const comment of comments) {
            const div = document.createElement('div')
            div.innerText = `${comment.body}`
            document.body.appendChild(div)
        }
    })

// blockBtn = document.createElement('div')
// blockBtn.classList.add('blockBtn')
// document.body.appendChild(blockBtn)
// const button = document.createElement('button')
// button.classList.add('button')
// blockBtn.appendChild(button)
// button.innerText = 'post of current user'
// button.onclick = function () {
//     fetch(apiURL+comment)
//         .then(value => value.json())
//         .then(comments => {
//
//         })
//
//
// }