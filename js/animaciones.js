let w = window; 
let d = document;
let ubicacionInicial = w.scrollY; 
console.log('Ubicación inicial: ' + ubicacionInicial); 

//Scroll
w.addEventListener('scroll', function(){
  let ubicacionActual = w.scrollY; 
  /*console.log('Ubicación actual: ' + ubicacionActual); */ 

  if (ubicacionInicial >= ubicacionActual) {
    d.getElementsByTagName('nav')[0].style.top = '0px'; 
  }else{
    d.getElementsByTagName('nav')[0].style.top = '-100px'; 
  }
  
  ubicacionInicial = ubicacionActual;   
  /*console.log('Ubicación inicial actualizada: ' + ubicacionInicial); */ 
  //Actualiza constantemente el valor de la ubicación actual, y se lo asigna 
  //a la ubicación inicial actualizada, para así poder hacer las comparaciones 
  //y poder aplicar los efectos de aparecer o desaparecer al menú de navegación 


});








