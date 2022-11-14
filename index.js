// ID selectors 
const form = document.querySelector('#Recipe-search')
const newSearch = document.querySelector('#recipe-results')

const api_ID = 'dd405108'
const api_Key ='48fcae0e99aa225862af0bcad8cadbc5'
const baseUrl= `https://api.edamam.com/search?q=pizza&app_id=${api_ID}&app_key=${api_Key}`


// form event listener 

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    // console.log('Hello')
     let formInput = e.target['name'].value
    // console.log(formInput)

    fetch(`https://api.edamam.com/search?q=${formInput}&app_id=${api_ID}&app_key=${api_Key}`)
    .then(res=>res.json())
    .then(recipes => {
        recipes.hits.forEach((recipe) => {
            console.log(recipe)
            createRecipe(recipe)
        })
    })
})

// creating recipe elements 


function createRecipe(recipe) {

    const newRecipe = document.createElement('div')
    newRecipe.className = "card"

    const recipeName = document.createElement('h1')
    recipeName.textContent = recipe.recipe.label

    const recipeDes = document.createElement('p')
    recipeDes.textContent = `${recipe.recipe.cuisineType} + ${recipe.recipe.mealType}`

    const recipeImg = document.createElement('img')
    recipeImg.src = recipe.recipe.image

    const recipeLink = document.createElement('p')
    recipeLink.textContent = recipe.recipe.url


    newRecipe.append(recipeName)
    newRecipe.append(recipeDes)
    newRecipe.append(recipeImg)
    newRecipe.append(recipeLink)


    newSearch.append(newRecipe)

}
