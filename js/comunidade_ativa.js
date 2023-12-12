const btn_comunidade = document.querySelector('.btn_aside2')
const btn_editor = document.querySelector('.btn_aside1')
const btn_highlight = document.getElementById('btn_highlight')
const section_projeto = document.getElementById('projeto_section')
const codigo_editor = document.querySelector('.codigo_editor')
const section_editor = document.getElementById('section_editor')
const section_editorNode = document.querySelector('.section_editor')
const editor_inicial = document.getElementById('editor_texto')
const projeto_def_inicial = document.getElementById('projeto_definido')
const projetos_all = document.getElementsByClassName('projeto_definido')
const flex_desktop =document.getElementsByClassName('flex_desktop')
let codigos_salvos = localStorage.getItem('codigos_salvos') ? JSON.parse(localStorage.getItem('codigos_salvos')) : [];
const projeto_definido = document.querySelector('.projeto_definido')

window.onload = function () {
    // section_editorNode.innerHTML = '';
    // section_projeto.style.display = 'flex';
    // projeto_def_inicial.remove();
    // editor_inicial.remove();
    criarElementoTarefa(codigos_salvos)
}

btn_editor.addEventListener('click', () => {
    section_editorNode.innerHTML = ''
    // codigo_editor.textContent = '';
    // listasOff();
    resetarCodigos();
} )

// function listasOff(){
//     for (let i = 0; i < editor_texto_all.length; i++)
//         editor_texto_all[i].style.display = 'none';

//     for (let i = 0; i < projetos_all.length; i++)
//         projetos_all[i].style.display = 'none';
// }

// function resetarCodigos(){
//     const editor_texto = document.createElement('li')
//     editor_texto.classList.add('editor_texto')
//     editor_texto.id = 'editor_texto'
//     section_editor.appendChild(editor_texto)
//     section_editor.classList.add('section_editor')
//     section_editor.classList.remove('section_editor_comunidade')
//     editor_texto.innerHTML = ` <div class="campo_editor">
//                         <div class="btn_todos">
//                         <img class="btn_editor" src="./img/Ellipse 1.png"></img>
//                         <img class="btn_editor" src="./img/Ellipse 2.png"></img>
//                         <img class="btn_editor" src="./img/Ellipse 3.png"></img>
//                     </div>
//                         <div class="codigo-wrapper">
//     <code class="codigo_editor javascript" id= "codigo_editor" contenteditable= "true" aria-label="Editor de código">
//     ${''}
//     </code>         
// </div>   `
// }

function criarElementoTarefa(info_projeto) {
    info_projeto.forEach(element => {
    const editor_texto = document.createElement('li')
    editor_texto.classList.add('editor_texto_comunidade')
    editor_texto.id = 'editor_texto'
    section_editor.appendChild(editor_texto)
    section_editor.classList.add('section_editor_comunidade')
    editor_texto.innerHTML = ` <div class="campo_editor">
                        <div class="btn_todos">
                        <img class="btn_editor" src="./img/Ellipse 1.png"></img>
                        <img class="btn_editor" src="./img/Ellipse 2.png"></img>
                        <img class="btn_editor" src="./img/Ellipse 3.png"></img>
                    </div>
                        <div class="codigo-wrapper">
    <code class="codigo_editor javascript" id= "codigo_editor" contenteditable= "true" aria-label="Editor de código">
    ${element.codigo}
    </code>         
</div>   `
    const projeto_definido = document.createElement('li')
    projeto_definido.classList.add('projeto_definido')
    projeto_definido.classList.add('projeto_definido')
    projeto_definido.id ='projeto_definido'
    section_editor.appendChild(projeto_definido)
    projeto_definido.innerHTML = `<div class="div_projetodef">
    <h1 class="titulo_projeto">${element.nome_projeto}</h1>
    <p class="descricao_projeto">${element.descricao}</p>
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

});
}


projeto_definido.addEventListener('mouseover', () => {
    status_perfil.style.display='flex'
})

projeto_definido.addEventListener('mouseout', () => {
    status_perfil.style.display='none'
})