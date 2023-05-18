$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault()

        const listaTarefa = $('#tarefa-add').val()
        const linha = $('<li></li>')
        $(`<p>${listaTarefa}</p>`).appendTo(linha).val()
        $(linha).appendTo('ul')
        $('#tarefa-add').val('')

        $('p').click(function() {
            $(this).addClass('item-completado')
        })

    })
})