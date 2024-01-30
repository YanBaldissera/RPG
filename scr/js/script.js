
async function fetchPersonagens(){
    const url = 'https://raw.githubusercontent.com/YanBaldissera/RPG/main/scr/personagens.json';
    const fetching = await fetch(url);
    return await fetching.json();
}


(async () =>{
    const profilePersonagens = await fetchPersonagens();
    console.log(profilePersonagens);
    debugger;
    updatePersonagens(profilePersonagens);
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
                <h1 class="nome-classe">${person.Classe}</h1>
    
                <p class="descricao">${person.descricao}</p>
            </div>
        </div>`
        }
    )
}