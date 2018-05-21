var Property = require('./Property')

exports.getPropertyByKey =  (key) => {
	Property.findOne({ 'key': key }, (err,property) => {
	    return property.value
	})
}


