// Div dos Numeros 
const numbers = document.getElementsByClassName("button number")
const numbersArray = Array.from(numbers)
// Div dos operadores
var operators = document.getElementsByClassName("button operator")
var operatorsArray = Array.from(operators)
// Button Ação
var actions = document.getElementsByClassName("button action")
var actionsArray = Array.from(actions)

// Div de leituras 
var leitura = document.getElementById("Leitura")
var Resultado = document.getElementById("Resultado")

/////////////////////////////////////////////////////////////////////////////


// Configuração de Interação

// Click
  numbersArray.forEach(function(num){
    num.addEventListener('click', function() {
        let valornum = num.getAttribute('data-value')
        leitura.innerText += valornum
        })
    })
    operatorsArray.forEach(function(ope){
    ope.addEventListener('click', function(){
        let valorope = ope.getAttribute('data-value')
        leitura.innerText += valorope
        })
    }) 
    actionsArray.forEach(function(act){
        act.addEventListener('click', function() {
        let valoract = act.getAttribute('data-value')
            if (valoract == "=") {
                executarcalculo()
            } else if (valoract == "Del") {
                leitura.innerText = ''
            }
            
        })
    })



function executarcalculo() {
    var expressão = leitura.innerText
    var soma = eval(expressão)
    Resultado.innerText = soma
    leitura.innerText = ''
}
