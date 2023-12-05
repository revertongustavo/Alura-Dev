const linguagem = document.querySelector('.input_js')
const areaDoCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('.btn_highlight')

function aplicaHighlight(){
        const codigo = areaDoCodigo.innerText
        areaDoCodigo.innerHTML = `<code class="codigo_editor hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
        areaDoCodigo.querySelector('.codigo_editor').textContent = codigo
        hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})