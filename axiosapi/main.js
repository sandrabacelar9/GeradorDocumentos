const url = process.env.URL_API;

function getDocument () {
    axios.get(url)
    .then(response => {
        console.log(response)
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

getDocument()