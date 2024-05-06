document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Expressões Regulares para validação
    var regexNome = /^[^\d]+$/; // Nome não pode conter números
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email
     var regexTelefone = /^[1-9]{2}[2-9][0-9]{3,4}[0-9]{4}$/; // Telefone com DDD (padrão brasileiro)

    // Pegando os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    // Validando o nome
    if (!regexNome.test(nome)) {
        alert('Por favor, insira um nome válido (sem números).');
        return;
    }

    // Validando o email
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Validando o telefone
    if (!regexTelefone.test(telefone)) {
        alert('Por favor, insira um telefone válido (com DDD no padrão brasileiro).');
        return;
    }

    // Se todos os campos estiverem válidos, pode enviar o formulário
    alert('Formulário enviado com sucesso!');
});