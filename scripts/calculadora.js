var visor = document.getElementById("visor");
var caracteres = ["+",",","/","*","-"]
var estaDesligada = true


function botaoOperador(operador) {
    
    if (estaDesligada == false) {
        
            let ultimoElemento = visor.innerHTML.slice(-1)
    
        if (!(visor.innerHTML == 0) && !caracteres.includes(ultimoElemento)) {
            

            visor.innerHTML = visor.innerHTML + operador
            
        }
    
    }
    
    
}

function botaoSelecionado(x) {

    if (estaDesligada == false) {

        if ((visor.innerHTML == 0 || visor.innerHTML == "ERRO") && caracteres.includes(x)) {
            
            visor.innerHTML = "ERRO"
            
        }
        else if (visor.innerHTML == 0) {
            
            visor.innerHTML = x


        } else {

        visor.innerHTML = visor.innerHTML + x

        }
    
    }
}

function apagar() {
    
    if (estaDesligada == false) {
        visor.innerHTML = "0"
    
    }
}

function apagar1() {

    if (estaDesligada == false) {

        let visor2 = document.getElementById("visor").innerHTML;
        visor.innerHTML = visor2.substring (0, visor2.length -1);

        if (visor.innerHTML == "" ) {
            
            visor.innerHTML = 0
        }
    }
}

function calcular() {
    
    if (estaDesligada == false) {
        let regex = /\,/gm
        let correcao = visor.innerHTML.replace(regex,".",)
        visor.innerHTML = eval(correcao).toString().replace(".",",")

       
    }
}

function porcentagem() {

    if (estaDesligada == false) {
        let correcao = visor.innerHTML.replace(",",".")
        visor.innerHTML = correcao * 1 / 100
    }
    
}

function ligaDesliga() {
    

    if (visor.innerHTML == "") {
        
        estaDesligada = false
        document.documentElement.style.setProperty('--cor-da-calculadora', '#23e809');
        visor.innerHTML = 0
    }
    else {
        
        estaDesligada = true
        document.documentElement.style.setProperty('--cor-da-calculadora', 'rgba(35, 232, 9, 0.5)');
        visor.innerHTML = ""
    }
}

