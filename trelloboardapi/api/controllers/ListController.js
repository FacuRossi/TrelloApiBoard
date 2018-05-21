var axios = require('axios') 
// var properties = require('../config/Properties')


// const key = properties.getPropertyByKey('key');
// const token = properties.getPropertyByKey('token');
const key = 'e327c3e08523d8b0c0efca2189a7b372'
const token = 'fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147'
const baseUrl = 'https://api.trello.com/1'

exports.getCardsFromList = (req, res) => {
	var url = baseUrl + '/lists/'+req.params.listId+ '/cards?fields=id,name,desc&key=' + key + '&token=' + token
	axios.get(url)
		.then(response => {
		    res.status(200).send(response.data)
		})
		.catch(error => {
		  	console.log(error)
		    res.status(500).send(error)
		})
}
