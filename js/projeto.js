const check_btn = document.getElementById('check_btn')

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