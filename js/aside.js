const botoes_aside = document.querySelectorAll('.btn_aside')
const btn_aside1 = document.querySelector('.btn_aside1')
const btn_aside2 = document.querySelector('.btn_aside2')

botoes_aside.forEach(button =>{
    button.addEventListener('click', () => {
        botoes_aside.forEach(btn => btn.classList.remove('focus'));
        button.classList.add('pressed');
        if(btn_aside1.classList.contains('pressed')){
            btn_aside1.classList.remove('outlined')
            btn_aside2.classList.add('outlined')
        } else {
            btn_aside2.classList.remove('outlined')
            btn_aside1.classList.add('outlined')
        }
    });
    button.addEventListener('mouseout', () => {
            botoes_aside.forEach(btn => btn.classList.remove('pressed'));
            button.classList.add('focus');
    });
});

const btn_menuHeader = document.querySelector('.icon_menu')
const section_editor = document.getElementById('editor_highlight')
const section_projeto = document.getElementById('projeto_section')
const section_aside = document.getElementById('menu_aside')
const div_aside = document.getElementById('div_aside')
const titulo_aside = document.getElementById('titulo_aside')
const icon_menu = document.getElementById('icon_menu')
const perfil_aside = document.getElementById('perfil_aside')
const linha_aside = document.getElementById('linha_aside')

btn_menuHeader.addEventListener('click', () => {
    section_editor.style.display ='none'
    section_projeto.style.display ='none'
    section_aside.style.display='flex'
    section_aside.style.justifyContent = 'end'
    div_aside.classList.remove('div_aside')
    div_aside.classList.add('div_asideMobile')
    titulo_aside.style.display = 'none'
    perfil_aside.style.display = 'flex'
    linha_aside.style.display = 'block'
})