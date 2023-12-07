const linguagem = document.querySelector('.input_js')
const areaDoCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('.btn_highlight')
const status_perfil = document.getElementById('status_perfil')

function aplicaHighlight(){
        const codigo = areaDoCodigo.innerText
        areaDoCodigo.innerHTML = `<code class="codigo_editor hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
        areaDoCodigo.querySelector('.codigo_editor').textContent = codigo
        hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})

const btnSalvar = document.querySelector('.btn_salvar')
const editor_background = document.getElementById('editor_texto')

btnSalvar.addEventListener('click',() => {
    const corDoEditor =  document.querySelector('.select_color').value;
    editor_background.style.backgroundColor = corDoEditor;

})

projeto_definido.addEventListener('mouseover', () => {
    status_perfil.style.display='flex'
})

projeto_definido.addEventListener('mouseout', () => {
    status_perfil.style.display='none'
})
