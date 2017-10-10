import mongoose from 'mongoose'
import config from '../config'

mongoose.connect(config.url, {useMongoClient: true})
mongoose.Promise = global.Promise

const db = mongoose.connection

db.once('open', () => {
  console.log(`数据库连接成功[url:${config.url}]`)
})

db.on('error', (error) => {
  console.error(`Error in MongoDb connection: ${error}`)
  mongoose.disconnect()
})

db.on('close', () => {
  console.log('数据库断开，重新连接数据库')
  mongoose.connect(config.url, {server: {auto_reconnect: true}})
})

export default db
