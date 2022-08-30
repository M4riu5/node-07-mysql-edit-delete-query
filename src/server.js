require('dotenv').config();
// susikuriam serveri
const express = require('express');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const morgan = require('morgan');
const dbConfig = require('./config');

const app = express();

const PORT = process.env.PORT || 5000;
// Middleware
app.use(morgan('dev'));
// prisidedam morgan
// GET / - msg: server online
app.get('/', (req, res) => {
  res.json({ msg: 'Server Online' });
});
// 404 - returns json
app.use((req, resp) => {
  resp.status(404).json({ msg: 'Page not found' });
});

app.listen(PORT, () => console.log('Server is running'));