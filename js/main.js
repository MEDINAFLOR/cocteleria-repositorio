
//Seccion Registro
class Registro
{
    constructor(Nick,Usuario,Pass,Correo)
    {
        this.nick=Nick;
        this.usuario=Usuario;
        this.correo=Correo;
        this.password=Pass;
    }

}


function showPopPup(pagina) {

  var elemento = document.getElementById('PopUp');

  elemento.style.visibility = 'visible';
  var id = 'Mensaje';

  FetchPage(pagina, id);

}
function closePopUp() {
  var elemento = document.getElementById('PopUp');

  elemento.style.visibility = 'hidden';

}
function FetchPage(pagina, destino) //Funcion que lee la página y la devuelve su contenido
{

  var data = fetch(pagina)
    .then(response => {

      return response.text()

    })
    .then(data => {

      var elemento2 = document.getElementById(destino);
      elemento2.innerHTML = data;
    });

}

function showMensajeBr() {

  return;
}

function CargarSesion()
{
    let dtSesion = localStorage.getItem("SesionUs");
    let indtSesion = JSON.parse(dtSesion);
    if(indtSesion.nick!="")
        {
            location.href = "/logged/logged.html"
        }
}

function CerrarSesion()
{
  let DestroyUs = new Login("","");
  localStorage.setItem("SesionUs",JSON.stringify(DestroyUs));
  alert("Sesion Cerrada");
  location.href = "/"
}
CargarSesion();