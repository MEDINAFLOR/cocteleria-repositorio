const btnShowToggleFavotite = document.querySelector('#btn-show-toggle-favorite');
const iconFavorite = document.querySelector(".icon-favorite");
const navFavoriteIcon = document.querySelector(".nav .fa-heart")
let favorites = [];


// Actualizar la favorite list
const updateFavoritesLocalStorage = () => {
    localStorage.setItem('Favorites', JSON.stringify(favorites));
};

// Bajar los datos de localStorage a la lista para mostrar los cambios
const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem('Favorites');
    favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
};

// Agregar o quitar de la favorite list
/*
const toggleFavorite = cocktail => {
    const nFavorito = localStorage.getItem("lstFavoritos");
    const index = nFavorito.findIndex(
        element => element.id === cocktail.IdCoctel
    );
    if (index != -1){
        //Quita de favoritos
        favorites.splice(index,1);
        updateFavoritesLocalStorage();
        btnShowToggleFavotite.textContent='Agregar a favoritos';

    }else{
        //Agrega
        favorites.push(cocktail);
        updateFavoritesLocalStorage();
        btnShowToggleFavotite.textContent='Retirar de favoritos';
          
        navFavoriteIcon.classList.add('nav-like')
        setTimeout(()=>{
            navFavoriteIcon.classList.remove('nav-like')
        }, 1000);

        iconFavorite.classList.add('like')
        setTimeout(()=>{
            iconFavorite.classList.remove('like')
        }, 1000);
        
    };
};
*/

function getCocteles()
{
    var Cocteles = localStorage.getItem("lstCocteles");
   // alert(Cocteles);
    return JSON.parse(Cocteles)
}
function getUsuario()
{
    var usr = localStorage.getItem("SesionUs")
    return JSON.parse(usr);
}



const lstCocteles = getCocteles();
const Usuario = getUsuario();
let favoritos =null;

function updFavorito()
{
    const favorit = localStorage.getItem("lstFavoritos");
    favoritos = JSON.parse(favorit);
}
function getFav()
{
    const rs = Usuario.id;
    ObtenerFavoritos(rs);
    setTimeout(updFavorito, 100);
}

function loadFavoritos()
{
    
    setTimeout(getFav, 100);

}

loadFavoritos();

function BuscarNombre(coctelValue) {
    for (i = 0; i < lstCocteles.length; i++) {
      
        if (lstCocteles[i].nombre == coctelValue) {
            return lstCocteles[i];
        }
      } 
   
    return null;
}
function GetFavoritoExistente(id)
{
    updFavorito();
    for (i = 0; i < favoritos.length; i++) {
      
        if (favoritos[i].id == id) {
            
            return true
            
        }
      } 
   
    return false;

}

btnShowToggleFavotite.addEventListener('click',(event) =>{
    const recipeContainer = event.target.closest(".recipe-container-major");
    const nombre = recipeContainer.querySelector('#recipe-title').textContent;
    
    const coctel = BuscarNombre(nombre);
    
    const cocktail = {
        IdCoctel: coctel.id,
        IdUsuario : Usuario.id
    };
    const favorito = GetFavoritoExistente(coctel.id);

    if(favorito == false)
        {
            AgregarFavorito(Usuario.id, coctel.id);
            btnShowToggleFavotite.textContent='Retirar de favoritos';
           
        }
    else
        {
            BorrarFavorito(Usuario.id, coctel.id);
            btnShowToggleFavotite.textContent='Agregar a favoritos';
        }
    /*
    //OLD
        const cocktail = {
        id: coctel.id,
        img : coctel.imagen,
        name : coctel.nombre,
    };
    */
    
    
    //loadFavoritesFromLocalStorage();
    //toggleFavorite(cocktail);
});

