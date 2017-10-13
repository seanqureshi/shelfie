const express = require('express'),
bodyParser = require('body-parser'),
massive = require('massive'),
cors = require('cors'),
port = 3000;

const app = express();
app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING )
.then( dbInstance => {
app.set ('db', dbInstance);



app.get('/api/shelf/:id', function(req, res) {
    app.get('db');
    
 });












app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );