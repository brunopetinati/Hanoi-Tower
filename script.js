var inicio = "";


var torre1 = document.getElementById("torre1");
var torre2 = document.getElementById("torre2");
var torre3 = document.getElementById("torre3");
for (let i = 3; i >= 0; i--) {
    var disco = document.createElement("div");
    disco.setAttribute("id", "disco" + i);
    disco.setAttribute("class", "disco" + i);
    disco.setAttribute("name",i);
    torre1.appendChild(disco);
}

movimentaDisco = function (event) {
    let movePara;
    let torreInicial;
    let torreDestino;
    let discoTemp;
    let discoMov;
    let valorAndado;
    let valTemp;

    if (inicio == "") {
        inicio = event.currentTarget.id;
    } else {
        movePara = event.currentTarget.id;
        torreInicial = document.getElementById(inicio);
        torreDestino = document.getElementById(movePara);
        if (torreInicial.childElementCount > 0) {
            discoMov = torreInicial.lastElementChild;
            valorAndado=parseInt(discoMov.getAttribute("name"));
            if (torreDestino.childElementCount > 0) {
                discoTemp= torreDestino.lastElementChild;
                valTemp=parseInt(discoTemp.getAttribute("name"));
                if (valTemp>valorAndado)
                   document.getElementById(movePara).appendChild(discoMov);
            }
            else {
               
               document.getElementById(movePara).appendChild(discoMov);
            } 
       }
       inicio = "";
    }
    console.log("inicio:", inicio);
}
torre1.addEventListener('click', movimentaDisco);
torre2.addEventListener('click', movimentaDisco);
torre3.addEventListener('click', movimentaDisco);