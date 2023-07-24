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
    res.innerHTML =  ''
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalzar!')
    } else {    
        tam = valores.length
        res.innerHTML = `Ao todo, temos ${tam} cadastrados<br><br>`
        valores.sort()
        res.innerHTML += `O maior valor informado foi ${valores[tam - 1]}<br><br>`
        res.innerHTML += `O menor valor informado foi ${valores[0]}<br><br>`
        let soma = 0
        for (let pos in valores) {
            soma += valores[pos]
        }
        res.innerHTML += `Somando todos os valores, temos  ${soma}<br><br>`
        res.innerHTML += `A média dos valores digitados é  ${soma/tam}<br><br>`
    }
}