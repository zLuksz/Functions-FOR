function tabuada() {
    let num = parseInt(document.getElementById('tabuada').value)
    let tabuada = ''

    if (num || num == 0) {
        for(cont = 1; cont <= 10; cont++) {
            tabuada += (num + '*' + cont + '=' + cont * num + '<br/>')
        }

        document.getElementById('result-tabuada').innerHTML = (tabuada)
    } else {
        document.getElementById('result-tabuada').innerHTML = 'Digite Algum Número'
    }
}

function numerosPar() {
    let num = parseInt(document.getElementById('numerosPar').value)
    let cont = 1
    let pares = ' '

    if (num || num == 0) {
        while (cont <= num) {
        if (cont % 2 == 0) {
            pares += cont + ' - '
            document.getElementById('result-numerosPar').innerHTML = (pares)
        }
        cont ++
    }
    } else {
        document.getElementById('result-numerosPar').innerHTML = 'Digite Algum Número'
    }
}

let numeros = [];
function adicionarNumero() {

    let numero = parseInt(document.getElementById("numero").value)
    let soma = 0

    if (numero || numero == 0) {
        if (numero !== -1) {
            numeros.push(numero)
            document.getElementById("numero").value = ""
            document.getElementById("numeros").textContent = "Números: " + numeros.join(", ")
            document.getElementById('resultado').innerHTML = 'Digite -1 Para Somar Todos Os Números'
            container.style.display = 'none'
        }
    
        else if (numero == -1) {
            for (var i = 0; i < numeros.length; i++) {
                soma += numeros[i]
            }
            document.getElementById("resultado").textContent = "A soma dos números é: " + soma
        }
    } else {
        document.getElementById('numeros').innerHTML = 'Digite Algum Número'
    }
}