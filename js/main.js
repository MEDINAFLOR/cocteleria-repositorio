/*
const media = matchMedia('(min-width: 1024px)');

//Botones
var btnShow = document.querySelector("#btn-show");
var btnShowToggle = document.querySelector("#btn-show-toggle");

//Contenedores
var recipePreparation = document.querySelector(".recipe-preparation");
var backDrop = document.querySelector("#backdrop");

//EventListener
btnShow.addEventListener("click", show);
btnShowToggle.addEventListener("click", showToggle);


//Funciones
function show(){
  recipePreparation.style.display = "block";
  btnShow.style.display = "none";
  backDrop.classList.add('backdrop-filter-on');
  btnShowToggle.textContent = "Ver Imagen";

}

function showToggle(){

    backDrop.classList.remove('backdrop-filter-off');
    backDrop.classList.toggle('backdrop-filter-on');

   if(backDrop.classList.contains('backdrop-filter-on')){
     btnShowToggle.textContent = "Ver Imagen";
   } else {
    backDrop.classList.add('backdrop-filter-off')
    btnShowToggle.textContent = "Ver Preparación";
    
   }
}
*/
function showLogin()
{

 elemento = document.getElementById('PopUp');
 
 elemento.style.visibility='visible';

 fetch("/login/index.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    elemento2 = document.getElementById('Mensaje');
    elemento2.innerHTML=data;
  });
 


 

}
// media.addEventListener('change', ({media, matches}) => {

//   if(matches === true) {

//   }else {

//   }

// })








