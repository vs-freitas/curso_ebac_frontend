$(document).ready(function() {
    
    // ===================================
    // 1. Inicialização do Carrossel (Slick)
    // ===================================
    $('.carousel').slick({
        autoplay: true,        // Inicia a troca de slides automaticamente
        dots: true,            // Mostra os indicadores (bolinhas)
        arrows: false,         // Esconde as setas de navegação
        infinite: true,        // Permite o loop infinito
        speed: 500,            // Velocidade da transição (em ms)
        slidesToShow: 1,       // Mostra 1 slide por vez
        adaptiveHeight: true   // Ajusta a altura do carrossel ao conteúdo
    });

    
    // ===================================
    // 2. Máscaras Operativas (jQuery Mask Plugin)
    // ===================================
    $('#telefone').mask('(00) 00000-0000'); // Máscara para telefone (pode ser ajustada)
    $('#cpf').mask('000.000.000-00', {reverse: true}); // Máscara para CPF

    
    // ===================================
    // 3. Validação (jQuery Validation Plugin)
    // ===================================
    $('#meu-formulario').validate({
        rules: {
            nome: {
                required: true // O campo nome é obrigatório
            },
            email: {
                required: true,
                email: true      // Deve ser um e-mail válido
            },
            telefone: {
                required: true,
                // Adicione a validação de tamanho da máscara (opcional, mas recomendado)
                minlength: 15    
            },
            cpf: {
                required: true,
                minlength: 14    // O tamanho do CPF com máscara
            }
        },
        // Opcional: Define mensagens de erro personalizadas
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira um e-mail válido.',
            telefone: 'Telefone é obrigatório (e completo).',
            cpf: 'CPF é obrigatório (e completo).'
        },
        // Opcional: Onde as mensagens de erro devem aparecer
        submitHandler: function(form) {
            // Este bloco é executado se a validação for bem-sucedida
            alert("Formulário enviado com sucesso!");
            form.reset();
        },
        invalidHandler: function(event, validator) {
            // Este bloco é executado se houver erros de validação
            alert("Por favor, preencha todos os campos corretamente.");
        }
    });

});