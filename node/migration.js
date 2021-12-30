const migrate = async () => {
  const database = require('./db');

  try {
      await database.sync();
  } catch (error) {
      console.error(error);
  }
}

module.exports = migrate