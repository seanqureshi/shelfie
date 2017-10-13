const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    port = 3000;

const app = express();
app.use(bodyParser.json());

app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
