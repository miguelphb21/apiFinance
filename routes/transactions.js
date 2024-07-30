const express = require('express'); // Importar o express
const router = express.Router(); // Criar um roteador
const transactionsController = require('../controllers/transactionsController'); // Importar o contolador 

// Definir uma rota para obter todas as transações
router.get('/', transactionsController.getAllTransactions);

// Definindo uma rota para adicionar uma nova transação

router.post('/', transactionsController.addTransaction);

// Exportar o roteador

module.exports = router;

