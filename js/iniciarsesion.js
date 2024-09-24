//validacion de "Inicar sesion"
//correo 

function login(frm){
    window.event.preventDefault();
    test=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(!test.test(frm.txtemail.value)){
        alert("Formato de correo incorrecto");
    }
    else {
        window.location.href = "../html/index.html";
    } 

}

