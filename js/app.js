/**
 * Author: Fabián Flores Vadell
 *
 * Date: 07/09/2020
 *
 * Version: 0.0.1
 */

const coche = document.getElementById("coche")

coche.parentElement.style = `
  display: flex;
  justify-content: center;
  align-items: center;
`
const initialWidth = coche.style.width

coche.addEventListener("click", function () {
  coche.style.width = coche.style.width === initialWidth ? "80vw" : initialWidth
})
