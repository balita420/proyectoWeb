document.querySelector('input[name="txtdni"]').addEventListener("keypress", function(event){
    var longitud=document.querySelector('input[name="txtdni"]').value.length;
    if(longitud>=8){
        window.event.preventDefault();
        return;
    }
    var ascii=event.keyCode || event.which;
    if(ascii<48 || ascii>57){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="txtnombre"]').addEventListener("keypress", function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="txtapellido"]').addEventListener("keypress", function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

//_______________________

function libro(frm){
    let test=/^\d{8}$/;
    if(!test.test(frm.txtdni.value)){
        window.event.preventDefault();
        alert("DNI Incorrecto");
        return;
    }

    test=/^\s+$/;
    if(test.test(frm.txtnombre.value)){
        window.event.preventDefault();
        alert("Ingrese el nombre");
        return;
    }

    test=/^\s+$/;
    if(test.test(frm.txtapellido.value)){
        window.event.preventDefault();
        alert("Ingrese el apellido");
        return;

    }

    test=/^[2-9][0-9]{6,8}$/ 
    if(!test.test(frm.txtphone.value)){
        window.event.preventDefault();
        alert("Teléfono entre 7 y 9 dígitos");
        return;
    }

    test=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
    if(!test.test(frm.txtcorreo.value)){
        window.event.preventDefault();
        alert("Formato de correo incorrecto");
    }
    else{
        alert("Mensaje Enviado");
    }
}