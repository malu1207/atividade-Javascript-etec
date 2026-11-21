
let imagemAtual = 0;


let imagens = [
    "imagens/RJ.jpg",
    "imagens/Lençois.jfif",
    "imagens/CANCUN.jfif"
];


function avancar() {
    imagemAtual++;

    if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }

    document.getElementById("foto").src = imagens[imagemAtual];
}

function voltar() {
    imagemAtual--;

    if (imagemAtual < 0) {
        imagemAtual = imagens.length - 1;
    }

    document.getElementById("foto").src = imagens[imagemAtual];
}


let nome = "Maria Luiza";
let curso = "Desenvolvimento de Sistemas";

console.log("Nome: " + nome);
console.log("Curso: " + curso);


function mostrarDados() {
    document.getElementById("resultado").innerHTML =
        "Nome: " + nome + "<br>Curso: " + curso;
}
