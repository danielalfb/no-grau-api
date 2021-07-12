const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ name: 'No Grau Mammi' });
});

module.exports = routes;
