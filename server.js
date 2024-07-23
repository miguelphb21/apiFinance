// IMPORTA AS BIBLIOTECAS
const express =  require('express');      //importa o framework EXPRESS.
const dotenv = require('dotenv');         //importa o pacote DOTENV para gerenciar variaveis de ambiente.
const cors = require('cors')              //importa o pacote CORS para permitir requisições de diferetmtes origens.
const bodyParser = require('body-parser')   //importa o pacote BODY-PARSE para analisar o corpo das requisições HTTP.


// CONFIGURAR VARIAVES DE AMBIENTE
dotenv.config(); 


// inicializar nova aplicação Express
const app = express();                    //Inicializa uma nova aplicação


// configurar o Cors e o bodyParse
app.use(cors())                           //habilita o cors para todas as rotas
app.use(bodyParser.json());                // configura o bodyParse para analisar requisições Json;

// Rota inicial para testar o servidor
app.get('/', (req, res) => {
    res.send('Servidor está rodando')     //definir uma rota para testar o servidor
});


// configurar o servidor para uma porta especifica 

const PORT = process.env.PORT || 3000;    //define a porta a partir da variavel de ambiente ou usa a porta 3000 por padrão
app.listen(PORT,()  => {
    console.log(`Servidor rodando na porta ${PORT}`)     //envia uma mensagem informando que o servidor esta rodand na ${PORT}
})
