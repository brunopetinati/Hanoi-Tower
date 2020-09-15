//click para selecionar origem
//click para selecionar destino
//variável para registar o modo que o jogador está. Seria armazenar a posição?

//adicionar handler em cada uma das três torres. OK
//usar event.currentTarget dentro do handler de evento para determinar qual torre foi clicada.

//Usar .childElementCount para saber quantos discos estão em uma torre.
//Usar a propriedade .lastElementChild para saber qual é o disco no topo da torre.

//Usar  .appendChild() para adicionar um disco a uma torre 
//Obs: quando você usa appendChild em um elemento que já tem um pai, ele é automaticamente removido do pai anterior e adicionado no novo.

//Usar a propriedade Element.clientWidth para pegar o tamanho dos discos.

// --- --- --- Passos
// 1. Preciso saber o que é um handler de evento. OK
// 2. como remover uma barra e adicionar à outra div. OK
// 3. como mover o disco para a div que eu quero. OK
// 4. criei várias div no html. Será necessário colocar todas na memória com let? Ou será melhor usar createElement?
// 5. como clico primeiro para reservar a div, e depois clico no próximo para appendChild nela?

/* Discos */

/* let disco1 = document.getElementById("disco1")
let disco2 = document.getElementById("disco2")
let disco3 = document.getElementById("disco3")
let disco4 = document.getElementById("disco4") */

/* Torres */

let torre1 = document.getElementById("inicio")
let torre2 = document.getElementById("meio")
let torre3 = document.getElementById("final")



torre1.addEventListener('click',function(e) {
    let x = e.currentTarget.lastElementChild;

    torre2.onclick = function() {
        torre2.appendChild(x)
    }
    
})


torre3.onclick = function() {

}






//currentTarget 