//Resisencia Interna: Se utiliza para calcular el valor en base a los colores elegidos
var resistencia = new Array();

/*
    Mapeo de Imagenes: Se utiliza para guardar las rutas de las imágenes donde:
    - clave: es el id de cada imagen
    - valor: es la ruta a la imagen
*/
var mapImagenes = new Map();

//Cargamos el mapeo con las rutas de las imagenes
//Imágenes del medio
mapImagenes.set("b-h-bk","imagenes/resistencias/b-h-bk.png");
mapImagenes.set("b-v-bk","imagenes/resistencias/b-v-bk.png");
mapImagenes.set("b-h-bl","imagenes/resistencias/b-h-bl.png");
mapImagenes.set("b-v-bl","imagenes/resistencias/b-v-bl.png");
mapImagenes.set("b-h-br","imagenes/resistencias/b-h-br.png");
mapImagenes.set("b-v-br","imagenes/resistencias/b-v-br.png");
mapImagenes.set("b-h-gd","imagenes/resistencias/b-h-gd.png");
mapImagenes.set("b-v-gd","imagenes/resistencias/b-v-gd.png");
mapImagenes.set("b-h-gn","imagenes/resistencias/b-h-gn.png");
mapImagenes.set("b-v-gn","imagenes/resistencias/b-v-gn.png");
mapImagenes.set("b-h-gr","imagenes/resistencias/b-h-gr.png");
mapImagenes.set("b-v-gr","imagenes/resistencias/b-v-gr.png");
mapImagenes.set("b-h-or","imagenes/resistencias/b-h-or.png");
mapImagenes.set("b-v-or","imagenes/resistencias/b-v-or.png");
mapImagenes.set("b-h-pk","imagenes/resistencias/b-h-pk.png");
mapImagenes.set("b-v-pk","imagenes/resistencias/b-v-pk.png");
mapImagenes.set("b-h-rd","imagenes/resistencias/b-h-rd.png");
mapImagenes.set("b-v-rd","imagenes/resistencias/b-v-rd.png");
mapImagenes.set("b-h-sv","imagenes/resistencias/b-h-sv.png");
mapImagenes.set("b-v-sv","imagenes/resistencias/b-v-sv.png");
mapImagenes.set("b-h-wt","imagenes/resistencias/b-h-wt.png");
mapImagenes.set("b-v-wt","imagenes/resistencias/b-v-wt.png");
mapImagenes.set("b-h-yw","imagenes/resistencias/b-h-yw.png");
mapImagenes.set("b-v-yw","imagenes/resistencias/b-v-yw.png");

//Imágenes de Cabecera
mapImagenes.set("h-h-bk","imagenes/resistencias/h-h-bk.png");
mapImagenes.set("h-v-bk","imagenes/resistencias/h-v-bk.png");
mapImagenes.set("h-h-bl","imagenes/resistencias/h-h-bl.png");
mapImagenes.set("h-v-bl","imagenes/resistencias/h-v-bl.png");
mapImagenes.set("h-h-br","imagenes/resistencias/h-h-br.png");
mapImagenes.set("h-v-br","imagenes/resistencias/h-v-br.png");
mapImagenes.set("h-h-gn","imagenes/resistencias/h-h-gn.png");
mapImagenes.set("h-v-gn","imagenes/resistencias/h-v-gn.png");
mapImagenes.set("h-h-gr","imagenes/resistencias/h-h-gr.png");
mapImagenes.set("h-v-gr","imagenes/resistencias/h-v-gr.png");
mapImagenes.set("h-h-pk","imagenes/resistencias/h-h-pk.png");
mapImagenes.set("h-v-pk","imagenes/resistencias/h-v-pk.png");
mapImagenes.set("h-h-rd","imagenes/resistencias/h-h-rd.png");
mapImagenes.set("h-v-rd","imagenes/resistencias/h-v-rd.png");
mapImagenes.set("h-h-wt","imagenes/resistencias/h-h-wt.png");
mapImagenes.set("h-v-wt","imagenes/resistencias/h-v-wt.png");
mapImagenes.set("h-h-yw","imagenes/resistencias/h-h-yw.png");
mapImagenes.set("h-v-yw","imagenes/resistencias/h-v-yw.png");
mapImagenes.set("h-h-or","imagenes/resistencias/h-h-or.png");
mapImagenes.set("h-v-or","imagenes/resistencias/h-v-or.png");

