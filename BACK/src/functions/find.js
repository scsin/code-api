const { NotFound } = require('../utils/error');

exports.find = async (model, type, param) => {
    let card;
    try {
        card = await model.findOne({ where: param });
    } catch (error) {
        throw new NotFound(`${type} not found`);
    }

    return card;
};
