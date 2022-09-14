const { boolean } = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  isAdmin: {
    type: Boolean,
    require: true,
    default: false
  }
})

module.exports = mongoose.model('user', userSchema)