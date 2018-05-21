module.exports = (app) => {
	var cardController = require('../controllers/CardController')

	app.route('/cards')
		.post(cardController.addCard)

	app.route('/cards/:cardId/:listId')
		.put(cardController.moveCardToList)
}