# Ladies Night Cocktail Machine
Ladies Night just got a little more interesting! This cocktail machine makes it easy to decide which drink to whip up for the next party or get together. Generate a drink list by typing an ingredient or fruity flavor like strawberry or coconut, or generate a drink list based on your liquor of choice. 

**Link to project:** https://cocktail-machine.netlify.app/

![cocktail machine web app](https://github.com/yiremorlans/yiremorlans/blob/main/cocktail.webp)

## How It's Made:

**Tech used:** JavaScript, HTML, CSS, Postman

HTML elements were minimal, but kept as semantically accurate as possible. Initial data fetches were done in postman to guage how much data the cocktail API provided and to compose the best approach for parsing through the data. The esthetic of the cocktail machine UI was one of the most important aspects I wanted to focus on, so I incorporated CSS styling to include shadows, blurs, and 'glass' components (basically a combination of the former) for a streamline look. The main objective was to generate the cocktails to be displayed in a carousel. I decided the best approach for this project was to incorporate Swiper JS, a free javascript library, to build a responsive slider that also works on mobile. If you want to use the cocktail database API in your next project, you can find it here ---> https://www.thecocktaildb.com/api.php

## Optimizations

Additional features to be added in the future include an ingredients list to go with the instructions. Optimizing the cocktail cards to better fit smaller mobile devices.

## Lessons Learned:

Incorporating a javascript plugin into a project requires rigging it up in more than one place. Functions that fetch to the API also have to reference to the swiper components in the HTML. Luckily the extensive documentation provided by the Swiper JS library makes the process more approachable.

