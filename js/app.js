
var resistencia = new Array();
var seleccion = "";
var imagen = "";

//Iniciamos la resistencia con la configuracion inicial
resistencia[0] = 0;
resistencia[1] = 0;
resistencia[2] = 1;
resistencia[3] = 10;

function seleccionarColor1(elemento)
{
    seleccion = elemento.title;    
    switch(seleccion) {
        case "0":
            imagen = "imagenes/resistencias/cabeza-negro.png";
            resistencia[0] = 0;
            break;
        case "1":
            imagen = "imagenes/resistencias/cabeza-marron.png";
            resistencia[0] = 1;
            break;
        case "2":
            imagen = "imagenes/resistencias/cabeza-rojo.png";
            resistencia[0] = 2;
            break;
        case "3":
            imagen = "imagenes/resistencias/cabeza-naranja.png";
            resistencia[0] = 3;
            break;
        case "4":
            imagen = "imagenes/resistencias/cabeza-amarillo.png";
            resistencia[0] = 4;
            break;
        case "5":
            imagen = "imagenes/resistencias/cabeza-verde.png";
            resistencia[0] = 5;
            break;
        case "6":
            imagen = "imagenes/resistencias/cabeza-azul.png";
            resistencia[0] = 6;
            break;
        case "7":
            imagen = "imagenes/resistencias/cabeza-violeta.png";
            resistencia[0] = 7;
            break;
        case "8":
            imagen = "imagenes/resistencias/cabeza-gris.png";
            resistencia[0] = 8;
            break;
        case "9":
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
        case "0":
            imagen = "imagenes/resistencias/medio-negro.png";
            resistencia[1] = 0;
            break;
        case "1":
            imagen = "imagenes/resistencias/medio-marron.png";
            resistencia[1] = 1;
            break;
        case "2":
            imagen = "imagenes/resistencias/medio-rojo.png";
            resistencia[1] = 2;
            break;
        case "3":
            imagen = "imagenes/resistencias/medio-naranja.png";
            resistencia[1] = 3;
            break;
        case "4":
            imagen = "imagenes/resistencias/medio-amarillo.png";
            resistencia[1] = 4;
            break;
        case "5":
            imagen = "imagenes/resistencias/medio-verde.png";
            resistencia[1] = 5;
            break;
        case "6":
            imagen = "imagenes/resistencias/medio-azul.png";
            resistencia[1] = 6;
            break;
        case "7":
            imagen = "imagenes/resistencias/medio-violeta.png";
            resistencia[1] = 7;
            break;
        case "8":
            imagen = "imagenes/resistencias/medio-gris.png";
            resistencia[1] = 8;
            break;
        case "9":
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
        case "x1Ω":
            imagen = "imagenes/resistencias/medio-negro.png";
            resistencia[2] = 1;
            break;
        case "x10Ω":
            imagen = "imagenes/resistencias/medio-marron.png";
            resistencia[2] = 10;
            break;
        case "x100Ω":
            imagen = "imagenes/resistencias/medio-rojo.png";
            resistencia[2] = 100;
            break;
        case "x1KΩ":
            imagen = "imagenes/resistencias/medio-naranja.png";
            resistencia[2] = 1000;
            break;
        case "x10KΩ":
            imagen = "imagenes/resistencias/medio-amarillo.png";
            resistencia[2] = 10000;
            break;
        case "x100KΩ":
            imagen = "imagenes/resistencias/medio-verde.png";
            resistencia[2] = 100000;
            break;
        case "x1MΩ":
            imagen = "imagenes/resistencias/medio-azul.png";
            resistencia[2] = 1000000;
            break;
        case "x10MΩ":
            imagen = "imagenes/resistencias/medio-violeta.png";
            resistencia[2] = 10000000;
            break;
        case "x100MΩ":
            imagen = "imagenes/resistencias/medio-gris.png";
            resistencia[2] = 100000000;
            break;
        case "x1GΩ":
            imagen = "imagenes/resistencias/medio-blanco.png";
            resistencia[2] = 1000000000;
            break;
        case "x0.01Ω":
            imagen = "imagenes/resistencias/medio-plata.png";
            resistencia[2] = 0.01;
            break;
        case "x0.1Ω":
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
        case "±1%":
            imagen = "imagenes/resistencias/cola-marron.png"
            break;
        case "±2%":
            imagen = "imagenes/resistencias/cola-rojo.png"
            break;
        case "±0.5%":
            imagen = "imagenes/resistencias/cola-verde.png"
            break;
        case "±0.25%":
            imagen = "imagenes/resistencias/cola-azul.png"
            break;
        case "±0.1%":
            imagen = "imagenes/resistencias/cola-violeta.png"
            break;
        case "±0.05%":
            imagen = "imagenes/resistencias/cola-gris.png"
            break;
        case "±5%":
            imagen = "imagenes/resistencias/cola-plata.png"
            break;
        case "±10%":
            imagen = "imagenes/resistencias/cola-oro.png"
            break;
    }
    document.getElementById("seleccion-color4").childNodes[1].src=imagen;
   
}

function calcular4bandas()
{
    var resultado = (resistencia[0]*10 + resistencia[1]) * resistencia[2];
    if(resultado > 1000)
    {
        resultado = resultado/1000;
        if(resultado > 1000)
        {
            resultado = resultado/1000;
            if(resultado > 1000)
            {
                resultado = resultado/1000;
                document.getElementById("nodo-calculo").childNodes[3].innerHTML = resultado + " GΩ";
            }
            else
            {
                document.getElementById("nodo-calculo").childNodes[3].innerHTML = resultado + " MΩ";
            }
        }
        else
        {
            document.getElementById("nodo-calculo").childNodes[3].innerHTML = resultado + " KΩ";
        }
    }
    else
    {
        if(resultado < 10)
        {
            document.getElementById("nodo-calculo").childNodes[3].innerHTML = resultado.toFixed(2) + " Ω";
        }
        else
        {
            document.getElementById("nodo-calculo").childNodes[3].innerHTML = resultado + " Ω";
        }

    }

}