(function () {
    window.addEventListener('load', construtorDeBloco);

    function construtorDeBloco () {
        const containerLateral = document.querySelector('.container-lateral');
        const blocoLateral = document.createElement('div');
        blocoLateral.classList.add('blocos-laterais');
        containerLateral.prepend(blocoLateral);

        const rowsHeadLateral = document.createElement('div');
        rowsHeadLateral.classList.add('rows_head-lateral');
        rowsHeadLateral.innerHTML = 'Em Alta';
        blocoLateral.appendChild(rowsHeadLateral);

        construtor(blocoLateral);
    }

    function construtor (blocoLateral) {
        const objData = {
            nomeDoAnime: "Adachi to Shimamura",
            linkDaPostagem: "#",
            linkDaimagem: "#",
            textoDoLink: "Nome do anome e descricao",
        }

        const containerPopulares = document.createElement('div');
        containerPopulares.classList.add('container-populares');
        blocoLateral.appendChild(containerPopulares);

        const linkDaPostagem1 = document.createElement('a');
        linkDaPostagem1.href = '#';
        linkDaPostagem1.setAttribute('alt','preview image');
        containerPopulares.appendChild(linkDaPostagem1);

        const previewImage = document.createElement('img');
        previewImage.src = '#';
        previewImage.classList.add('preview-image');
        linkDaPostagem1.appendChild(previewImage);

        const textPreview = document.createElement('div');
        textPreview.classList.add('texto-preview');
        containerPopulares.appendChild(textPreview);

        const linkDaPostagem2 = document.createElement('a');
        linkDaPostagem2.classList.add('ancoras-laterais');
        linkDaPostagem2.href = '#';
        linkDaPostagem2.innerHTML = `Adachi to Shimamura<br><br>Comédia, Romance, Yuri`;
        textPreview.appendChild(linkDaPostagem2);
    }
})();