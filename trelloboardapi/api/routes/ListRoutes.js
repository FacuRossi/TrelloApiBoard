module.exports = (app) => {
	var listController = require('../controllers/ListController')

  	app.route('/lists/:listId/cards')
    	.get(listController.getCardsFromList)
}