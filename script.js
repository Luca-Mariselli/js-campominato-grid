


// creo ciclo per iniettare quadrati in pagina
let griglia = document.getElementById(`griglia`)
let quadrato;

for (let i=1; i <= 100; i++) {
    quadrato = document.createElement(`div`);
    quadrato.classList.add(`quadrato`)
    quadrato.innerText = i

    // aggiungo eventlistener 
    quadrato.addEventListener(`click`, function () {
        console.log(`hai cliccato sul quadrato ${i}`)
        this.classList.toggle(`background`)
    })

    griglia.append(quadrato)
    
}

