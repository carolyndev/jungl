const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = Schema.Types;

const PlantSchema = new Schema({
		name: {type: String, required: true},
		id: {type: ObjectId, required: true},
		aliases: {type: [String]},

		tags: {type: [String]},
		featured: {type: Number},
		price: {type: Number},
		status: {type: String, enum: ['new', 'promo', 'best']},
		size: {type: String},
	},
	{
		usePushEach: true,
		timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}
	},
);

const Plant = mongoose.model('Plant', PlantSchema);
module.exports = Plant;
