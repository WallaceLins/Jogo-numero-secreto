const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1)

    //Math.random()=>Serve para gerar um númeor aleatório de 0 a 1 (Excluindo o nº1)
    //parseInt => Fois para transformar o resultado em número inteiro
}

console.log('Número secreto é:', numeroSecreto)
    //precisa colocar a 'vírgula' depois da frase paara que não dê erro

const elementoMenorValor = document.getElementById('menor-valor')
    elementoMenorValor.innerHTML = menorValor //Manipulando DOM e acrecentando/alterando valor dinâmicamente com JS

const elementoMaiorValor = document.getElementById('maior-valor')
    elementoMaiorValor.innerHTML = maiorValor //Manipulando DOM e acrecentando/alterando valor dinâmicamente com JS


