

//Função que filtra os hotéis de acordo com a categoria
function filtrarHoteis(categoria) {
    const hoteis = document.querySelectorAll('.hotel'); //Retorna um NodeList de elementos pertencentes a classe hotel
    hoteis.forEach(hotel => { //Percorrer o NodeList de hoteis
    if (categoria === 'todos' || hotel.getAttribute('data-categoria') === categoria) {
        hotel.style.display = 'block'; //Mostra os hotéis
    } else {
        hotel.style.display = 'none'; //Oculta os hóteis
    }
    });
}

document.getElementById('img-casa').addEventListener('click', () => {
    filtrarHoteis('todos');
});

// Evento para atualizar o mapa ao clicar no hotel
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.hotel').forEach(hotel => { //Retorna uma NodeList com os hotéis pertencentes à classe hotel
    hotel.addEventListener('click', () => {
        const url = hotel.getAttribute('data-localizacao');
        if (url) {
            document.getElementById('locationIframe').src = url; //Substitui a url do iframe pela nova url
        } else {
            console.log("Você não adicionou a url desse hotel");
        }
    });
    });
});

