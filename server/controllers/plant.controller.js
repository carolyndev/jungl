const mongoose = require('mongoose');
const Plant = mongoose.model('Plant');

exports.list = async function listAllPlantsHandler(req, res) {
	const {skip = 10, limit, status} = req.query;
	const query = {status: {$exists: true}};
	const plants = await Plant.find(query)
		.sort({price: "desc"})
		.limit(limit);
	res.status(200).send({plants});
};
