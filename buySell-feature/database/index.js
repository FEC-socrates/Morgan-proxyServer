const mongoose = require('mongoose');

// connect to mongo via localhost
const connection = mongoose.connect('mongodb://localhost/robinsHood', {
  useMongoClient: true,
});

// define connection
const db = mongoose.connection;
db.once('open', () => {
  console.log('robinsHood now live!!!');
});
// if there's a connection error log it
db.on('error', console.error.bind(console, 'connection error:'));

// RUN THIS CODE TO SEED MONGO DATABASE
// mongoimport --db robinsHood --collection stocks --file nasdaq-data.csv --type csv --headerline
