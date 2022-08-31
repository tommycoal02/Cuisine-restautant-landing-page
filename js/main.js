const firstMeal = document.querySelector('.displayPriceOnHover')
// const secondMeal = document.querySelector('#secondClick')
// const thirdMeal = document.querySelector('#thirdClick')
// const fourthMeal = document.querySelector('#fourthClick')
// const fifthMeal = document.querySelector('#fifthClick')
// const sixthMeal = document.querySelector('#sixthClick')
// const seventhMeal = document.querySelector('#seventhClick')
// const eightMeal = document.querySelector('#eigthClick')


document.querySelector('.foodImg').addEventListener('click', run)

function run(){
    firstMeal.classList.toggle('displayPriceOnHover')
}
