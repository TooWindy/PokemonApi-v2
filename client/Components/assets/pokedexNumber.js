
export const pokedexNumber = (id) => {
  switch(true){
    case id >= 1 && id <= 151:
      return "Kanto"
    case id >= 152 && id<= 251:
      return "Johto"
    case id >= 252 && id <= 386:
      return "Hoenn"
    case id >= 387 && id <= 493:
      return "Sinnoh"
    case id >= 494 && id <= 649:
      return "Unova"
    case id >= 650 && id <= 721:
      return "Kalos"
    case id >= 722 && id <= 809:
      return "Alola"
    case id >= 810 && id <= 898:
      return "Galar"
    case id >= 906 && id <= 1025:
      return "Paldean"
    default:
      return "Unknown"
  }
}

export const generationNumber = (id) => {
  switch(true){
    case id >= 1 && id <= 151:
      return 1
    case id >= 152 && id <= 251:
      return 2
    case id >= 252 && id <= 386:
      return 3
    case id >= 387 && id <= 493:
      return 4
    case id >= 494 && id <= 649:
      return 5
    case id >= 650 && id <= 721:
      return 6
    case id >= 722 && id <= 809:
      return 7
    case id >= 810 && id <= 898:
      return 8
    case id >= 906 && id <= 1025:
      return 9
    default:
      return 'Invalid Generation'
  }
}
