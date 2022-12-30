const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'myusernanme',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'hellorobin',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'miranda',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'dasher',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'sewawq',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'sawgul',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    username: 'myllob',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'tpenntoyouiell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'helloworld',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'jmacarthy',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;