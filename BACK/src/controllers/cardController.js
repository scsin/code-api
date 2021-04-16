const cardService = require('../services/cardService');
const { BadRequest } = require('../utils/error');

exports.getCards = async (req, res, next) => {
    try {
      const allCards = await cardService.getAllCards();
  
      res.send(allCards);
    } catch (error) {
      next(error);
    }
};

exports.insertCards = async (req, res, next) => {
    try {
      const { title, content, list } = req.body;

      if (!title || !content || !list) {
        throw new BadRequest('Missing required fields');
      };

      const card = await cardService.insertCard(title, content, list);

      res.status(201).send(card);
    } catch (error) {
      next(error);
    }
};

exports.updateCards = async (req, res, next) => {
    try {
        const { title, content, list } = req.body;
        const { id } = req.params

        if (!title || !content || !list) {
          throw new BadRequest('Missing required fields');
        };

        const updatedCard = await cardService.updateCard(id, title, content, list);

      res.send(updatedCard);
    } catch (error) {
      next(error);
    }
};

exports.deleteCards = async (req, res, next) => {
    try {
      const { id } = req.params;

      const remainingCards = await cardService.deleteCard(id);
  
      res.send(remainingCards);
    } catch (error) {
      next(error);
    }
};
