function vogaisquant(){
    let frase = document.getElementById("text").value;
    let contagem = 0
    for (let i = 0; i < frase.length; i++){
        if (frase.charAt(i) == "a" || frase.charAt(i) == "e" || frase.charAt(i) == "i" || frase.charAt(i) == "o" || frase.charAt(i) == "u"){
            contagem += 1
        }
    }
    let resultado = document.getElementById("resultado");
    resultado.value = `O número de vogais em sua frase é de: ${contagem} vogais`
}