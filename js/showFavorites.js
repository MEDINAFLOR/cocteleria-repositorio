
class Login
{
    constructor(Nick,Correo)
    {
        this.nick=Nick;
        this.correo=Correo;
    }

}
var btnMenu = document.querySelector("#btn-menu");
btnMenu.addEventListener("click", function showMenu() {
  nav.classList.toggle("activo");
})


let favorites = [];

const cocktailsContainer = document.querySelector('.cocktails-container');
const cocktailsSection = document.querySelector('.cocktails-section');

const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem('Favorites');
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
            const sectionTitle = document.querySelector(".cocktails-section h1")
            sectionTitle.classList.add('animated')
        });
        favorites.forEach(cocktail =>{
            const cocktailBody =`
                                <div class="cocktail-container" style="background-image: url(${cocktail.img})">
                                    <h2>${cocktail.name}</h2>        
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
