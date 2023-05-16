var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "elo").replace(/i/g,"ira").replace(/a/g, "alho").replace(/o/g, "lago").replace(/u/g, "urano").replace(/n/g, "pitanga").replace(/b/g, "navio").replace(/c/g, "gancho");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/elo/g, "e").replace(/ira/g,"i").replace(/alho/g, "a").replace(/lago/g, "lago").replace(/urano/g, "u").replace(/pitanga/g, "n").replace(/navio/g, "b").replace(/gancho/g, "c");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function copiar() {
    var textCop = document.getElementById ('input-texto');

    textCop.select();
    document.execCommand('copy');
    alert("Texto copiado");
}