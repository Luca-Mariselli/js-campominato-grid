// creo ciclo per iniettare quadrati in pagina
let griglia = document.getElementById(`griglia`)

for (let i=1; i <= 100; i++) {
    let quadrato = document.createElement(`div`);
    quadrato.classList.add(`quadrato`)
    griglia.append(quadrato)
    quadrato.innerText = i
}