const bottonNumeros = document.getElementsByName("data-number" );
const bottonOperacion= document.getElementsByName("data-operacion");
const bottonIgual= document.getElementsByName("data-igual")[0];
const bottonBorrar= document.getElementsByName("data-borrar")[0];
var resultado= document.getElementById("result");
var opeActual="";
var opeAnterior="";
var operacion=undefined;


bottonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
})

bottonOperacion.forEach(function(boton){
  boton.addEventListener('click', function(){
      seleccionarOperacion(boton.innerText);
  })
})

bottonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

bottonBorrar.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function seleccionarOperacion(op){
    if(opeActual ==="") return;
    if(opeAnterior !==""){
     calcular(); 
    }

    operacion=op.toString();
    opeAnterior=opeActual;
    opeActual="";
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;

    switch(operacion){
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "x":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        default:
            return;    
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior ="";
}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
};

function clear(){
    opeActual="";
    opeAnterior="";
    operacion= undefined;
};

function actualizarDisplay(){
    resultado.value= opeActual;
};

clear();
