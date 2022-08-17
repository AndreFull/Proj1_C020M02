const datamortalcards = require('../models/Cards');
const route = require('../routes/card.route');

  const findAllCardsService = async () =>
  {
    const allCards = await datamortalcards.find()
    return allCards;
  };
  
  const findByIdCardService = async (id) =>
  {
    return await datamortalcards.findById(id);
  };
  const createCardService = async (newCardMortal) => {
    return await datamortalcards.create(newCardMortal);
   };

   const updateCardService = async (id, editedCardMortal) =>
{
  return await datamortalcards.findByIdAndUpdate(id, editedCardMortal,{ returnDocument: "after" });
   
};

const deleteCardService = async (id) => {
  return await datamortalcards.findByIdAndDelete(id);}
  

module.exports={
    findAllCardsService,
    findByIdCardService,
    createCardService,
    updateCardService,
    deleteCardService
}
