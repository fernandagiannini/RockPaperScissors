document.addEventListener('DOMContentLoaded', () => {

    const rockButton = document.querySelector('.rock')
    const paperButton = document.querySelector('.paper')
    const scissorsButton = document.querySelector('.scissors')

    let userOption = 0
    let computerOption = 0
    let max = Math.floor(3)
    let min = Math.ceil(1)


    compareOptions = (userOption, computerOption) => {
        if (userOption === 1 && computerOption === 1) { console.log("play again") }
        if (userOption === 2 && computerOption === 1) { console.log("you win") }
        if (userOption === 3 && computerOption === 1) { console.log("you loose") }
        if (userOption === 1 && computerOption === 2) { console.log("you loose") }
        if (userOption === 2 && computerOption === 2) { console.log("play again") }
        if (userOption === 3 && computerOption === 2) { console.log("you win") }
        if (userOption === 1 && computerOption === 3) { console.log("you win") }
        if (userOption === 2 && computerOption === 3) { console.log("you loose") }
        if (userOption === 3 && computerOption === 3) { console.log("play again") }
    }


    rockButton.addEventListener('click', () => {
        userOption = 1
        computerOption = Math.floor(Math.random() * (max - min + 1) + min)
        console.log(computerOption)
        compareOptions(userOption, computerOption)
    })


    paperButton.addEventListener('click', () => {
        userOption = 2
        computerOption = Math.floor(Math.random() * (max - min + 1) + min)
        console.log(computerOption)
        compareOptions(userOption, computerOption)
    })


    scissorsButton.addEventListener('click', () => {
        userOption = 3
        computerOption = Math.floor(Math.random() * (max - min + 1) + min)
        console.log(computerOption)
        compareOptions(userOption, computerOption)
    })

})