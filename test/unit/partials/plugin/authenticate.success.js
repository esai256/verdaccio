
module.exports = function ( ) {
  return {
    authenticate( user, pass, callback ) {
      // https://verdaccio.org/docs/en/dev-plugins#onsuccess
      // this is a succesfull login and return a simple group
      callback(null, ['test']);
    }
  };
};
