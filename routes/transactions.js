const express = require('express'); // Importar o express
const router = express.Router(); // Criar um roteador
const transactionsController = require('../controllers/transactionsController'); // Importar o contolador 

// Definir uma rota para obter todas as transações;
router.get('/', transactionsController.getAllTransactions);

// Definindo uma rota para adicionar uma nova transação;
router.post('/', transactionsController.addTransaction);

// Definido uma rota para Atualizar uma transação existente (substituição completa);
router.put('/:id', transactionsController.updateTransactionPut)

// Definido uma rota para Atualizar uma transação existente (substituição parcial);
router.patch('/:id', transactionsController.updateTransactionPatch)

router.delete('/:id', transactionsController.deleteTransaction)



// Exportar o roteador

module.exports = router;

