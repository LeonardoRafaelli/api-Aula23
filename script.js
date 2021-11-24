const body = document.querySelector('body');

const users = [
    { name: 'Leonardo Giuseppe de Souza Rafaelli', username: 'LeonardoRafaelli' },
    { name: 'Bruno Henrique Verbinnen de Carvalho', username: 'brunohvc' },
    { name: 'Vytor Augusto Rosa', username: 'K43RU' },
    { name: 'João Henrique Meireles da Silva', username: 'nihilth' },
    { name: 'Otavio Augusto dos Santos', username: 'SantOtavio' },
    { name: 'Camilly de Souza Pessotti', username: 'camillyPessotti' },
    { name: 'Thiago Marins Braga', username: 'ThiagoBrag' },
    { name: 'Ester Girelli', username: 'Esterzinha12' },
    { name: 'Gustavo Rebelatto Zapella', username: 'rebelattogustavo' },
    { name: 'Henrique Cole Fernandes', username: 'HenriqueCole' },
    { name: 'Kenzo Hideaky Ferreira Sato', username: 'Kenzohfs' },
    { name: 'Vinícius Bonatti Benner', username: 'viniciusz1' },
    { name: 'Leonardo Heitor Poglia', username: 'leopoglia' },
    { name: 'Felipe Mielke Vieira', username: 'FelipeMielkeVieira' },
    { name: 'Eduarda Bolgenhagen De Campos', username: 'eduardabolgenhagen' },
    { name: 'Matheus Franzener Hohmann', username: 'MatheusFranzener' },
    { name: 'Diego Planinscheck', username: 'frst157' },
    { name: 'Camilly Vitoria da Rocha Goltz', username: 'VitoriaCamilly' },
    { name: 'Bruna Alves Mafra', username: 'BMafra' },
    { name: 'Otavio Matheus Neves', username: 'otavionvs' },
]

function createOrderedList(e) {
    const list = document.createElement('ol');

    users.forEach(function(e) {
        const listItem = document.createElement('li');
        listItem.innerText = e;
        list.appendChild(listItem);
    });
    body.appendChild(list);
}


createOrderedList();