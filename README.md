# Pokemon Picker v2

## Description

This game is based off of the popular game wordle, where you are given hints on the pokemon. The objective is to choose the right one!

* You can use the application on heroku: https://pokemonpicker-v2.herokuapp.com/

* Clicking on the picture of the pokemon redirects you to the bulbabedia page for that specific pokemon

* The last region update was the Galarian region (Sword and Shield)

* You can technically figure out the answer by looking in the console through redux actions and logs, this is due to me still testing the game. If you want a true experience please don't open the console while playing!

* I used the pokeApi here to grab my data: https://pokeapi.co/

* As of now, this is not meant to be used for mobile devices, so formatting/performance might be strange.

* User can now choose a region to play, so that all pokemon chosen by the game will be from that specific region.

## How to Play

To submit a guess, simply type in the name of the pokemon in the search bar and click enter. Your guess will show up in the guesses box. You have a total of 6 attempts, where one "freebie" guess is given to you to start off. As you keep guessing, more information about the pokemon slowly be revealed to you. On each guess, images will be shown to you giving you hints of how related the correct pokemon is to your guess. The categories are Generation, Type 1, Type 2, Height, and Weight. The images that would be rendered under these categories are as follows:

- ![alt text](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/large-green-square_1f7e9.png) = Correct
- ![alt text](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/large-red-square_1f7e5.png) = Incorrect
- ![alt text](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/large-blue-square_1f7e6.png) = Null. This means that the correct pokemon is monotype.
- ![alt text](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/upwards-button_1f53c.png) = Up. The correct pokemon has a higher value in its respective category than your guess.
- ![alt text](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/fast-up-button_23eb.png) = Big Up. The correct pokemon has a MUCH higher value in its respective category than your guess.
- ![alt text](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/downwards-button_1f53d.png) = Down. The correct pokemon has a lower value in its respective category than your guess.
- ![alt text](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/fast-down-button_23ec.png) = Big Down. The correct pokemon has a MUCH lower value in its respective category than your guess.

* Once you run out of guesses or you guess correctly, the pokemon will be revealed to you!

* Too easy? Try hard mode! This mode still gives hints related to your guesses, but no information will be revealed to you about the correct pokemon as you progress.



## Pokedex

This section picks pokemon for you based on region. The default method is random, but you can look up a pokemon in the search bar provided.

* By clicking each button, the app will pick a random pokemon from that specific region.

* Details that are given is type, weight and list of abilities.

* Clicking on the picture of the pokemon redirects you to the bulbabedia page for that specific pokemon