//Imágenes de Cola
mapImagenes.set("t-h-bl","imagenes/resistencias/t-h-bl.png");
mapImagenes.set("t-v-bl","imagenes/resistencias/t-v-bl.png");
mapImagenes.set("t-h-br","imagenes/resistencias/t-h-br.png");
mapImagenes.set("t-v-br","imagenes/resistencias/t-v-br.png");
mapImagenes.set("t-h-gd","imagenes/resistencias/t-h-gd.png");
mapImagenes.set("t-v-gd","imagenes/resistencias/t-v-gd.png");
mapImagenes.set("t-h-gn","imagenes/resistencias/t-h-gn.png");
mapImagenes.set("t-v-gn","imagenes/resistencias/t-v-gn.png");
mapImagenes.set("t-h-gr","imagenes/resistencias/t-h-gr.png");
mapImagenes.set("t-v-gr","imagenes/resistencias/t-v-gr.png");
mapImagenes.set("t-h-or","imagenes/resistencias/t-h-or.png");
mapImagenes.set("t-v-or","imagenes/resistencias/t-v-or.png");
mapImagenes.set("t-h-pk","imagenes/resistencias/t-h-pk.png");
mapImagenes.set("t-v-pk","imagenes/resistencias/t-v-pk.png");
mapImagenes.set("t-h-rd","imagenes/resistencias/t-h-rd.png");
mapImagenes.set("t-v-rd","imagenes/resistencias/t-v-rd.png");
mapImagenes.set("t-h-sv","imagenes/resistencias/t-h-sv.png");
mapImagenes.set("t-v-sv","imagenes/resistencias/t-v-sv.png");
mapImagenes.set("t-h-yw","imagenes/resistencias/t-h-yw.png");
mapImagenes.set("t-v-yw","imagenes/resistencias/t-v-yw.png");

//imagen nula
mapImagenes.set("null","imagenes/resistencias/null.png");

/*
    Mapeo de Valores: Se utiliza para guardar los valores de cada color donde:
    - clave: es el id de cada color-ubicacion
    - valor: es el valor asociado
*/
var mapValores = new Map();

mapValores.set("bk-col",0);
mapValores.set("bk-mul",1);

mapValores.set("br-col",1);
mapValores.set("br-mul",10);
mapValores.set("br-tol",1);
mapValores.set("br-ppm",100);

mapValores.set("rd-col",2);
mapValores.set("rd-mul",100);
mapValores.set("rd-tol",2);
mapValores.set("rd-ppm",100);

mapValores.set("or-col",3);
mapValores.set("or-mul",1000);
mapValores.set("or-ppm",15);

mapValores.set("yw-col",4);
mapValores.set("yw-mul",10000);
mapValores.set("yw-ppm",25);

mapValores.set("gn-col",5);
mapValores.set("gn-mul",100000);
mapValores.set("gn-tol",0.5);

mapValores.set("bl-col",6);
mapValores.set("bl-mul",1000000);
mapValores.set("bl-tol",0.25);
mapValores.set("bl-ppm",10);

mapValores.set("pk-col",7);
mapValores.set("pk-mul",10000000);
mapValores.set("pk-tol",0.1);
mapValores.set("pk-ppm",5);

mapValores.set("gr-col",8);
mapValores.set("gr-mul",100000000);
mapValores.set("gr-tol",0.05);

mapValores.set("wt-col",9);
mapValores.set("wt-mul",1000000000);

mapValores.set("gd-mul",0.1);
mapValores.set("gd-tol",5);

mapValores.set("sv-mul",0.01);
mapValores.set("sv-tol",10);

/*
    Variables de control: Se utilizan para manipular los datos almacenados en
    el localStorage
*/
var pos = 0;
var cant = localStorage.length;

// Se usa para verificar el caso de ingresar dos o más veces el punto (Ej: 12.34.5)
var decimales = false;


