const router = require('express').Router();
const knex = require('knex');



const db = knex('knexfile.js');



module.exports = router;