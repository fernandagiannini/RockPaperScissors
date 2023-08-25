document.addEventListener('DOMContentLoaded', () => {

    const rockButton = document.querySelector('.rock')
    const paperButton = document.querySelector('.paper')
    const scissorsButton = document.querySelector('.scissors')
    const scoreUser_h2 = document.getElementById("scoreUser")
    const scoreComputer_h2 = document.getElementById("scoreComputer")

    let max = Math.floor(3)
    let min = Math.ceil(1)
    let userPoints = 0
    let computerPoints = 0


    const win = () => {
        userPoints++
        scoreUser_h2.innerHTML = userPoints
    }

    const loose = () => {
        computerPoints++
        scoreComputer_h2.innerHTML = computerPoints
    }

    const again = () => {
        console.log("again")
    }

    compareOptions = (userOption) => {        //asigna un valor ramdom a computerOption y lo compara con userOption

        computerOption = Math.floor(Math.random() * (max - min + 1) + min)

        if (userOption === 1 && computerOption === 1) { again() }
        if (userOption === 2 && computerOption === 1) { win() }
        if (userOption === 3 && computerOption === 1) { loose() }
        if (userOption === 1 && computerOption === 2) { loose() }
        if (userOption === 2 && computerOption === 2) { again() }
        if (userOption === 3 && computerOption === 2) { win() }
        if (userOption === 1 && computerOption === 3) { win() }
        if (userOption === 2 && computerOption === 3) { loose() }
        if (userOption === 3 && computerOption === 3) { again() }
    }



    const main = () => {
        if (computerPoints < 10 && userPoints < 10) {
            rockButton.addEventListener('click', () => { compareOptions(1) })
            paperButton.addEventListener('click', () => { compareOptions(2) })
            scissorsButton.addEventListener('click', () => { compareOptions(3) })            
        }
    }


    main()



})