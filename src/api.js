const axios = require('axios');

const token = '9dc19260-ff58-4cf2-a5f4-e2f297595fab';

const api = axios.create({  
    baseURL: "https://assembleia.api.pandora.com.br/eventos/7747/votante",
    headers: {     
        "Content-type": "aplication/json",
        "Authorization": `Bearer ${token}`
    }
});


module.exports = api;

//https://assembleia.api.pandora.com.br/eventos/7747/votante