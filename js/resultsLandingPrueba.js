



    var cocteles = [
        {
            nombre: "Bombay",
            ingrediente: "brandy",
            tipo: "directo",
            ingredientes: ["1/4 de vermut blanco seco", "1/4 de vermut rojo", "2 golpes de Curaçao (naranja a ser posible)"],
            preparacion: "Se echan en vaso mezclador con unos cubitos de hielo. Remover y servir en vaso bajo y ancho(old fashioned), agregando uno odos cubitos de hielo",
            imagen:"../img/bombay.jpg"
        },
    
        {
            nombre: "Brandy Alexander",
            ingrediente: "brandy",
            tipo: "coctelera",
            ingredientes: ["1/3 de brandy", "1/4 de vermut rojo", "1/3 de crema de cacao", "1/3 de nata liquida o crema de leche"],
            preparacion: "Agite bien todos los ingredientes en una coctelera con hielo picado. Sírvalo sin colar en copa de cóctel.Si se desea añada un poco de nuez moscada.",
            imagen:"../img/brandyalexander.webp"
        },
    
        {
            nombre: "French Connection",
            ingrediente: "brandy",
            tipo: "directo",
            ingredientes: ["1/2 de brandy", "1/2 de Amaretto"],
            preparacion: "Vierta todos los ingredientes directamente en un vaso bajo y ancho (old fashioned) con cubitos de hielo. Revuelva suavemente.",
            imagen:"../img/frenchconnection.webp"
        },
    
        {
            nombre: "Stinger",
            ingrediente: "brandy",
            tipo: "coctelera",
            ingredientes: ["2/3 de brandy", "1/3 de crema de menta"],
            preparacion: "Mezclar en la coctelera con un poco de hielo picado. Agitar y servir en copa de cóctel previamente enfriada.",
            imagen:"../img/stinger.webp"
        },
    
        {
            nombre: "Daikiri",
            tipo:"coctelera", 
            ingrediente: "ron",
            ingredientes: ["1 puñado de frutillas frescas (6 o 7 u)", "Una cucharada panzona de azúcar", "2 cdas de jugo del lima o limón", "1/2 taza de ron blanco o dorado", "Hielo"],
            preparacion: "Colocar todos los ingredientes en el vaso de la licuadora. Licuar hasta que quede una mezcla cremosa. Si se desea, decorar el borde del vaso con azúcar. Servir",
            imagen:"../img/daikiri.jpg"
        },
    
    ]

let listForShowFavorites = [];

  // Menu desplegable

  if(window.location.href.indexOf("logged") > -1){

    var btnMenu = document.querySelector("#btn-menu");
    btnMenu.addEventListener("click", function showMenu() {
        var nav = document.querySelector('#nav')
        nav.classList.toggle("activo");
    })
}



    //Botones
var btnSearchName = document.querySelector("#btn-search-name");
var btnNewSearch = document.querySelector("#new-search");
var btnSearchIng = document.querySelector("#btn-search-ing");

const btnShowFavorite = document.querySelector('#btn-show-toggle-favorite')

// Contenedores
var searchForNameForm = document.querySelector("#search-for-name");
var coctelName = document.querySelector("#coctel-name");

var validationFeedback = document.querySelector(".validation-feedback");


var mainIngredient = document.querySelector("#main-ingredient");
var typesOfPreparation = document.querySelector("#types-of-preparation");


var results = document.querySelector(".results");
var notFoundContainer = document.querySelector(".not-found-container");

var listGroupContainerMajor = document.querySelector(".list-group-container-major");
var listGroup = document.querySelector(".list-group");
var listTitle = document.querySelector(".list-title span");
var listSubtitle = document.querySelector(".list-subtitle span");
var listGroupItem = document.querySelector(".list-group-item");



var recipeContainerMajor = document.querySelector(".recipe-container-major");
var recipeTitle = document.querySelector("#recipe-title");
var recipeImage = document.querySelector("#recipe-img");
var listRecipeIngredients = document.querySelector("#list-recipe-ingredients");
var recipePreparation = document.querySelector('.recipe-preparation');
var recipePrep = document.querySelector("#recipe-prep");

var formGroupCheck = document.querySelector(".form-group-check");


//Event Listener


btnSearchName.addEventListener("click", processName);
btnSearchIng.addEventListener("click", processIngredient);


//Funciones

