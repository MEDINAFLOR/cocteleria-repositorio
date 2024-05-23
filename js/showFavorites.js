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

