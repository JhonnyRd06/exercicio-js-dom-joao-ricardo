function mudarForma() {
    let forma = document.getElementById("forma")
    let botao = document.getElementById("btn-forma")

    let cor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    forma.style.backgroundColor = cor
    
    if (forma.style.borderRadius === "50%") {
        forma.style.borderRadius = "0%"
        botao.innerText = "Retornar forma original"
    } else {
        forma.style.borderRadius = "50%"
        botao.innerText = "Mudar forma"
    }
}
s
