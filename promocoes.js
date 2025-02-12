document.addEventListener('DOMContentLoaded', function() {
    const reservarBtns = document.querySelectorAll('.reservar-btn');
    
    reservarBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const card = this.closest('.promo-card');
            const preco = card.querySelector('.preco-atual').textContent;
            const precoNumerico = Number(preco.replace('R$ ', '').replace(',', '.'));
            
            // Pegar o estado do destino (ex: "Natal, RN" -> "Rio Grande do Norte")
            const destino = card.querySelector('.card-header h3').textContent;
            const estadoSigla = destino.split(',')[1].trim(); // Pega "RN", "PE", etc
            const estado = getEstadoCompleto(estadoSigla);
            
            // Salvar preço e estado
            localStorage.setItem('precoPromocional', precoNumerico);
            localStorage.setItem('estadoSelecionado', estado);
            
            // Redirecionar para a página de hospedagem
            window.location.href = 'hospedagem.html';
        });
    });
    
    // Função para converter sigla do estado para nome completo
    function getEstadoCompleto(sigla) {
        const estados = {
            'PE': 'Pernambuco',
            'CE': 'Ceará',
            'PB': 'Paraíba',
            'RN': 'Rio Grande do Norte'
        };
        return estados[sigla] || sigla;
    }
});