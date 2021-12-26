(function () {
    window.addEventListener('load', construtorDeBlocoA);

    function construtorDeBlocoA () {
        const containerLateral = document.querySelector('.container-lateral');
        const blocoLateral = document.createElement('div');
        blocoLateral.classList.add('blocos-laterais');
        containerLateral.prepend(blocoLateral);

        const rowsHeadLateral = document.createElement('div');
        rowsHeadLateral.classList.add('rows_head-lateral');
        rowsHeadLateral.textContent = 'Recomendado';
        blocoLateral.appendChild(rowsHeadLateral);

        
        
        construtor (blocoLateral,'./pages/adachi-to-shimamura.html',
        '../images/imagens-dos-posts/post1/img.miniatura.jpg',
        `Adachi to Shimamura<br><br>Comédia, Romance, Yuri`
        );
    } 

    function construtor (blocoLateral, linkDaPostagem, linkDaimagem, textoDoLink) {
        const objData = {
            linkDaPostagem,
            linkDaimagem,
            textoDoLink,
        }

        function verificaHrefLocation () {
            const url = document.referrer;
            const location = window.location.href;
            
            if (url === location) {
                location.replace('/pages', '');
                objData.linkDaPostagem = location;
            }
        }
        verificaHrefLocation();
        
        const containerPopulares = document.createElement('div');
        containerPopulares.classList.add('container-populares');
        blocoLateral.appendChild(containerPopulares);

        const linkDaPostagem1 = document.createElement('a');
        linkDaPostagem1.href = objData.linkDaPostagem;
        linkDaPostagem1.setAttribute('alt','preview image');
        containerPopulares.appendChild(linkDaPostagem1);

        const previewImage = document.createElement('img');
        previewImage.src = objData.linkDaimagem;
        previewImage.classList.add('preview-image');
        linkDaPostagem1.appendChild(previewImage);

        const textPreview = document.createElement('div');
        textPreview.classList.add('texto-preview');
        containerPopulares.appendChild(textPreview);

        const linkDaPostagem2 = document.createElement('a');
        linkDaPostagem2.classList.add('ancoras-laterais');
        linkDaPostagem2.href = objData.linkDaPostagem;
        linkDaPostagem2.innerHTML = objData.textoDoLink;
        textPreview.appendChild(linkDaPostagem2);
    }
})();