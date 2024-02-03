function mostrarVentana(id) {
    var ventana = document.getElementById(id);
    ventana.classList.toggle('abierto');
  }
  
  function cerrarVentana(id) {
    var ventana = document.getElementById(id);
    ventana.classList.remove('abierto');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var elementos = document.querySelectorAll('.elemento');
    elementos.forEach(function(elemento) {
      elemento.addEventListener('click', function() {
        var idVentana = this.getAttribute('data-ventana');
        mostrarVentana(idVentana);
      });
    });
  });
  
  

