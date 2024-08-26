var eldiv= document.getElementById('eldiv')
eldiv.addEventListener('click',function() {
    alert('Hola! Soy el div');});

var boton=document.querySelector('button');
 boton.addEventListener('click', function(event) { alert('Hola');
     event.stopPropagation();});