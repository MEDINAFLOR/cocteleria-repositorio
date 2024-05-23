  // Menu desplegable

    var btnMenu = document.querySelector("#btn-menu");
    btnMenu.addEventListener("click", function showMenu() {
      nav.classList.toggle("activo");
    })

    class Login
    {
        constructor(Nick,Correo)
        {
            this.nick=Nick;
            this.correo=Correo;
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
if(document.location.href.indexOf("/author/author.html")> -1)
   
  {
  let dtSesion = localStorage.getItem("SesionUs");
  let indtSesion = JSON.parse(dtSesion);
  if(indtSesion.nick=="")
      {
      location.href = "/landing.html"
      }
    }
}
CargarSesion();
