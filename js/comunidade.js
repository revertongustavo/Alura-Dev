const btn_comunidade = document.querySelector('.btn_aside2')
const btn_highlight = document.getElementById('btn_highlight')
const section_projeto = document.getElementById('projeto_section')
const codigo_editor = document.querySelector('.codigo_editor')
const input_projeto = document.querySelector('.input_projeto')

btn_comunidade.addEventListener('click', () => {
    const codigo = codigo_editor.textContent;
    console.log(codigo)
    btn_highlight.style.display = 'none';
    section_projeto.style.display = 'none';


    criarElementoTarefa(codigo, info_projeto)
})


function criarElementoTarefa(codigo, info_projeto) {
    const section_editor = document.createElement('li')
    section_editor.classList.add('section_editor')
    section_editor.add('section_editor')
    section_editor.innerHTML = ` <div class="campo_editor">
                        <div class="btn_todos">
                        <img class="btn_editor" src="./img/Ellipse 1.png"></img>
                        <img class="btn_editor" src="./img/Ellipse 2.png"></img>
                        <img class="btn_editor" src="./img/Ellipse 3.png"></img>
                    </div>
                        <div class="codigo-wrapper">
    <code class="codigo_editor javascript" id= "codigo_editor" contenteditable= "true" aria-label="Editor de código">
    ${codigo}
    </code>         
</div>   `

    const projeto_definido = document.createElement('li')
    projeto_definido.classList.add('projeto_definido')
    projeto_definido.id.add('projeto_definido')
    projeto_definido.innerHTML = `div class="div_projetodef">
    <h1 class="titulo_projeto">${info_projeto.nome}</h1>
    <p class="descricao_projeto">${info_projeto.descricao}</p>
    <div class="status_perfil" id="status_perfil">
        <div class="curtidas_icon">
            <div class="interacoes_stages">
                <i class="fa-solid fa-comment" style="color: #ffffff;"></i>
                <label class="qt_comment">9</label>
            </div>
            <div class="interacoes_stages">
                <i class="fa-solid fa-heart btn_like" id="check_btn"></i>
                <label class="qt_curtidas">9</label>
            </div>
        </div>
        <div class="photo_nick">
            <img src="./img/Photo.png" alt="foto do usuario" class="photo_perfil">
            <p class="nome_perfil">@Harry</p>
        </div>
    </div>
</div>`

}