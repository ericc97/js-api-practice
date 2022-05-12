const express = require('express');
const router = express.Router();
const axios = require('axios');
const { response } = require('express');


router.get('/posts/:tag/:sortBy', (req, res) => {
	
	axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${req.params.tag}&sort=${req.params.sortBy}`, 
	// { 
	// 	params: { 
	// 		tag: req.params.tag,
	// 		sort: req.params.ordering,
	// 		// sortBy: req.params.sortBy,
	// 		// direction: req.params.direction
	// 	}
		
	// }
	)
		.then(response => {
			let data = response.data
			console.log(data)
			res.send(data)
			
		})
		.catch(error => {
			console.log(error)
		})
});



router.get('/ping', (req, res) => {
	axios.get('http://localhost:3001/ping')
		.then(response => {
			res.send(response.data)
		})
		.catch(error => {
			console.log(error)
		})
})

module.exports = router