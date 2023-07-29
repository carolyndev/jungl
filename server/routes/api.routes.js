const express = require('express');
const router = express.Router();
const {plant} = require('../controllers/');

router.get('/api', (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.status(200).send({express: 'YOUR EXPRESS BACKEND IS CONNECTED'});
});

router.route('/api/plants')
	.get(plant.list);

router.post('/api/:id', (req, res) => {
	const {id} = req.params;
	const {text} = req.body;

	if (!text) return res.status(418).send({message: 'You need a body.text'});
	res.send({item: `The item id is ${id} with a text of: ${text}.`});
});

router.use((req, res) => res.sendStatus(404));

module.exports = router;
