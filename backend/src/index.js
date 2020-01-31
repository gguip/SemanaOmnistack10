//Metodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros: 

//Query Params: request.query (Filtros, ordenação, paginação)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (BD não-relacional)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('../src/routes');

const app = express();

mongoose.connect('mongodb+srv://omni:omni@aircnc-hncqq.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(3333);