

function filtrarHoteis(categoria) {
    const hoteis = document.querySelectorAll('.hotel');
    hoteis.forEach(hotel => {
    if (categoria === 'todos' || hotel.getAttribute('data-categoria') === categoria) {
        hotel.style.display = 'block';
    } else {
        hotel.style.display = 'none';
    }
    });
}

document.getElementById('img-casa').addEventListener('click', () => {
    filtrarHoteis('todos');
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.hotel').forEach(hotel => {
    hotel.addEventListener('click', () => {
        const url = hotel.getAttribute('data-localizacao');
        console.log("URL da localização:", url); // Adicionando log para depuração
        if (url) {
            document.getElementById('locationIframe').src = url;
        } else {
            console.log("URL não encontrada para este hotel");
        }
    });
    });
});

