var d = document.getElementById("dibujo1");
var lienzo = d.getContext("2d");

var ancho= d.width;



var l=document.getElementById("nLineas");
var lineas;

var botonIngresar=document.getElementById("btnIngresar");
botonIngresar.addEventListener("click", dibujoPorClick);



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujoPorClick(){
    lineas= parseInt(l.value);
    var espacio= ancho/lineas;
    var posx,posy;
    var color="blue";

    for (let i = 0; i <= lineas; i++){

        posy=espacio*(i+1);
        posx=espacio*i;
        dibujarLinea(color,0,posy,posx,ancho);

    }

    dibujarLinea(color,0,0,0,ancho);
    dibujarLinea(color,0,500,500,ancho);
}