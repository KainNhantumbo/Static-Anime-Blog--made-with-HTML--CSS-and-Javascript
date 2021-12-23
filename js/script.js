//Procurar itens na página
(function () {
    const search = document.querySelector('.search');
    search.addEventListener('search', (e) => {
        e.preventDefault();
        const main = document.querySelector('main');
        const keyword = search.value.trim();

        function procurar (keyword) {
            const main = document.querySelector('.container').childNodes;
            var wordContainer = document.createElement('div');
            main.append(wordContainer);


            console.log(main)
        }
    });
})();

(function () {
    window.addEventListener('load', (e) => {
        e.preventDefault();
        const parent = document.querySelector('.main');
        /* const caixaTexto = document.createElement('div');
        caixaTexto.innerHTML = `<p>A Yuusha-desu utiliza cookies para melhorar a experiência do usuário. Ao continuar,
        você concorda com a nossa <a href="./legal/privacy-policy.html">política de privacidade.</a></p>`;
        caixaTexto.style.backgroundColor = '#000';
        caixaTexto.style.color = '#fff';
        caixaTexto.style.padding = '2rem';
        caixaTexto.style.width = '80%';
        caixaTexto.style.borderRadius = '5px';
        caixaTexto.style.textAlign = 'center';

        parent.appendChild(caixaTexto) */
    })
})();