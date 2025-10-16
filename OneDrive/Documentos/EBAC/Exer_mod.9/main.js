// O código é executado assim que o DOM estiver pronto
$(document).ready(function() {

    // 2) Adicionar elemento <li> ao submeter o formulário
    $('#formulario-tarefa').on('submit', function(e) {
        e.preventDefault(); 

        // 4) Utiliza .val() para recuperar o valor do input
        const nomeTarefa = $('#nome-tarefa').val(); 
        
        // Cria o novo elemento <li>
        const novoItem = $('<li></li>').text(nomeTarefa);
        
        // Adiciona o <li> dentro do <ul> (#lista-tarefas)
        $('#lista-tarefas').append(novoItem); 

        // Limpa o campo de input
        $('#nome-tarefa').val('');
    });


    // 3) Ao clicar nos itens da lista, aplica o efeito de riscado
    // Usa 'on' para que o evento funcione em itens adicionados dinamicamente
    $('#lista-tarefas').on('click', 'li', function() {
        
        // Adiciona ou remove a classe 'riscado'
        $(this).toggleClass('riscado'); 
    });
    
});