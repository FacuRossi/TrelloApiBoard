var axios = require('axios') 

exports.getBoards = (req, res) => {
  	axios.get('https://api.trello.com/1/members/roqueperalta2/boards?key=e327c3e08523d8b0c0efca2189a7b372&token=fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147&fields=name,id')
	  .then(response => {
	    console.log(response.data)
	    res.status(200).send(response.data)
	  })
	  .catch(error => {
	  	console.log(error)
	    res.status(500).send(error)
	  })
}

exports.getBoardById = (req, res) => {
  axios.get('https://api.trello.com/1/boards/'+req.params.boardId+'?fields=id,name&lists=open&list_fields=id,name&key=e327c3e08523d8b0c0efca2189a7b372&token=fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147')
	  .then(response => {
	    console.log(response.data)
	    res.status(200).send(response.data)
	  })
	  .catch(error => {
	  	console.log(error)
	    res.status(500).send(error)
	  })
}