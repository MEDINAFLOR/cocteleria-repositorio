class Login
{
    constructor(ID,Nick,Correo, Usuario)
    {
        this.id =ID, //Nuevo campo, guarda el ID del usuario para las funciones que lo requieran
        this.nick=Nick,
        this.correo=Correo,
        this.usuario=Usuario
    }

}
async function MostrarPerfil(){
    let Perfil =   localStorage.getItem("SesionUs");
    Perfil = JSON.parse(Perfil);
    /*
           'id' : self.id,
            'nick':self.nick,
            'correo':self.correo,
            'nivelus':self.nivelus,
            'fecharegistro':self.fecharegistro,
            */
    const tableUser = document.querySelector('#list-table-user tbody');
    tableUser.innerHTML='';
    let tr = `<tr>
    <td>${Perfil.usuario}&nbsp;&nbsp;</td>
    <td>${Perfil.nick}&nbsp;&nbsp;</td>
    <td>${Perfil.correo}&nbsp;&nbsp;</td>
    </tr>`;
    tableUser.insertAdjacentHTML("beforeend",tr);
    const nCorreo = document.getElementById("NuevoCorreo");
    nCorreo.value="";
    }
    MostrarPerfil();
    function CerrarSesion()
    {
    let DestroyUs = new Login("","");
    localStorage.setItem("SesionUs",JSON.stringify(DestroyUs));
    alert("Sesion Cerrada");
    location.href = "/"
    }
    async function ActualizarPerfil()
    {
        let Perfil =   localStorage.getItem("SesionUs");
        Perfil = JSON.parse(Perfil);
        const id = Perfil.id;
        const nus = Perfil.usuario;
        const nCorreo = document.getElementById("NuevoCorreo");
        UpdatePerfil(id, nus, nCorreo.value);
        setTimeout(MostrarPerfil,1000);
    }