const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const transactions = require('../database/transaction.js');
const stocks = require('../database/Stock.js');
const cors = require('cors');
const port = 3333;

app.use(cors());

app.use('/', express.static('./public'));
app.use(/\/\d+\//, express.static('./public'));

app.use(bodyParser.json());

app.get('/stocks/:stockTicker', (req, res) => {
  stocks.getStock(req.params.stockTicker, (err, data) => {
    if (err) {
      res.json({ message: "what's a stock?" });
    } else {
      res.json(data);
    }
  });
});

app.get('/stocks', (req, res) => {
  stocks.loadAllStocks((err, data) => {
    if (err) {
      res.json({ message: 'The market is no more' });
    } else {
      res.json(data);
    }
  });
});

app.get('/transactions', (req, res) => {
  transactions.loadAll((err, data) => {
    if (err) {
      res.json({ message: "Who knows what you've been up to!" });
    } else {
      res.json(data);
    }
  });
});

app.post('/transactions', (req, res) => {
  const transaction = {
    stockName: req.body.stockName,
    stockTicker: req.body.stockTicker,
    currentPrice: req.body.currentPrice,
    quantity: req.body.quantity,
    orderType: req.body.orderType,
  };

  transactions.newTransaction(transaction, (err, data) => {
    if (err) {
      res.json({ message: "ooo, guess you missed that trade... hope it wasn't important!" });
    } else {
      res.json(data);
    }
  });
});

app.listen(port, () => { console.log(`Listening on ${port} !!!`); });

module.exports = app;
