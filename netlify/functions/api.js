const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const express = require('express');
const router = express.Router();
const app = express();
const connectDb = require('../../server/connect');
const cors = require('cors');
const serverless = require('serverless-http');
const { CORS_OPTIONS } = require('../../server/constants');

const models = {
  Plant: require('../../server/db/plant.model'),
};

connectDb();

router.use(cors(CORS_OPTIONS));
router.use(express.json());
app.use('/.netlify/functions/', require('../../server/routes/api.routes'));

module.exports.handler = serverless(app);
