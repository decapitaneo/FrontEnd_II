/*
let lista = document.getElementsByTagName("p")

for (let index = 0; index < lista.length; index++) {
    lista[index].ckassList.add("fundoVerde")
    
    
}

input id="muitoDoido"

let input = document.getElementById("muitoDoido")
input.value = 
*/
 // let buttonDarkMode = document.getElementById("buttonDarkMode")

 console.log("oi")
 let body = document.body
 let barraMenu = document.getElementById("barra-menu")
 let cardList = document.querySelectorAll(".item")

 function mudarModoDesign() {
    body.classList.toggle("dark-body")
    barraMenu.classList.toggle("dark-barra-menu")
 }
// # Primeira maneira de fazer 

for (let index = 0; index < cardList.length; index++) {
    cardList[index].classList.toggle("dark-card")
    cardList[index].classList.toggle("dark-card-text")

}

/*

# Ou pode ser assim

for (const item of cardList) {
    item.classList.toggle("dark-card")
    item.classList.toggle("dark-card-text")
}

 
# terceira maneira de fazer

for (let index = 0; index < cardList.length; index++) {
    const item = cardList[index];
    item.classList.toggle("dark-card")
    item.classList.toggle("dark-card-text")
}


variavel = variavem + 1
variavel += 1 
variavel ++

*/


/*
console.log("oi")

const darkBodyA = document.querySelector("body")
const darkH1A = document.querySelector("h1")
const darkItemA = document.querySelectorAll(".item")
const darkItemH2A = document.querySelectorAll(".item h2")
const darkItemPa = document.querySelectorAll(".item p")


const darkBody = {
    "background-color": 'rgb(39, 39, 39)'
}

const darkH1 = {
    "background-color": 'rgb(19, 19, 19)',
    "color": 'rgb(170, 170, 170)',
    "border-color": 'black',
}

const darkItem = {
    "background-color": 'rgb(19, 19, 19)',
    "border-color": 'black',
}

const darkItemH2 = {
    "color": 'rgb(230, 230, 230)',
}

const darkItemP = {
    "color": 'rgb(230, 230, 230)',
}

const inputContainer = document.querySelector("input")
console.log(inputContainer)

inputContainer.addEventListener("change", function() {
    const isChecked = inputContainer.checked
    if(isChecked) {
        changeTheme(darkBody, darkH1, darkItem, darkItemH2, darkItemP)
    } else {

    }
})


// document.getElementById("p2").style.color = "blue";
document.getElementsByClassName("item")

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 function changeTheme (theme){
    console.log(theme)
    darkBodyA.style.setProperty('darkBody')
 }
*/