const url = new URL(location.href)
const post = url.searchParams.get('id')

const container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

fetch(`https://jsonplaceholder.typicode.com/posts/` + post)
    .then(value => value.json())
    .then(posts => {
        const block = document.createElement('div')
        block.classList.add('block')
        block.innerText = `Id: ${posts.id}
        
        Title: ${posts.title}
        
        Body: ${posts.body}`

        const blockBtn = document.createElement('div')
        blockBtn.classList.add('blockBtn')
        document.body.appendChild(blockBtn)
        const button = document.createElement('button')
        button.classList.add('button')
        blockBtn.appendChild(button)
        button.innerText = 'Comments of current posts'
        button.onclick = function () {
            const postId = url.searchParams.get('id')
            const commDiv = document.createElement('div')
            commDiv.classList.add('commDiv')
            document.body.appendChild(commDiv)
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments/`)
                .then(value => value.json())
                .then(value => {
                    for (const divElement of value) {
                        const div = document.createElement('div')
                        div.classList.add('div')
                        div.innerText = `Post id ${divElement.postId}
            Id: ${divElement.id} 
            
            Name: ${divElement.name}
            
            Email: ${divElement.email}
            
            Body: ${divElement.body}`
                        commDiv.appendChild(div)
                    }
                })
        }
        container.appendChild(block)
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