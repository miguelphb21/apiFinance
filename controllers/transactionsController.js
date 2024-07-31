const db = require('../config/db.js'); // Importar a conexão com o banco de dados

// função para obter todas as transações

const getAllTransactions = (req, res) => {
    db.query('SELECT * FROM transactions', (err, results)=>{
        if (err){
            console.error('Erro ao obter transações', err)
            res.status(500).send('erro ao obter transações');
            return;
        }
        res.json(results);
    });
};

// fução para adicionar uma nova transação

const addTransaction = (req, res) =>{
    const {date, amount, description, category, account, user_id} = req.body;
    db.query(
        `INSERT INTO transactions (date, amount, description, category, account, user_id) values 
        (?,?,?,?,?,?)`,
        [date, amount, description, category, account, user_id],
        (err, results) =>{
            if(err){
                console.error('Erro ao adicionar transação', err)
                results.status(500).send('Erro ao adicionar transação')
                return;
            }
            res.status(201).send('Transação bem sucedida')
        }
    )
}

//Função para atualizar uma transação existente (Substituição completa)
const updateTransactionPut = (req, res) =>{
    const{id} = req.params
    const {date, amount, description, category, account, user_id} = req.body
    db.query(
        `update transactions set date=?, amount=?, description=?, category=?, account=?, user_id=? where id=?`,
        [date, amount, description, category, account, user_id,id],        
        (err, results) => {
            if(err){
                console.error('Erro ao adicionar transação', err)
                res.status(500).send('Erro ao adicionar transação')
                return;
            }
            res.send('Transação adicionada com sucesso')
        }
    )
}

// const updateTransactionPatch = (req, res) => {
//     const {id} = req.params
// }

module.exports = {
    getAllTransactions,
    addTransaction,
    updateTransactionPut,
    updateTransactionPatch
};