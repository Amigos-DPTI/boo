/**
 * #################
 * ## 👻 B O O 👻 ##
 * #################
 *
 * Haz que, cada segundo que pase, el div "boo" aparezca ubicado en una
 * posición aleatoria de la ventana y que el color del body cambie, también
 * de forma aleatoria "rgb(?, ?, ?)".
 *
 * ¡Ojo! No dejes que Boo se salga de los márgenes de la ventana, debemos
 * poder ver a Boo sin hacer scroll en ningún momento.
 *
 * element.getBoundingClientRect() --> devuelve una serie de propiedades
 * del nodo seleccionado, entre ellas, la altura y el ancho del elemento.
 *
 * Bonus point --> haz que aparezcan más emojis acompañando a Boo. Para ello
 *                 deberás crear más divs y seleccionarlos a todos. Esto
 *                 requerirá a mayores que cambies cositas en el código.
 *
 */

let boo = document.querySelectorAll('.boo');
// let rect = boo.getBoundingClientRect();

// let { height, width } = rect;

// Seleccionamos el body por destructuring.

const { body } = document;
//definimos margenes
const topHeight = window.innerHeight - 137;
const topWidth = window.innerWidth - 112;

let seconds = 0;

function getRandom(max, min = 0) {
  return Math.floor(Math.random() * (max + 1 - min), min);
}

setInterval(() => {
  // Cambiamos el color de fondo del body.
  body.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(
    255
  )}, ${getRandom(255)})`;

  for (const element of boo) {
    element.style.cssText = `
    
        top: ${getRandom(topWidth)}px;
        right: ${getRandom(topHeight)}px;
        font-size: ${getRandom(230, 100)}px
    
    `;
  }
  // Actualizamos el contador.
}, 1000);
