var MONGO_HOST = process.env.MONGO_HOST || 'mongodb://127.0.0.1:27017';

module.exports = {
  worker: {
    port: process.env.PORT || 9001
  },
  dbs: {
    userDB: MONGO_HOST + '/user',
    fictionDB: MONGO_HOST + '/fiction',
    categoryDB: MONGO_HOST + '/category'
  }
};
