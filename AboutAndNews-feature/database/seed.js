const faker = require('faker');
const db = require('../database/index.js');


var employees = 5500;
var founded = 1997;
var marketCap = 113.64;
var priceEarnings = 88.31
var avgVolume = 11.11;
var highToday = 161.91;
var lowToday = 120.25;
var openPrice = 220.94;
var volume = 2.91;
var weekHigh = 401.25;
var weekLow = 166.36;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


var fakeAbout = () => {
  for (var i = 0; i < 100; i++) {
    db.About.create({
      description: faker.lorem.paragraph() + faker.lorem.paragraph() + faker.lorem.paragraph() + faker.lorem.paragraph() + faker.lorem.paragraph(),
      minimized: faker.lorem.sentence() + faker.lorem.sentence(),
      ceo: faker.name.findName(),
      employees: employees,
      headquarters: faker.address.city() +', ' + faker.address.state(),
      founded: founded,
      marketCap: marketCap,
      priceEarnings: priceEarnings,
      dividendYield: 0.0,
      avgVolume: avgVolume,
      highToday: highToday,
      lowToday: lowToday,
      openPrice: openPrice,
      volume: volume,
      weekHigh: weekHigh,
      weekLow: weekLow
    })
    employees++;
    founded++;
    marketCap++;
    priceEarnings++;
    avgVolume++;
    highToday++;
    lowToday++;
    openPrice++;
    volume++;
    weekHigh++;
    weekLow++;
  }
}

fakeAbout();

db.News.bulkCreate([
  { pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news9.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 1
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news8.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 1
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news7.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 1
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news6.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 1
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news5.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 1
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news40.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 2
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news4.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 2
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news39.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 2
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news38.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 4
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news37.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 4
  }
  ,
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 5
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news36.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 5
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news35.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 5
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news34.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 5
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news33.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 6
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news32.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 7
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news31.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 7
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news30.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 7
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news3.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 7
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news29.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 7
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news28.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 7
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news27.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 8
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news26.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 8
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news25.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 8
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news24.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 9
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news23.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 9
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news22.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 10
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news21.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 10
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news20.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 10
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news2.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 10
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news19.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 10
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news18.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 10
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news17.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 12
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news16.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 12
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news15.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 12
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news14.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 13
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news13.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 13
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news12.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 14
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news11.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 14
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news10.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 15
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/news1.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 15
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/99.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 15
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/98.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 15
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/97.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 16
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/96.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 100
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/95.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 16
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/94.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 99
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/93.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 99
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/92.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 17
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/91.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 17
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/90.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 17
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/89.png',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 18
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/88.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 98
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/87.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 98
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/86.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 18
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/85.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 97
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/84.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 97
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/83.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 19
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/82.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 19
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/81.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 19
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/80.png',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 19
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/79.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 96
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/78.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 96
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/77.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 20
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/76.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 20
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/75.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 21
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/74.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 21
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/73.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 21
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/72.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 22
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/71.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 24
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/70.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 24
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/69.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 24
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/68.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 25
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/67.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 25
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/66.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 25
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/65.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 26
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/64.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 26
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/63.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 26
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/62.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 27
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/61.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 27
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/60.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 27
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/59.png',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 28
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/58.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 28
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/57.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 28
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/56.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 29
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/55.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 29
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/54.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 95
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/53.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 95
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/52.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 30
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/51.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 30
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/50.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 30
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/49.png',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 93
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/48.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 93
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/47.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 31
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/46.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 31
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/45.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 32
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/44.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 32
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/43.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 32
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/42.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 33
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/41.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 33
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/200.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 92
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/199.png',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 34
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/198.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 34
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/197.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 92
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/196.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 92
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/195.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 35
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/194.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 90
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/193.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 90
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/192.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 35
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/191.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 35
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/190.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 89
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/189.png',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 89
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/188.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 36
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/187.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 36
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/186.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 37
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/185.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 38
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/184.png',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 39
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/183.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 39
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/182.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 39
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/181.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 87
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/180.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 40
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/179.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 40
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/178.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 86
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/177.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 86
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/176.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 41
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/175.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 42
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/174.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 42
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/173.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 85
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/172.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 85
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/171.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 43
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/170.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 43
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/169.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 44
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/168.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 44
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/167.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 45
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/166.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 46
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/165.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 46
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/164.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 46
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/163.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 47
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/162.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 47
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/161.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 48
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/160.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 48
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/159.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 48
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/158.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 84
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/157.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 84
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/156.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 49
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/155.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 49
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/154.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 83
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/153.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 83
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/152.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 50
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/151.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 50
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/150.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 50
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/149.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 51
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/148.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 51
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/147.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 81
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/146.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 81
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/145.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 81
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/144.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 82
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/143.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 81
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/142.png',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 52
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/141.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 52
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/140.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 53
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/139.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 53
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/138.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 53
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/137.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 53
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/136.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 54
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/135.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 55
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/134.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 56
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/133.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 57
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/132.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 57
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/131.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 58
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/130.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 58
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/129.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 58
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/128.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 59
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/127.png',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 59
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/126.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 60
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/125.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 60
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/124.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 60
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/123.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 61
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/122.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 62
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/121.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 62
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/120.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 63
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/119.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 64
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/118.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 65
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/117.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 67
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/116.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 69
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/115.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 69
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/114.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 69
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/113.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 71
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/112.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 72
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/111.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 74
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/110.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 75
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/109.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 75
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/108.png',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 75
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/107.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 76
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/106.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 76
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/105.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 76
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/104.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 77
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/103.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 78
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/102.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 79
  },
  {
    pictureUrl: 'https://s3.amazonaws.com/fec-morgan/101.jpeg',
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentence(),
    hour: getRandomIntInclusive(0, 24) + 'h',
    about_id: 80
  }
])
