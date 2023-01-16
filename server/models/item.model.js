const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema({
    name: {type: String, required: true},
    id: {type: Schema.types.ObjectId, required: true},
    tags: {type: [String], required: true},
    featured: {type: Number},
    url: {type: URL},
    price: {type: Number},
    status: {type: String, enum: ['new', 'promo', 'best']},
    size: {type: [String]}
  },
  {timestamps: true},
)

module.exports = mongoose.model('item', Item)
