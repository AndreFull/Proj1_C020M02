const cardService = require('../services/card.service');



const findAllCardsController = async (req,res) => 
{
    res.send(await cardService.findAllCardsService());
};



const findByIdCardController = async (req,res) =>{
    const idParam = req.params.id;
  
    if (!idParam) {
        return res.status(400).send({ message: "ID não informado!" })
      }
    
      const chosenCard = await cardService.findByIdCardService(idParam);
    
      if (!chosenCard) {
        return res.status(404).send({ message: "Campeão não encontrado!" })
      }
    
      res.send(chosenCard);
}


const createCardController = async (req,res) =>
{
    
    if (
        !req.body ||
        !req.body.nome ||
        !req.body.forca ||
        !req.body.vida ||
        !req.body.foto
      ) {
        return res.status(400).send({ mensagem: "Você não preencheu todos os dados para adicionar um novo Campeão!" });
      }
      res.send(await cardService.createCardService(req.body));
}

const updateCardController = async (req,res) =>
{
    
        if (!req.params.id) {
            return res.status(404).send({ message: "Campeão não encontrado!" })
          }
        
          if (!req.body || !req.body.nome || !req.body.forca || !req.body.vida || !req.body.foto) {
            return res.status(400).send({ message: "Você não preencheu todos os dados para editar o Campeão!" });
          }
        
          res.send(await cardService.updateCardService(req.params.id, req.body));
}
const deleteCardController = async (req,res) => 
{
    
    if (!req.params.id) {
        return res.status(400).send({ message: "Id invalido, tente novamente!" });
      }
      const mortalCard = await cardService.deleteCardService(req.params.id);
    
      if(!mortalCard){
        return res.status(404).send({ message: "Campeão não encontrada" });
      }
      res.send({ message: `Campeão deletado com sucesso!` });

}

module.exports = {
    findAllCardsController,
    findByIdCardController,
    createCardController,
    updateCardController,
    deleteCardController}
