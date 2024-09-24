document.querySelector('input[name="txtnombre"]').addEventListener("keypress", function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});


//____________________
function contacto(frm){

test=/^\s+$/;
if(test.test(frm.txtnombre.value)){
    window.event.preventDefault();
    alert("Ingrese el nombre");
    return;

}
test=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
    if(!test.test(frm.txtcorreo.value)){
        window.event.preventDefault();
        alert("Formato de correo incorrecto");
    }

test=/^[2-9][0-9]{6,8}$/ 
    if(!test.test(frm.txtphone.value)){
        window.event.preventDefault();
        alert("Teléfono entre 7 y 9 dígitos");
        return;
    }


    alert("Mensaje enviado");
}