const express = require('express');
const router = express.Router();
const axios = require('axios');
const { response } = require('express');


router.get('/posts/:tag', (req, res) => {
	if(req.params.tag === ' '){
		console.error('Tag must be included')
	}
	
	axios.get(`https://api.hatchways.io/assessment/blog/posts?`, 
	{ 
		
		params: { 
			tag: req.params.tag,
		}
		
	}
	)
		.then(response => {
			let data = response.data
			let posts = [];
			posts.push(data)
			
			// function to sort posts based on sortBy and direction parameters
			function sortPosts(data, sortBy, direction) {
  			return data.sort((a, b) => {
    			if (direction === 'asc') {
      			return a[sortBy] - b[sortBy];
    			} else {
      			return b[sortBy] - a[sortBy];
    			}
  		})

				function getPostsByTags({ query }, res) {
					//destructure and set default params
					const tags = query.tags;
					const sortBy = query.sortBy ? query.sortBy : 'id';
					const direction = query.direction ? query.direction : 'asc';

					// check for tags
					if(!tags){
						res.status(400).json({ error: `Tag must be included`})
					}

					const sortedPosts = sortPosts(posts, sortBy, direction)

					res.send(sortedPosts)
				}
				
			
		}
		
			
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