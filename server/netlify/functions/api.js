const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const express = require('express');
const router = express.Router();
const app = express();
const connectDb = require('../../connect')
const cors = require('cors');
const serverless = require('serverless-http');

const models = {
	Plant: require('../../db/plant.model')
};

connectDb();

router.use(cors());
router.use(express.json());
app.use('/.netlify/functions/', require('../../routes/api.routes'));


// from plants.js
// const {MongoClient} = require("mongodb");
// const mongoClient = new MongoClient(
//
// const clientPromise = mongoClient.connect();
// const handler = async (event) => {
// 	const database = (await clientPromise).db(process.env.MONGO_DB_NAME);
// 	const collection = database.collection(process.env.MONGO_DB_COLLECTION);
// 	const plants = await collection.find({}).toArray();
//
// 	try {
// 		return {statusCode: 200, body: JSON.stringify(plants)};
// 	} catch (error) {
// 		return {statusCode: 500, body: JSON.parse(error)};
// 	}
// };
//
// module.exports = {handler};
//


module.exports.handler = serverless(app);
