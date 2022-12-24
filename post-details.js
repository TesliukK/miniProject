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
        const apiURL ='https://jsonplaceholder.typicode.com/comments/'
        const urlComm = new URL(location.href)
        const comment = urlComm.searchParams.get('comment')
        blockBtn = document.createElement('div')
        blockBtn.classList.add('blockBtn')
        const button = document.createElement('button')
        button.classList.add('button')
        blockBtn.appendChild(button)
        button.innerText = 'post of current user'
        block.appendChild(blockBtn)
        button.onclick = function () {
            fetch(apiURL+comment)
                .then(value => value.json())
                .then(comments => {

                    for (const commKey in comments) {
                        for (const commKeyElement of commKey) {
                            const comm = document.createElement('div')
                            comm.innerText = `${commKey}`
                            blockBtn.appendChild(comm)
                            console.log(commKey);
                        }
                    }
                })


        }

    })