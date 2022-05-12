const express = require('express');
const app = express();
const health = require('express-ping')
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes')


// add express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// use api routes
app.use('/api', apiRoutes)
app.use(health.ping())

// catch all route
app.use((req, res) => {
	res.status(404).end()
});

// start server
app.listen(3001, () => {
	console.log(`Server running on port ${PORT}` )
})