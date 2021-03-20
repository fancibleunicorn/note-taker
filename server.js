const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/', htmlRoutes);

app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
  });