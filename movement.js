     


var movementQuotient = 3

function updateSpeed(){
    if (!isNaN(document.getElementById('varSpeed').value) && parseInt((document.getElementById('varSpeed').value)) <= 20) {
        movementQuotient = parseInt(document.getElementById('varSpeed').value)
        console.log("Player speed set at " + movementQuotient)
      } else {
        throw console.error("Invalid character");
      }
}

var teclas = {
  A: false,
  W: false,
  S: false,
  D: false,
};


function handleKeyEvent(isPressed, e) {
  
  var key = e.key.toUpperCase();

  if (Object.hasOwnProperty.call(teclas, key)) {
    teclas[key] = isPressed;
  }
}

window.addEventListener('keydown', handleKeyEvent.bind(null, true));
window.addEventListener('keyup', handleKeyEvent.bind(null, false));

