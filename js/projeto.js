const check_btn = document.getElementById('check_btn')
const btnSalvar = document.querySelector('.btn_salvar')
const editor_background = document.getElementById('editor_texto')
let codigos_salvos = localStorage.getItem('codigos_salvos') ? JSON.parse(localStorage.getItem('codigos_salvos')) : [];

check_btn.addEventListener('click', () => {
    if(check_btn.classList.contains('btn_like'))
        ativa_like(false)
    else
        ativa_like(true)
})

function ativa_like (estado){
    if(estado == false){
        check_btn.classList.remove("btn_like")
        check_btn.classList.add("btn_like_red")
    }
    else{
        check_btn.classList.remove("btn_like_red")
        check_btn.classList.add("btn_like")
    }
}

btnSalvar.addEventListener('click',() => {
    const nome_projeto = document.getElementById("input_nome").value
    const descricao_projeto = document.getElementById("input_descricao").value
    const linguagem_projeto = document.getElementById("linguagem").value
    const cor_projeto = document.getElementById("cor").value

    const projeto_informacoes = {
        nome_projeto: nome_projeto,
        descricao: descricao_projeto,
        linguagem: linguagem_projeto,
        cor: cor_projeto
    }
        alterar_cor(cor_projeto)
        saveNewItem(projeto_informacoes)
})

function alterar_cor(cor_projeto){
    editor_background.style.backgroundColor = cor_projeto;
}

function saveNewItem(newItem) {
    codigos_salvos.push(newItem)
    // save itens in local storage
    localStorage.setItem('codigos_salvos', JSON.stringify(codigos_salvos));
}
