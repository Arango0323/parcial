const obtenerValorInput = () => {
    let inputTexto = document.getElementById("input_personaje")
    let valor = inputTexto.value
    peticionApi(valor)
}

const peticionApi = (numero) => {
    const baseUrl = 'https://rickandmortyapi.com/'
    const endpoint = `api/character/${numero}`
    const url = `${baseUrl}${endpoint}`;

 axios.get(url).then(res => printData(res.data))
 .catch(err => console.log(err))
}

const printData = (data) => {
    let respuesta = document.getElementById('show_info')
    respuesta.innerHTML = `
    <h3 class ='info'>Name: ${data.name}</h3>
    <p class = 'info'>Status: ${data.species}</p>
    <p class = 'info'>Status: ${data.gender}</p>
    <p class = 'info'>Status: ${data.status}</p>
    <p class = 'info'>Status: ${data.location.name}</p>
    <img src="${data.image}" alt="${data.name}">

    `
}