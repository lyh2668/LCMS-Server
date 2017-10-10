import mongoose from 'mongoose'
import UsersSchema from '../schemas/UsersSchema'

const UserModel = mongoose.model('Users', UsersSchema)

export default UserModel
