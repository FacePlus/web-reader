var mongoskin = require('mongoskin');
var settings = require('../settings');

var db_maps = {};

function getCollection(mongodb_uri, collection_name) {
  if (!mongodb_uri)
    throw new Error('mongodb connect error: mongodb_uri is null.');
  if (!db_maps[mongodb_uri]) {
    console.log('connect mongodb uri:', mongodb_uri);

    db_maps[mongodb_uri] = mongoskin.db(mongodb_uri, {
      native_parser: true
    });
  }

  return db_maps[mongodb_uri].collection(collection_name || 'main');
}

module.exports = {
  user: getCollection(settings.dbs.userDB, 'main'),
  fiction: getCollection(settings.dbs.fictionDB, 'main')
};
