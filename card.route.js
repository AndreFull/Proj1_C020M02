//const { Router } = require('express');
const express = require('express');
const router = express.Router();

const cardController = require('../controllers/card.controller');

//Rotas de Cards
router.get('/all-cards',cardController.findAllCardsController)
router.get('/one-card/:id',cardController.findByIdCardController)

router.post('/create-card',cardController.createCardController)

router.put('/update-card/:id',cardController.updateCardController)

router.delete('/delete-card/:id',cardController.deleteCardController)


//eportar modulo

module.exports = router





