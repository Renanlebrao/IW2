const TextoAzul = document.getElementById('spanTextoAzul');
TextoAzul.style.color = 'blue';


const texto = document.getElementById("spanTextoAzul");
const botaoAlterarTexto = document.getElementById("btnAlterarTexto");

botaoAlterarTexto.addEventListener("click", () => {
    texto.textContent = "Prova";
} );





const input = document.getElementById('numeroInput');
const resultado = document.getElementById('resultado');

input.addEventListener('input', function() {
    const valor = Number(input.value);

    if (input.value === '') {
        resultado.textContent = '';
    }
    if (valor > 0) {
        resultado.textContent = 'O número é maior que zero .';
    } else if (valor < 0) {
        resultado.textContent = 'O número é menor que zero.';
    } else {
        resultado.textContent = 'O número é igual a zero.';
    }
});