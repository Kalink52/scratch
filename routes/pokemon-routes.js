const router = require('express').Router();
const { Pokemon } = require('../models/pokemon')

//path is  /pokemon

router.get('/', async (req, res) => {
    try{
        const pokemonData = await Pokemon.findAll()
        console.log(pokemonData)
        if (!pokemonData){
            res.status(400).json({message: "not found"})
        }

        res.status(200).json(pokemonData)

    }catch (err) {
        res.status(500).json(err) 
    }
})

router.post('/', async (req, res) => {
    try{
        const pokemonData = await Pokemon.create(req.body)
        console.log(pokemonData)
        res.status(200).json(pokemonData)

    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;
