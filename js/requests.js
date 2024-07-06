const BASEURL = 'http://127.0.0.1:5000';
/**
* Función para realizar una petición fetch con JSON.
* @param {string} url - La URL a la que se realizará la petición.
* @param {string} method - El método HTTP a usar (GET, POST, PUT, DELETE, etc.).
* @param {Object} [data=null] - Los datos a enviar en el cuerpo de la petición.
* @returns {Promise<Object>} - Una promesa que resuelve con la respuesta en formato JSON.
*/
async function fetchData(url, method, data = null) {
const options = {
method: method,
headers: {
'Content-Type': 'application/json',
},
body: data ? JSON.stringify(data) : null, // Si hay datos, los convierte a JSON y los incluye en el cuerpo
};
try {
const response = await fetch(url, options); // Realiza la petición fetch
if (!response.ok) {
throw new Error(`Error: ${response.statusText}`);
}
return await response.json(); // Devuelve la respuesta en formato JSON
} catch (error) {
console.error('Error capturado:', error);
alert('Ha ocurrido un error al retornar los datos. Por favor, reintente.');
}
}
/**
* Función para comunicarse con el servidor para poder Crear o Actualizar
* un registro de pelicula
* @returns
*/
async function Registrar(Usuario, Passw, Correo, Nick){
    
    //VALIDACION DE FORMULARIO
    if (!Usuario || !Passw || !Correo || !Nick) {
    Swal.fire({
    title: 'Error!',
    text: 'Por favor completa todos los campos.',
    icon: 'error',
    confirmButtonText: 'Cerrar'
    });
    return;
    }
    // Crea un objeto con los datos de la película
    const Registro = {
    usuario: Usuario,
    passw: Passw,
    correo: Correo,
    nick: Nick,
    };
    let result = null;
    // Realiza una petición POST para crear un usuario
    result = await fetchData(`${BASEURL}/apis/registro`, 'POST', Registro);
  
    const formMovie = document.querySelector('#registroForm');
    if(result.resultado==0)
        {
    formMovie.reset();
    Swal.fire({
    title: 'Exito!',
    text: result.message,
    icon: 'success',
    confirmButtonText: 'Cerrar'
    })
        }else{
            Swal.fire({
                title: 'Error!',
                text: result.message,
                icon: 'error',
                confirmButtonText: 'Cerrar'
                });
                return;
        }
    }
    async function IniciarSesion(Usuario, Passw){
    
        //VALIDACION DE FORMULARIO
        if (!Usuario || !Passw ) {
        Swal.fire({
        title: 'Error!',
        text: 'Por favor completa todos los campos.',
        icon: 'error',
        confirmButtonText: 'Cerrar'
        });
        return;
        }

        const Registro = {
        usuario: Usuario,
        passw: Passw,
        };
        let result = null;
        // Realiza una petición POST para crear un usuario
        result = await fetchData(`${BASEURL}/apis/sesion`, 'POST', Registro);
      
        const LoginForm = document.querySelector('#LoginForm');
        if(result.resultado==-1)
            {
                Swal.fire({
                    title: 'Error!',
                    text: result.message,
                    icon: 'error',
                    confirmButtonText: 'Cerrar'
                    });
                    return LoginForm;
            }
            
            if(result.resultado==0)
                {
                let usData = new Login(result.id, result.nick, result.correo, result.usuario);
                GuardarSesion(usData);
                location.href="/logged/logged.html"
                }
        }
  
    function GuardarSesion(usuario)
    {
        localStorage.setItem("SesionUs",JSON.stringify(usuario));
    }
    async function getAllCocteles()
    {
        
        let result = await fetchData(BASEURL+'/apis/cocteles', 'GET');
        ///apis/ingredientes
       
       
        localStorage.setItem("lstCocteles",JSON.stringify(result));
        return;
    }
    async function ObtenerFavoritos(Usuario){

        const RUsuario = {
            IdUsuario: Usuario
        };

        let result = [];

        result = await fetchData(`${BASEURL}/apis/favoritos`, 'POST', RUsuario);

        try
        {
        localStorage.setItem("lstFavoritos",JSON.stringify(result));
        }catch       
        {
            const vacio = [{}]
            localStorage.setItem("lstFavoritos",JSON.stringify(vacio));
        }
        
}
    async function AgregarFavorito(Usuario, Coctel){
    

        const Favorito = {
            IdUsuario: Usuario,
            IdCoctel: Coctel,
        };
        let result = null;
        // Realiza una petición POST para crear un usuario
        result = await fetchData(`${BASEURL}/apis/favoritos/add`, 'POST', Favorito);
      
        
            if(result.resultado==0)
                {
               // alert("Favorito agregado");
                
                ObtenerFavoritos(Usuario);
            }
    }
    async function BorrarFavorito(Usuario, Coctel){
    
            const Favorito = {
                IdUsuario: Usuario,
                IdCoctel: Coctel,
            };
            let result = null;
            // Realiza una petición POST para crear un usuario
            result = await fetchData(`${BASEURL}/apis/favoritos`, 'DELETE', Favorito);
          
            
                if(result.resultado==0)
                    {
                 //   alert("Favorito Eliminado");
                    ObtenerFavoritos(Usuario);
                    }
        }

        
        async function UpdatePerfil(IUsuario, dUsuario, dCorreo){
            if (!IUsuario || !dCorreo ) {
                Swal.fire({
                title: 'Error!',
                text: 'Por favor completa el correo',
                icon: 'error',
                confirmButtonText: 'Cerrar'
                });
                return;
                }
            const Perfil = {
                IdUsuario: IUsuario,
                Usuario: dUsuario,
                Correo: dCorreo
            };
            let result = null;
            // Realiza una petición POST para crear un usuario
            result = await fetchData(`${BASEURL}/apis/Usuario/upd`, 'POST', Perfil);
            alert(result.mensaje);
            if(result.resultado==0)
            {
                let Perfil =   localStorage.getItem("SesionUs");
                    Perfil = JSON.parse(Perfil);
                    Perfil.correo = dCorreo;
                    GuardarSesion(Perfil);
                    
            }
            
        }