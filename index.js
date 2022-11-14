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
    console.log(formInput)

    fetch(`https://api.edamam.com/search?q=${formInput}&app_id=${api_ID}&app_key=${api_Key}`)
    .then(res=>res.json())
    .then(data=> console.log(data))

})

// creating recipe elements 


// function createRecipe(recipe) {

//     const newRecipe = document.createElement('div')
//     newRecipe.className = "card"

//     const recipeName = document.createElement('h1')
//     recipeName.textContent = 

//     const recipeImg = document.createElement('img')
//     recipeImg.src = 

//     const recipeDes = document.createElement('p')
//     recipeDes.textContent = 
//     const r



//     newRecipe.append(recipeName)
//     newRecipe.append(recipeImg)
//     newRecipe.append(recipeDes)


//     newSearch.append(newRecipe)

// }



