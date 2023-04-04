<p align="center">
<img alt="banner image" src="https://raw.githubusercontent.com/MrFranksJr/MrFranksJr/main/assets/game-of-war/Banner.png">
</p>

*Apr 04, 2023 - Franky Jr Blondeel*

# Game of War – playing with Async JavaScript

## Overview

**Live version [here](https://games-of-war.netlify.app/)**

Game of War is a little [card game app](https://www.youtube.com/watch?v=yX-jOVer758) I developed as part of Module 8 of the Front-Developer Career Path over at [scrimba.com](https://scrimba.com). It focuses on using API calls, this time using the [Deck of Cards API](https://deckofcardsapi.com/).

The entire idea was to get more familiar with aync JavaScript and how to work with Promises, an extensive section about callback functions. To better understand these subjects, we even built our own .filter() clone.

It's funny how I actually was applying a lot of this already in past projects, but now we just took a deep (theoretical) dive into them, to fully understand them.

With regards to Promises, we learned about the different states of the Promise (pending, fulfilled or resolved, rejected). With that knowledge, we focused on the fulfilled stated and how we can use the .then() method in order to handle a promise and it's resolved value. We also chained our Promises and .then()'s together.

Then we started building this Game of War. The code written in this Project was not necessarily that much different from what we've done in previous API projects. We still used fetch as before. But with the added focus on these callbacks and Promises, it was much less of a 'memorized syntax job' and more of natural app building exercise with true knowledge of what is happening behind the scenes, when you perform these fetch()'s and then()'s.

In the game of war itself, we connected and explored the Deck of Cards API (which actually has a lot more features available to it than I actually use today). I of course dealt with the styling and UX (although a bit less obsessive this time around 😂). On top of all this, I practiced some algorithmic thinking, in determining the winner of each round.
Last but not least, we got a sneak peak into Async/Await, transformed some of my existing fetch/then functions into Async Await, and gained some valuable knowledge there.

<p align="center">
<img alt="overview" src="https://raw.githubusercontent.com/MrFranksJr/MrFranksJr/main/assets/game-of-war/overview.png">
</p>

## Additional info on the development

I will not dive too deeply into the development of this project, as to any trained eye, it's quite straight forward anyhow.
However, I do wan to focus on some of the things I did to really improve the overall experience of using the app.

### Preloading

So, again as with other Projects I did before, where I load in images of external sources, I noticed that after execution of the API and when I load in the different images, the app takes a while to complete that operation and the whole design tends to jump around when the cards disappear and wait for new cards to be loaded in.

I found several articles that explain how to Preload images using Javascript. By creating a new Image() object and pushing an SRC into that object, but none of these really seemed to work for me. I noticed that by the time you wanted to draw new cards, the site still had to pull the images from the external sources, regardless if I had checked i the image was loaded or not.

So what I did in the end, is as the app loads, I literally load and place all of the images of the cards in a hidden div on the page. Not the most elegant solution, I am sure. But for now, it does work. And it does not stop the user from already drawing in cards and start playing.

Additionally, I designed some card backs to place on the matt already when the player loads the page.

### Clean code?

I also really tried to apply some clean coding principles, and made my code as modular as possible. I wrote many functions as generic as possible in my utils.js file, so that the index.js can easily call on them when necessary. So, refactoring often was the name of the game. Keep the code readable and understandable, for whoever takes a look at it.

### Better End-Game

I created a better end-game experience as well, with a little modal popping up in the end giving the player an overview of who one, and which were the scores. The user has the ability to still return to the board in order to examine the last scores/cards. Overall a better experience.


## Conclusion

So there you have it, I'm slowly but steadily progressing in my journey to becoming a developer. I'm getting really comfortable with setting up my game plan when starting the development of a new assignment. Thinking through complex solutions before even starting the work has always been my strong suit. Getting to use and apply that skill for my own projects is really a lot of fun, and is also what is keeping me engaged and focused to continue the journey. That, and the fact that I'm learning so much along the way. Kudos to Scrimba, it has been an amazing 7 month journey already and I'm so proud to see my Github grow every day!

<p align="center">
<img alt="overview" src="https://raw.githubusercontent.com/MrFranksJr/MrFranksJr/main/assets/game-of-war/game-screen.png">
</p>