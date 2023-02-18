

//------------- CAMBIO CLASSE ALLO SCROLL -------------

window.addEventListener('scroll', function() {
    var element = document.querySelector('.text'); 
    var bgele = document.querySelector('.bg-1'); 
    if (window.scrollY  > 300) {
      element.classList.add('none');
    } else {
      element.classList.remove('none'); 
    }
  });

