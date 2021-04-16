const { Card } = require('../models/cardModel');
const { find } = require('../functions/find');
const { BadRequest, GeneralError } = require('../utils/error');

exports.getAllCards = async () => {
    let allCards;
    
    try {
        allCards = await Card.findAll();
    } catch (error) {
        throw new GeneralError('Get all cards error');
    }

    return allCards;
};

exports.insertCard = async (title, content, list) => {
    let card;

    try {
        card = await Card.create({ title, content, list });
    } catch (error) {
        throw new GeneralError(`Card not created`);
    }

    return card;
};

exports.updateCard = async (id, title, content, list) => {
    let card = await find(Card, 'Card', { id });

    try {
        card = await card.update({ title, content, list });
    } catch (error) {
        throw new GeneralError('Card not updated');
    }

    return card;
};

exports.deleteCard = async (id) => {
    let card = await find(Card, 'Card', { id });
    
    try {
        await card.destroy({ id });
    } catch (error) {
        throw new GeneralError('Card not deleted');
    }

    const allCards = this.getAllCards();

    return allCards;
};
