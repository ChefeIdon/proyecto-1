
var resistenciaN = new Array();
var resistencia = new Array();
var seleccion = "";
var imagen = "";
var tolerancia = "±10%";
var ppm = 100;


//Iniciamos la resistencia de 4 bandas con la configuracion inicial
resistencia[0] = 0;
resistencia[1] = 0;
resistencia[2] = 1;

//Iniciamos la resistencia de 5/6 bandas con la configuracion inicial
resistenciaN[0] = 0;
resistenciaN[1] = 0;
resistenciaN[2] = 0;
resistenciaN[3] = 1;

function seleccionarColor1(elemento, bandas)
{
    seleccion = elemento.title;    
    switch(seleccion) {
        case "Negro":
        {
            imagen = "imagenes/resistencias/cabeza-negro.png";
            if(bandas == 4)
            {
                resistencia[0] = 0;
                calcular4bandas();
            }
            else
            {
                resistenciaN[0] = 0;
                calcularNbandas(bandas);
            }             
            break;
        }
        case "Marrón":
        {
            imagen = "imagenes/resistencias/cabeza-marron.png";
            if(bandas == 4)
            {
                resistencia[0] = 1;
                calcular4bandas();
            }
            else
            {
                resistenciaN[0] = 1;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Rojo":
        {
            imagen = "imagenes/resistencias/cabeza-rojo.png";
            if(bandas == 4)
            {
                resistencia[0] = 2;
                calcular4bandas();
            }
            else
            {
                resistenciaN[0] = 2;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Naranja":
        {
            imagen = "imagenes/resistencias/cabeza-naranja.png";
            if(bandas == 4)
            {
                resistencia[0] = 3;
                calcular4bandas();
            }
            else
            {
                resistenciaN[0] = 3;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Amarillo":
        {
            imagen = "imagenes/resistencias/cabeza-amarillo.png";
            if(bandas == 4)
            {
                resistencia[0] = 4;
                calcular4bandas();
            }
            else
            {
                resistenciaN[0] = 4;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Verde":
        {    
            imagen = "imagenes/resistencias/cabeza-verde.png";
            if(bandas == 4)
            {
                resistencia[0] = 5;
                calcular4bandas();
            }
            else
            {
                resistenciaN[0] = 5;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Azul":
        {   
            imagen = "imagenes/resistencias/cabeza-azul.png";
            if(bandas == 4)
            {
                resistencia[0] = 6;
                calcular4bandas();
            }
            else
            {
                resistenciaN[0] = 6;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Violeta":
        {
            imagen = "imagenes/resistencias/cabeza-violeta.png";
            if(bandas == 4)
            {
                resistencia[0] = 7;
                calcular4bandas();
            }
            else
            {
                resistenciaN[0] = 7;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Gris":
        {
            imagen = "imagenes/resistencias/cabeza-gris.png";
            if(bandas == 4)
            {
                resistencia[0] = 8;
                calcular4bandas();
            }
            else
            {
                resistenciaN[0] = 8;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Blanco":
        {
            imagen = "imagenes/resistencias/cabeza-blanco.png";
            if(bandas == 4)
            {
                resistencia[0] = 9;
                calcular4bandas();
            }
            else
            {
                resistenciaN[0] = 9;
                calcularNbandas(bandas);
            }
            break;
        }
    }
    document.getElementById("seleccion-color1").childNodes[1].src=imagen;
}

function seleccionarColor2(elemento, bandas, n)
{
    seleccion = elemento.title;    
    switch(seleccion) {
        case "Negro":
        {
            imagen = "imagenes/resistencias/medio-negro.png";
            if(bandas == 4)
            {
                resistencia[n] = 0;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 0;
                calcularNbandas(bandas);
            }
            break;
        }    
        case "Marrón":
        {
            imagen = "imagenes/resistencias/medio-marron.png";
            if(bandas == 4)
            {
                resistencia[n] = 1;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 1;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Rojo":
        {    
            imagen = "imagenes/resistencias/medio-rojo.png";
            if(bandas == 4)
            {
                resistencia[n] = 2;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 2;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Naranja":
        {    
            imagen = "imagenes/resistencias/medio-naranja.png";
            if(bandas == 4)
            {
                resistencia[n] = 3;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 3;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Amarillo":
        {
            imagen = "imagenes/resistencias/medio-amarillo.png";
            if(bandas == 4)
            {
                resistencia[n] = 4;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 4;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Verde":
        {
            imagen = "imagenes/resistencias/medio-verde.png";
            if(bandas == 4)
            {
                resistencia[n] = 5;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 5;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Azul":
        {    
            imagen = "imagenes/resistencias/medio-azul.png";
            if(bandas == 4)
            {
                resistencia[n] = 6;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 6;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Violeta":
        {
            imagen = "imagenes/resistencias/medio-violeta.png";
            if(bandas == 4)
            {
                resistencia[n] = 7;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 7;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Gris":
        {   
            imagen = "imagenes/resistencias/medio-gris.png";
            if(bandas == 4)
            {
                resistencia[n] = 8;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 8;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Blanco":
        {    
            imagen = "imagenes/resistencias/medio-blanco.png";
            if(bandas == 4)
            {
                resistencia[n] = 9;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 9;
                calcularNbandas(bandas);
            }
            break;
        }
    }
    switch(n)
    {
        case 1:
        {
            document.getElementById("seleccion-color2").childNodes[1].src=imagen;
            break;
        }
        case 2:
        {
            document.getElementById("seleccion-color3").childNodes[1].src=imagen;
            break;
        }
    }
    
}

function seleccionarMultiplicador(elemento, bandas, n)
{
    seleccion = elemento.title;    
    switch(seleccion) {
        case "Negro":
        { 
            imagen = "imagenes/resistencias/medio-negro.png";
            if(bandas == 4)
            {
                resistencia[n] = 1;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 1;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Marrón":
        {
            imagen = "imagenes/resistencias/medio-marron.png";
            if(bandas == 4)
            {
                resistencia[n] = 10;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 10;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Rojo":
        {
            imagen = "imagenes/resistencias/medio-rojo.png";
            if(bandas == 4)
            {
                resistencia[n] = 100;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 100;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Naranja":
        {
            imagen = "imagenes/resistencias/medio-naranja.png";
            if(bandas == 4)
            {
                resistencia[n] = 1000;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 1000;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Amarillo":
        {
            imagen = "imagenes/resistencias/medio-amarillo.png";
            if(bandas == 4)
            {
                resistencia[n] = 10000;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 10000;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Verde":
        {
            imagen = "imagenes/resistencias/medio-verde.png";
            if(bandas == 4)
            {
                resistencia[n] = 100000;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 100000;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Azul":
        {
            imagen = "imagenes/resistencias/medio-azul.png";
            if(bandas == 4)
            {
                resistencia[n] = 1000000;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 1000000;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Violeta":
        {
            imagen = "imagenes/resistencias/medio-violeta.png";
            if(bandas == 4)
            {
                resistencia[n] = 10000000;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 10000000;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Gris":
        {
            imagen = "imagenes/resistencias/medio-gris.png";
            if(bandas == 4)
            {
                resistencia[n] = 100000000;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 100000000;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Blanco":
        {
            imagen = "imagenes/resistencias/medio-blanco.png";
            if(bandas == 4)
            {
                resistencia[n] = 1000000000;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 1000000000;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Plata":
        {
            imagen = "imagenes/resistencias/medio-plata.png";
            if(bandas == 4)
            {
                resistencia[n] = 0.01;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 0.01;
                calcularNbandas(bandas);
            }
            break;
        }
        case "Oro":
        {
            imagen = "imagenes/resistencias/medio-oro.png";
            if(bandas == 4)
            {
                resistencia[n] = 0.1;
                calcular4bandas();
            }
            else
            {
                resistenciaN[n] = 0.1;
                calcularNbandas(bandas);
            }
            break;
        }
    }
    
    document.getElementById("seleccion-multiplicador").childNodes[1].src=imagen;
}

function seleccionarTolerancia(elemento, bandas)
{
    seleccion = elemento.title;
    switch(seleccion) {
        case "Marrón":
        {
            tolerancia = "±1%";
            if(bandas == 4)
            {
                imagen = "imagenes/resistencias/cola-marron.png";
                calcular4bandas();
            }
            else
            {
                if (bandas == 5)
                {
                    imagen = "imagenes/resistencias/cola-marron.png";
                } 
                else 
                {
                    imagen = "imagenes/resistencias/medio-marron.png";
                }
                calcularNbandas(bandas);
            }
            break;
        }
        case "Rojo":
        {
            tolerancia = "±2%";
            if(bandas == 4)
            {
                imagen = "imagenes/resistencias/cola-rojo.png";
                calcular4bandas();
            }
            else
            {
                if (bandas == 5)
                {
                    imagen = "imagenes/resistencias/cola-rojo.png";
                } 
                else 
                {
                    imagen = "imagenes/resistencias/medio-rojo.png";
                }
                calcularNbandas(bandas);
            }
            break;
        }
        case "Verde":
        {
            tolerancia = "±0.5%";
            if(bandas == 4)
            {
                imagen = "imagenes/resistencias/cola-verde.png";
                calcular4bandas();
            }
            else
            {
                if (bandas == 5)
                {
                    imagen = "imagenes/resistencias/cola-verde.png";
                } 
                else 
                {
                    imagen = "imagenes/resistencias/medio-verde.png";
                }
                calcularNbandas(bandas);
            }
            break;
        }
        case "Azul":
        {
            tolerancia = "±0.25%";
            if(bandas == 4)
            {
                imagen = "imagenes/resistencias/cola-azul.png";
                calcular4bandas();
            }
            else
            {
                if (bandas == 5)
                {
                    imagen = "imagenes/resistencias/cola-azul.png";
                } 
                else 
                {
                    imagen = "imagenes/resistencias/medio-azul.png";
                }
                calcularNbandas(bandas);
            }
            break;
        }
        case "Violeta":
        {
            tolerancia = "±0.1%";
            if(bandas == 4)
            {
                imagen = "imagenes/resistencias/cola-violeta.png";
                calcular4bandas();
            }
            else
            {
                if (bandas == 5)
                {
                    imagen = "imagenes/resistencias/cola-violeta.png";
                } 
                else 
                {
                    imagen = "imagenes/resistencias/medio-violeta.png";
                }
                calcularNbandas(bandas);
            }
            break;
        }
        case "Gris":
        {
            tolerancia = "±0.05%";
            if(bandas == 4)
            {
                imagen = "imagenes/resistencias/cola-gris.png";
                calcular4bandas();
            }
            else
            {
                if (bandas == 5)
                {
                    imagen = "imagenes/resistencias/cola-gris.png";
                } 
                else 
                {
                    imagen = "imagenes/resistencias/medio-gris.png";
                }
                calcularNbandas(bandas);
            }
            break;
        }
        case "Oro":
        {
            tolerancia = "±5%";
            if(bandas == 4)
            {
                imagen = "imagenes/resistencias/cola-oro.png";
                calcular4bandas();
            }
            else
            {
                if (bandas == 5)
                {
                    imagen = "imagenes/resistencias/cola-oro.png";
                } 
                else 
                {
                    imagen = "imagenes/resistencias/medio-oro.png";
                }
                calcularNbandas(bandas);
            }
            break;
        }
        case "Plata":
        {
            tolerancia = "±10%";
            if(bandas == 4)
            {
                imagen = "imagenes/resistencias/cola-plata.png";
                calcular4bandas();
            }
            else
            {
                if (bandas == 5)
                {
                    imagen = "imagenes/resistencias/cola-plata.png";
                } 
                else 
                {
                    imagen = "imagenes/resistencias/medio-plata.png";
                }
                calcularNbandas(bandas);
            }
            break;
        }
    }
    document.getElementById("seleccion-tolerancia").childNodes[1].src=imagen;
   
}

function seleccionarppm(elemento, bandas)
{
    seleccion = elemento.title;
    switch(seleccion) {
        case "Marrón":
            imagen = "imagenes/resistencias/cola-marron.png";
            ppm = 100;
            calcularNbandas(bandas);
            break;
        case "Rojo":
            imagen = "imagenes/resistencias/cola-rojo.png";
            ppm = 50;
            calcularNbandas(bandas);
            break;
        case "Azul":
            imagen = "imagenes/resistencias/cola-azul.png";
            ppm = 10;
            calcularNbandas(bandas);
            break;
        case "Violeta":
            imagen = "imagenes/resistencias/cola-violeta.png";
            ppm = 5;
            calcularNbandas(bandas);
            break;
        case "Amarillo":
            imagen = "imagenes/resistencias/cola-amarillo.png";
            ppm = 25;
            calcularNbandas(bandas);
            break;
        case "Naranja":
            imagen = "imagenes/resistencias/cola-naranja.png";
            ppm = 15;
            calcularNbandas(bandas);
            break;
    }
    document.getElementById("seleccion-ppm").childNodes[1].src=imagen;   
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
    document.getElementById("nodo-calculo").childNodes[1].innerHTML = resultado;
    
}

function calcularNbandas(bandas)
{
    var resultado = (resistenciaN[0]*100 + resistenciaN[1]*10 + resistenciaN[2]) * resistenciaN[3];
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
    if (bandas == 5)
    {
        resultado = resultado + unidad + " Tolerancia:" + tolerancia;
    } 
    else
    {
        resultado = resultado + unidad + " Tolerancia:" + tolerancia + " PPM:" + ppm;
    }
    document.getElementById("nodo-calculo").childNodes[1].innerHTML = resultado;

}