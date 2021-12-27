const { default: axios } = require('axios')
const router = require('express').Router()

module.exports = router

router.get('/', async(req,res,next) => {
  const randomId = Math.floor(Math.random() * (898 - 1 +1) +1 )
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    const pokemonData = response.data
    // console.log(response)
    res.send(pokemonData)
  }
  catch(err){
    console.log("Couldn't retrieve Pokemon")
    next(err)
  }
})

router.post('/search', async(req,res,next) => {
  try{
    const {pokemon} = req.body
    //Pokemon searches must be in lowercase
    const lowerCaseName = pokemon.slice(0,1).toLowerCase() + pokemon.slice(1)
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lowerCaseName}`)
    const pokemonData = response.data
    res.send(pokemonData)
  }
  catch(err){
    console.log("Search Failed")
    res.send(null)
    next(err)
  }
})
router.get('/kanto', async(req,res,next) => {
  const kantoId = Math.floor(Math.random() * (151 - 1 +1) +1 )
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${kantoId}`)
    const pokemonData = response.data
    // console.log(response)
    res.send(pokemonData)
  }
  catch(err){
    console.log("Couldn't retrieve Kanto Pokemon")
    next(err)
  }
})

router.get('/johto', async(req,res,next) => {
  const johtoId = Math.floor(Math.random() * (252- 152 +1) + 152 )
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${johtoId}`)
    const pokemonData = response.data
    // console.log(response)
    res.send(pokemonData)
  }
  catch(err){
    console.log("Couldn't retrieve Johto Pokemon")
    next(err)
  }
})

router.get('/hoenn', async(req,res,next) => {
  const hoennId = Math.floor(Math.random() * (386- 252 +1) + 252)
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${hoennId}`)
    const pokemonData = response.data
    // console.log(response)
    res.send(pokemonData)
  }
  catch(err){
    console.log("Couldn't retrieve Hoenn Pokemon")
    next(err)
  }
})

router.get('/sinnoh', async(req,res,next) => {
  const sinnohId = Math.floor(Math.random() * (493- 387 +1) + 387)
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${sinnohId}`)
    const pokemonData = response.data
    // console.log(response)
    res.send(pokemonData)
  }
  catch(err){
    console.log("Couldn't retrieve Sinnoh Pokemon")
    next(err)
  }
})

router.get('/unova', async(req,res,next) => {
  const unovaId = Math.floor(Math.random() * (649- 494 +1) + 494)
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${unovaId}`)
    const pokemonData = response.data
    // console.log(response)
    res.send(pokemonData)
  }
  catch(err){
    console.log("Couldn't retrieve Unova Pokemon")
    next(err)
  }
})

router.get('/kalos', async(req,res,next) => {
  const kalosId = Math.floor(Math.random() * (721- 650 +1) + 650)
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${kalosId}`)
    const pokemonData = response.data
    // console.log(response)
    res.send(pokemonData)
  }
  catch(err){
    console.log("Couldn't retrieve Kalos Pokemon")
    next(err)
  }
})

router.get('/alola', async(req,res,next) => {
  const alolaId = Math.floor(Math.random() * (809- 722 +1) + 722)
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${alolaId}`)
    const pokemonData = response.data
    // console.log(response)
    res.send(pokemonData)
  }
  catch(err){
    console.log("Couldn't retrieve Alola Pokemon")
    next(err)
  }
})

router.get('/galar', async(req,res,next) => {
  const galarId = Math.floor(Math.random() * (898- 810 +1) + 810)
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${galarId}`)
    const pokemonData = response.data
    // console.log(response)
    res.send(pokemonData)
  }
  catch(err){
    console.log("Couldn't retrieve Galar Pokemon")
    next(err)
  }
})
