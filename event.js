var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39,
};

document.addEventListener("keydown",dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 250;
var y = 250;

dibujarLinea("#5B1C12", 249, 249, 251, 251, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWisth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujarTeclado(evento)
{
  var colorcito = "#5B1C12";
  var movement = 10;
  switch (evento.keyCode)
  {
    case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movement, papel);
        y = y - movement;
      break;
    case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movement, papel);
    y = y + movement;
      break;
    case teclas.LEFT:
    dibujarLinea(colorcito, x, y, x - movement, y, papel);
    x = x - movement;
      break;
    case teclas.RIGTH:
    dibujarLinea(colorcito, x, y, x + movement, y, papel);
    x = x + movement;
      break;
    default:

  }
}
