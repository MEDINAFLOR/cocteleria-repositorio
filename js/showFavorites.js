
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

const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem('Favorites');
    favorites = JSON.parse(storedFavorites);
    showHTML();
};

const showHTML = () =>{
    if (favorites.length === 0){
        const noFavorites =`
                            <div class="no-favorite">
                                <h2>Sin favoritos</h2>        
                            </div>                             
        `;
        cocktailsContainer.outerHTML= noFavorites; 
    }else{
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
