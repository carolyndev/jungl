const connectDb = require('../../server/connect');
const mongoose = require('mongoose');
const Plant = mongoose.model('Plant');

connectDb()

exports.list = async function listAllPlantsHandler(req, res) {
	const plants = await Plant.find({});

	try {
		res.header("Access-Control-Allow-Origin", "*");
		res.status(200).send({plants});
	} catch (error) {
		res.status(500).send(error);
	}
};
