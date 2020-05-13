
var resistencia = new Array();
var seleccion = "";
var imagen = "";
var tolerancia = "±10%";

//Iniciamos la resistencia con la configuracion inicial
resistencia[0] = 0;
resistencia[1] = 0;
resistencia[2] = 1;

function seleccionarColor1(elemento)
{
    seleccion = elemento.title;    
    switch(seleccion) {
        case "Negro":
            imagen = "imagenes/resistencias/cabeza-negro.png";
            resistencia[0] = 0;
            break;
        case "Marrón":
            imagen = "imagenes/resistencias/cabeza-marron.png";
            resistencia[0] = 1;
            break;
        case "Rojo":
            imagen = "imagenes/resistencias/cabeza-rojo.png";
            resistencia[0] = 2;
            break;
        case "Naranja":
            imagen = "imagenes/resistencias/cabeza-naranja.png";
            resistencia[0] = 3;
            break;
        case "Amarillo":
            imagen = "imagenes/resistencias/cabeza-amarillo.png";
            resistencia[0] = 4;
            break;
        case "Verde":
            imagen = "imagenes/resistencias/cabeza-verde.png";
            resistencia[0] = 5;
            break;
        case "Azul":
            imagen = "imagenes/resistencias/cabeza-azul.png";
            resistencia[0] = 6;
            break;
        case "Violeta":
            imagen = "imagenes/resistencias/cabeza-violeta.png";
            resistencia[0] = 7;
            break;
        case "Gris":
            imagen = "imagenes/resistencias/cabeza-gris.png";
            resistencia[0] = 8;
            break;
        case "Blanco":
            imagen = "imagenes/resistencias/cabeza-blanco.png";
            resistencia[0] = 9;
            break;
    }
    document.getElementById("seleccion-color1").childNodes[1].src=imagen;
}

function seleccionarColor2(elemento)
{
    seleccion = elemento.title;    
    switch(seleccion) {
        case "Negro":
            imagen = "imagenes/resistencias/medio-negro.png";
            resistencia[1] = 0;
            break;
        case "Marrón":
            imagen = "imagenes/resistencias/medio-marron.png";
            resistencia[1] = 1;
            break;
        case "Rojo":
            imagen = "imagenes/resistencias/medio-rojo.png";
            resistencia[1] = 2;
            break;
        case "Naranja":
            imagen = "imagenes/resistencias/medio-naranja.png";
            resistencia[1] = 3;
            break;
        case "Amarillo":
            imagen = "imagenes/resistencias/medio-amarillo.png";
            resistencia[1] = 4;
            break;
        case "Verde":
            imagen = "imagenes/resistencias/medio-verde.png";
            resistencia[1] = 5;
            break;
        case "Azul":
            imagen = "imagenes/resistencias/medio-azul.png";
            resistencia[1] = 6;
            break;
        case "Violeta":
            imagen = "imagenes/resistencias/medio-violeta.png";
            resistencia[1] = 7;
            break;
        case "Gris":
            imagen = "imagenes/resistencias/medio-gris.png";
            resistencia[1] = 8;
            break;
        case "Blanco":
            imagen = "imagenes/resistencias/medio-blanco.png";
            resistencia[1] = 9;
            break;
    }
    document.getElementById("seleccion-color2").childNodes[1].src=imagen;
}

function seleccionarMultiplicador(elemento)
{
    seleccion = elemento.title;    
    switch(seleccion) {
        case "Negro":
            imagen = "imagenes/resistencias/medio-negro.png";
            resistencia[2] = 1;
            break;
        case "Marrón":
            imagen = "imagenes/resistencias/medio-marron.png";
            resistencia[2] = 10;
            break;
        case "Rojo":
            imagen = "imagenes/resistencias/medio-rojo.png";
            resistencia[2] = 100;
            break;
        case "Naranja":
            imagen = "imagenes/resistencias/medio-naranja.png";
            resistencia[2] = 1000;
            break;
        case "Amarillo":
            imagen = "imagenes/resistencias/medio-amarillo.png";
            resistencia[2] = 10000;
            break;
        case "Verde":
            imagen = "imagenes/resistencias/medio-verde.png";
            resistencia[2] = 100000;
            break;
        case "Azul":
            imagen = "imagenes/resistencias/medio-azul.png";
            resistencia[2] = 1000000;
            break;
        case "Violeta":
            imagen = "imagenes/resistencias/medio-violeta.png";
            resistencia[2] = 10000000;
            break;
        case "Gris":
            imagen = "imagenes/resistencias/medio-gris.png";
            resistencia[2] = 100000000;
            break;
        case "Blanco":
            imagen = "imagenes/resistencias/medio-blanco.png";
            resistencia[2] = 1000000000;
            break;
        case "Plata":
            imagen = "imagenes/resistencias/medio-plata.png";
            resistencia[2] = 0.01;
            break;
        case "Oro":
            imagen = "imagenes/resistencias/medio-oro.png";
            resistencia[2] = 0.1;
            break;
    }
    document.getElementById("seleccion-color3").childNodes[1].src=imagen;
}

function seleccionarTolerancia(elemento)
{
    seleccion = elemento.title;
    switch(seleccion) {
        case "Marrón":
            imagen = "imagenes/resistencias/cola-marron.png";
            tolerancia = "±1%";
            break;
        case "Rojo":
            imagen = "imagenes/resistencias/cola-rojo.png";
            tolerancia = "±2%";
            break;
        case "Verde":
            imagen = "imagenes/resistencias/cola-verde.png";
            tolerancia = "±0.5%";
            break;
        case "Azul":
            imagen = "imagenes/resistencias/cola-azul.png";
            tolerancia = "±0.25%";
            break;
        case "Violeta":
            imagen = "imagenes/resistencias/cola-violeta.png";
            tolerancia = "±0.1%";
            break;
        case "Gris":
            imagen = "imagenes/resistencias/cola-gris.png";
            tolerancia = "±0.05%";
            break;
        case "Plata":
            imagen = "imagenes/resistencias/cola-plata.png";
            tolerancia = "±5%";
            break;
        case "Oro":
            imagen = "imagenes/resistencias/cola-oro.png"
            tolerancia = "±10%";
            break;
    }
    document.getElementById("seleccion-color4").childNodes[1].src=imagen;
   
}

function calcular4bandas()
{
    var resultado = (resistencia[0]*10 + resistencia[1]) * resistencia[2];
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
    resultado = resultado + unidad + " Tolerancia:" + tolerancia;
    document.getElementById("nodo-calculo").childNodes[3].innerHTML = resultado;

}