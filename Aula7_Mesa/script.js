
let divGaleria = document.getElementById('galeria')

let meusInputs = document.querySelectorAll('input')

let inputs = document.querySelectorAll("input[disabled]")
// TODO: apos enviar a imagem, limpar o input
// TODO: quando estiver disabled altere o CSS

function clickEnviar() {
    divGaleria.innerHTML = '' // p limpar as imagens dentro da div
    for (let index = 0; index < meusInputs.length; index++) {
        const campo = meusInputs[index];
        let img = document.createElement("img")
        img.src = campo.value
        divGaleria.appendChild(img)
        meusInputs[index].value = ''
    }
}

function perdeuFocoInput1(idInput) {

    // for (let index = 0; index < meusInputs.length; index++) {
    //     const campo = meusInputs[index];
    //     campo.disabled = true   
    // }
    const campo = document.getElementById(idInput)
    campo.disabled = true
}

function ganhouFocoInput1(idInput) {
    // for (let index = 0; index < meusInputs.length; index++) {
    //     const campo = meusInputs[index];
    //     campo.disabled = false   
    // }
    const campo = document.getElementById(idInput)
    campo.disabled = false
}

