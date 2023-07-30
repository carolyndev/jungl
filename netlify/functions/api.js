const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const express = require('express');
const router = express.Router();
const app = express();
const connectDb = require('../../server/connect');
const cors = require('cors');
const serverless = require('serverless-http');

const models = {
	Plant: require('../../server/db/plant.model')
};

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200
};

connectDb();

router.use(cors(corsOptions));
router.use(express.json());
app.use('/.netlify/functions/', require('../../server/routes/api.routes'));

module.exports.handler = serverless(app);
