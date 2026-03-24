$(document).ready(function () {

    // --- 1. LÓGICA DE REMOÇÃO (PARA LISTAS) ---
    // Escuta cliques em links dentro de qualquer <ul> com id "lista"
    $("#lista").on("click", "a", function(e){
        e.preventDefault();

        // Remove o item da lista
        $(this).parent().remove();

        // Atualiza o contador de itens (caso exista o span #quant)
        let quant = $("#lista li").length;
        $("#quant").text(quant);
    });

    // --- 2. LÓGICA DE FILTRO DE TAREFAS (PARA O SELECT) ---
    $("#categ").change(function () {
        const categoria = $(this).val();

        if (categoria === "todos") {
            // Mostra todos os cards dentro da div de tarefas
            $("#tarefas-gincana > div").fadeIn(300);
        } else {
            // Esconde todos os cards primeiro
            $("#tarefas-gincana > div").hide();
            
            // Mostra apenas os cards que têm a classe da categoria selecionada
            // Ex: se categoria for "esportiva", ele mostra a div com class="esportiva"
            $("." + categoria).fadeIn(300);
        }
    });
});