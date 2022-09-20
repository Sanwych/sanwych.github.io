const boton = document.getElementById('menu')
const sidebar = document.getElementById('sidebar')
const mapa = document.getElementById('main')
boton.addEventListener('click', () => {


    if(sidebar.classList.contains('off')){
        sidebar.classList.add("on")
        sidebar.classList.remove("off")
        mapa.style.opacity ="40%"
        
        
        
    }
    else if(sidebar.classList.contains('on')){
        sidebar.classList.add("off")
        sidebar.classList.remove("on")
        mapa.style.opacity ="100%"
             
    }
})

