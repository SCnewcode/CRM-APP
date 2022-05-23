const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: { 
    type: String
    //type: Schema.Types.ObjectId
    
  },
 /* user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },  */
  organization: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('users', userSchema)