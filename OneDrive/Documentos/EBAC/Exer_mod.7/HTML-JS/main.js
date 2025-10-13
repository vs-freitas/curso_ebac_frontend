const form = document.getElementById('form-validacao');
const numeroA = document.getElementById('numeroA');
const numeroB = document.getElementById('numeroB');
const containerMensagemErro = document.querySelector('.error-message');
const containerMensagemSucesso = document.querySelector('.success-message');

let formEValido = false;

function validaComparacao (valorA, valorB) {
    const numA = parseFloat(valorA);
    const numB = parseFloat(valorB);
    return numB > numA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    formEValido = validaComparacao(numeroA.value, numeroB.value);

    if (formEValido) {
        const mensagemSucesso = `Parabéns! O valor de B (${numeroB.value}) é maior que o valor de A (${numeroA.value}).`;
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';
        numeroA.classList.remove('error'); 
        numeroB.classList.remove('error'); 
        numeroA.value = '';
        numeroB.value = '';
        
    } else {
        numeroB.classList.add('error');
        numeroA.classList.remove('error');
        containerMensagemSucesso.style.display = 'none';
        containerMensagemErro.innerHTML = `ERRO! O valor de B (${numeroB.value}) DEVE ser maior que o valor de A (${numeroA.value}).`;
        containerMensagemErro.style.display = 'block';
    }
});