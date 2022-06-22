// redireccionar a la pagina anterior despues de ver la animacion
let links = document.querySelectorAll("btnCerrar");

links.forEach(function(link){

    link.addEventListener('click',function(ev){
        ev.preventDefault();
    
        setTimeout(function(){
            location.href = "./"
        },600);
    })
});




