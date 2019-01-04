const faker = require('faker');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('robinhood', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const About = sequelize.define('about', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: Sequelize.STRING(2000),
  minimized: Sequelize.STRING(),
  ceo: Sequelize.STRING,
  employees: Sequelize.INTEGER,
  headquarters: Sequelize.STRING,
  founded: Sequelize.INTEGER,
  marketCap: Sequelize.STRING,
  priceEarnings: Sequelize.STRING,
  dividendYield: Sequelize.INTEGER,
  avgVolume: Sequelize.STRING,
  highToday: Sequelize.STRING,
  lowToday: Sequelize.STRING,
  openPrice: Sequelize.STRING,
  volume: Sequelize.STRING,
  weekHigh: Sequelize.STRING,
  weekLow: Sequelize.STRING
})

const News = sequelize.define('news', {
  pictureUrl: Sequelize.STRING,
  name: Sequelize.STRING,
  title: Sequelize.STRING,
  views: Sequelize.INTEGER,
  description: Sequelize.STRING(2000),
  about_id: Sequelize.INTEGER,
  hour: Sequelize.STRING
})

sequelize.sync();




exports.About = About;
exports.News = News;