//---------------------------------------------------------Manejo de MOD--------------------------------------------

/**
 * Setea como visible al elemento de MOD que es pasado por parametro
 * @param {*} id es el id del elemento a visualizar
 */
function mostrarAlerta(mensaje)
{
    document.getElementById("mensaje-alerta").innerHTML = mensaje;
}

/**
 * Setea como visible al elemento de MOD que es pasado por parametro
 */
function ocultarAlerta()
{
    document.getElementById("mensaje-alerta").innerHTML = "";
} 


/**
 * Setea como visible al elemento de MOD que es pasado por parametro
 * @param {*} id es el id del elemento a visualizar
 */
function mostrarElemento(id)
{
    document.getElementById(id).style.display = "flex";  
}   

/**
 * Setea como oculto al elemento de MOD que es pasado por parametro
 * @param {*} id es el id del elemento a ocultar
 */
function ocultarElemento(id)
{
    document.getElementById(id).style.display = "none";  
}  
//-------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------Color a Valor -------------------------------------------------
/**
 * Inicializa la pantalla pantalla y la configuracion inicial de la resistencia interna (se utiliza para los calculos)
 * con una configuración básica.
 * @param {*} n es la canitdad de bandas de la resistencia a mostrar
 */
function inicializarResistencia(n)
{
    resistencia[0] = n; //flag cant_bandas
    
    //inicializamos las bandas de Color en 0 (Negro)
    resistencia[1] = 0;         //1era banda de Color
    resistencia[2] = 0;         //2da banda de Color

    //Mostramos las filas correspondientes a:
    mostrarElemento("fila1");      //1er Banda de Color
    mostrarElemento("fila2");      //2do Banda de Color
    mostrarElemento("filaMul");    //Banda de Multiplicador
    mostrarElemento("filaTol");    //Banda de Tolerancia

    
    //Mostramos y seteamos los valores de la 1era, 2da banda y de la banda de multiplicador
    document.getElementById("v-0").src = "imagenes/resistencias/h-v-bk.png";
    document.getElementById("v-0").value = 0;
    document.getElementById("v-1").src = "imagenes/resistencias/b-v-bk.png";
    document.getElementById("v-1").value = 0;
    document.getElementById("v-3").src = "imagenes/resistencias/b-v-bk.png";
    document.getElementById("v-3").value = 1;
    switch(n)
    {
        case "4":
        {
            //Cargamos el multiplicador inicial en la resistencia interna
            resistencia[3] = 1;             //Multiplicador

            ocultarElemento("fila3");       //Ocultamos la fila de la 3er banda de Color
            ocultarElemento("filaPpm");     //Ocultamos la fila de la banda de PPM
            
            //Mostramos la banda de tolerancia y cargamos con un balor inicial
            document.getElementById("v-4").src = "imagenes/resistencias/t-v-gd.png";
            document.getElementById("v-4").value = 5;
            document.getElementById("v-5").value = 0;
            break;
        }
        case "5":
        {
            //Cargamos la 3er banda y el multiplicador inicial en la resistencia interna
            resistencia[3] = 0;             //3era banda de Color
            resistencia[4] = 1;             //Multiplicador

            mostrarElemento("fila3");       //Mostramos la fila de la 3er banda de Color
            ocultarElemento("filaPpm");     //Ocultamos la fila de la banda de PPM

            //Mostramos la 3er banda de color y la banda de tolerancia, y las cargamos con un balor inicial
            document.getElementById("v-2").src = "imagenes/resistencias/b-v-bk.png";
            document.getElementById("v-2").value = 0;
            document.getElementById("v-4").src = "imagenes/resistencias/t-v-gd.png";
            document.getElementById("v-4").value = 5;
            document.getElementById("v-5").value = 0;
            break;
        }
        default:
        {
            //Cargamos la 3er banda y el multiplicador inicial en la resistencia interna
            resistencia[3] = 0;             //3era banda de Color
            resistencia[4] = 1;             //Multiplicador

            mostrarElemento("fila3");       //Mostramos la fila de la 3er banda de Color
            mostrarElemento("filaPpm");     //Mostramos la fila de la banda de PPM

            ////Mostramos la 3er banda de color, tolerancia y ppm y las cargamos con un balor inicial
            document.getElementById("v-2").src = "imagenes/resistencias/b-v-bk.png";
            document.getElementById("v-2").value = 0;
            document.getElementById("v-4").src = "imagenes/resistencias/b-v-gd.png";
            document.getElementById("v-4").value = 5;
            document.getElementById("v-5").src = "imagenes/resistencias/t-v-br.png";
            document.getElementById("v-5").value = 100;
        }
    }
    //Calculamos el valor para mostrar en la etiqueta resultado
    calcularValor();
}

