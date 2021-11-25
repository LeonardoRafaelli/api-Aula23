const body = document.querySelector('body');
username = document.location.search;
username = username.substring(1);

//Buscando o git de cada estudante da lista

fetch(`https://fake-github.herokuapp.com/api/${username}`)
    .then(function(resultado) {
        resultado.json().then(function(data) {
            console.log("Data: ", data);
        });
    }).catch(function(error) {
        console.log("Error: ", error);
    });





function createUnorderedList() {
    const uList = document.createElement('ul');
    const listItem = document.createElement('li');
    const img = document.createElement('img');


    listItem.innerText = e;
    uList.appendChild(listItem);
    body.appendChild(img);

    body.appendChild(uList);
}

createUnorderedList();