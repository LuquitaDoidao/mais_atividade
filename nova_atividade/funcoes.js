function conferir(a){
    if(a <= 0){
        alert("Você ainda nem é nascido")
    } else if((a > 0) && (a < 13)){
        alert("Você é criança")
    } else if((a >= 13) && (a < 18)){
        alert("Você é um adolescente")
    }else if((a >= 18) && (a < 60)){
        alert("Você é um adulto")
    }else if((a >= 60)){
        alert("Você é idoso")
    }
}

function converter(a){
    fa = ((a * 1.8) + 32)
    alert("a temperatura "+(a)+" C° em Fahrenheit é igual a "+(fa)+" F°")
}

function parimpar(a){
    if (a%2 == 0){
        alert(a+" é par")
    } else{
        alert(a+" é impar")
    }
}

function verificar_poneze(a){
    if (a === 0){
        alert(a+" é zero")
    } else if(a < 0){
        alert(a+" é um numero negativo")
    }else{
        alert(a+" é um numero positivo")
    }
}

function ola_nome(a){
    if (a == ""){
        alert(" Olá [nome]")
    }else{
        alert("Olá "+(a))
    }
}

function media(a, b, c){
    soma = a + b + c
    div = soma/3
    alert("a media de "+(a)+", "+(b)+" e "+(c)+" é igual a "+(div))
}

function bisex(a){
    if ((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)) {
        alert("o ano é bissesto")
    } else {
        alert("o ano não é bissesto")
    }
}

function vogal(a){
    a = a.toLowerCase()
    if ((a == "a") || (a == "e") || (a == "i") || (a == "o") || (a == "u")) {
        alert((a)+" é uma vogal")
    } else {
        alert((a)+" é uma consoante")
    }
}

function maior(a, b){
    if (a > b) {
        alert((a)+" é maior que "+(b))
    } else if (a == b){
        alert((b)+" é igual a "+(a))
    } else {
        alert((b)+" é maior que "+(a))
    } 
}

function java(a) {
    a = a.toLowerCase()
    if (a.includes("javascript")) {
        alert("A palavra 'JavaScript' está presente no texto")
    } else {
        alert("A palavra 'JavaScript' não está presente no texto")
    }
}

function nota(a) {
    if (a >= 9 && a <= 10) {
        alert("Classificação: A")
    } else if (a >= 7 && a < 9) {
        alert("Classificação: B")
    } else if (a >= 5 && a < 7) {
        alert("Classificação: C")
    } else if (a >= 3 && a < 5) {
        alert("Classificação: D")
    } else if (a >= 0 && a < 3) {
        alert("Classificação: E")
    } else {
        alert("essa nota não está entre 0 e 10")
    }
}

function multiplo(a) {
    if (a % 3 === 0 && a % 5 === 0) {
        alert((a)+" é múltiplo de 3 e de 5")
    } else if (a % 3 === 0) {
        alert((a)+" é múltiplo de 3")
    } else if (a % 5 === 0) {
        alert((a)+" é múltiplo de 5")
    } else {
        alert((a)+" não é múltiplo de 3 e nem de 5")
    }
}

function menor(a, b, c) {
    menos = Math.min(a, b, c)
    alert("o menor numero entre "+(a)+", "+(b)+" e "+(c)+" é o "+(menos))

}

function senha(a) {
    if (a.length >= 8) {
        alert("A senha é forte")
    } else {
        alert("A senha precisa ter pelo menos 8 caracteres")
    }
}

function intervalo(a) {
    if (a >= 10 && a <= 20) {
        alert((a)+" está dentro do intervalo de 10 a 20.")
    } else {
        alert((a)+" não está dentro do intervalo de 10 a 20.")
    }
}
