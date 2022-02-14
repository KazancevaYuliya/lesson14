function fetchData(url, method, callback) {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)

    xhr.onload = () => {
        if (xhr.status == '200') {
            callback(xhr.response)
        }
    }

    xhr.onerror = () => {
        console.error(xhr.status + ' ' + xhr.statusText)
    }

    xhr.send()
}

const containerUsersElement = document.querySelector('#users')
const containerUsernameElement = document.querySelector('#username')



function templateCard({ name, email }) {
    return `
    <div class="card" style="width: 25rem;">
    <div class="mb-3"><strong>${name}</strong> <a href="mailto:${email}">${email}</a></div>
    </div>
    `
}

fetchData('https://jsonplaceholder.typicode.com/users', 'GET', (response) => {
    console.log(response)
    const users = JSON.parse(response)
    console.log(users)

    users.forEach((item) => {
        const template = templateCard(item)
        document.body.innerHTML += template
    })
})
containerUsersElement.addEventListener('click', (event) => {
    event.preventDefault()

    const { target } = event
    const linkElement = target.closest('a')

    if (linkElement) {
        const { id } = linkElement.data - id

        fetchData('https://jsonplaceholder.typicode.com/users/${id}', 'GET', (response) => {
            const users = JSON.parse(response)
            const cards = users.map((item) => {
                return templateCard(item.name, item.email, item.phone, item.address, item.company)
                const result = cards.join('\n')
        
                containerUsersElement.innerHTML = result
               
            })
        })
        }
   })

