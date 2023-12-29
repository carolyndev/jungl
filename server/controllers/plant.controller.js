const mongoose = require('mongoose');
const Plant = mongoose.model('Plant');
const _ = require('lodash');

exports.list = async function listAllPlantsHandler(req, res) {
  const { skip = 10, limit = 5, status, search = null } = req.query;
  const query = {};
  if (!_.isEmpty(search)) query.name = new RegExp(_.escapeRegExp(search), 'i');
  const plants = await Plant.find(query)
    .sort({ price: 'desc' })
    .limit(limit);
  res.status(200).send({ plants });
};
