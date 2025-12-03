function validarFormulario() {
    let nome = document.getElementById("nome").value
    let cpf = document.getElementById("cpf").value
    let msg = document.getElementById("mensagem")

    if (nome === "" || cpf === "") {
        msg.style.color = "red"
        msg.innerText = "Os campos Nome e CPF sao obrigatorios."
    } else {
        const cpfValido = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
        
        if (!cpfValido.test(cpf)) {
            msg.style.color = "red"
            msg.innerText = "CPF invalido! Use o formato 000.000.000-00."
        } else {
            msg.style.color = "green"
            msg.innerText = "Cadastro validado com sucesso!"
        }
    }
}
