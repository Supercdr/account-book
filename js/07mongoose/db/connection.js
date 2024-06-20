module.exports = function (success, error) {
  const { DBHOST, DBPORT, DBNAME } = require('../config/config');
  if (typeof error !== 'function') {
    error = () => {
      console.log('连接失败');
    }
  }
  const mongoose = require('mongoose');
  mongoose.set('strictQuery', true);
  //连接mongodb
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);
  mongoose.connection.once('open', () => {
    success();
  })
  mongoose.connection.once('error', () => {
    error();
  })
  mongoose.connection.once('close', () => {

    console.log('连接关闭')
  })
}