/**
 * Obtiene el id del color seleccionado para decodificarlo y:
 *  - obtener la imagen correspondiente
 *  - obtener el destino de la imagen
 *  - obtener el valor asociado al color seleccionado
 * @param {*} elemento es la imagen del color seleccionado
 */
function seleccionarColor(elemento)
{
    var id;
    if (resistencia[0] < 6) 
    {
        id = elemento.id.replace("x","t");
    }
    else
    {
        id = elemento.id.replace("x","b");
    }

    var id_imagen = id.substring(0,6);
    var id_valor = id.substring(4,10);
    var id_destino = id.substring(11,14);

    var source = obtenerColor(id_imagen);
    var valor = obtenerValorColor(id_valor); 
    
    document.getElementById(id_destino).src = source;
    document.getElementById(id_destino).value = valor;
    
    calcularValor();
}

/**
 * retorna el valor requerido obtenido del mapeo de valores
 * @param {*} id_valor es la clave en el mapeo del valor requerido
 */
function obtenerValorColor(id_valor)
{
    return mapValores.get(id_valor);
}

/**
 * retorna la ruta del color requerido obtenida del mapeo de colores
 * @param {*} id es la clave en el mapeo del color requerido
 */
function obtenerColor(id)
{
    return mapImagenes.get(id);
}

/**
 * Obtiene el valor total de la resistencia interna, acorta el resultado las escalas mayores
 * si es posible y luego muestra el resultado en la etiqueta de resultado en un formato adecuado
 */
function calcularValor()
{
    var resultado = obtenerValor();

    //Acortamos el resultado y aumentamos la escala lo más posible
    var unidad = "Ω";
    if(resultado > 1000)
    {
        resultado = resultado/1000;
        if(resultado > 1000)
        {
            resultado = resultado/1000;
            if(resultado > 1000)
            {
                resultado = resultado/1000;
                unidad = " GΩ";
            }
            else
            {
                unidad = " MΩ";
            }
        }
        else
        {
            unidad = " KΩ";
        }
    }
    else
    {
        if(resultado < 10)
        {
            resultado.toFixed(2);
        }

    }
    var tolerancia = document.getElementById("v-4").value;
    var ppm = document.getElementById("v-5").value;
    resultado = resultado + unidad + " Tolerancia: " + tolerancia + "% PPM: "+ppm;
    
    document.getElementById("label-resultado").innerHTML = resultado; 
}

/**
 *  Recorre la resistencia interna, calcula el valor total de la misma
 *  y lo devuelve
 */   
function obtenerValor()
{
    var salida = 0;
    switch(resistencia[0])
    {
        case "4":
        {
            resistencia[1] = document.getElementById("v-0").value;  //banda color 1
            resistencia[2] = document.getElementById("v-1").value;  //banda color 2
            resistencia[3] = document.getElementById("v-3").value;  //banda multiplicador

            //Calculamos el valor de la resistencia actual
            salida = (resistencia[1]*10 + resistencia[2]) * resistencia[3];

            break;
        }
        default:
        {
            resistencia[1] = document.getElementById("v-0").value;  //banda color 1
            resistencia[2] = document.getElementById("v-1").value;  //banda color 2
            resistencia[3] = document.getElementById("v-2").value;  //banda color 3
            resistencia[4] = document.getElementById("v-3").value;  //banda multiplicador

            //Calculamos el valor de la resistencia actual
            salida = (resistencia[1]*100 + resistencia[2]*10 + resistencia[3]) * resistencia[4];
        }
    }
    return salida;
}

