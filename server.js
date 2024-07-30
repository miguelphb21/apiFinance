const dotenv = require('dotenv');         //importa o pacote DOTENV para gerenciar variaveis de ambiente.
dotenv.config(); 

// IMPORTA AS BIBLIOTECAS
const express =  require('express');      //importa o framework EXPRESS.

const cors = require('cors')              //importa o pacote CORS para permitir requisições de diferetmtes origens.
const bodyParser = require('body-parser')   //importa o pacote BODY-PARSE para analisar o corpo das requisições HTTP.


// CONFIGURAR VARIAVES DE AMBIENTE

const db = require('./config/db');

const transactionsRoutes = require('./routes/transactions'); // Importa as rotas de transações


// inicializar nova aplicação Express
const app = express();                    //Inicializa uma nova aplicação


// configurar o Cors e o bodyParse
app.use(cors())                                          //habilita o cors para todas as rotas
app.use(bodyParser.json());                              // configura o bodyParse para analisar requisições Json;

//Usar as rotas de transações para as requisições que começam com /api/transaction
app.use('/api/transactions', transactionsRoutes)

// Rota inicial para testar o servidor
app.get('/', (req, res) => {
    res.send(`<body style="background: black;"><h1 style="color: red; font-size: 100px; ">Gabriel amostradinho</h1></body>`);                   // definir uma rota para testar o servidor
});


// configurar o servidor para uma porta especifica 

const PORT = process.env.PORT || 3000;                   // define a porta a partir da variavel de ambiente ou usa a porta 3000 por padrão
app.listen(PORT,()  => {
    console.log(`Servidor rodando na porta ${PORT}`)     // envia uma mensagem informando que o servidor esta rodand na ${PORT}
});

