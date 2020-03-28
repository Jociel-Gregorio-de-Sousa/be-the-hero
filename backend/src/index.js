const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());//Possibilitamos o nosso arquivo tratar requisições do tipo json
app.use(routes);//Integramos o arquivo routes.js neste aquivo 
app.listen(3333);//listaos a porta de acesso para a aplicação
