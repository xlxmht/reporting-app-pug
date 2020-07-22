const db = require("monk")(process.env.MONGODB_URI);

db.then(() => {
  console.log('MongoDB connected.');
}).catch((exp) => {
  console.log(exp);
});

module.exports = db;
