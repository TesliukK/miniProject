const url = new URL(location.href)
const id = url.searchParams.get('id')
fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(value => value.json())
    .then(posts => {
const block = document.createElement('div')
        document.body.appendChild(block)
        block.innerText = `Id: ${posts.id} 
        Title: ${posts.title}
        Body: ${posts.body}`

        const blockBtn = document.createElement('div')
        blockBtn.classList.add('blockBtn')
        const button = document.createElement('button')
        button.classList.add('button')
        blockBtn.appendChild(button)
        button.innerText = 'post of current user'
        block.appendChild(blockBtn)
        button.onclick = function () {
            const postId = url.searchParams.get('postId')
            fetch('https://jsonplaceholder.typicode.com/comments/'+id)
                .then(value => value.json())
                .then(comments => {
                    const comm = document.createElement('div')
                    comm.innerText = `${comments.name}`
                    blockBtn.appendChild(comm)
                })


        }

    })