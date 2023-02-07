fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const container = document.createElement('div')
        container.classList.add('container')
        document.body.appendChild(container)

        for (const user of users) {
            const block = document.createElement('div')
            block.classList.add('block')

            const divUsers = document.createElement('div')
            divUsers.classList.add('divUsers')
            const h1Id = document.createElement('h2')
            h1Id.classList.add('h1Id')
            h1Id.innerHTML = `<b>User - ${user.id}</b>`
            const name = document.createElement('h2')
            name.innerHTML = `<b>${user.name}</b>`


            const a = document.createElement('a')
            a.href = 'user-details.html?id=' + user.id;
            const button = document.createElement('button')
            button.classList.add('button')
            button.innerText = 'Details of current user'

            block.appendChild(divUsers)
            a.appendChild(button)
            divUsers.append(h1Id, name, a)
            container.append(block)

        }
    })