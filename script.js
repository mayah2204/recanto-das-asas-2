function gerarMensagem() {
    let nome = document.getElementById("nomeUsuario").value;

    if(nome === "") {
        document.getElementById("resultado").innerText = 
        "Por favor, digite seu nome!";
    } else {
        // Lista de pássaros inspiradores
        const passaro = ["Canário", "Papagaio", "Arara", "Periquito", "Tucano"];
        const indice = Math.floor(Math.random() * passaro.length);

        let mensagem = nome + ", no Recanto das Asas você tem a liberdade de voar como um " + passaro[indice] + "!";

        document.getElementById("resultado").innerText = mensagem;
    }
}