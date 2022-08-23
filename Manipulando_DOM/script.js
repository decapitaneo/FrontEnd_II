// query selector retorna o primeiro elemento da lista 
// query selector seleciona um elemento unico 
const itemLista = document.querySelector('ul li:last-child')
//console.log(itemLista)

// const lista = document.querySelector('.lista-01')
// const itemLista01 = lista.querySelector('li')
// console.log(itemLista01)

const lista = document.querySelector('.lista-02')
const itemLista02 = lista.querySelector('li')

//  QUERYSELECTORALL
const allDropdowns = document.querySelectorAll('.dropdown')
// console.log(allDropdowns[1])
// simplicidade do forEach
allDropdowns.forEach(function(item){
    console.log(item)
}
)

// tenho 6 botoes que fazem a mesma coisa 
// 1 seleciono todos os botoes = allDropdowns (mesma classe)
// 2 coloco todos dentro de um forEach
// 3 executo a funcao

allDropdowns.forEach(function(item, index){
    console.log(index) // acesso o index do elemento
}
)

// selecionei todos os botoes e add um evento de click
allDropdowns.forEach(function(item, index){
    item.addEventListener('click', function(){
        console.log(item) // quando eu clicar no botao 
    })
}
)

console.log(window.innerWidth)

const titulo02 = document.querySelector('h2')
titulo02.textContent = 'agora eu quero'
// textContent permite alterar a string
console.log(titulo02)
titulo02.classList.add('nova-classe') // add uma classe
window.addEventListener('click', function(){
    console.log('teste')
})