//----------------------------------------------------------------------------------------------------------
//-----------------------------------------------valor a color----------------------------------------------
/**
 * Obtiene toda la información de entrada requerida, controla que sean valores correctos y luego muestra
 * la resistencia con la configuración de colores correspondiente.
 * Si el valor el correcto, almacena el dato en el localStorage y actualiza el historial de consultas.
 */
function mostrarColores()
{
    //recuperamos el valor ingresado
    var ohms_in = document.getElementById("input-numero").value;
    //vaciamos la celda input
    document.getElementById("input-numero").value=null;
    //reseteamos el flag de decimales (para vover a usar el . por una vez)
    decimales = false;
    //recuperamos el multiplicador elegido
    var mul = document.getElementById("seleccion-multiplicador").value;
    //calculamos el valor real de resistencia ingresado
    ohms = ohms_in * (Math.pow(10,mul));
   
    //Si no entra a ningun if, ocurrió un error (datos invalidos de entrada o datos ingresados no representables)
    var resultado = "error";

    if(controlarIngreso(ohms))
    {
        //Recuperamos la tolerancia y el ppm
        var tol = document.getElementById("seleccion-tolerancia").value;
        var ppm_in = document.getElementById("seleccion-ppm").value;
        var banda1 = 0;
        var banda2 = 0;
               
        mul = 0;
        var aux = ohms;

        //Segun la cantidad de bandas recuperamos las bandas de colores y multiplicador
        if (calcularCantidadBandas(aux,ppm_in))
        {
            // 4 Bandas
            //Obtenemos la 1er y 2da banda en aux
            //y el multiplicador en mul
            while(aux >= 100)
            {
                aux = aux / 10;
                mul++;
                if(aux < 100 && Math.round(aux) != aux)
                {
                    aux = Math.round(aux);
                }
            }
            if(aux < 1)
            {
                aux = aux * 100;
                mul = -2;
            }
            else
            {
                if(aux < 10)
                {
                    aux = aux * 10;
                    mul = -1;
                }
            }

            //Obtenemos el valor de cada banda por separado
            banda1 = Math.trunc(aux / 10);
            banda2 = Math.trunc(aux % 10);

            //Obtenemos los colores correspondientes y seteamos las imagenes
            document.getElementById("banda 1").src = codificarColor("h","col",banda1+"");
            document.getElementById("banda 2").src = codificarColor("b","col",banda2+"");
            document.getElementById("banda 3").src = codificarColor("b","mul",mul+"");
            document.getElementById("banda 4").src = codificarColor("t","tol",tol);
            document.getElementById("banda 5").src = "imagenes/resistencias/null.png";
            document.getElementById("banda 6").src = "imagenes/resistencias/null.png";

            //cambiamos el formato de muestra del valor ingresado
            //"b1b2 x mul" ;donde b1=banda de color1, b2=banda de color 2, mul=10emul
            ohms = banda1*10 + banda2;
            ohms = ohms + "x"+(Math.pow(10,mul));

            resultado = ohms+"Ω Tolerancia: ±"+tol;
        }
        else
        {
            //0,nnn no son permitidos porque no pueden representarse,
            //ya que solo se pueden usar multiplos 0.1 y 0.01
            if (aux > 1) 
            {
                // 5/6 Bandas
                //Obtenemos la 1er, 2da y 3er banda en aux
                //y el multiplicador en mul
                while(aux >= 1000)
                {
                    aux = aux / 10;
                    mul++;
                    if(aux < 1000 && Math.round(aux) != aux)
                    {
                        aux = Math.round(aux);
                    }
                }
                if(aux < 10)
                {
                    aux = aux * 100;
                    banda1 = 0;
                    mul = -2;
                }
                else
                {
                    if(aux < 100)
                    {
                        aux = aux * 10;
                        mul = -1;   
                    }
                }
        
                //Obtenemos el valor de cada banda por separado
                banda1 = Math.trunc(aux / 100);
                aux = Math.trunc(aux % 100);
                banda2 = Math.trunc(aux / 10);
                banda3 = Math.trunc(aux % 10);

                //cambiamos el formato de muestra del valor ingresado
                //"b1b2b3 x mul" ;donde b1=banda de color1, b2=banda de color 2, b3=banda de color 3, mul=10emul
                ohms = banda1*100 + banda2*10 + banda3;
                ohms = ohms + "x"+(Math.pow(10,mul));

                if(ppm_in == 0)
                {
                    //5 Bandas
                    //Obtenemos los colores correspondientes y seteamos las imagenes
                    document.getElementById("banda 1").src = codificarColor("h","col",banda1+"");
                    document.getElementById("banda 2").src = codificarColor("b","col",banda2+"");
                    document.getElementById("banda 3").src = codificarColor("b","col",banda3+"");
                    document.getElementById("banda 4").src = codificarColor("b","mul",mul+"");
                    document.getElementById("banda 5").src = codificarColor("t","tol",tol);
                    document.getElementById("banda 6").src = "imagenes/resistencias/null.png";

                    resultado = ohms+"Ω Tolerancia: ±"+tol;
                }
                else
                {
                    //6 Bandas
                    //Obtenemos los colores correspondientes y seteamos las imagenes
                    document.getElementById("banda 1").src = codificarColor("h","col",banda1+"");
                    document.getElementById("banda 2").src = codificarColor("b","col",banda2+"");
                    document.getElementById("banda 3").src = codificarColor("b","col",banda3+"");
                    document.getElementById("banda 4").src = codificarColor("b","mul",mul+"");
                    document.getElementById("banda 5").src = codificarColor("b","tol",tol);
                    document.getElementById("banda 6").src = codificarColor("t","ppm",ppm_in);

                    resultado = ohms+"Ω Tolerancia: ±"+tol+" PPM: "+ppm_in;
                }
            } 
            else
            {
                var mensaje = "Valor ingresado no representable."
                mostrarAlerta(mensaje);
            }
                        
        }
    }
    else
    {
        var mensaje = "Valor ingresado incorrecto."
        mostrarAlerta(mensaje);
    }

    if(resultado != "error")
    {
        ocultarAlerta();
        document.getElementById("nodo-calculo").innerHTML = resultado;
        insertarHistorial(resultado);
    }        
}

