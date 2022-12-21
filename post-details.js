const url = new URL (location.href)
let id = url.searchParams.get('id')

fetch('https://jsonplaceholder.typicode.com/users/' + id)
.then(value => value.json())
.then(value => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerText =  `${value.id} 
        ${value.name} 
        ${value.username}`

})