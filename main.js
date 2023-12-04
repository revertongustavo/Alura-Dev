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

// btn_aside1.addEventListener('click', () =>{
//     btn_aside1.classList.remove('outlined')
//     btn_aside2.classList.add('outlined')
// });

// btn_aside2.addEventListener('click', () =>{
//     btn_aside2.classList.remove('outlined')
//     btn_aside1.classList.add('outlined')
// });

