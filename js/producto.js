const productos = [
    {codigo:'ccoycaNatural', imagen: '../imagenes/ccoycaNatural.png' , nombre: 'ccoyca', color:'natural', gamaColor:'brown', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0},

    {codigo:'ccoycaBlanco', imagen: '../imagenes/ccoycaBlanco.png' , nombre: 'ccoyca', color:'blanco', gamaColor:'white', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'no',preciRebaja:300,talla:'',cantidad:0},

    {codigo:'ccoycaNegro', imagen: '../imagenes/ccoycaNegro.png' , nombre: 'ccoyca', color:'negro', gamaColor:'black', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0},

    {codigo:'hadeTopo', imagen: '../imagenes/hadeTopo.png' , nombre: 'hade', color:'topo', gamaColor:'brown', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm madera',plataforma:"1cm",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0},

    {codigo:'seleneNegro', imagen: '../imagenes/seleneNegro.png' , nombre: 'selene', color:'negro', gamaColor:'black', precio: 350,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'3cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0},

    {codigo:'seleneBlanco', imagen: '../imagenes/seleneBlanco.png' , nombre: 'selene', color:'Blanco', gamaColor:'white', precio: 350,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'4cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0},

    {codigo:'ilitiaMarron', imagen: '../imagenes/ilitiaMarron.png' , nombre: 'ilitia', color:'marron', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0},

    {codigo:'azulaNegro', imagen: '../imagenes/azulaNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm eva',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0},

    {codigo:'floraNegro', imagen: '../imagenes/floraNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"3cm",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0},

    {codigo:'venusNegro', imagen: '../imagenes/venusNegro.png' , nombre: 'venus', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0},

    {codigo:'venusNatural', imagen: '../imagenes/venusNatural.png' , nombre: 'venus', color:'natural', gamaColor:'brown', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0},

    {codigo:'arisonaAzul', imagen: '../imagenes/arisonaAzul.png' , nombre: 'arisona', color:'azul', gamaColor:'darkblue', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0},

    {codigo:'arisonaBeige', imagen: '../imagenes/arisonaBeige.png' , nombre: 'arisona', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0},

    {codigo:'arisonaNegro', imagen: '../imagenes/arisonaNegro.png' , nombre: 'arisona', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0},

    {codigo:'kiaraNegro', imagen: '../imagenes/kiaraNegro.png' , nombre: 'kiara', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0},

    {codigo:'kiaraBeige', imagen: '../imagenes/kiaraBeige.png' , nombre: 'kiara', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0},

    {codigo:'ateneaDorado', imagen: '../imagenes/ateneaDorado.png' , nombre: 'atenea', color:'dorado', gamaColor:'beige', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'1cm',plataforma:"3cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0},

    {codigo:'irisBlanco', imagen: '../imagenes/irisBlanco.png' , nombre: 'iris', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0},

    {codigo:'zoeBlanco', imagen: '../imagenes/zoeBlanco.png' , nombre: 'zoe', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0},

    {codigo:'zoeRose', imagen: '../imagenes/zoeRose.png' , nombre: 'zoe', color:'rose', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0},

    {codigo:'giselaNude', imagen: '../imagenes/giselaNude.png' , nombre: 'gisela', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0},

    {codigo:'haidiNude', imagen: '../imagenes/haidiNude.png' , nombre: 'haidi', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0},

    {codigo:'tayraNegro', imagen: '../imagenes/tayraNegro.png' , nombre: 'tayra', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0},

    {codigo:'ursulaPrint', imagen: '../imagenes/ursulaPrint.png' , nombre: 'ursula', color:'print', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 2cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:25,talla:'',cantidad:0},

    {codigo:'ximenaBlanco', imagen: '../imagenes/ximenaBlanco.png' , nombre: 'ximena', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'si',preciRebaja:220,talla:'',cantidad:0},

    {codigo:'elisaNegro', imagen: '../imagenes/elisaNegro.png' , nombre: 'elisa', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0},

    {codigo:'isabellaDorado', imagen: '../imagenes/isabellaDorado.png' , nombre: 'isabella', color:'dorrado', gamaColor:'beige', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'si',preciRebaja:220,talla:'',cantidad:0},

    {codigo:'josephineNatural', imagen: '../imagenes/josephineNatural.png' , nombre: 'josephine', color:'natural', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0},

    {codigo:'auroraBeige', imagen: '../imagenes/auroraBeige.png' , nombre: 'aurora', color:'beige', gamaColor:'beige', precio: 450,llegada:'antiguo',coleccion:'complementos',forro:'tela',tipo:'carteras',oferta:'si',preciRebaja:400,talla:'',cantidad:0},

    {codigo:'auroraNude', imagen: '../imagenes/auroraNude.png' , nombre: 'aurora', color:'nude', gamaColor:'peachpuff', precio: 450,llegada:'nuevo',coleccion:'complementos',forro:'tela',tipo:'carteras',oferta:'no',preciRebaja:450,talla:'',cantidad:0},

    {codigo:'auroraRose', imagen: '../imagenes/auroraRose.png' , nombre: 'aurora', color:'rose', gamaColor:'pink', precio: 450,llegada:'nuevo',coleccion:'complementos',forro:'tela',tipo:'carteras',oferta:'no',preciRebaja:450,talla:'',cantidad:0}
];

var param=window.location.search.slice(3);
var p=0;
function carga(){
    productos.forEach(element => {
        
        if(element.codigo==param){
            document.getElementById("titulo").innerHTML=element.nombre.toUpperCase()+" "+element.color.toUpperCase()+" - YOUR ESSENCE";
            document.getElementById("tipo").href="../html/productos.html?p="+element.tipo;
            document.getElementById("tipo").innerHTML=element.tipo.toUpperCase()+" |"
            document.getElementById("nombreBarra").innerHTML=element.nombre.toUpperCase();
            document.getElementById("nombrePrincipal").innerHTML=element.nombre.toUpperCase()+'-'+element.color.toUpperCase();
            document.getElementById("imagenProducto").setAttribute("src",element.imagen);
            if(element.oferta=="si"){
                document.getElementById("precio").innerHTML="S/."+element.preciRebaja+".00";
                document.getElementById("precioAnterior").innerHTML="ANTES: S/."+element.precio+".00";
                document.getElementById("precio").style.color="red";
            }else{
                document.getElementById("precio").innerHTML="S/."+element.preciRebaja+".00";
            }
            document.getElementById("gamaColor").style.background = element.gamaColor;
            if(element.tipo=='carteras'){
                document.getElementById("talla").innerHTML="";
                document.getElementById("forro").innerHTML="Forro: "+element.forro;
            }else{
                var tallacont=document.getElementById("tallacont");
                var botTalla=document.createElement("input");
                botTalla.setAttribute("id","tallaBoton");
                botTalla.setAttribute("class","botonTalla");
                botTalla.setAttribute("type","number");
                botTalla.setAttribute("value","35");
                botTalla.setAttribute("min","35");
                botTalla.setAttribute("max","40");
                tallacont.appendChild(botTalla);
                document.getElementById("forro").innerHTML="Forro: "+element.forro;
                document.getElementById("plantilla").innerHTML="Plantilla: "+element.plantilla;
                document.getElementById("taco").innerHTML="Taco: "+element.taco;
                document.getElementById("plataforma").innerHTML="Plataforma: "+element.plataforma;
            }

            p=productos.indexOf(element);
            
        }
    });
};

function cargaProductosSimilares(){
    const productosSimilares=document.getElementById("productosSimilaresContenedor");
    productos.forEach(element => {
       if(element.codigo==param){
            let tipo=element.tipo;
            let cont=0;
            
            productos.every(function(item){
                if(item.tipo==tipo){
                    const imagen=document.createElement('img');
                    imagen.src="../imagenes/"+item.codigo+".png";
                    const a=document.createElement('a');
                    a.href = "../html/producto.html?p="+item.codigo;
                    a.appendChild(imagen);
                    cont++;
                    productosSimilares.appendChild(a);
                }
                if(cont==5){
                    return 0;
                }else{
                    return item;
                }

            });
       }
    });
};



document.body.setAttribute("onload","carga(),cargaProductosSimilares()");