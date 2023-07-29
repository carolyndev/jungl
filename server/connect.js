const mongoose = require('mongoose');
const {ServerApiVersion} = require("mongodb");
const URI = process.env.MONGO_DB_URI || 'mongodb://localhost:27017';

const config = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1
};
// comment
function connectDb() {
	mongoose.set("strictQuery", false);
	mongoose.connect(URI, config);

	const db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error: "));
	db.once("open", function () {
		console.log("Connected successfully");
	});
};

module.exports = connectDb;
