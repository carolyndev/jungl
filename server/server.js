const express = require('express');
const cors = require('cors');
// const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/api', (req, res) => {
  res.status(200).send({express: 'YOUR EXPRESS BACKEND IS CONNECTED'});
});

app.post('/api/:id', (req, res) => {
  const {id} = req.params;
  const {text} = req.body;

  if (!text) return res.status(418).send({message: 'You need a body.text'});
  res.send({item: `The item id is ${id} with a text of: ${text}.`});
});

// This displays message that the server running and listening to specified port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
