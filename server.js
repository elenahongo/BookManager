const express = require('express');
const app = express()

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Adding middleware  for handling GET resquests with CORS //
const cors = require('cors');
app.use(cors());

//adding parsing middleware for requests bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json())

//Mount the api router below '/api' path
const apiRouter = require('./server/api');
app.use('/api', apiRouter);

//Error handler
const errorhandler = require('errorhandler');
app.use(errorhandler());

//code to start server listening
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});