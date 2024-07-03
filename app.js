async function sortear() {
    const totalDeResultados = Number(document.querySelector('#totalDeResultadosInput').value)


    const menorValor = Number(document.querySelector('#menorValorInput').value)


    const maiorValor = Number(document.querySelector('#maiorValorInput').value)

    for(let j = 0; j < 20; j++) {
        
            const elementoHTMLResultValues = document.querySelector('.results-values')
            elementoHTMLResultValues.innerHTML = ''

        for (let i = 0; i < totalDeResultados; i++) {
            const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1))


            const HTMLDoResultado = document.createElement('div')
            HTMLDoResultado.classList.add('result-value')
            HTMLDoResultado.innerText = resultado



            elementoHTMLResultValues.append(HTMLDoResultado)
        }
        await wait(20)
    }
}

function wait(tempo) {
    return new Promise((resolve)=>{
        setTimeout(() => resolve(), tempo)
    })
}