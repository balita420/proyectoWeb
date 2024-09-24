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

function carga(){
    const colores=document.getElementById("coloresDisponibles");
    const contenedorProductos=document.getElementById("contenedorProductos");
    productos.forEach((element,index)=> {
        if(productos.findIndex(e=>e.gamaColor===element.gamaColor)==index){
            let color=document.createElement("a");
            color.href = "../html/productos.html?p="+element.gamaColor;
            color.style.backgroundColor=element.gamaColor;
            colores.appendChild(color);
        }
        if(param=="nuevo"){
            if(element.llegada==param){
                document.getElementById("titulo").innerHTML="NEW IN - YOUR ESSENCE";
                document.getElementById("nombreBarra").innerHTML="NEW IN";
                document.getElementById("nombrePrincipal").innerHTML="NEW IN";
                
                let tarjeta =document.createElement("figure");
                tarjeta.setAttribute("class","card");
                let linkImagen=document.createElement("a");
                linkImagen.href="../html/producto.html?p="+element.codigo;
                let imagen=document.createElement('img');
                imagen.src=element.imagen;
    
                linkImagen.appendChild(imagen);
    
                let descripcion=document.createElement("figcaption");
                let lista=document.createElement("ul");
                let item1=document.createElement("li");
                let linkNombre=document.createElement("a");
                linkNombre.setAttribute("class","modelo");
                linkNombre.href="../html/producto.html?p="+element.codigo;
                let nombre=document.createElement("p");
                nombre.textContent=element.nombre.toUpperCase();
                linkNombre.appendChild(nombre);
                item1.appendChild(linkNombre);
    
                let item2=document.createElement("li");
                let precio=document.createElement("span");
                let item3=document.createElement("li");
                let precio2=document.createElement("span");
    
                if(element.oferta=='no'){
                    precio.textContent="S/. "+element.precio+".00";
                    item2.appendChild(precio);
                }else{
                    precio.textContent="S/. "+element.precio+".00";
                    precio.setAttribute("class","precioAnterior");
                    precio2.style.color='red';
                    precio2.textContent="S/. "+element.preciRebaja+".00";
                    item2.appendChild(precio);
                    item2.appendChild(precio2);
                }
    
                let item4=document.createElement("li");
                item4.setAttribute("class","color");
                let linkColor=document.createElement("a");
                linkColor.style.backgroundColor=element.gamaColor;
    
                item4.appendChild(linkColor);
    
                lista.appendChild(item1);
                lista.appendChild(item2);
                lista.appendChild(item3);
                lista.appendChild(item4);
    
                descripcion.appendChild(lista);
    
                tarjeta.appendChild(linkImagen);
                tarjeta.appendChild(descripcion);
    
                contenedorProductos.appendChild(tarjeta);
            }
        }else if(param=="todo"){
            document.getElementById("titulo").innerHTML="TODO - YOUR ESSENCE";
            document.getElementById("nombreBarra").innerHTML="TODO";
            document.getElementById("nombrePrincipal").innerHTML="TODO";

            let tarjeta =document.createElement("figure");
            tarjeta.setAttribute("class","card");
            let linkImagen=document.createElement("a");
            linkImagen.href="../html/producto.html?p="+element.codigo;
            let imagen=document.createElement('img');
            imagen.src=element.imagen;

            linkImagen.appendChild(imagen);

            let descripcion=document.createElement("figcaption");
            let lista=document.createElement("ul");
            let item1=document.createElement("li");
            let linkNombre=document.createElement("a");
            linkNombre.setAttribute("class","modelo");
            linkNombre.href="../html/producto.html?p="+element.codigo;
            let nombre=document.createElement("p");
            nombre.textContent=element.nombre.toUpperCase();
            linkNombre.appendChild(nombre);
            item1.appendChild(linkNombre);

            let item2=document.createElement("li");
            let precio=document.createElement("span");
            let item3=document.createElement("li");
            let precio2=document.createElement("span");

            if(element.oferta=='no'){
                precio.textContent="S/. "+element.precio+".00";
                item2.appendChild(precio);
            }else{
                precio.textContent="S/. "+element.precio+".00";
                precio.setAttribute("class","precioAnterior");
                precio2.style.color='red';
                precio2.textContent="S/. "+element.preciRebaja+".00";
                item2.appendChild(precio);
                item2.appendChild(precio2);
            }

            let item4=document.createElement("li");
            item4.setAttribute("class","color");
            let linkColor=document.createElement("a");
            linkColor.style.backgroundColor=element.gamaColor;

            item4.appendChild(linkColor);

            lista.appendChild(item1);
            lista.appendChild(item2);
            lista.appendChild(item3);
            lista.appendChild(item4);

            descripcion.appendChild(lista);

            tarjeta.appendChild(linkImagen);
            tarjeta.appendChild(descripcion);

            contenedorProductos.appendChild(tarjeta);
        }else if(param=="salecarteras"){
            if(element.oferta=="si" && element.tipo=="carteras"){
                document.getElementById("titulo").innerHTML="SALE "+element.tipo.toUpperCase()+" - YOUR ESSENCE";
                document.getElementById("nombreBarra").innerHTML="SALE "+element.tipo.toUpperCase();
                document.getElementById("nombrePrincipal").innerHTML="SALE "+element.tipo.toUpperCase();

                let tarjeta =document.createElement("figure");
                tarjeta.setAttribute("class","card");
                let linkImagen=document.createElement("a");
                linkImagen.href="../html/producto.html?p="+element.codigo;
                let imagen=document.createElement('img');
                imagen.src=element.imagen;

                linkImagen.appendChild(imagen);

                let descripcion=document.createElement("figcaption");
                let lista=document.createElement("ul");
                let item1=document.createElement("li");
                let linkNombre=document.createElement("a");
                linkNombre.setAttribute("class","modelo");
                linkNombre.href="../html/producto.html?p="+element.codigo;
                let nombre=document.createElement("p");
                nombre.textContent=element.nombre.toUpperCase();
                linkNombre.appendChild(nombre);
                item1.appendChild(linkNombre);

                let item2=document.createElement("li");
                let precio=document.createElement("span");
                let item3=document.createElement("li");
                let precio2=document.createElement("span");

                if(element.oferta=='no'){
                    precio.textContent="S/. "+element.precio+".00";
                    item2.appendChild(precio);
                }else{
                    precio.textContent="S/. "+element.precio+".00";
                    precio.setAttribute("class","precioAnterior");
                    precio2.style.color='red';
                    precio2.textContent="S/. "+element.preciRebaja+".00";
                    item2.appendChild(precio);
                    item2.appendChild(precio2);
                }

                let item4=document.createElement("li");
                item4.setAttribute("class","color");
                let linkColor=document.createElement("a");
                linkColor.style.backgroundColor=element.gamaColor;

                item4.appendChild(linkColor);

                lista.appendChild(item1);
                lista.appendChild(item2);
                lista.appendChild(item3);
                lista.appendChild(item4);

                descripcion.appendChild(lista);

                tarjeta.appendChild(linkImagen);
                tarjeta.appendChild(descripcion);

                contenedorProductos.appendChild(tarjeta);
            }
        }else if(param=="salezapatos"){
            if(element.oferta=="si" && element.tipo!="carteras"){
                document.getElementById("titulo").innerHTML="SALE ZAPATOS - YOUR ESSENCE";
                document.getElementById("nombreBarra").innerHTML="SALE ZAPATOS";
                document.getElementById("nombrePrincipal").innerHTML="SALE ZAPATOS";


                let tarjeta =document.createElement("figure");
                tarjeta.setAttribute("class","card");
                let linkImagen=document.createElement("a");
                linkImagen.href="../html/producto.html?p="+element.codigo;
                let imagen=document.createElement('img');
                imagen.src=element.imagen;

                linkImagen.appendChild(imagen);

                let descripcion=document.createElement("figcaption");
                let lista=document.createElement("ul");
                let item1=document.createElement("li");
                let linkNombre=document.createElement("a");
                linkNombre.setAttribute("class","modelo");
                linkNombre.href="../html/producto.html?p="+element.codigo;
                let nombre=document.createElement("p");
                nombre.textContent=element.nombre.toUpperCase();
                linkNombre.appendChild(nombre);
                item1.appendChild(linkNombre);

                let item2=document.createElement("li");
                let precio=document.createElement("span");
                let item3=document.createElement("li");
                let precio2=document.createElement("span");

                if(element.oferta=='no'){
                    precio.textContent="S/. "+element.precio+".00";
                    item2.appendChild(precio);
                }else{
                    precio.textContent="S/. "+element.precio+".00";
                    precio.setAttribute("class","precioAnterior");
                    precio2.style.color='red';
                    precio2.textContent="S/. "+element.preciRebaja+".00";
                    item2.appendChild(precio);
                    item2.appendChild(precio2);
                }

                let item4=document.createElement("li");
                item4.setAttribute("class","color");
                let linkColor=document.createElement("a");
                linkColor.style.backgroundColor=element.gamaColor;

                item4.appendChild(linkColor);

                lista.appendChild(item1);
                lista.appendChild(item2);
                lista.appendChild(item3);
                lista.appendChild(item4);

                descripcion.appendChild(lista);

                tarjeta.appendChild(linkImagen);
                tarjeta.appendChild(descripcion);

                contenedorProductos.appendChild(tarjeta);
            }

        }else if(param=="invierno"||param=="verano"||param=="mediaEstacion"){
            if(element.coleccion==param){
                
                if(element.coleccion=="mediaEstacion"){
                    document.getElementById("titulo").innerHTML="MEDIA ESTACION - YOUR ESSENCE";
                    document.getElementById("nombreBarra").innerHTML="MEDIA ESTACION";
                    document.getElementById("nombrePrincipal").innerHTML="MEDIA ESTACION";
                }else{
                    document.getElementById("titulo").innerHTML=element.coleccion.toUpperCase()+" - YOUR ESSENCE";
                    document.getElementById("nombreBarra").innerHTML=element.coleccion.toUpperCase();
                    document.getElementById("nombrePrincipal").innerHTML=element.coleccion.toUpperCase();
                }

                let tarjeta =document.createElement("figure");
                tarjeta.setAttribute("class","card");
                let linkImagen=document.createElement("a");
                linkImagen.href="../html/producto.html?p="+element.codigo;
                let imagen=document.createElement('img');
                imagen.src=element.imagen;

                linkImagen.appendChild(imagen);

                let descripcion=document.createElement("figcaption");
                let lista=document.createElement("ul");
                let item1=document.createElement("li");
                let linkNombre=document.createElement("a");
                linkNombre.setAttribute("class","modelo");
                linkNombre.href="../html/producto.html?p="+element.codigo;
                let nombre=document.createElement("p");
                nombre.textContent=element.nombre.toUpperCase();
                linkNombre.appendChild(nombre);
                item1.appendChild(linkNombre);

                let item2=document.createElement("li");
                let precio=document.createElement("span");
                let item3=document.createElement("li");
                let precio2=document.createElement("span");

                if(element.oferta=='no'){
                    precio.textContent="S/. "+element.precio+".00";
                    item2.appendChild(precio);
                }else{
                    precio.textContent="S/. "+element.precio+".00";
                    precio.setAttribute("class","precioAnterior");
                    precio2.style.color='red';
                    precio2.textContent="S/. "+element.preciRebaja+".00";
                    item2.appendChild(precio);
                    item2.appendChild(precio2);
                }

                let item4=document.createElement("li");
                item4.setAttribute("class","color");
                let linkColor=document.createElement("a");
                linkColor.style.backgroundColor=element.gamaColor;

                item4.appendChild(linkColor);

                lista.appendChild(item1);
                lista.appendChild(item2);
                lista.appendChild(item3);
                lista.appendChild(item4);

                descripcion.appendChild(lista);

                tarjeta.appendChild(linkImagen);
                tarjeta.appendChild(descripcion);

                contenedorProductos.appendChild(tarjeta);
            }

        }else{
            if(element.tipo==param){
                document.getElementById("titulo").innerHTML=element.tipo.toUpperCase()+" - YOUR ESSENCE";
                document.getElementById("nombreBarra").innerHTML=element.tipo.toUpperCase();
                document.getElementById("nombrePrincipal").innerHTML=element.tipo.toUpperCase();
                
                let tarjeta =document.createElement("figure");
                tarjeta.setAttribute("class","card");
                let linkImagen=document.createElement("a");
                linkImagen.href="../html/producto.html?p="+element.codigo;
                let imagen=document.createElement('img');
                imagen.src=element.imagen;

                linkImagen.appendChild(imagen);

                let descripcion=document.createElement("figcaption");
                let lista=document.createElement("ul");
                let item1=document.createElement("li");
                let linkNombre=document.createElement("a");
                linkNombre.setAttribute("class","modelo");
                linkNombre.href="../html/producto.html?p="+element.codigo;
                let nombre=document.createElement("p");
                nombre.textContent=element.nombre.toUpperCase();
                linkNombre.appendChild(nombre);
                item1.appendChild(linkNombre);

                let item2=document.createElement("li");
                let precio=document.createElement("span");
                let item3=document.createElement("li");
                let precio2=document.createElement("span");

                if(element.oferta=='no'){
                    precio.textContent="S/. "+element.precio+".00";
                    item2.appendChild(precio);
                }else{
                    precio.textContent="S/. "+element.precio+".00";
                    precio.setAttribute("class","precioAnterior");
                    precio2.style.color='red';
                    precio2.textContent="S/. "+element.preciRebaja+".00";
                    item2.appendChild(precio);
                    item2.appendChild(precio2);
                }

                let item4=document.createElement("li");
                item4.setAttribute("class","color");
                let linkColor=document.createElement("a");
                linkColor.style.backgroundColor=element.gamaColor;

                item4.appendChild(linkColor);

                lista.appendChild(item1);
                lista.appendChild(item2);
                lista.appendChild(item3);
                lista.appendChild(item4);

                descripcion.appendChild(lista);

                tarjeta.appendChild(linkImagen);
                tarjeta.appendChild(descripcion);

                contenedorProductos.appendChild(tarjeta);
            }else if(element.gamaColor==param){
                document.getElementById("titulo").innerHTML=element.gamaColor.toUpperCase()+" - YOUR ESSENCE";
                document.getElementById("nombreBarra").innerHTML=element.color.toUpperCase();
                document.getElementById("nombrePrincipal").innerHTML=element.color.toUpperCase();
                document.getElementById("coloresDisp").innerHTML="";
                document.getElementById("cajaProducts").style.width="100%";
                document.getElementById("cajaColores").style.width="0";

                let tarjeta =document.createElement("figure");
                tarjeta.setAttribute("class","card");
                tarjeta.setAttribute("id","tarjeta");
                let linkImagen=document.createElement("a");
                linkImagen.href="../html/producto.html?p="+element.codigo;
                let imagen=document.createElement('img');
                imagen.src=element.imagen;
                linkImagen.appendChild(imagen);

                let descripcion=document.createElement("figcaption");
                let lista=document.createElement("ul");
                let item1=document.createElement("li");
                let linkNombre=document.createElement("a");
                linkNombre.setAttribute("class","modelo");
                linkNombre.href="../html/producto.html?p="+element.codigo;
                let nombre=document.createElement("p");
                nombre.textContent=element.nombre.toUpperCase();
                linkNombre.appendChild(nombre);
                item1.appendChild(linkNombre);

                let item2=document.createElement("li");
                let precio=document.createElement("span");
                let item3=document.createElement("li");
                let precio2=document.createElement("span");

                if(element.oferta=='no'){
                    precio.textContent="S/. "+element.precio+".00";
                    item2.appendChild(precio);
                }else{
                    precio.textContent="S/. "+element.precio+".00";
                    precio.setAttribute("class","precioAnterior");
                    precio2.style.color='red';
                    precio2.textContent="S/. "+element.preciRebaja+".00";
                    item2.appendChild(precio);
                    item2.appendChild(precio2);
                }

                let item4=document.createElement("li");
                item4.setAttribute("class","color");
                let linkColor=document.createElement("a");
                linkColor.style.backgroundColor=element.gamaColor;

                item4.appendChild(linkColor);

                lista.appendChild(item1);
                lista.appendChild(item2);
                lista.appendChild(item3);
                lista.appendChild(item4);

                descripcion.appendChild(lista);

                tarjeta.appendChild(linkImagen);
                tarjeta.appendChild(descripcion);

                contenedorProductos.appendChild(tarjeta);
            }
        }
        
    });
}


document.body.setAttribute("onload","carga()");

