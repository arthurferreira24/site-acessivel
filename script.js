document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');
    const temaCorridaBotao = document.getElementById('tema-corrida'); // Botão para mudar o tema

    let tamanhoAtualFonte = parseFloat(localStorage.getItem('tamanhoFonte')) || 1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    botaoDeAcessibilidade.addEventListener('click', function() {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    aumentaFonteBotao.addEventListener('click', function() {
        if (tamanhoAtualFonte < 2.5) {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
            localStorage.setItem('tamanhoFonte', tamanhoAtualFonte);
            alert('Tamanho da fonte aumentado');
        }
    });

    diminuiFonteBotao.addEventListener('click', function() {
        if (tamanhoAtualFonte > 0.8) {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
            localStorage.setItem('tamanhoFonte', tamanhoAtualFonte);
            alert('Tamanho da fonte diminuído');
        }
    });

    alternaContraste.addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
        const modoAtivo = document.body.classList.contains('alto-contraste');
        alert(modoAtivo ? 'Modo de alto contraste ativado' : 'Modo de alto contraste desativado');
    });

    // Função para alternar o tema de corrida
    temaCorridaBotao.addEventListener('click', function() {
        document.body.classList.toggle('tema-corrida');
        const temaAtivo = document.body.classList.contains('tema-corrida');
        alert(temaAtivo ? 'Tema de corrida ativado' : 'Tema de corrida desativado');
    });

    // Restaura o tamanho da fonte ao carregar a página
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    // ScrollReveal para animações
    ScrollReveal().reveal('#inicio', { delay: 500 });
    ScrollReveal().reveal('#tropicalia', { delay: 500 });
    ScrollReveal().reveal('#galeria', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });
});