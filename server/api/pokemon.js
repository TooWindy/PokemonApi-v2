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
