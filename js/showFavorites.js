
class Login
{
    constructor(Nick,Correo)
    {
        this.nick=Nick;
        this.correo=Correo;
    }

}
function importarScript(nombre) {
    var s = document.createElement("script");
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}
importarScript("/js/requests.js");

var btnMenu = document.querySelector("#btn-menu");
btnMenu.addEventListener("click", function showMenu() {
  nav.classList.toggle("activo");
})


let favorites = [];

const cocktailsContainer = document.querySelector('.cocktails-container');
const cocktailsSection = document.querySelector('.cocktails-section');

const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem('lstFavoritos');
    favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    showHTML();
};

const showHTML = () =>{
    if (favorites.length === 0){
        const noFavorites =`
                            <div class="no-favorite">
                                <h2>Sin favoritos</h2>        
                            </div>                             
        `;
        cocktailsSection.outerHTML= noFavorites; 
    }else{
        document.addEventListener("DOMContentLoaded", () =>{
            const sectionTitle = document.querySelector(".cocktails-section h2")
            sectionTitle.classList.add('animated')
        });
        favorites.forEach(cocktail =>{
            const cocktailBody =`
                                <div class="cocktail-container" style="background-image: url(${cocktail.imagen})">
                                    <h3>${cocktail.nombre}</h3>        
                                </div> 
            `;
            cocktailsContainer.insertAdjacentHTML('beforeend',cocktailBody);
        });
    };
};

loadFavoritesFromLocalStorage();

function CerrarSesion()
{
  let DestroyUs = new Login("","");

  localStorage.setItem("SesionUs",JSON.stringify(DestroyUs));

  location.href = "/"
}

function CargarSesion()
{
if(document.location.href.indexOf("/favorites/favorites.html")> -1)
   
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

/* NUEVAS FUNCIONES PARA EL GET DE FAVORITOS */
/*
async function showMovies(){
    let movies = await fetchData(BASEURL+'/api/movies/', 'GET');
    const tableMovies = document.querySelector('#list-table-movies tbody');
    tableMovies.innerHTML='';
    movies.forEach((movie, index) => {
    let tr = `<tr>
    <td>${movie.title}</td>
    <td>${movie.director}</td>
    <td>${movie.release_date}</td>
    <td>
    <img src="${movie.banner}" width="30%">
    </td>
    <td>
    <button class="btn-cac" onclick='updateMovie(${movie.id_movie})'><i class="fa fa-pencil" ></button></i>
    <button class="btn-cac" onclick='deleteMovie(${movie.id_movie})'><i class="fa fa-trash" ></button></i>
    </td>
    </tr>`;
    tableMovies.insertAdjacentHTML("beforeend",tr);
    });
    }
    */