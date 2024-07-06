
class Login
{
    constructor(ID,Nick,Correo, Usuario)
    {
        this.id =ID, //Nuevo campo, guarda el ID del usuario para las funciones que lo requieran
        this.nick=Nick,
        this.correo=Correo,
        this.usuario=Usuario
    }

}
var btnShow = document.querySelector("#btn-show");
var btnShowToggle = document.querySelector("#btn-show-toggle");

var recipePreparation = document.querySelector(".recipe-preparation");
var backDrop = document.querySelector("#backdrop");

btnShow.addEventListener("click", show);
btnShowToggle.addEventListener("click", showToggle);

function show() {
    recipePreparation.style.display = "block";
    btnShow.style.display = "none";
    backDrop.classList.add('backdrop-filter-on');
    btnShowToggle.textContent = "Ver Imagen";
  
  }
  
  function showToggle() {
  
    backDrop.classList.remove('backdrop-filter-off');
    backDrop.classList.toggle('backdrop-filter-on');
  
    if (backDrop.classList.contains('backdrop-filter-on')) {
      btnShowToggle.textContent = "Ver Imagen";
    } else {
      backDrop.classList.add('backdrop-filter-off')
      btnShowToggle.textContent = "Ver Preparación";
  
    }
  }

  function CerrarSesion()
  {
    let DestroyUs = new Login("","");
    localStorage.setItem("SesionUs",JSON.stringify(DestroyUs));

    location.href = "/"
  }

  function CargarSesion()
{
  if(document.location.href.indexOf("/logged/logged.html")> -1)
    {
    let dtSesion = localStorage.getItem("SesionUs");
    let indtSesion = JSON.parse(dtSesion);
    if(!(indtSesion.id>0))
        {
        location.href = "/landing.html"
        }
      }
}
CargarSesion();