const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
  const {sayHello} = require('./services/document');
  res.send(sayHello(''));
});

app.get('/cadastro', (req, res, next) => {

  if(res){
    res.send('Consultar documentos');
    res.sendStatus(200);
  }else
   res.sendStatus(401); 

});

app.get('/cadastro/:id', (req, res, next) => {

  if(res){
    res.send('Consultar documentos por ID');
    res.sendStatus(200);
  }else
   res.sendStatus(401); 
});

app.post('/cadastro', (req, res, next) => {

  if(res){
    res.send('Cadastrar Documento');
    res.sendStatus(200);
  }else
   res.sendStatus(401); 
  
});

module.exports = {
  app,
};