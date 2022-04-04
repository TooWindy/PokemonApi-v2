# Pokemon Picker v2

## Description

This game is based off of the popular game wordle, where you are given hints on the pokemon. The objective is to choose the right one!

* You can use the application on heroku: https://pokemonpicker-v2.herokuapp.com/

* Clicking on the picture of the pokemon redirects you to the bulbabedia page for that specific pokemon

* The last region update was the Galarian region (Sword and Shield)

* I used the pokeApi here to grab my data: https://pokeapi.co/

* As of now, this is not meant to be used for mobile devices, so formatting/performance might be strange.

## How to Play

To submit a guess, simply type in the name of the pokemon in the search bar and click enter. Your guess will show up in the guesses box. You have a total of 6 attempts, where one "freebie" guess is given to you to start off. As you keep guessing, more information about the pokemon slowly be revealed to you. On each guess, images will be shown to you giving you hints of how related the correct pokemon is to your guess. The categories are Generation, Type 1, Type 2, Height, and Weight. The images that would be rendered under these categories are as follows:

 - ![alt text](./public/squares/greenSquare.png) = Correct
 - ![alt text](./public/squares/redSquare.png) = Incorrect
![alt text](./public/squares/blueSquare.png) = Null. This means that the correct pokemon is monotype.
![alt text](./public/squares/upIcon.png) = Up. The correct pokemon has a higher value in its respective category than your guess.
![alt text](./public/squares/fastUpIcon.png) = Big Up. The correct pokemon has a MUCH higher value in its respective category than your guess. (As of right now this would only apply to the weight category)
![alt text](./public/squares/downIcon.png) = Down. The correct pokemon has a lower value in its respective category than your guess.
![alt text](./public/squares/fastDownIcon.png) = Big Down. The correct pokemon has a MUCH lower value in its respective category than your guess. (As of right now this would only apply to the weight category).

* Once you run out of guesses or you guess correctly, the pokemon will be revealed to you!

* Too easy? Try hard mode! This mode still gives hints related to your guesses, but no information will be revealed to you about the correct pokemon.



## Pokedex

This section picks pokemon for you based on region. The default method is random, but you can look up a pokemon in the search bar provided.

* By clicking each button, the app will pick a random pokemon from that specific region.

* Details that are given is type, weight and list of abilities.

* Clicking on the picture of the pokemon redirects you to the bulbabedia page for that specific pokemon
