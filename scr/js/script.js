
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
                        <h1 class="nome-classe"> <img src"${person.icone}" alt="Icone da classe">${person.Classe}</h1>
                    </div>

                    <div class="titulo2">
                        <p class="descricao">${person.descricao}</p>
                    </div>
                
                </div>
            </div>`
        }
    )
}

/*
function selectPersonagem(profilePersonagens){
    const selectPersonagem = document.getElementById("classes");
    selectPersonagem.innerHTML = profilePersonagens.personagens.map(
        option => {
            return `
            <option value="classe" id="${option.Classe}">${option.Classe}</option>`
        }
    )
}*/