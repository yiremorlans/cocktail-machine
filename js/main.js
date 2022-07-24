//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    if (document.querySelectorAll('.swiper-slide') !==null) {
        document.querySelectorAll('.swiper-slide').forEach(element => element.remove())
    }
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURI(drink)}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      if (data.drinks === null) {
        alert ('Please request a different drink.')
      } else {
        data.drinks.forEach( cocktail => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            document.querySelector('.swiper-wrapper').append(slide);

            const card = document.createElement('div');
            card.className = 'cocktail-card';
            slide.appendChild(card);

            const drinkName = document.createElement('h1');
            drinkName.innerText = cocktail.strDrink;
            card.appendChild(drinkName);

            const drinkImage = document.createElement('img');
            drinkImage.src = cocktail.strDrinkThumb;
            card.appendChild(drinkImage);

            const drinkInstructions = document.createElement('p');
            drinkInstructions.innerText = cocktail.strInstructions.replace(/(\n|\r|\n\r)/gm,'');
            card.appendChild(drinkInstructions);
        });
        const swiper = new Swiper('.swiper', {
          // Optional parameters
          direction: 'horizontal',
          loop: true,
          
        
          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
          },
        
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
          // And if we need scrollbar
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          // },
        });
    }
})
.catch(err => {
    console.log(`error ${err}`)
});


}


