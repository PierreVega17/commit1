//obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(link){

//Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
      ev.preventDefault();
      let content = document.querySelector('.content');

//Quitar las clases de animación que ya tiene

      content.classList.remove("animate__fadeInDown","animate__animated");
//content.classList.remove("animate__animated");

//Agregar clases para animar su salida fadeOutUp

      content.classList.add("animate__fadeOutUp", "animate__animated");
//ontent.classList.add("animate__animated");

      setTimeout(function(){
        location.href = "/CodigoFacilito/Boletines/index.html"},1000);

return false;
});
});


