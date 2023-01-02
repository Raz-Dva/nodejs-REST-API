require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DATABASE_URL, {})
  .then(() => console.log('connected'))
  .catch((e) => console.log(e));

// const routes = require('./routes/routes');
// app.use('/api', routes);
app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});
// --------------------------------------------------------
app.post('/signup', function (req, res) {
  // var data = req.body;
  // console.log(req.body);
  res.json({ num1_bi: 12345678901111123456, num2: 10 });
});

// app.post('/api/post1', (req, res) => {
//   console.log(req.body);
//   res.json({ name: 11 });
// });

app.listen(80, () => {
  console.log(`Server Started at ${80}`);
});
