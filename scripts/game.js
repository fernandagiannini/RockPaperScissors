document.addEventListener('DOMContentLoaded', () => {

    const rockButton = document.querySelector('.rock')
    const paperButton = document.querySelector('.paper')
    const scissorsButton = document.querySelector('.scissors')
    const scoreUser_h2 = document.getElementById("scoreUser")
    const scoreComputer_h2 = document.getElementById("scoreComputer")
    const finalMessage= document.getElementById("winner")

    let max = 3
    let min = 1
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

    const checkGameStatus = () => {
        if (computerPoints === 10 || userPoints === 10) {
            //remover eventos
            rockButton.removeEventListener('click', rockClickHandler)
            paperButton.removeEventListener('click', paperClickHandler)
            scissorsButton.removeEventListener('click', scissorsClickHandler)

            if (computerPoints === 10) {
                finalMessage.innerHTML = "You loose"
            }

            if (userPoints === 10) {
                finalMessage.innerHTML = "You win"
            }


        }
    }


    const compareOptions = (userOption) => {        //asigna un valor ramdom a computerOption y lo compara con userOption

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
        checkGameStatus()
    }

    const rockClickHandler = () => {
        compareOptions(1);
    }

    const paperClickHandler = () => {
        compareOptions(2);
    }

    const scissorsClickHandler = () => {
        compareOptions(3);
    }

    const main = () => {
        if (computerPoints < 10 && userPoints < 10) {
            rockButton.addEventListener('click', rockClickHandler)
            paperButton.addEventListener('click', paperClickHandler)
            scissorsButton.addEventListener('click', scissorsClickHandler)
        }
    }


    main()


})


function validarNombre() {
    const nombreInput = document.getElementById('nombre');
    const nombre = nombreInput.value.trim();
  
    if (nombre.length >= 3 && nombre.length <= 15) {
      sessionStorage.setItem('nombre', nombre); // Guardar el nombre en sessionStorage
      window.location.href = 'pages/game.html'; // Redirigir a otra_pagina.html
    } else {
      alert('El nombre debe tener entre 3 y 15 caracteres');
    }
  }
  
  // En otra_pagina.html, leer el nombre almacenado en sessionStorage y mostrarlo en el h1
  const nombreH1 = document.getElementById('nombreH1');
  const nombreAlmacenado = sessionStorage.getItem('nombre');
  
  if (nombreAlmacenado) {
    nombreH1.textContent = `${nombreAlmacenado}`;
  }





