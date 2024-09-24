
//crear cuenta

document.querySelector('input[name="txtnombre"]').addEventListener("keypress", function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="txtapellidos"]').addEventListener("keypress", function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

function registro(frm){
    test=/^\s+$/;
    window.event.preventDefault();
    if(test.test(frm.txtnombre.value)){

    alert("Ingrese el nombre");
    return;
    }


    test=/^\s+$/;
    window.event.preventDefault();
    if(test.test(frm.txtapellidos.value)){

    alert("Ingrese el apellido");
    return;
    }

    window.event.preventDefault();
    test=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(!test.test(frm.txtcorreo.value)){
        
        alert("Formato de correo incorrecto");
    }

    else {
        window.location.href = "../html/index.html";
    }


}

