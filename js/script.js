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

//cookies
(function () {
    const btnAccept = document.querySelector('.btn-accept');
    const modal = document.querySelector('.cookies-content');

    //procura os dados no local storage function
    function getPref () {
        const localPref = JSON.parse(window.localStorage.getItem('cookies-pref'));

        if (localPref) {
            modal.style.display = 'none';
        }
    }
    getPref ();

    //salva os dados no local storage
    function savePref () {
        modal.style.display = 'none';
        window.localStorage.setItem('cookies-pref', JSON.stringify('cookiesAccepted'));
    }

    btnAccept.addEventListener ('click', savePref);
})();

//script do caroussel
(function () {
    document.querySelector('.--images-container').addEventListener('wheel', e=> {
        e.preventDefault();
        console.log(e)
        if (e.deltaY < 0) {
           e.target.scrollBy(100,0);
        }else{
            e.target.scrollBy(-100,0)
        } 
    })

})();