/**
 * En base a ciertos datos de entrada se obtiene la clave en el mapeo
 * para conseguir la ruta de una determinada imagen
 * @param {*} modo es el modo de la image (h= head, b=body, t=tale)
 * @param {*} tipo es el tipo de banda que se esta pidiendo (col=color, mul=multiplicador, tol=tolerancia, ppm=ppm)
 * @param {*} valor es el valor correspondiente al color requerido (1: marrón si el tipo es col, pero negro si es mul)
 */
function codificarColor(modo, tipo, valor)
{
    var codigo = "imagenes/resistencias/"+ modo + "-h-";
    switch(valor)
    {
        case '0':
            codigo += "bk"
            break;

        case '1':
            codigo += "br";
            break;

        case '2':
            codigo += "rd";
            break;

        case '3':
            codigo += "or";
            break;

        case '4':
            codigo += "yw";
            break;
        
        case '5':
        {
            if (tipo == "ppm")
            {
                codigo += "pk";
            } 
            else 
            {
                if (tipo == "tol")
                {
                    codigo += "gd";
                }
                else
                {
                    codigo += "gn";
                }
            }
            break;
        }
        case '6':
            codigo += "bl";
            break;
        
        case '7':
            codigo += "pk";
            break;
        
        case '8':
            codigo += "gr";
            break;
        
        case '9':
            codigo += "wt";
            break;

        case '0.05':
            codigo += "gr";
            break;
        
        case '0.1':
            codigo += "pk";
            break;

        case '0.5':
            codigo += "gn";
            break;

        case '0.25':
            codigo += "bl";
            break;

        case '10':
            codigo += "bl";
            break;

        case '15':
            codigo += "or";
            break;

        case '25':
            codigo += "yw";
            break;

        case '50':
            codigo += "pk";
            break;

        case '100':
            codigo += "br";
            break;

        case '-1':
            codigo += "gd";
            break;

        case '-2':
            codigo += "sv";
            break;
    }
    return codigo +".png";
}

