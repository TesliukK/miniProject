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
        block1.classList.add('block1')

        const h2 = document.createElement('h2')
        h2.classList.add('h2')
        h2.innerText = `${value.name}`

        const p1 = document.createElement('p')
        p1.classList.add('p1')
        p1.innerText = `Id: ${value.id}
        Name: ${value.name}
        Username: ${value.username}
        Email: ${value.email}`
        block1.append(h2, p1)

        const block2 = document.createElement('div')
        block2.classList.add('block2')
        const p2 = document.createElement('p')
        p2.classList.add('p2')
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
        block3.classList.add('block3')
        const p3 = document.createElement('p')
        p3.classList.add('p3')
        p3.innerText = `Phone: ${value.phone}
        Website: ${value.website}`
        block3.appendChild(p3)

        const block4 = document.createElement('div')
        block4.classList.add('block4')

        const p4 = document.createElement('p')
        p4.classList.add('p4')
        p4.innerText = `Company:
        Name: ${value.company.name}
        CatchPhrase: ${value.company.catchPhrase}
        Bs: ${value.company.bs}`

        const blockBtn = document.createElement('div')
        blockBtn.classList.add('blockBtn')
        const button = document.createElement('button')
        button.classList.add('button')
        blockBtn.appendChild(button)
        button.innerText = 'post of current user'
        button.onclick = function () {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then(posts => {
                    const cont = document.createElement('div')
                    cont.classList.add('cont')
                    for (const post of posts) {
                        const postDiv = document.createElement("div")
                        postDiv.innerText = `${post.id}: ${post.title}`
                        cont.appendChild(postDiv)
                        const a = document.createElement('a')
                        a.href = 'user-details.html?id=' + post.id;
                        const button = document.createElement('button')
                        button.innerText = 'Details'
                        a.appendChild(button)
                        cont.append(a)
                    }
                    blockBtn.appendChild(cont)

                })
        }


        block4.appendChild(p4)
        usersBlocks.append(block1, block2, block3, block4, blockBtn)
        generalBlock.appendChild(usersBlocks)

    })

