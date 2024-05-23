const btnShowToggleFavotite = document.querySelector('#btn-show-toggle-favorite');
const iconFavorite = document.querySelector(".icon-favorite");
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
const toggleFavorite = cocktail => {
    const index = favorites.findIndex(
        element => element.name === cocktail.name
    );
    if (index != -1){
        favorites.splice(index,1);
        updateFavoritesLocalStorage();
        btnShowToggleFavotite.textContent='Agregar a favoritos';

    }else{
        favorites.push(cocktail);
        updateFavoritesLocalStorage();
        btnShowToggleFavotite.textContent='Retirar de favoritos';
        iconFavorite.classList.add('like')

        setTimeout(()=>{
            iconFavorite.classList.remove('like')
        }, 1000);
    };
};

btnShowToggleFavotite.addEventListener('click',(event) =>{
    const recipeContainer = event.target.closest(".recipe-container-major");
    const cocktail = {
        img : recipeContainer.querySelector('#recipe-img').getAttribute('src'),
        name : recipeContainer.querySelector('#recipe-title').textContent,
    };
    loadFavoritesFromLocalStorage();
    toggleFavorite(cocktail);
});
