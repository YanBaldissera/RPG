
async function fetchPersonagens(){
    const url = 'https://raw.githubusercontent.com/YanBaldissera/RPG/main/scr/personagens.json';
    const fetching = await fetch(url);
    return await fetching.json();
}


(async () =>{
    const profilePersonagens = await fetchPersonagens();
    updatePersonagens(profilePersonagens);
    //selectPersonagem(profilePersonagens);
})()

function updatePersonagens(profilePersonagens){
    const personagem = document.getElementById('personagens');
    personagem.innerHTML = profilePersonagens.personagens.map(
        person => {
            return `
            <div class="container" id="${person.Classe}">
                <div class="foto-personagem">
                    <img src="${person.foto}" alt="foto classse">
                </div>
                <div class="post-content">
                    <div class="titulo">
                    <img class="foto-icone" src="${person.icone}" alt="Icone da classe"><h1 class="nome-classe">${person.Classe}</h1>
                    </div>

                    <div class="titulo2">
                        <p class="descricao">${person.descricao}</p>
                    </div>
                
                </div>
            </div>`
        }
    )
}

document.querySelectorAll(".scroll-link").forEach(link => {
    link.addEventListener("click", evento => {
        evento.preventDefault();
        const href = link.getAttribute("href");
        const alvo = document.querySelector(href);

        if (alvo) {
            alvo.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
