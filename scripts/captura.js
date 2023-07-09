var spanFacebook = document.getElementById("valorFacebook");    
var spanInstagram = document.getElementById("valorInstagram");
var spanWhatsapp = document.getElementById("valorWhatsapp");
var spanMotivo = document.getElementById("valorMotivo");
var spanPreferencia = document.getElementById("valorPreferencia");
var spanArray = [spanInstagram, spanWhatsapp, spanFacebook, spanMotivo, spanPreferencia]

//http://127.0.0.1:5500/paginas/captura.html?
// instagram=%40ito7&
// zapzap=11947323069&
// facebook=gabrielito&
// motivo=Cobran%C3%A7a&
// preferencia=facebook

$(window).on("load", function(){
    var urlAtual = decodeURIComponent (window.location.href) 
    var valorSeparacaoUrl = urlAtual.split("?")
    var informacoes = valorSeparacaoUrl[1].split("&")
    console.log(urlAtual)

    for (let index = 0; index < informacoes.length; index++) {
        const element = informacoes[index].split("=");

        const reg = /\+/g
        const valor = element[1].replace(reg," ")
        var span = spanArray[index].innerText = valor
        
    }       

 })
                                                        