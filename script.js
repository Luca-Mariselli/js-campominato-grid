// creo funzione per quadrati
function creaQuad(numero){
    quadrato = document.createElement(`div`);
    quadrato.classList.add(`quadrato`)
    griglia.append(quadrato)
}

// creo funzione per eventlistener
function cliccati(elemento, numero){
    elemento.addEventListener(`click`, function () {
        console.log(`hai cliccato sul quadrato ${numero}`)
        this.classList.toggle(`background`)
    })
}

// creo ciclo per iniettare quadrati in pagina
let griglia = document.getElementById(`griglia`)
let quadrato;

// creo pulsante avvia gioco
let avvio = document.getElementById(`avvio`)

avvio.addEventListener(`click`, function(){
    for (let i=1; i <= 100; i++) {
        let creazione = creaQuad(i)
        let aggClasse = cliccati(quadrato, i)
    }

})
