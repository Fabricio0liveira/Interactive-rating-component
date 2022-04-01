const buttonRating = document.querySelectorAll('button')
const sendRating = document.querySelector('#send-rating')

const divContent = document.querySelector('.content')
const divRatingMessage = document.querySelector('.rating-message')
const textRating = document.querySelector('#text-rating')
let valuationValue = 0;

sendRating.addEventListener('click', () => {
    divContent.classList.add('invisible')
    
    // console.log(textRating)
    textRating.textContent = `You selected ${valuationValue} out of 5`
    divRatingMessage.classList.remove('invisible')

})

function buttonValue(value) {
    valuationValue = value
    buttonRating[value -1].style.backgroundColor = 'hsl(25, 97%, 53%)'
    buttonRating[value -1].style.color = 'hsl(0, 0%, 100%)'

    return valuationValue
}
