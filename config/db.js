// Impotação da Biblioteca do mySql2 e criar a conexão com o banco de dados

const mysql = require('mysql2'); // importa o pacote mysql 2 para conectar ao Banco de dados

// Exibe as variáveis de ambiente carregadas
// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASS:', process.env.DB_PASS);
// console.log('DB_NAME:', process.env.DB_NAME);
//depois pode apagar 

const db = mysql.createConnection({
    host:process.env.DB_HOST, //Endereço do servidor de Banco de dados 
    user:process.env.DB_USER, //Nome do Usuário para acessar o banco de dados
    password:process.env.DB_PASS,//Senha do Usuário para acessar o DB
    database:process.env.DB_NAME //Nome do usuário para acessar o DB
});

db.connect((err) =>{
    if (err){
        console.error('Erro ao conectar ao Banco de Dados',err);
        return; // ERRO AO CONECTAR AO BANCO DE DADOS
    }
    console.log(`Conectado ao banco ${process.env.DB_NAME}`);// MENSAGEM DE CONEXÃO BEM SUCEDIDA
});

module.exports = db; // Exporta a conexão para ser usada em outros arquivos