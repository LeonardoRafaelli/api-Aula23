const procurar = document.createElement('input');
procurar.className = 'procurar';
const body = document.querySelector('body');
//MODAL
// Criando a div principal
const divPrincipal = document.createElement('div');
divPrincipal.className = 'div-principal';

const dadosArray = [];
let cont = 0;

// Div do header (botão)
const divHeader = document.createElement('div');
divHeader.className = 'div-header'

// Criando o botao para div-header
const cadastroBtn = document.createElement('button');
cadastroBtn.innerText = 'Cadastro';

body.appendChild(divPrincipal);
divHeader.appendChild(cadastroBtn);
divHeader.appendChild(procurar)
divPrincipal.appendChild(divHeader);


cadastroBtn.addEventListener('click', function() {

    cadastroBtn.disabled = true;
    body.style.backgroundColor = 'rgba(128, 128, 128, 0.5)'
        //Div a baixo do header
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    divPrincipal.appendChild(modalContainer);

    const opacidade = document.createElement('div');
    opacidade.className = 'opacidade';


    // Modal, inserido dentro do container
    const modal = document.createElement('div');
    modal.className = 'modal';
    modalContainer.appendChild(modal);
    modal.style.animationName = 'anima-desc'
    modal.style.animationDuration = '1s';
    //Titulo
    const divTitle = document.createElement('div');
    divTitle.className = 'divInputs';
    divTitle.innerHTML = '<h2> CADASTRO </2>'
    modal.appendChild(divTitle);

    // Div-nome input-nome
    const divNome = document.createElement('div');
    divNome.className = 'divInputs';
    modal.appendChild(divNome);

    const nome = document.createElement('input');
    nome.placeholder = "Nome";
    nome.type = 'text';
    divNome.appendChild(nome);


    // Div-sobrenome input-sobrenome
    const divSobrenome = document.createElement('div');
    divSobrenome.className = 'divInputs';
    modal.appendChild(divSobrenome);

    const login = document.createElement('input');
    login.type = 'text';
    login.placeholder = "Login";
    divSobrenome.appendChild(login);


    // div-Botões
    const divBotoes = document.createElement('div');
    divBotoes.className = 'divBotoes';
    modal.appendChild(divBotoes);

    // BotãoCancelar
    const cancelarButton = document.createElement('button');
    cancelarButton.innerText = 'Cancelar';
    divBotoes.appendChild(cancelarButton);

    // BotaoLimpar
    const limparButton = document.createElement('button');
    limparButton.innerText = 'Limpar';
    divBotoes.appendChild(limparButton);

    // BotaoSubmit
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    divBotoes.appendChild(submitButton);

    limparButton.addEventListener('click', function() {
        nome.value = '';
        login.value = '';
    })

    cancelarButton.addEventListener('click', function() {
        cadastroBtn.disabled = false;

        modal.style.animationName = 'anima-sobe'
        modal.style.animationDuration = '1.7s';
        modal.style.marginBottom = '2000px';
        body.style.backgroundColor = 'white';
        setTimeout(function() {
            modal.remove();
            modalContainer.remove();
        }, 1000)
    })


    submitButton.addEventListener('click', function() {


        const msgContainer = document.createElement('div');
        msgContainer.className = 'msg-container'

        if (nome.value == '' || login.value == '') {
            const msgVermelha = document.createElement('div');
            msgVermelha.innerHTML = '<p>Há campos não preenchidos</p>'
            msgVermelha.className = 'msgErro';

            msgContainer.appendChild(msgVermelha);
            body.appendChild(msgContainer);
            setTimeout(function() {
                msgContainer.remove();
            }, 2000)
        } else {

            const msgVerde = document.createElement('div');
            msgVerde.innerHTML = '<p>Cadastro Concluído</p>'
            msgVerde.className = 'msgConcluido';

            msgContainer.appendChild(msgVerde);
            body.appendChild(msgContainer);

            cadastroBtn.disabled = false;

            modal.style.animationName = 'anima-sobe'
            modal.style.animationDuration = '1.7s';
            modal.style.marginBottom = '2000px';
            body.style.backgroundColor = 'white';
            setTimeout(function() {
                modal.remove();
                modalContainer.remove();
            }, 1000)
            setTimeout(function() {
                msgContainer.remove();
            }, 2000)

            users.push({ name: nome.value, username: login.value })

            createOrderedList();
        }
    })
});

// FINAL MODAL

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



function createOrderedList() {
    const actualList = document.querySelector('ol');
    if (actualList) {
        actualList.remove();
    }
    const list = document.createElement('ol');
    list.id = 'lista';

    users.forEach(function(e) {
        // Criando item da lista pra cada elemento
        const listItem = document.createElement('li');
        listItem.className = "list-items";

        //Criando botão e adicionando rediricionamento para outra página
        const button = document.createElement('button');
        button.innerText = "Acessar";
        button.className = "li-button";
        button.addEventListener('click', function() {
            location.href = "./userPage/user.html?" + e.username;
        });

        const hline = document.createElement('hr');


        listItem.innerText = e.name + " ----> Usuário: " + e.username;
        listItem.appendChild(button);
        list.appendChild(listItem);
        list.appendChild(hline);
    });


    divPrincipal.appendChild(list);


    function filtrar() {

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {

            txtValue = users[i].name;
            if (txtValue.toUpperCase().indexOf(filter.value) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
                console.log(i);
            }
        }
    }

    let input, filter, ol, li, i, txtValue;
    input = document.querySelector('.procurar');
    filter = input.value.toUpperCase();
    ol = document.getElementById("lista");
    li = ol.getElementsByTagName('li');
    procurar.addEventListener('keydown', function() {
        for (i = 0; i < li.length; i++) {

            txtValue = users[i].name;
            if (txtValue.toUpperCase().indexOf(filter.value) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
                console.log(i);
            }
        }
    });

}



createOrderedList();