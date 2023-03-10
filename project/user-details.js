const url = new URL(location.href)
const id = url.searchParams.get('id')


fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(value => {
        const generalBlock = document.createElement('div')
        generalBlock.classList.add('generalBlock')
        document.body.appendChild(generalBlock)

        const usersBlocks = document.createElement('div')
        usersBlocks.classList.add('usersBlocks')

        const block1 = document.createElement('div')

        const h2 = document.createElement('h2')
        h2.innerText = `${value.name}`

        const p1 = document.createElement('p')
        p1.innerText = `Id: ${value.id}
        Name: ${value.name}
        Username: ${value.username}
        Email: ${value.email}`
        block1.append(h2, p1)

        const block2 = document.createElement('div')
        const p2 = document.createElement('p')
        p2.innerText = `Address
        Street: ${value.address.street}
        Suite: ${value.address.suite}
        City: ${value.address.city}
        Zipcode: ${value.address.zipcode}
        Geo:
        Lat: ${value.address.geo.lat}
        Lng: ${value.address.geo.lng}`
        block2.appendChild(p2)

        const block3 = document.createElement('div')
        const p3 = document.createElement('p')
        p3.innerText = `Phone: ${value.phone}
        Website: ${value.website}`
        block3.appendChild(p3)

        const block4 = document.createElement('div')
        const p4 = document.createElement('p')
        p4.innerText = `Company:
        Name: ${value.company.name}
        CatchPhrase: ${value.company.catchPhrase}
        Bs: ${value.company.bs}`

        const blockBtn = document.createElement('div')
        blockBtn.classList.add('blockBtn')
        document.body.appendChild(blockBtn)
        const button = document.createElement('button')
        button.classList.add('button')
        blockBtn.appendChild(button)
        button.innerText = 'post of current user'
        button.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts/`)
                .then(value => value.json())
                .then(posts => {
                    const cont = document.createElement('div')
                    cont.classList.add('cont')
                    for (const post of posts) {
                        const postDiv = document.createElement("div")
                        postDiv.classList.add('postDiv')
                        const postsP = document.createElement('p')
                        postsP.innerText = `${post.id}: ${post.title}`
                        postDiv.appendChild(postsP)
                        cont.appendChild(postDiv)
                        const a = document.createElement('a')
                        a.classList.add('a')
                        a.href = 'post-details.html?id=' + post.id;
                        const buttons = document.createElement('button')
                        buttons.classList.add('buttons')
                        buttons.innerText = 'Details'

                        a.appendChild(buttons)
                        cont.append(a)
                        postDiv.appendChild(a)
                    }
                    blockBtn.appendChild(cont)

                })
        }


        block4.appendChild(p4)
        usersBlocks.append(block1, block2, block3, block4)
        generalBlock.append(usersBlocks)

    })

