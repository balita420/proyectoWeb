const productosTallas = [
    {codigo1:'ccoycaNatural',codigo2:'ccoycaNatural35', imagen: '../imagenes/ccoycaNatural.png' , nombre: 'ccoyca', color:'natural', gamaColor:'brown', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ccoycaBlanco',codigo2:'ccoycaBlanco35', imagen: '../imagenes/ccoycaBlanco.png' , nombre: 'ccoyca', color:'blanco', gamaColor:'white', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'no',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ccoycaNegro',codigo2:'ccoycaNegro35', imagen: '../imagenes/ccoycaNegro.png' , nombre: 'ccoyca', color:'negro', gamaColor:'black', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'hadeTopo',codigo2:'hadeTopo35', imagen: '../imagenes/hadeTopo.png' , nombre: 'hade', color:'topo', gamaColor:'burlywood', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm madera',plataforma:"1cm",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'seleneNegr',codigo2:'seleneNegro35', imagen: '../imagenes/seleneNegro.png' , nombre: 'selene', color:'negro', gamaColor:'black', precio: 350,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'3cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'seleneBlanco',codigo2:'seleneBlanco35', imagen: '../imagenes/seleneBlanco.png' , nombre: 'selene', color:'Blanco', gamaColor:'white', precio: 350,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'4cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ilitiaMarron',codigo2:'ilitiaMarron35', imagen: '../imagenes/ilitiaMarron.png' , nombre: 'ilitia', color:'marron', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'azulaNegro',codigo2:'azulaNegro35', imagen: '../imagenes/azulaNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm eva',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'floraNegro',codigo2:'floraNegro35', imagen: '../imagenes/floraNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"3cm",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'venusNegro',codigo2:'venusNegro35', imagen: '../imagenes/venusNegro.png' , nombre: 'venus', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'venusNatural',codigo2:'venusNatural35', imagen: '../imagenes/venusNatural.png' , nombre: 'venus', color:'natural', gamaColor:'brown', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaAzul',codigo2:'arisonaAzul35', imagen: '../imagenes/arisonaAzul.png' , nombre: 'arisona', color:'azul', gamaColor:'darkblue', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaBeige',codigo2:'arisonaBeige35', imagen: '../imagenes/arisonaBeige.png' , nombre: 'arisona', color:'beige', gamaColor:'navajowhite', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaNegro',codigo2:'arisonaNegro35', imagen: '../imagenes/arisonaNegro.png' , nombre: 'arisona', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'kiaraNegro',codigo2:'kiaraNegro35', imagen: '../imagenes/kiaraNegro.png' , nombre: 'kiara', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'kiaraBeige',codigo2:'kiaraBeige35', imagen: '../imagenes/kiaraBeige.png' , nombre: 'kiara', color:'beige', gamaColor:'navajowhite', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ateneaDorado',codigo2:'ateneaDorado35', imagen: '../imagenes/ateneaDorado.png' , nombre: 'atenea', color:'dorado', gamaColor:'antiquewhite', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'1cm',plataforma:"3cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'irisBlanco',codigo2:'irisBlanco35', imagen: '../imagenes/irisBlanco.png' , nombre: 'iris', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'zoeBlanco',codigo2:'zoeBlanco35', imagen: '../imagenes/zoeBlanco.png' , nombre: 'zoe', color:'blanco', gamaColor:'whitesmoke', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'zoeRose',codigo2:'zoeRose35', imagen: '../imagenes/zoeRose.png' , nombre: 'zoe', color:'rose', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'giselaNude',codigo2:'giselaNude35', imagen: '../imagenes/giselaNude.png' , nombre: 'gisela', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'haidiNude',codigo2:'haidiNude35', imagen: '../imagenes/haidiNude.png' , nombre: 'haidi', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'tayraNegro',codigo2:'tayraNegro35', imagen: '../imagenes/tayraNegro.png' , nombre: 'tayra', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ursulaPrint',codigo2:'ursulaPrint35', imagen: '../imagenes/ursulaPrint.png' , nombre: 'ursula', color:'print', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 2cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:25,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ximenaBlanco',codigo2:'ximenaBlanco35', imagen: '../imagenes/ximenaBlanco.png' , nombre: 'ximena', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'elisaNegro',codigo2:'elisaNegro35', imagen: '../imagenes/elisaNegro.png' , nombre: 'elisa', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'isabellaDorado',codigo2:'isabellaDorado35', imagen: '../imagenes/isabellaDorado.png' , nombre: 'isabella', color:'dorrado', gamaColor:'antiquewhite', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'josephineNatural',codigo2:'josephineNatural35', imagen: '../imagenes/josephineNatural.png' , nombre: 'josephine', color:'natural', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'auroraBeige',codigo2:'auroraBeige', imagen: '../imagenes/auroraBeige.png' , nombre: 'aurora', color:'beige', gamaColor:'beige', precio: 450,llegada:'antiguo',coleccion:'complementos',forro:'tela',plantilla:'-',taco:'-',plataforma:"-",tipo:'carteras',oferta:'si',preciRebaja:400, talla:'',cantidad:0,subtotal:0},

    {codigo1:'auroraBeige',codigo2:'auroraNude', imagen: '../imagenes/auroraNude.png' , nombre: 'aurora', color:'nude', gamaColor:'peachpuff', precio: 450,llegada:'nuevo',coleccion:'complementos',forro:'tela',plantilla:'-',taco:'-',plataforma:"-",tipo:'carteras',oferta:'no',preciRebaja:450,talla:'',cantidad:0,subtotal:0 },

    {codigo1:'auroraBeige',codigo2:'auroraRose', imagen: '../imagenes/auroraRose.png' , nombre: 'aurora', color:'rose', gamaColor:'pink', precio: 450,llegada:'nuevo',coleccion:'complementos',forro:'tela',plantilla:'-',taco:'-',plataforma:"-",tipo:'carteras',oferta:'no',preciRebaja:450,talla:'',cantidad:0,subtotal:0},



    {codigo1:'ccoycaNatural',codigo2:'ccoycaNatural36', imagen: '../imagenes/ccoycaNatural.png' , nombre: 'ccoyca', color:'natural', gamaColor:'brown', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},
    
    {codigo1:'ccoycaBlanco',codigo2:'ccoycaBlanco36', imagen: '../imagenes/ccoycaBlanco.png' , nombre: 'ccoyca', color:'blanco', gamaColor:'white', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'no',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ccoycaNegro',codigo2:'ccoycaNegro36', imagen: '../imagenes/ccoycaNegro.png' , nombre: 'ccoyca', color:'negro', gamaColor:'black', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'hadeTopo',codigo2:'hadeTopo36', imagen: '../imagenes/hadeTopo.png' , nombre: 'hade', color:'topo', gamaColor:'burlywood', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm madera',plataforma:"1cm",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'seleneNegr',codigo2:'seleneNegro36', imagen: '../imagenes/seleneNegro.png' , nombre: 'selene', color:'negro', gamaColor:'black', precio: 360,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'3cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'seleneBlanco',codigo2:'seleneBlanco36', imagen: '../imagenes/seleneBlanco.png' , nombre: 'selene', color:'Blanco', gamaColor:'white', precio: 360,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'4cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ilitiaMarron',codigo2:'ilitiaMarron36', imagen: '../imagenes/ilitiaMarron.png' , nombre: 'ilitia', color:'marron', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'azulaNegro',codigo2:'azulaNegro36', imagen: '../imagenes/azulaNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm eva',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'floraNegro',codigo2:'floraNegro36', imagen: '../imagenes/floraNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"3cm",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'venusNegro',codigo2:'venusNegro36', imagen: '../imagenes/venusNegro.png' , nombre: 'venus', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'venusNatural',codigo2:'venusNatural36', imagen: '../imagenes/venusNatural.png' , nombre: 'venus', color:'natural', gamaColor:'brown', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaAzul',codigo2:'arisonaAzul36', imagen: '../imagenes/arisonaAzul.png' , nombre: 'arisona', color:'azul', gamaColor:'darkblue', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaBeige',codigo2:'arisonaBeige36', imagen: '../imagenes/arisonaBeige.png' , nombre: 'arisona', color:'beige', gamaColor:'navajowhite', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaNegro',codigo2:'arisonaNegro36', imagen: '../imagenes/arisonaNegro.png' , nombre: 'arisona', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'kiaraNegro',codigo2:'kiaraNegro36', imagen: '../imagenes/kiaraNegro.png' , nombre: 'kiara', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'kiaraBeige',codigo2:'kiaraBeige36', imagen: '../imagenes/kiaraBeige.png' , nombre: 'kiara', color:'beige', gamaColor:'navajowhite', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ateneaDorado',codigo2:'ateneaDorado36', imagen: '../imagenes/ateneaDorado.png' , nombre: 'atenea', color:'dorado', gamaColor:'antiquewhite', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'1cm',plataforma:"3cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'irisBlanco',codigo2:'irisBlanco36', imagen: '../imagenes/irisBlanco.png' , nombre: 'iris', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'zoeBlanco',codigo2:'zoeBlanco36', imagen: '../imagenes/zoeBlanco.png' , nombre: 'zoe', color:'blanco', gamaColor:'whitesmoke', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'zoeRose',codigo2:'zoeRose36', imagen: '../imagenes/zoeRose.png' , nombre: 'zoe', color:'rose', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'giselaNude',codigo2:'giselaNude36', imagen: '../imagenes/giselaNude.png' , nombre: 'gisela', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'haidiNude',codigo2:'haidiNude36', imagen: '../imagenes/haidiNude.png' , nombre: 'haidi', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'tayraNegro',codigo2:'tayraNegro36', imagen: '../imagenes/tayraNegro.png' , nombre: 'tayra', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ursulaPrint',codigo2:'ursulaPrint36', imagen: '../imagenes/ursulaPrint.png' , nombre: 'ursula', color:'print', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 2cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:25,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ximenaBlanco',codigo2:'ximenaBlanco36', imagen: '../imagenes/ximenaBlanco.png' , nombre: 'ximena', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'elisaNegro',codigo2:'elisaNegro36', imagen: '../imagenes/elisaNegro.png' , nombre: 'elisa', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'isabellaDorado',codigo2:'isabellaDorado36', imagen: '../imagenes/isabellaDorado.png' , nombre: 'isabella', color:'dorrado', gamaColor:'antiquewhite', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'josephineNatural',codigo2:'josephineNatural36', imagen: '../imagenes/josephineNatural.png' , nombre: 'josephine', color:'natural', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},



    {codigo1:'ccoycaNatural',codigo2:'ccoycaNatural37', imagen: '../imagenes/ccoycaNatural.png' , nombre: 'ccoyca', color:'natural', gamaColor:'brown', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},
    
    {codigo1:'ccoycaBlanco',codigo2:'ccoycaBlanco37', imagen: '../imagenes/ccoycaBlanco.png' , nombre: 'ccoyca', color:'blanco', gamaColor:'white', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'no',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ccoycaNegro',codigo2:'ccoycaNegro37', imagen: '../imagenes/ccoycaNegro.png' , nombre: 'ccoyca', color:'negro', gamaColor:'black', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'hadeTopo',codigo2:'hadeTopo37', imagen: '../imagenes/hadeTopo.png' , nombre: 'hade', color:'topo', gamaColor:'burlywood', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm madera',plataforma:"1cm",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'seleneNegr',codigo2:'seleneNegro37', imagen: '../imagenes/seleneNegro.png' , nombre: 'selene', color:'negro', gamaColor:'black', precio: 370,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'3cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'seleneBlanco',codigo2:'seleneBlanco37', imagen: '../imagenes/seleneBlanco.png' , nombre: 'selene', color:'Blanco', gamaColor:'white', precio: 370,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'4cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ilitiaMarron',codigo2:'ilitiaMarron37', imagen: '../imagenes/ilitiaMarron.png' , nombre: 'ilitia', color:'marron', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'azulaNegro',codigo2:'azulaNegro37', imagen: '../imagenes/azulaNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm eva',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'floraNegro',codigo2:'floraNegro37', imagen: '../imagenes/floraNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"3cm",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'venusNegro',codigo2:'venusNegro37', imagen: '../imagenes/venusNegro.png' , nombre: 'venus', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'venusNatural',codigo2:'venusNatural37', imagen: '../imagenes/venusNatural.png' , nombre: 'venus', color:'natural', gamaColor:'brown', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaAzul',codigo2:'arisonaAzul37', imagen: '../imagenes/arisonaAzul.png' , nombre: 'arisona', color:'azul', gamaColor:'darkblue', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaBeige',codigo2:'arisonaBeige37', imagen: '../imagenes/arisonaBeige.png' , nombre: 'arisona', color:'beige', gamaColor:'navajowhite', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaNegro',codigo2:'arisonaNegro37', imagen: '../imagenes/arisonaNegro.png' , nombre: 'arisona', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'kiaraNegro',codigo2:'kiaraNegro37', imagen: '../imagenes/kiaraNegro.png' , nombre: 'kiara', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'kiaraBeige',codigo2:'kiaraBeige37', imagen: '../imagenes/kiaraBeige.png' , nombre: 'kiara', color:'beige', gamaColor:'navajowhite', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ateneaDorado',codigo2:'ateneaDorado37', imagen: '../imagenes/ateneaDorado.png' , nombre: 'atenea', color:'dorado', gamaColor:'antiquewhite', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'1cm',plataforma:"3cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'irisBlanco',codigo2:'irisBlanco37', imagen: '../imagenes/irisBlanco.png' , nombre: 'iris', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'zoeBlanco',codigo2:'zoeBlanco37', imagen: '../imagenes/zoeBlanco.png' , nombre: 'zoe', color:'blanco', gamaColor:'whitesmoke', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'zoeRose',codigo2:'zoeRose37', imagen: '../imagenes/zoeRose.png' , nombre: 'zoe', color:'rose', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'giselaNude',codigo2:'giselaNude37', imagen: '../imagenes/giselaNude.png' , nombre: 'gisela', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'haidiNude',codigo2:'haidiNude37', imagen: '../imagenes/haidiNude.png' , nombre: 'haidi', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'tayraNegro',codigo2:'tayraNegro37', imagen: '../imagenes/tayraNegro.png' , nombre: 'tayra', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ursulaPrint',codigo2:'ursulaPrint37', imagen: '../imagenes/ursulaPrint.png' , nombre: 'ursula', color:'print', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 2cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:25,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ximenaBlanco',codigo2:'ximenaBlanco37', imagen: '../imagenes/ximenaBlanco.png' , nombre: 'ximena', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'elisaNegro',codigo2:'elisaNegro37', imagen: '../imagenes/elisaNegro.png' , nombre: 'elisa', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'isabellaDorado',codigo2:'isabellaDorado37', imagen: '../imagenes/isabellaDorado.png' , nombre: 'isabella', color:'dorrado', gamaColor:'antiquewhite', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'josephineNatural',codigo2:'josephineNatural37', imagen: '../imagenes/josephineNatural.png' , nombre: 'josephine', color:'natural', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},



    {codigo1:'ccoycaNatural',codigo2:'ccoycaNatural38', imagen: '../imagenes/ccoycaNatural.png' , nombre: 'ccoyca', color:'natural', gamaColor:'brown', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},
    
    {codigo1:'ccoycaBlanco',codigo2:'ccoycaBlanco38', imagen: '../imagenes/ccoycaBlanco.png' , nombre: 'ccoyca', color:'blanco', gamaColor:'white', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'no',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ccoycaNegro',codigo2:'ccoycaNegro38', imagen: '../imagenes/ccoycaNegro.png' , nombre: 'ccoyca', color:'negro', gamaColor:'black', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'hadeTopo',codigo2:'hadeTopo38', imagen: '../imagenes/hadeTopo.png' , nombre: 'hade', color:'topo', gamaColor:'burlywood', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm madera',plataforma:"1cm",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'seleneNegr',codigo2:'seleneNegro38', imagen: '../imagenes/seleneNegro.png' , nombre: 'selene', color:'negro', gamaColor:'black', precio: 380,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'3cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'seleneBlanco',codigo2:'seleneBlanco38', imagen: '../imagenes/seleneBlanco.png' , nombre: 'selene', color:'Blanco', gamaColor:'white', precio: 380,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'4cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ilitiaMarron',codigo2:'ilitiaMarron38', imagen: '../imagenes/ilitiaMarron.png' , nombre: 'ilitia', color:'marron', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'azulaNegro',codigo2:'azulaNegro38', imagen: '../imagenes/azulaNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm eva',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'floraNegro',codigo2:'floraNegro38', imagen: '../imagenes/floraNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"3cm",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'venusNegro',codigo2:'venusNegro38', imagen: '../imagenes/venusNegro.png' , nombre: 'venus', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'venusNatural',codigo2:'venusNatural38', imagen: '../imagenes/venusNatural.png' , nombre: 'venus', color:'natural', gamaColor:'brown', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaAzul',codigo2:'arisonaAzul38', imagen: '../imagenes/arisonaAzul.png' , nombre: 'arisona', color:'azul', gamaColor:'darkblue', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaBeige',codigo2:'arisonaBeige38', imagen: '../imagenes/arisonaBeige.png' , nombre: 'arisona', color:'beige', gamaColor:'navajowhite', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaNegro',codigo2:'arisonaNegro38', imagen: '../imagenes/arisonaNegro.png' , nombre: 'arisona', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'kiaraNegro',codigo2:'kiaraNegro38', imagen: '../imagenes/kiaraNegro.png' , nombre: 'kiara', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'kiaraBeige',codigo2:'kiaraBeige38', imagen: '../imagenes/kiaraBeige.png' , nombre: 'kiara', color:'beige', gamaColor:'navajowhite', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ateneaDorado',codigo2:'ateneaDorado38', imagen: '../imagenes/ateneaDorado.png' , nombre: 'atenea', color:'dorado', gamaColor:'antiquewhite', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'1cm',plataforma:"3cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'irisBlanco',codigo2:'irisBlanco38', imagen: '../imagenes/irisBlanco.png' , nombre: 'iris', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'zoeBlanco',codigo2:'zoeBlanco38', imagen: '../imagenes/zoeBlanco.png' , nombre: 'zoe', color:'blanco', gamaColor:'whitesmoke', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'zoeRose',codigo2:'zoeRose38', imagen: '../imagenes/zoeRose.png' , nombre: 'zoe', color:'rose', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'giselaNude',codigo2:'giselaNude38', imagen: '../imagenes/giselaNude.png' , nombre: 'gisela', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'haidiNude',codigo2:'haidiNude38', imagen: '../imagenes/haidiNude.png' , nombre: 'haidi', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'tayraNegro',codigo2:'tayraNegro38', imagen: '../imagenes/tayraNegro.png' , nombre: 'tayra', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ursulaPrint',codigo2:'ursulaPrint38', imagen: '../imagenes/ursulaPrint.png' , nombre: 'ursula', color:'print', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 2cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:25,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ximenaBlanco',codigo2:'ximenaBlanco38', imagen: '../imagenes/ximenaBlanco.png' , nombre: 'ximena', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'elisaNegro',codigo2:'elisaNegro38', imagen: '../imagenes/elisaNegro.png' , nombre: 'elisa', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'isabellaDorado',codigo2:'isabellaDorado38', imagen: '../imagenes/isabellaDorado.png' , nombre: 'isabella', color:'dorrado', gamaColor:'antiquewhite', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'josephineNatural',codigo2:'josephineNatural38', imagen: '../imagenes/josephineNatural.png' , nombre: 'josephine', color:'natural', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},



    {codigo1:'ccoycaNatural',codigo2:'ccoycaNatural39', imagen: '../imagenes/ccoycaNatural.png' , nombre: 'ccoyca', color:'natural', gamaColor:'brown', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},
    
    {codigo1:'ccoycaBlanco',codigo2:'ccoycaBlanco39', imagen: '../imagenes/ccoycaBlanco.png' , nombre: 'ccoyca', color:'blanco', gamaColor:'white', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'no',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ccoycaNegro',codigo2:'ccoycaNegro39', imagen: '../imagenes/ccoycaNegro.png' , nombre: 'ccoyca', color:'negro', gamaColor:'black', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'hadeTopo',codigo2:'hadeTopo39', imagen: '../imagenes/hadeTopo.png' , nombre: 'hade', color:'topo', gamaColor:'burlywood', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm madera',plataforma:"1cm",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'seleneNegr',codigo2:'seleneNegro39', imagen: '../imagenes/seleneNegro.png' , nombre: 'selene', color:'negro', gamaColor:'black', precio: 390,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'3cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'seleneBlanco',codigo2:'seleneBlanco39', imagen: '../imagenes/seleneBlanco.png' , nombre: 'selene', color:'Blanco', gamaColor:'white', precio: 390,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'4cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ilitiaMarron',codigo2:'ilitiaMarron39', imagen: '../imagenes/ilitiaMarron.png' , nombre: 'ilitia', color:'marron', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'azulaNegro',codigo2:'azulaNegro39', imagen: '../imagenes/azulaNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm eva',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'floraNegro',codigo2:'floraNegro39', imagen: '../imagenes/floraNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"3cm",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'venusNegro',codigo2:'venusNegro39', imagen: '../imagenes/venusNegro.png' , nombre: 'venus', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'venusNatural',codigo2:'venusNatural39', imagen: '../imagenes/venusNatural.png' , nombre: 'venus', color:'natural', gamaColor:'brown', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaAzul',codigo2:'arisonaAzul39', imagen: '../imagenes/arisonaAzul.png' , nombre: 'arisona', color:'azul', gamaColor:'darkblue', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaBeige',codigo2:'arisonaBeige39', imagen: '../imagenes/arisonaBeige.png' , nombre: 'arisona', color:'beige', gamaColor:'navajowhite', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaNegro',codigo2:'arisonaNegro39', imagen: '../imagenes/arisonaNegro.png' , nombre: 'arisona', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'kiaraNegro',codigo2:'kiaraNegro39', imagen: '../imagenes/kiaraNegro.png' , nombre: 'kiara', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'kiaraBeige',codigo2:'kiaraBeige39', imagen: '../imagenes/kiaraBeige.png' , nombre: 'kiara', color:'beige', gamaColor:'navajowhite', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ateneaDorado',codigo2:'ateneaDorado39', imagen: '../imagenes/ateneaDorado.png' , nombre: 'atenea', color:'dorado', gamaColor:'antiquewhite', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'1cm',plataforma:"3cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'irisBlanco',codigo2:'irisBlanco39', imagen: '../imagenes/irisBlanco.png' , nombre: 'iris', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'zoeBlanco',codigo2:'zoeBlanco39', imagen: '../imagenes/zoeBlanco.png' , nombre: 'zoe', color:'blanco', gamaColor:'whitesmoke', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'zoeRose',codigo2:'zoeRose39', imagen: '../imagenes/zoeRose.png' , nombre: 'zoe', color:'rose', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'giselaNude',codigo2:'giselaNude39', imagen: '../imagenes/giselaNude.png' , nombre: 'gisela', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'haidiNude',codigo2:'haidiNude39', imagen: '../imagenes/haidiNude.png' , nombre: 'haidi', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'tayraNegro',codigo2:'tayraNegro39', imagen: '../imagenes/tayraNegro.png' , nombre: 'tayra', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ursulaPrint',codigo2:'ursulaPrint39', imagen: '../imagenes/ursulaPrint.png' , nombre: 'ursula', color:'print', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 2cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:25,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ximenaBlanco',codigo2:'ximenaBlanco39', imagen: '../imagenes/ximenaBlanco.png' , nombre: 'ximena', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'elisaNegro',codigo2:'elisaNegro39', imagen: '../imagenes/elisaNegro.png' , nombre: 'elisa', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'isabellaDorado',codigo2:'isabellaDorado39', imagen: '../imagenes/isabellaDorado.png' , nombre: 'isabella', color:'dorrado', gamaColor:'antiquewhite', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'josephineNatural',codigo2:'josephineNatural39', imagen: '../imagenes/josephineNatural.png' , nombre: 'josephine', color:'natural', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},


    {codigo1:'ccoycaNatural',codigo2:'ccoycaNatural40', imagen: '../imagenes/ccoycaNatural.png' , nombre: 'ccoyca', color:'natural', gamaColor:'brown', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},
    
    {codigo1:'ccoycaBlanco',codigo2:'ccoycaBlanco40', imagen: '../imagenes/ccoycaBlanco.png' , nombre: 'ccoyca', color:'blanco', gamaColor:'white', precio: 300, llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'no',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ccoycaNegro',codigo2:'ccoycaNegro40', imagen: '../imagenes/ccoycaNegro.png' , nombre: 'ccoyca', color:'negro', gamaColor:'black', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'hadeTopo',codigo2:'hadeTopo40', imagen: '../imagenes/hadeTopo.png' , nombre: 'hade', color:'topo', gamaColor:'burlywood', precio: 300,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm madera',plataforma:"1cm",tipo:'botines',oferta:'si',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'seleneNegr',codigo2:'seleneNegro40', imagen: '../imagenes/seleneNegro.png' , nombre: 'selene', color:'negro', gamaColor:'black', precio: 400,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'3cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'seleneBlanco',codigo2:'seleneBlanco40', imagen: '../imagenes/seleneBlanco.png' , nombre: 'selene', color:'Blanco', gamaColor:'white', precio: 400,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'4cm madera',plataforma:"-",tipo:'botines',oferta:'si',preciRebaja:300,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ilitiaMarron',codigo2:'ilitiaMarron40', imagen: '../imagenes/ilitiaMarron.png' , nombre: 'ilitia', color:'marron', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'azulaNegro',codigo2:'azulaNegro40', imagen: '../imagenes/azulaNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm eva',plataforma:"-",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'floraNegro',codigo2:'floraNegro40', imagen: '../imagenes/floraNegro.png' , nombre: 'azula', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'5cm madera',plataforma:"3cm",tipo:'oxforts',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'venusNegro',codigo2:'venusNegro40', imagen: '../imagenes/venusNegro.png' , nombre: 'venus', color:'negro', gamaColor:'black', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'venusNatural',codigo2:'venusNatural40', imagen: '../imagenes/venusNatural.png' , nombre: 'venus', color:'natural', gamaColor:'brown', precio: 250,llegada:'antiguo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"-",tipo:'oxforts',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaAzul',codigo2:'arisonaAzul40', imagen: '../imagenes/arisonaAzul.png' , nombre: 'arisona', color:'azul', gamaColor:'darkblue', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaBeige',codigo2:'arisonaBeige40', imagen: '../imagenes/arisonaBeige.png' , nombre: 'arisona', color:'beige', gamaColor:'navajowhite', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'arisonaNegro',codigo2:'arisonaNegro40', imagen: '../imagenes/arisonaNegro.png' , nombre: 'arisona', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'7cm',plataforma:"2cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'kiaraNegro',codigo2:'kiaraNegro40', imagen: '../imagenes/kiaraNegro.png' , nombre: 'kiara', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'kiaraBeige',codigo2:'kiaraBeige40', imagen: '../imagenes/kiaraBeige.png' , nombre: 'kiara', color:'beige', gamaColor:'navajowhite', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'10cm',plataforma:"3cm",tipo:'plataforma',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ateneaDorado',codigo2:'ateneaDorado40', imagen: '../imagenes/ateneaDorado.png' , nombre: 'atenea', color:'dorado', gamaColor:'antiquewhite', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'1cm',plataforma:"3cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'irisBlanco',codigo2:'irisBlanco40', imagen: '../imagenes/irisBlanco.png' , nombre: 'iris', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'zoeBlanco',codigo2:'zoeBlanco40', imagen: '../imagenes/zoeBlanco.png' , nombre: 'zoe', color:'blanco', gamaColor:'whitesmoke', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'zoeRose',codigo2:'zoeRose40', imagen: '../imagenes/zoeRose.png' , nombre: 'zoe', color:'rose', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'verano',forro:'badana',plantilla:'badana',taco:'5',plataforma:"5cm",tipo:'sandalias',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'giselaNude',codigo2:'giselaNude40', imagen: '../imagenes/giselaNude.png' , nombre: 'gisela', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'haidiNude',codigo2:'haidiNude40', imagen: '../imagenes/haidiNude.png' , nombre: 'haidi', color:'nude', gamaColor:'peachpuff', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'tayraNegro',codigo2:'tayraNegro40', imagen: '../imagenes/tayraNegro.png' , nombre: 'tayra', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ursulaPrint',codigo2:'ursulaPrint40', imagen: '../imagenes/ursulaPrint.png' , nombre: 'ursula', color:'print', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 2cm',plataforma:"-",tipo:'zapatillas',oferta:'no',preciRebaja:25,talla:'',cantidad:0,subtotal:0},

    {codigo1:'ximenaBlanco',codigo2:'ximenaBlanco40', imagen: '../imagenes/ximenaBlanco.png' , nombre: 'ximena', color:'blanco', gamaColor:'white', precio: 250,llegada:'nuevo',coleccion:'invierno',forro:'badana',plantilla:'badana',taco:'planta 3cm',plataforma:"-",tipo:'zapatillas',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'elisaNegro',codigo2:'elisaNegro40', imagen: '../imagenes/elisaNegro.png' , nombre: 'elisa', color:'negro', gamaColor:'black', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

    {codigo1:'isabellaDorado',codigo2:'isabellaDorado40', imagen: '../imagenes/isabellaDorado.png' , nombre: 'isabella', color:'dorrado', gamaColor:'antiquewhite', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'si',preciRebaja:220,talla:'',cantidad:0,subtotal:0},

    {codigo1:'josephineNatural',codigo2:'josephineNatural40', imagen: '../imagenes/josephineNatural.png' , nombre: 'josephine', color:'natural', gamaColor:'brown', precio: 250,llegada:'nuevo',coleccion:'mediaEstacion',forro:'badana',plantilla:'badana',taco:'eva 2cm',plataforma:"-",tipo:'loafers',oferta:'no',preciRebaja:250,talla:'',cantidad:0,subtotal:0},

];
var param=window.location.search.slice(3);
function cargap(){
    productos.forEach(element => {
        if(element.codigo==param){
            p=productosTallas.indexOf(element);
            let botonCar=document.getElementById("botonCar");
            botonCar.setAttribute("class","add-cart");
            let add=document.querySelectorAll('.add-cart');
            for(let i=0; i< add.length; i++){
                add[i].addEventListener('click',() =>{
                    cartNumbers(productosTallas[p]);
                    totalCost(productosTallas[p]);
                })
            }
        }
    });
};

function onloadCarritoCantidad(){
    let cantidadProductos = localStorage.getItem('cartNumbers');
    if(cantidadProductos){
        document.querySelector('.cantidadCarrito').textContent = cantidadProductos;
    }
}

function cartNumbers(product) {
    let cantidadProductos=localStorage.getItem('cartNumbers');
    cantidadProductos = parseInt(cantidadProductos);
    let cantidad=parseInt(document.getElementById('botonCantidad').value);
    if(cantidadProductos){
        localStorage.setItem('cartNumbers', cantidadProductos + cantidad);
        document.querySelector('.cantidadCarrito').textContent = cantidadProductos + cantidad;
    }else{
        localStorage.setItem('cartNumbers',cantidad);
        document.querySelector('.cantidadCarrito').textContent = cantidad;
    }
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    // let talla=document.getElementById('tallaBoton').value;
    let cantidad=parseInt(document.getElementById('botonCantidad').value);
    
    if(product.tipo=="carteras"){
        product.codigo2=product.codigo1;
    }else{
        let talla=document.getElementById('tallaBoton').value;
        product.talla=talla;
        product.codigo2=product.codigo1+talla;
    }
        if(cartItems != null){
            if(cartItems[product.codigo2] == undefined ){
                product.cantidad=cantidad;
                cartItems = {
                    ...cartItems,
                    [product.codigo2]: product
                }
            }else{
                cartItems[product.codigo2].cantidad += cantidad;
            }
            
        }else{
            product.cantidad=cantidad;
            cartItems = {
                [product.codigo2]: product
            }
        }
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem("totalCost");
    let cantidad=parseInt(document.getElementById('botonCantidad').value);
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + (product.preciRebaja*cantidad))
    }else{
        localStorage.setItem("totalCost",product.preciRebaja*cantidad);
    }

}

function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem("totalCost");
    let productContainer = document.querySelector(".productosCarrito");
    if(cartItems && productContainer){
        productContainer.innerHTML='';
        Object.values(cartItems).map(item =>{
            item.subtotal=item.cantidad*item.preciRebaja;
            productContainer.innerHTML+=`
            <section class="elementos">
            <div class="producto">
                <div class="foto">
                    <img src="${item.imagen}" alt="">
                </div>
                <div class="descripcion">
                    <ul>
                        <li><a href="../html/producto.html?p=${item.codigo1}"><p class="MODELO">${item.nombre.toUpperCase()}</p></a></li>
                        <li><p>${item.talla} ${item.color.toUpperCase()}</p></li>
                        <li><p>S/. ${item.preciRebaja}.00</p></li>
                    </ul>
                </div>
            </div>
            <div class="cantidad">
                <ul>
                    <div class="cantidadCar"><button class="bAdicionar" onclick="restarElemento('${item.codigo2}')" href="">-</button><p class="cantidadNum">${item.cantidad}</p><button class="bRestar" onclick="adicionarElemento('${item.codigo2}')" href="">+</button></div>
                    <li><button class="deleteProducto" onclick="eliminarElemento('${item.codigo2}')" href="">ELIMINAR</button></li>
                </ul>
            </div>
            
            <div class="total">

                <p class="precio">S/. ${item.subtotal}.00</p>
            </div>
            </section>`
        });
        productContainer.innerHTML += `
        <article class="tercerNivel">
            <div class="nota">
                <div>
                    <p>Añadir una nota de pedido</p>
                    <textarea name="nota" id="nota" cols="50" rows="4" placeholder="¿En que podemos ayudarte?"></textarea>
                </div>
            </div>
            <div class="total">
                <p>TOTAL: S/. ${cartCost}.00</p>
                <p>Los gastos de envio se evaluaran al finalizar</p>
                <button type="submit" class="btn-pagar">IR A PAGAR</button>
            </div>
        </article>`;
    }
   
}

function eliminarElemento(e){
    let carrito=localStorage.getItem('productsInCart');
    let cantidadCarrito=localStorage.getItem('cartNumbers');
    let costoTotal=localStorage.getItem('totalCost');
    carrito = JSON.parse(carrito);
    let cantidadResta=carrito[e].cantidad;
    let cantidadCostResta=carrito[e].preciRebaja*cantidadResta;
    let quedan=cantidadCarrito-cantidadResta;
    localStorage.setItem('cartNumbers',quedan)
    localStorage.setItem('totalCost',costoTotal-cantidadCostResta)
    delete carrito[e];
    carrito = JSON.stringify(carrito);
    localStorage.setItem('productsInCart',carrito);
    document.querySelector('.cantidadCarrito').textContent = quedan;
    displayCart();
}

function adicionarElemento(e){
    let carrito=localStorage.getItem('productsInCart');
    let cantidadCarrito=localStorage.getItem('cartNumbers');
    let costoTotal=parseInt(localStorage.getItem('totalCost'));
    carrito = JSON.parse(carrito);
    let cantidadCostSuma=parseInt(carrito[e].preciRebaja);
    let quedan=parseInt(cantidadCarrito)+1;
    localStorage.setItem('cartNumbers',quedan)
    localStorage.setItem('totalCost',costoTotal+cantidadCostSuma)
    carrito[e].cantidad+=1;
    carrito = JSON.stringify(carrito);
    localStorage.setItem('productsInCart',carrito);
    document.querySelector('.cantidadCarrito').textContent = quedan;
    displayCart();

}

function restarElemento(e){
    let carrito=localStorage.getItem('productsInCart');
    let cantidadCarrito=localStorage.getItem('cartNumbers');
    let costoTotal=parseInt(localStorage.getItem('totalCost'));
    carrito = JSON.parse(carrito);
    let cantidadCostResta=parseInt(carrito[e].preciRebaja);
    let quedan=parseInt(cantidadCarrito)-1;
    if(carrito[e].cantidad<=1){
        delete carrito[e];      
    }else{
        carrito[e].cantidad-=1;
    }
    localStorage.setItem('cartNumbers',quedan)
    localStorage.setItem('totalCost',costoTotal-cantidadCostResta);

    carrito = JSON.stringify(carrito);
    localStorage.setItem('productsInCart',carrito);
    document.querySelector('.cantidadCarrito').textContent = quedan;
    displayCart();
}
cargap();
displayCart();
onloadCarritoCantidad();
