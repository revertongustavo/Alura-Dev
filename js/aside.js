const botoes_aside = document.querySelectorAll('.btn_aside')
const btn_aside1 = document.querySelector('.btn_aside1')
const btn_aside2 = document.querySelector('.btn_aside2')
const btn_menuHeader = document.querySelector('.icon_menu')
const section_editor = document.getElementById('editor_highlight')
const section_projeto = document.getElementById('projeto_section')
const section_aside = document.getElementById('menu_aside')
const div_aside = document.getElementById('div_aside')
const titulo_aside = document.getElementById('titulo_aside')
const icon_menu = document.getElementById('icon_menu')
const perfil_aside = document.getElementById('perfil_aside')
const linha_aside = document.getElementById('linha_aside')
const icon_menu2 = document.getElementById('icon_menu2')
const icon_pesquisa = document.getElementById('icon_pesquisa')
var width_tablet = window.matchMedia("(min-width: 768px)")
const projeto_definido = document.getElementById('projeto_definido')
const campo_pesquisa = document.getElementById('campo_pesquisa')

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

//abrir menu
btn_menuHeader.addEventListener('click', () => {
    abrir_menuAside(true)
})

//fechar menu
icon_menu2.addEventListener('click', () => {
    abrir_menuAside(false);
} )

function abrir_menuAside(estado){

    if(estado){
        section_editor.style.display ='none'
        section_projeto.style.display ='none'
        section_aside.style.display='flex'
        section_aside.style.justifyContent = 'end'
        div_aside.classList.remove('div_aside')
        div_aside.classList.add('div_asideMobile')
        titulo_aside.style.display = 'none'
        perfil_aside.style.display = 'flex'
        linha_aside.style.display = 'block'
        icon_menu2.style.display = 'block'
        icon_menu.style.display = 'none'
        
        if(width_tablet.matches)
            display_pesquisa(true)
    }
    else{
        section_editor.style.display ='block'
        section_projeto.style.display ='flex'
        section_aside.style.display='flex'
        section_aside.style.justifyContent = 'start'
        div_aside.classList.remove('div_asideMobile')
        div_aside.classList.add('div_aside')
        titulo_aside.style.display = 'block'
        perfil_aside.style.display = 'none'
        linha_aside.style.display = 'none'
        icon_menu2.style.display = 'none'
        icon_menu.style.display = 'block'

        if(width_tablet.matches)
            display_pesquisa(false)
    }
}

//mudar header para tablet
function display_pesquisa(estado){
    if(estado==true ){
        icon_pesquisa.style.visibility='hidden';
    } else
        icon_pesquisa.style.visibility='visible';
}

// btn_aside1.addEventListener('click', () => {
//     projeto_definido.style.display = 'none';
// })

// btn_aside2.addEventListener('click', () => {
//     projeto_definido.style.display = 'flex';
// })