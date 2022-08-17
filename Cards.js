const mongoose = require('mongoose');
const cardService = require('../services/card.service');
const CardSchema = new mongoose.Schema({
      
    nome: { type: String, required: true },
   forca: { type: Number, required: true },
    vida: { type: Number, required: true },
    foto: { type: String, required: true },
  });

  



const datamortalcards = mongoose.model('datamortalcards', CardSchema);

module.exports = datamortalcards;
