const body = document.querySelector('body');
username = document.location.search;
username = username.substring(1);
const profileDiv = document.createElement('div');
profileDiv.className = "profile-div";

//Buscando o git de cada estudante da lista

fetch(`https://fake-github.herokuapp.com/api/search/${username}`)
    .then(function(resultado) {
        resultado.json().then(function(data) {

            const profileImg = document.createElement('img');
            profileImg.src = data.avatar_url;
            profileDiv.appendChild(profileImg);
            createText("Nome: " + data.name);
            createText("Login: " + data.login);
            body.appendChild(profileDiv);

        });
    }).catch(function(error) {
        console.log("Error: ", error);
    });


const reposDiv = document.createElement('div');
reposDiv.className = 'repos-div'
const reposDivContainer = document.createElement('div');
reposDivContainer.className = 'repos-container'


//Buscando repositórios
fetch(`https://fake-github.herokuapp.com/api/search/${username}/repos`)
    .then(function(resultado) {
        resultado.json().then(function(repos) {

            const b = document.createElement('b');
            b.innerText = 'Lista de Repositórios:';
            reposDiv.appendChild(b);

            const ol = document.createElement('ol');

            repos.forEach(e => {
                const li = document.createElement('li');
                li.innerText = e.name;
                //Link que leva para o repositório escolhido
                const reposLink = document.createElement('a');
                reposLink.href = e.clone_url;
                const reposButton = document.createElement('button');
                reposButton.innerText = 'Acessar Repositório';
                reposLink.appendChild(reposButton);

                ol.appendChild(li);
                ol.appendChild(reposLink);
            });

            reposDivContainer.appendChild(reposDiv);
            reposDiv.appendChild(ol);
            body.appendChild(reposDivContainer)

        });
    }).catch(function(error) {
        console.log("Error: ", error);
    });


//Cria elementos P com texto dentro;
function createText(e) {
    const text = document.createElement('p');
    text.innerText = e;
    profileDiv.appendChild(text);
}