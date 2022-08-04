const express = require('express');
const api = require("./api");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let votanteId = 5444852

app.get('/', (req, res) => {
  return res.send({ message: 'Hilton Bacelar' })
})

app.get('/consulta', async (req, res, next) => {

  try {
    const { data } = await api.get(`${votanteId}`);

    return res.send({ nome: data.nome });

  } catch (error) {
    res.send("Ops! ocorreu um erro: " + error);
  }
})



