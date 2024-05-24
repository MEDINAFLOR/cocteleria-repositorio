
function importarScript(nombre) {
    var s = document.createElement("script");
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}
importarScript("/js/encoding.js");
function validaFormulario ()
 {
    let formu = document.getElementById("registroForm");
    //formu.addEventListener('submit', validaFormulario);


    const Nickname = document.querySelector("#Nick");
    const User = document.querySelector("#Usuario");
    const Pass = document.querySelector("#Pass");
    const PassR = document.querySelector("#PassR");
    const chkpol = document.querySelector("#aceptPol");
    const email = document.querySelector("#Correo");
    //const Correo = document.querySelector("#Correo");
    var validation = true;

    if(Nickname.value.length < 3 || Nickname.value.length > 20)
        {
            alert("Tu Apodo debe tener entre 3 y 20 caracteres");
            validation = false;
            return;
        }

        if(User.value.length < 3 || User.value.length > 20)
            {
                alert("Tu usuario debe tener entre 3 y 20 caracteres");
                validation = false;
                return;
            }
        if(Pass.value.length < 6 || Pass.value.length > 20)
        {
            alert("Tu Contraseña debe tener entre 6 y 20 caracteres");
            validation = false;
           return;
        }
        if(PassR.value != Pass.value)
        {
            alert("Las contraseñas no coinciden");
            validation = false;
            return;
         }
           
          if (chkpol.checked == false) {
         alert("Debe aceptar las políticas de privacidad para registrarse");
         validation = false;
         return;
          }

    if(validation==true){
       // formu.submit();
       var PassEnc=SHA1(Pass.value);
       tryReg(Nickname.value, User.value, PassEnc, email.value );
       alert("Datos guardados, utilice 'iniciar sesion' para testearlos!")
       location.href="/"
    } else{

        return false;
    }

}
/* La siguiente funcion guarda los datos de registro de la persona para usarlo como si se guardara en la bd,
    este método solo será utilizado para guardar la info de registro a modo de usar el login y se borrará cuando
    se programe el backend */
    
function tryReg(apodo, usuario, pass, email)
{
    const Registrodat= new Registro(apodo, usuario, pass, email);
savedata(Registrodat);
}
function savedata(reg)
{
    localStorage.setItem("Registro",JSON.stringify(reg));
}
function loadData(usr,pass)
{
    let rk = localStorage.getItem("Registro");
    rg = JSON.parse(rk);
    if(usr==rg.usuario)
        {
        if(pass==rg.password)
            {
            let lg = new Login(rg.nick, rg.correo);
        return lg;
            }
        }
        return new Login("","");
    /*alert (rg.nick);
    alert (rg.usuario);
    alert (rg.password);
    alert (rg.correo);
    */
}
function tryIs()
{
    const formul = document.getElementById("#Loginform");
    const User = document.querySelector("#lgUser");
    const Pass = document.querySelector("#lgPass");
    
    let valida = true;
    if(User.value.length < 3)
        {
               alert("Usuario o contraseña incorrectos!");
               valida=false;
               return; 
        }
     if(Pass.value.length < 6)
        {
               alert("Usuario o contraseña incorrectos!");
               valida=false;
               return; 
        }
        var PassEnc=SHA1(Pass.value);
    let loginData=loadData(User.value,PassEnc);
    if(loginData.nick=="" ||loginData.correo=="" )
        {
            alert("Usuario o contraseña incorrectos!");
            valida=false;
            return; 
        }
        if(valida==true)
            {
                let usData = new Login(loginData.nick,loginData.correo);
                GuardarSesion(usData);
                location.href="/logged/logged.html"
                //formul.submit();
            }
}
function GuardarSesion(usuario)
{
    localStorage.setItem("SesionUs",JSON.stringify(usuario));
}
