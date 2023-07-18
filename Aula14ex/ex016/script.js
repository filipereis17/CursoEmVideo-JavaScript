function verificar() {
    var inicio = Number(document.getElementById('txtinicio').value);
    var fim = Number(document.getElementById('txtfim').value);
    var passo = Number(document.getElementById('txtpasso').value);

    var res = document.querySelector('div#res')
    var msg = document.querySelector('div#msg')
    var resultado = String('')
    
    if (fim == 0) {
        msg.innerHTML = 'Impossível contar'
        res.innerHTML = ''
    } else {
        if (passo == 0){
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        msg.innerHTML = 'Contando...'
        for(var c = inicio; c <= fim; c += passo) {
            resultado += c + ', ';
        }
        res.innerHTML = resultado.slice(0, -2);
    }
    
}