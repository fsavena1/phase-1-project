// ID selectors 
const form = document.querySelector('#Recipe-search')


// form event listener 

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    // console.log('Hello')
     let formInput = e.target['name'].value
    console.log(formInput)
})

