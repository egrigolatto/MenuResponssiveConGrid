let btnMenu = document.getElementById('btnMenu')
let nav = document.getElementById('nav')
let icon = document.querySelector(".fa-bars")

btnMenu.addEventListener('click', function(){
    nav.classList.toggle('mostrar')

    if(icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars","fa-times");
    }else{
        icon.classList.replace("fa-times","fa-bars");
    };

})