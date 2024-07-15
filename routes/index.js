const router = require('express').Router();
const pokemonRoutes = require('./pokemon-routes.js');

router.use('/pokemon', pokemonRoutes);



module.exports = router;