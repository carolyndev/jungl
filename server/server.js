const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

const app = express()
const port = process.env.PORT || 3001;

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
// app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/api', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED' });
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
