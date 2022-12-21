fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const container = document.createElement('div')
        container.classList.add('container')
        document.body.appendChild(container)

        for (const user of users) {
            const divUsers = document.createElement('div')
            divUsers.classList.add('divUsers')
            const h1Id = document.createElement('h2')
            h1Id.innerHTML = `${user.id}`
            const name = document.createElement('h3')
            name.innerHTML = `${user.name}`


            const a = document.createElement('a')
            a.href = 'user-details.html?id=' + user.id;
            const button = document.createElement('button')
            button.innerText = 'Details'

            a.appendChild(button)
            divUsers.append(h1Id, name, a)
            container.append(divUsers)

        }
    })