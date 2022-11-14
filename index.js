// ID selectors 
const form = document.querySelector('#Recipe-search')
const newSearch = document.querySelector('#recipe-results')
const navBar = document.querySelector('#recipe-bar')
const recipeName = document.createElement('h1')
const newRecipe = document.createElement('div')
const recipeImg = document.createElement('img')


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
                recipeImg.src = recipe.recipe.image
                newRecipe.append(recipeName,recipeImg)
                newSearch.append(newRecipe)
            })
        })        
    })
})

// Adding span bar for click event listener

// function recipeSpan(recipe){
//     let foodSpan = document.createElement('span')
//     foodSpan.src = recipe.recipe.image
//     foodBar.append(foodSpan)
// }


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


//     newSearch.append(newRecipe)

// }
