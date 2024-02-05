const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = Schema.Types;

const PlantVariationSchema = new Schema({
	price: {type: Number},
	variant: {type: String, enum: ['os', 'small', 'medium', 'large', 'x-large']},
})

const PlantSchema = new Schema({
		_id: {type: ObjectId, required: true},
		name: {type: String, required: true},
		botanicalName: {type: String},
		status: {type: String, enum: ['new', 'promo', 'best']},
		tags: {type: [String]},
		url: {type: String},
		variations: {type: [PlantVariationSchema]},
	},
	{
		usePushEach: true,
		timestamps: {created: 'createdAt', updated: 'updatedAt'}
	},
);

const Plant = mongoose.model('Plant', PlantSchema);
module.exports = Plant;