const loadFavoritesFromStorage = () => {
    const storageFavorites = localStorage.getItem('Favorites');
    listForShowFavorites = storageFavorites ? JSON.parse(storageFavorites) : [];
};

function BusquedaCoctel(idBusq, idNobusq, chkNoBusq) {
    var idBusqueda = document.getElementById(idBusq);
    var idEsconde = document.getElementById(idNobusq);
    var checkNoSel = document.getElementById(chkNoBusq);
    idEsconde.style.display = "none";
    idBusqueda.style.display = "block";
    checkNoSel.checked = false;

    if (idBusq == 'search-for-name') {
        listGroupContainerMajor.style.display = "none";
    } else {
        recipeContainerMajor.style.display = "none";
    }

}

if(window.location.href.indexOf("landing.html") > -1){

    formGroupCheck.addEventListener("click", showMessage);
    let informativeMessage = document.querySelector(".mje-informativo");

    function showMessage() {
        informativeMessage.classList.remove('d-none');
    }
}


function processName(e) {
    e.preventDefault();
    coctelValue = coctelName.value;

    if (coctelValue === "") {
        validationFeedback.style.display = "block";
        recipeContainerMajor.style.display = "none";
        notFoundContainer.style.display = "none";
    } else {
        validationFeedback.style.display = "none";
        searchForName(coctelValue);
    }
}

function searchForName(coctelValue) {
    cocteles.every(coctel => {
        if (coctel.nombre.toLowerCase().replace(" ", "") == coctelValue.toLowerCase().replace(" ", "")) {
            notFoundContainer.style.display = "none";
            embedElements(coctel.nombre, coctel.ingredientes, coctel.preparacion, coctel.imagen);
            return false;
        } else {
            notFoundContainer.style.display = "block";
            recipeContainerMajor.style.display = "none";
            return true;
        }
    });
}



function embedElements(coctelName, coctelIngredients, coctelPreparation, coctelImage) {
    recipeTitle.textContent = coctelName;
    recipePrep.textContent = coctelPreparation;
    recipePreparation.style.backgroundImage =`url(${coctelImage})`;
    recipeImage.setAttribute("src",coctelImage);
    listIngredientes(coctelIngredients);
    recipeContainerMajor.style.display = "block";

    loadFavoritesFromStorage();
   
    const index = listForShowFavorites.findIndex(
        element =>  element.name === coctelName
    );

    if (index != -1){
        btnShowFavorite.textContent='Retirar de favoritos';
    }else{
        btnShowFavorite.textContent='Agregar a favoritos';
    };
};


function listIngredientes(coctelIngredientes) {
    listRecipeIngredients.innerHTML = "";
    for (let i = 0; i < coctelIngredientes.length; i++) {
        var li = document.createElement("li");
        var liContent = document.createTextNode(coctelIngredientes[i]);
        li.appendChild(liContent);
        listRecipeIngredients.appendChild(li);
    }
}


function processIngredient(e) {
 e.preventDefault();
 var selectedOptionType = typesOfPreparation.value;
 var selectedOptionIng = mainIngredient.value;

 searchForIngredient(selectedOptionIng, selectedOptionType);

}


function searchForIngredient(ingredientePrincipal, tipoDePreparacion){
    notFoundContainer.style.display = 'none';
    listGroup.innerHTML = "";
    listTitle.textContent = ingredientePrincipal.charAt(0).toUpperCase() + ingredientePrincipal.slice(1);
    listSubtitle.textContent = tipoDePreparacion.charAt(0).toUpperCase() + tipoDePreparacion.slice(1);
    cocteles.forEach(coctel => {
        if(coctel.tipo == tipoDePreparacion && coctel.ingrediente == ingredientePrincipal){
            toList(coctel.nombre);  
        }
    })

    if(listGroup.childElementCount != 0){
        addEvent(listGroup);
        listGroupContainerMajor.style.display = "block";
    } else {
        listGroupContainerMajor.style.display = "none";
        notFoundContainer.style.display = 'block'
    }
    
}

function toList(coctelNombre){
        let li = document.createElement("li");
        let anchor = document.createElement("a");
        anchor.setAttribute(`href`, `#recipe-container-major`);
        let aContent = document.createTextNode(coctelNombre);
        anchor.appendChild(aContent);
        li.appendChild(anchor);
        li.classList.add("list-group-item");
        listGroup.appendChild(li);   
}

function addEvent(contenedor){
    let  items = contenedor.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function search(){
            searchForName(items[i].textContent);
        })
    }
}



