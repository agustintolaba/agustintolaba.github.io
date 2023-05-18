
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/Bulbasaur.png') {
      miImage.setAttribute('src','images/Ivysaur.png');
    } else {
      if (miSrc === 'images/Ivysaur.png') {
      miImage.setAttribute('src','images/Venusaur.png');
    } else {
      
      miImage.setAttribute('src', 'images/Bulbasaur.png');
    }
      ;
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h2');

/*function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Welcome Trainer ' + miNombre;
} */

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Welcome Trainer ' + miNombre;
  }
}


if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Welcome Trainer ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
