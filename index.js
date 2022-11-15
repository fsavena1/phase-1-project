// ID selectors 
const form = document.querySelector('#Recipe-search')
const newSearch = document.querySelector('#recipe-results')
const favorite = document.querySelector('#fav-list')
const navBar = document.querySelector('#recipe-bar')
const recipeName = document.createElement('h1')
const newRecipe = document.createElement('div')
const recipeImg = document.createElement('img')
const recipeDes = document.createElement('p')
const recipeLink = document.createElement('a')
const favButton = document.createElement('button')
const favoriteRecipe = document.createElement('h1')
favoriteRecipe.textContent = 'Favorite Recipe List'
const recipeUl = document.createElement('h4')
const recipeLi = document.createElement('li')
const favList = document.createElement('div')



// form event listener 

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    // console.log('Hello')
     let formInput = e.target['name'].value
    // console.log(formInput)

    fetch(`https://api.edamam.com/search?q=${formInput}&app_id=${api_ID}&app_key=${api_Key}`)
    .then(res=>res.json())
    .then(recipes => {
        while(navBar.firstChild) {
            navBar.removeChild(navBar.firstChild)
        }
        recipes.hits.forEach(recipe => {
           
            const newSpan = document.createElement('span')
            const image = document.createElement('img')
            newSpan.className = 'span-tile'

            image.src = recipe.recipe.image
            image.className = 'bar-image'

            newSpan.append(image)
            navBar.append(newSpan)

            navBar.className = 'recipe-bar'


            newSpan.addEventListener('click', () => {
                console.log('hello')
                newRecipe.className = "card"
                recipeName.textContent = recipe.recipe.label
                recipeImg.classList.add('detail-image')
                recipeDes.textContent = `${recipe.recipe.cuisineType} + ${recipe.recipe.mealType}`
                recipeImg.src = recipe.recipe.image
                recipeLink.textContent = `${recipe.recipe.label} Recipe`
                recipeLink.href = recipe.recipe.url


                newRecipe.append(recipeName,recipeDes,recipeImg)
                newRecipe.append(recipeLink, favButton)
                newSearch.append(newRecipe)

                favButton.addEventListener('click', () => {
                    console.log('hello')
                    
                
                    recipeUl.textContent = recipe.recipe.label
                
                
                    favoriteRecipe.append(recipeUl)
                    favList.append(favoriteRecipe)
                    favorite.append(favList)
                
                
            })
        })        
    })
})
})

favButton.textContent ='favorite'
favButton.className = 'fav-button'

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
