let num = document.querySelector('input#fnum')
let tab = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        let n = Number(num.value)
        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        tab.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}

function finalizar() {
    valores

}