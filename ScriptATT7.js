// Div dos Numeros 
var num1 = document.getElementById("n1")
var num2 = document.getElementById("n2")
var num3 = document.getElementById("n3")
var num4 = document.getElementById("n4")
var num5 = document.getElementById("n5")
var num6 = document.getElementById("n6")
var num7 = document.getElementById("n7")
var num8 = document.getElementById("n8")
var num9 = document.getElementById("n9")
var num0 = document.getElementById("n0")

// Div dos simbolos
var soma = document.getElementById("soma")
var subtração = document.getElementById("subtração")
var divisão = document.getElementById("divisão")
var multiplicação = document.getElementById("multiplicação")
var igual = document.getElementById("igual")
var apagar = document.getElementById("apagar")

// Div de leituras 
var leitura = document.getElementById("Leitura")
var Resultado = document.getElementById("Resultado")

/////////////////////////////////////////////////////////////////////////////


// Configuração de Interação

// Click
num1.addEventListener('click', function(){
    leitura.innerText += '1'
})
num2.addEventListener('click', function(){
    leitura.innerText += '2'
})
num3.addEventListener('click', function(){
    leitura.innerText += '3'
})
num4.addEventListener('click', function(){
    leitura.innerText += '4'
})
num5.addEventListener('click', function(){
    leitura.innerText += '5'
})
num6.addEventListener('click', function(){
    leitura.innerText += '6'
})
num7.addEventListener('click', function(){
    leitura.innerText += '7'
})
num8.addEventListener('click', function(){
    leitura.innerText += '8'
})
num9.addEventListener('click', function(){
    leitura.innerText += '9'
})
num0.addEventListener('click', function(){
    leitura.innerText += '0'
})
soma.addEventListener('click', function(){
    leitura.innerText += '+'
})
subtração.addEventListener('click', function(){
    leitura.innerText += '-'
})
multiplicação.addEventListener('click', function(){
    leitura.innerText += '*'
})
divisão.addEventListener('click', function(){
    leitura.innerText += '/'
})
apagar.addEventListener('click', function(){
    leitura.innerText = ''
})
igual.addEventListener('click', function(){
    executarcalculo()
})

// MouseEnter e MouseOut
num1.addEventListener('mouseenter', function(){
    num1.style.opacity = 0.7
})
num2.addEventListener('mouseenter', function(){
    num2.style.opacity = 0.7
})
num3.addEventListener('mouseenter', function(){
    num3.style.opacity = 0.7
})
num4.addEventListener('mouseenter', function(){
    num4.style.opacity = 0.7
})
num5.addEventListener('mouseenter', function(){
    num5.style.opacity = 0.7
})
num6.addEventListener('mouseenter', function(){
    num6.style.opacity = 0.7
})
num7.addEventListener('mouseenter', function(){
    num7.style.opacity = 0.7
})
num8.addEventListener('mouseenter', function(){
    num8.style.opacity = 0.7
})
num9.addEventListener('mouseenter', function(){
    num9.style.opacity = 0.7
})
num0.addEventListener('mouseenter', function(){
    num0.style.opacity = 0.7
})
soma.addEventListener('mouseenter', function(){
    soma.style.opacity = 0.7
})
subtração.addEventListener('mouseenter', function(){
    subtração.style.opacity = 0.7
})
multiplicação.addEventListener('mouseenter', function(){
    multiplicação.style.opacity = 0.7
})
divisão.addEventListener('mouseenter', function(){
    divisão.style.opacity = 0.7
})
apagar.addEventListener('mouseenter', function(){
    apagar.style.opacity = 0.7
})
igual.addEventListener('mouseenter', function(){
    igual.style.opacity = 0.7
})


num1.addEventListener('mouseout', function(){
    num1.style.opacity = 6
})
num2.addEventListener('mouseout', function(){
    num2.style.opacity = 1
})
num3.addEventListener('mouseout', function(){
    num3.style.opacity = 1
})
num4.addEventListener('mouseout', function(){
    num4.style.opacity = 1
})
num5.addEventListener('mouseout', function(){
    num5.style.opacity = 1
})
num6.addEventListener('mouseout', function(){
    num6.style.opacity = 1
})
num7.addEventListener('mouseout', function(){
    num7.style.opacity = 1
})
num8.addEventListener('mouseout', function(){
    num8.style.opacity = 1
})
num9.addEventListener('mouseout', function(){
    num9.style.opacity = 1
})
num0.addEventListener('mouseout', function(){
    num0.style.opacity = 1
})
soma.addEventListener('mouseout', function(){
    soma.style.opacity = 1
})
subtração.addEventListener('mouseout', function(){
    subtração.style.opacity = 1
})
multiplicação.addEventListener('mouseout', function(){
    multiplicação.style.opacity = 1
})
divisão.addEventListener('mouseout', function(){
    divisão.style.opacity = 1
})
apagar.addEventListener('mouseout', function(){
    apagar.style.opacity = 1
})
igual.addEventListener('mouseout', function(){
    igual.style.opacity = 1
})

function executarcalculo() {
    var expressão = leitura.innerText
    var soma = eval(expressão)
    Resultado.innerText = soma

}
