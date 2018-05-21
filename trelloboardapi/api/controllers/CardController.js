var axios = require('axios'),
  	Card = require('../model/Card')

// var properties = require('../config/Properties')
// const key = properties.getPropertyByKey('key');
// const token = properties.getPropertyByKey('token');
const key = 'e327c3e08523d8b0c0efca2189a7b372'
const token = 'fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147'
const baseUrl = 'https://api.trello.com/1'

exports.addCard = (req, res) => {
	var newCard = new Card(req.body)
	var emptyBody = {}
	var url = baseUrl + '/cards?idList='+newCard.listId+'&name='+newCard.name+ '&key=' + key + '&token=' + token
	axios.post(url,emptyBody)
	  	.then(response => {
	    	res.status(200).send(response.data)
	  	})
	  	.catch(error => {
	  		console.log(error)
	    	res.status(500).send()
	  	})
} 

exports.moveCardToList = (req, res) => {
	var emptyBody = {}
	var url = baseUrl + '/cards/'+ req.params.cardId +'?idList='+ req.params.listId + '&key=' + key + '&token=' + token
	axios.put(url,emptyBody)
	  	.then(response => {
	    	res.status(200).send(response.data)
	  	})
	  	.catch(error => {
	  		console.log(error)
	    	res.status(500).send()
	  	})
} 


