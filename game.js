
/* ----------------------------------------------------------------------
VARIÁVEIS E FUNÇÕES
-------------------------------------------------------------------------
*/

//lista com os invasores
let invasores = document.getElementsByClassName('invasor')
//lista com os "bonzinhos"
let bonzinhos = document.getElementsByClassName('bonzinho')

let score = 0
let temporestante = 30

let larguraQuadro = document.getElementById('quadro').offsetWidth


//função para posicionar um elemento
//recebe parametro el que informa o elemento 
const posicElement = (el) => {
    let posX = Math.floor(Math.random()*1000)
    let posY = Math.floor(Math.random()*400)
    el.style.position = 'absolute'
    el.style.left = -posX+'px'
    el.style.top = posY+'px'
}

//desloca os elementos na tela
//recebe parametros elemento, velocidade e incremento
const moveElemento =  (el, veloc, inc)=> {
    
    //executa a cada x milissegundos
    const anima = setInterval(() => {
        veloc = veloc + inc
        el.style.left = veloc + 'px'
        //verifica se elemento saiu do quadro e possui a 
        //classe emtela
        //remove a classe e volta para uma posição inicial 
        if(veloc > larguraQuadro && el.classList.contain('emtela')){
            el.classList.remove('emtela')
            posicElement(el)
        }
        }, 40); 
}









/* 
-------------------------------------------------------------------------
       EVENTOS E EXECUÇÕES AUTOMATICAS 
-------------------------------------------------------------------------
*/

for(inv of invasores){
    posicElement(inv)
    moveElemento(inv, Math.random()*10, Math.random()*19+1)
}

