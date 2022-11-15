// ID selectors
const form = document.querySelector("#Recipe-search");
const newSearch = document.querySelector("#recipe-results");
const favContainer = document.querySelector("#fav-list");
const navBar = document.querySelector("#recipe-bar");
const recipeName = document.createElement("h1");
const newRecipe = document.createElement("div");
const recipeImg = document.createElement("img");
const recipeDes = document.createElement("p");
const recipeLink = document.createElement("a");
const favButton = document.createElement("button");
const favoriteRecipe = document.createElement("h1");
favoriteRecipe.textContent = "Favorite Recipe List";
const recipeUl = document.createElement("h4");
const recipeLi = document.createElement("li");
const favList = document.createElement("div");

// form event listener

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log('Hello')
  let formInput = e.target["name"].value;
  // console.log(formInput)

  fetch(
    `https://api.edamam.com/search?q=${formInput}&app_id=${api_ID}&app_key=${api_Key}`
  )
    .then((res) => res.json())
    .then((recipes) => {
      while (navBar.firstChild) {
        navBar.removeChild(navBar.firstChild);
      }
      recipes.hits.forEach((recipe) => {
        console.log(recipe);
        const newSpan = document.createElement("span");
        const image = document.createElement("img");
        newSpan.className = "span-tile";

        image.src = recipe.recipe.image;
        image.className = "bar-image";

        newSpan.append(image);
        navBar.append(newSpan);

        navBar.className = "recipe-bar";

        newSpan.addEventListener("click", () => {
          console.log("hello");
          newRecipe.className = "card";
          recipeName.textContent = recipe.recipe.label;
          recipeImg.classList.add("detail-image");
          recipeDes.textContent = `${recipe.recipe.cuisineType} + ${recipe.recipe.mealType}`;
          recipeImg.src = recipe.recipe.image;
          recipeLink.textContent = `${recipe.recipe.label} Recipe`;
          recipeLink.href = recipe.recipe.url;

          newRecipe.append(recipeName, recipeDes, recipeImg);
          newRecipe.append(recipeLink, favButton);
          newSearch.append(newRecipe);

          favButton.addEventListener("click", () => {
            console.log("hello");
            // recipeUl.textContent = recipe.recipe.label

            favoriteRecipe.append(recipeUl);
            // favList.append(favoriteRecipe)
            // favorite.append(favList)

            fetch("http://localhost:3000/favorites", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(recipe),
            })
              .then((res) => res.json())
              .then((data) => {
                const card = document.createElement("div");
                card.className = "fav-card";
                const p = document.createElement("p");
                const favImg = document.createElement("img");

                p.textContent = data.recipe.label;
                favImg.src = data.recipe.image;
                const buttonFav = document.createElement("button");
                buttonFav.textContent = "X";

                buttonFav.addEventListener("click", () => {
                  card.remove();
                  fetch(`http://localhost:3000/favorites/${data.id}`, {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                });

                card.append(p);
                card.append(buttonFav);
                card.append(favImg);
                favContainer.append(card);
              });
          });
        });
      });
    });
});

favButton.textContent = "favorite";
favButton.className = "fav-button";

fetch("http://localhost:3000/favorites")
  .then((res) => res.json())
  .then((data) => renderFavorites(data));

function renderFavorites(favorites) {
    if(favorites){

  favorites.forEach((favorite) => {
    const card = document.createElement("div");
    card.className = "fav-card";
    const p = document.createElement("p");
    const favImg = document.createElement("img");
    const buttonFav = document.createElement("button");
    buttonFav.textContent = "X";

    buttonFav.addEventListener("click", () => {
      card.remove();
      fetch(`http://localhost:3000/favorites/${favorite.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    });

    p.textContent = favorite.recipe.label;
    favImg.src = favorite.recipe.image;

    card.append(p);
    card.append(buttonFav);
    card.append(favImg);
    favContainer.append(card);
  });
}
}

// favButton.addEventListener('click', () => {
//     console.log('hello')

//     recipeLi.textContent = recipe.recipe.label

//     recipeUl.append(recipeLi)
//     favoriteRecipe.append(recipeUl)
//     favList.append(favoriteRecipe)
//     favorite.append(favList)

// })

// create elements

// function createRecipe(recipe) {

//     const newRecipe = document.createElement('div')
//     newRecipe.className = "card"

//     const recipeName = document.createElement('h1')
//     recipeName.textContent = recipe.recipe.label

//     const recipeDes = document.createElement('p')
//     recipeDes.textContent = `${recipe.recipe.cuisineType} + ${recipe.recipe.mealType}`

//     const recipeImg = document.createElement('img')
//     recipeImg.src = recipe.recipe.image

//     const recipeLink = document.createElement('p')
//     recipeLink.textContent = recipe.recipe.url

//     newRecipe.append(recipeName)
//     newRecipe.append(recipeDes)
//     newRecipe.append(recipeImg)
//     newRecipe.append(recipeLink)

// }
