document.addEventListener("DOMContentLoaded", () => {
    
    // Sistema de Busca em Tempo Real
    const searchInput = document.getElementById("search-input");
    
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const termoBusca = e.target.value.toLowerCase();
            const cards = document.querySelectorAll(".card-link"); // Seleciona o link do card inteiro
            
            cards.forEach(card => {
                const tituloReceita = card.querySelector("h3").textContent.toLowerCase();
                if (tituloReceita.includes(termoBusca)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // Checklist de Ingredientes Interativo
    const ingredientes = document.querySelectorAll(".container ul li");
    
    ingredientes.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
        });
    });
});