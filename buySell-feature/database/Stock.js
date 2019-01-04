const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = require('./index.js');
const db = mongoose.connection;


const stockSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: [true, '_id field is required']
  },
  stockTicker: {
    type: String,
    required: [true, 'stockTicker field is required'],
  },
  stockName: {
    type: String,
    required: [true, 'stockName field is required'],
  },
  currentPrice: {
    type: Number,
    required: [true, 'currentPrice field is required'],
  },
  marketCap: {
    type: Number,
  },
  sector: {
    type: String,
  },
});

// define Transaction model
const Stock = mongoose.model('Stock', stockSchema);

// methods
const getStock = (ticker, cb) => {
  Stock.findOne(
    { stockTicker: ticker },
  ).then((stock) => {
    cb(null, stock);
  });
};

const loadAllStocks = (cb) => {
  Stock.find({}).then((stocks) => {
    cb(null, stocks);
  });
};

module.exports = Stock;
module.exports.getStock = getStock;
module.exports.loadAllStocks = loadAllStocks;
