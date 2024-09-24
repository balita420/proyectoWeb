var paneles= new Array("../imagenes/PANEL1.jpg","../imagenes/PANEL2.jpg")

function opacidad(){
    document.getElementById("baner").style.opacity="0";
    document.getElementById("baner").style.transition="all 1s";
    setTimeout("carrusel()",1000);
}
var c=-1;
function carrusel(){
    c++;
    if(c>1) c=0;
        document.getElementById("baner").setAttribute("src", paneles[c]);
        document.getElementById("baner").style.opacity="1";
        document.getElementById("baner").style.transition="all 1s";
   
   
    setTimeout("opacidad()",2000);
}

document.body.setAttribute("onload","opacidad()");