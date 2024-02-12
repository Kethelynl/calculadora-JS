const box = document.querySelectorAll('.box button');
const valor = document.querySelector('.valor');
const apagartudo = document.querySelector('.apagarevery');
var bau;

function inserir(button){
    var nota = valor.innerHTML;
    const resul = valor.innerHTML = nota + button;
}

function limpar(){
    valor.innerHTML = '';
}

function back(){
    var resultado = valor.innerHTML;
    valor.innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){
    var resultado = valor.innerHTML;
    if(resultado){
        valor.innerHTML = eval(resultado);
    }
}

