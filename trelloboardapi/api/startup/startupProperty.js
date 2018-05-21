var Property = require('../config/Property')

const API_KEY = 'e327c3e08523d8b0c0efca2189a7b372'
const TOKEN = 'fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147'

const properties = [{ key : 'key', value : API_KEY }, { key : 'token', value : TOKEN }]

exports.createPropertyByDefault=  () => {

	properties.map(p => {
		Property.findOne({ 'key': p.key }, (err,property) => {
			if (!property) {
				Property.create(p, (err,docs) => {
				    return err ? console.error(err) : console.log("Properties Added successfully")
				})
			}
		})
	})
}
