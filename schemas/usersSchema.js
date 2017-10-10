import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UsersSchema = new Schema({
  username: String,
  password: String
})

export default UsersSchema
