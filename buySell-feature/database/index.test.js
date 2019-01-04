const Schema = require('./index.js');
const transactions = require('./transaction.js');
const stocks = require('./stock.js');

it('returns at least 3000 stocks once database is seeded', () => {
  stocks.loadAllStocks((err, data) => {
    const count = data.length;
    console.log(count);
    expect(count).toBeGreaterThan(3000);
  });
});

it('returns a stock from ticker symbol', () => {
  stocks.getStock('FB', (err, data) => {
    const name = data.stockName;
    console.log(name);
    expect(name).toBe('Facebook, Inc.');
  });
});