/**
 * Calcula la cantidad de bandas dentro del valor ingresado (12000, dos bandas: 1 y 2; 1230000, tres bandas: 1, 2 y 3)
 * @param {*} ohms es el valor de resistencia ingresado
 * @param {*} ppm_in es el ppm seleccionado,se utiliza para diferenciar las resistencias de 5 y 6 bandas
 */
function calcularCantidadBandas(ohms, ppm_in)
{
    var salida = true;
    if (ppm_in > 0)
    {
        salida = false;
    }
    else
    {
        if(ohms < 1)
        {
            //0,nn
            ohms = Math.trunc(ohms * 1000);
        }
        else
        {
            if(ohms < 10)
            {
                //n,n
                ohms = Math.trunc(ohms * 100);
            }
        }
    
        //nn(0´s)
        var seguir = true;
        while(seguir)
        {
            
            if(ohms < 100 && Math.round(ohms) != ohms)
            {
                if(ohms > 10)
                {
                    //nn,n
                    salida = false;
                }
                seguir = false;
            }
            ohms = ohms / 10;
        }
    }
    return salida;
}

/**
 * controla que no se ingrese un valor fuera del rango de lo representable por el codigo de colores
 * o un valor no representable (un numero con mas de 3 numeros distintos de 0 en su interior)
 * @param {*} valor es el valor de resistencia ingresado
 */
function controlarIngreso(valor)
{
    var valida = true;
    //verifico que no sea un numero fuera del rango posible de valores
    if (valor <= 0 || valor >= 1000000000000)
    {
        valida = false;
    }
    else
    {
        //si el valor ingresado tiene más de 4 cifras
        //verifico que sea del estilo nnn+0's, donde n = [0,1,2,..,9]
        valor *= 1000;
        var seguir = true;
        while(seguir && valor > 1)
        {
            if(valor >= 100 && Math.round(valor) != valor)
            {
                valida = false;
                seguir = false;
            }
            valor = valor / 10;
        }
    }
    return valida;
}

/**
 * chequea cada caracter ingresado (se ejecuta cada vez que se toca una tecla dentro del input)
 * verifica que este dentro del rango de numeros (0..9) y si es un punto, se verifica que no se
 * haya otro punto anteriormente (flag decimales)
 * @param {*} elemento es el elemento input donde se ingresa la valor de la resistencia
 */
function chequearTeclaIngreso(elemento)
{
    var str = elemento.value;
    if (str.charCodeAt(str.length -1) == 46)
    {
        if(!decimales)
        {
            decimales = true;
        }
        else
        {
            elemento.value = null;
            decimales = false;
            var mensaje = "Valor ingresado no válido."
            mostrarAlerta(mensaje);
        }
    } 
    else
    {
        if(str.charCodeAt(str.length -1) < 48 || str.charCodeAt(str.length -1) > 57)
        {
            elemento.value = null;
            decimales = false;
            var mensaje = "No se permite la entrada de letras."
            mostrarAlerta(mensaje);
        }
    }
}

/**
 * Almacena el ultimo resultado exitoso dentro de los datos del ususario en el navegador (localStorage)
 * y llama a actualizar el historial
 * @param {*} resultado es el resultado exitoso a agregar al histotrial
 */
function insertarHistorial(resultado)
{
    //Almaceno el resultado en los datos del usuario
    if(cant < 5)
    {
        localStorage.setItem(pos, resultado);
        pos = (pos + 1) % 5;
        cant++;
    }
    else
    {
        localStorage.removeItem(pos);
        localStorage.setItem(pos, resultado);
        pos = (pos + 1) % 5;        
    }
    actualizarHistorial();
}

/**
 * Actualiza la lista de los 5 últimos resultados exitosos mostrados
 */
function actualizarHistorial()
{
    var celda;
        
    for (let index = 0; index < localStorage.length; index++)
    {
        celda = "historial"+(index+1);
        document.getElementById(celda).innerText = localStorage.getItem(index);        
    }
}
