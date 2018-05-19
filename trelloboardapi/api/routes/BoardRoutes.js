module.exports = (app) => {
	var boardController = require('../controllers/BoardController')

  	app.route('/boards')
    	.get(boardController.getBoards)

  	app.route('/boards/:boardId')
    	.get(boardController.getBoardById)
};