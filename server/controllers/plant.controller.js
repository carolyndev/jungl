const mongoose = require('mongoose');
const Plant = mongoose.model('Plant');

exports.list = async function listAllPlantsHandler(req, res) {
	const plants = await Plant.find({});
	res.status(200).send({plants});
};
