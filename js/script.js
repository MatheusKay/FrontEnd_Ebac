$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereço: {
                required: true
            }
        },
        messages: {
            nomeCompleto: '<p class="validador">Por favor, Insira seu Nome completo.</p>',
            telefone: '<p class="validador">Por favor, Coloque o seu numero de Celular.</p>',
            email: '<p class="validador">Por favor, Coloque o seu Email.</p>',
            cep: '<p class="validador">Por favor, Coloque o seu Cep.</p>',
            cpf: '<p class="validador">Por favor, Coloque o seu Cpf.</p>',
            endereço: '<p class="validador">Por favor, Coloque o seu Endereço.</p>'
        },
        submitHandle: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} Campos Incorretos`)
            }
        }
    })

    $('.previa, button').click(function(){
        const nomeCartao = $('#nome-completo').val()

        $('#nome').html(nomeCartao)
        
        if(nomeCartao === ""){
            alert('Por favor, preencha todos os campos antes de ver previa')
        }else{
            $('#cartao').css({display: "block"});
        }
    })
});