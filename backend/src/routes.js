const express = require ('express');
const frete = require('./Controllers/FreteConstroller');

const routes  = express.Router();

routes.post('/',frete.store);

module.exports = routes;