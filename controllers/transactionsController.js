const db = require('../config/db.js'); // Importar a conexão com o banco de dados

// função para obter todas as transações

const getAllTransations = (req, res) => {
    db.query('SELECT * FROM transactios', (err, resultss)=>{
        if (err){
            console.error('Erro ao obter transações', err)
            res.status(500).send('erro ao obter transações')
            return;
        }
        res.json(results);
    })
}




module.exports = {
    getAllTransations
};