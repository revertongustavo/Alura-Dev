const botoes_aside = document.querySelectorAll('.btn_aside')


botoes_aside.forEach(button =>{
    button.addEventListener('click', () => {
        botoes_aside.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
