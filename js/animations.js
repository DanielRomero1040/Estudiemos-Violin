        // Iniciar la libreria wow
        
new WOW().init();


//Popup Galeria

        //Variables
let abrirGaleria1 = document.getElementById('abrir-popup-1'),
    abrirGaleria2 = document.getElementById('abrir-popup-2'),
    abrirGaleria3 = document.getElementById('abrir-popup-3'),
    abrirGaleria4 = document.getElementById('abrir-popup-4'),
    abrirGaleria5 = document.getElementById('abrir-popup-5'),
    abrirGaleria6 = document.getElementById('abrir-popup-6'),
    abrirGaleria7 = document.getElementById('abrir-popup-7'),
    abrirGaleria8 = document.getElementById('abrir-popup-8'),
    abrirGaleria9 = document.getElementById('abrir-popup-9'),
    abrirGaleria10 = document.getElementById('abrir-popup-10'),
    abrirGaleria11 = document.getElementById('abrir-popup-11'),
    abrirGaleria12 = document.getElementById('abrir-popup-12'),

    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    imagen = document.getElementById('imagen'),

    btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
    btnFotoSiguiente = document.getElementById('btn-siguiente'),
    btnFotoAnterior = document.getElementById('btn-anterior');

        //Acciones al seleccionar una imagen
abrirGaleria1.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('galeria1__full','imagen')
    popup.classList.add('active');
});
abrirGaleria2.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('galeria2__full','imagen')
    popup.classList.add('active');
});
abrirGaleria3.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('galeria3__full','imagen')
    popup.classList.add('active');
});
abrirGaleria4.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('galeria4__full','imagen')
    popup.classList.add('active');
});
abrirGaleria5.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('galeria5__full','imagen')
    popup.classList.add('active');
});
abrirGaleria6.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('galeria6__full','imagen')
    popup.classList.add('active');
});

abrirGaleria7.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('galeria7__full','imagen')
    popup.classList.add('active');
});

abrirGaleria8.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('galeria8__full','imagen')
    popup.classList.add('active');
});

abrirGaleria9.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('galeria9__full','imagen')
    popup.classList.add('active');
});

abrirGaleria10.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('galeria10__full','imagen')
    popup.classList.add('active');
});

abrirGaleria11.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('galeria11__full','imagen')
    popup.classList.add('active');
});

abrirGaleria12.addEventListener('click', function(){
    overlay.classList.add('active');
    imagen.classList.add('galeria12__full','imagen')
    popup.classList.add('active');
});



        // Botones del popup
btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    imagen.classList.remove('galeria1__full','galeria2__full','galeria3__full','galeria4__full','galeria5__full','galeria6__full','galeria7__full','galeria8__full','galeria9__full','galeria10__full','galeria11__full','galeria12__full','imagen')
});

btnFotoSiguiente.addEventListener('click',function(){
    if (imagen.classList.contains('galeria1__full') == true) {        
        imagen.classList.replace('galeria1__full','galeria2__full');
     } 
     else if (imagen.classList.contains('galeria2__full') == true) {
        imagen.classList.replace('galeria2__full','galeria3__full');        
     }
     else if (imagen.classList.contains('galeria3__full') == true) {
        imagen.classList.replace('galeria3__full','galeria4__full');        
     }
     else if (imagen.classList.contains('galeria4__full') == true) {
        imagen.classList.replace('galeria4__full','galeria5__full');        
     }
     else if (imagen.classList.contains('galeria5__full') == true) {
        imagen.classList.replace('galeria5__full','galeria6__full');        
     }
     else if (imagen.classList.contains('galeria6__full') == true) {
        imagen.classList.replace('galeria6__full','galeria7__full');        
     }
     else if (imagen.classList.contains('galeria7__full') == true) {
        imagen.classList.replace('galeria7__full','galeria8__full');        
     } 
     else if (imagen.classList.contains('galeria8__full') == true) {
        imagen.classList.replace('galeria8__full','galeria9__full');        
     } 
     else if (imagen.classList.contains('galeria9__full') == true) {
        imagen.classList.replace('galeria9__full','galeria10__full');        
     } 
     else if (imagen.classList.contains('galeria10__full') == true) {
        imagen.classList.replace('galeria10__full','galeria11__full');        
     } 
     else if (imagen.classList.contains('galeria11__full') == true) {
        imagen.classList.replace('galeria11__full','galeria12__full');        
     } 
     else if (imagen.classList.contains('galeria12__full') == true) {
        imagen.classList.replace('galeria12__full','galeria1__full');        
     }   
    
})

btnFotoAnterior.addEventListener('click',function(){
    if (imagen.classList.contains('galeria1__full') == true) {        
        imagen.classList.replace('galeria1__full','galeria12__full');
     } 
     else if (imagen.classList.contains('galeria2__full') == true) {
        imagen.classList.replace('galeria2__full','galeria1__full');        
     }
     else if (imagen.classList.contains('galeria3__full') == true) {
        imagen.classList.replace('galeria3__full','galeria2__full');        
     }
     else if (imagen.classList.contains('galeria4__full') == true) {
        imagen.classList.replace('galeria4__full','galeria3__full');        
     }
     else if (imagen.classList.contains('galeria5__full') == true) {
        imagen.classList.replace('galeria5__full','galeria4__full');        
     }
     else if (imagen.classList.contains('galeria6__full') == true) {
        imagen.classList.replace('galeria6__full','galeria5__full');        
     }
     else if (imagen.classList.contains('galeria7__full') == true) {
        imagen.classList.replace('galeria7__full','galeria6__full');        
     } 
     else if (imagen.classList.contains('galeria8__full') == true) {
        imagen.classList.replace('galeria8__full','galeria7__full');        
     } 
     else if (imagen.classList.contains('galeria9__full') == true) {
        imagen.classList.replace('galeria9__full','galeria8__full');        
     } 
     else if (imagen.classList.contains('galeria10__full') == true) {
        imagen.classList.replace('galeria10__full','galeria9__full');        
     } 
     else if (imagen.classList.contains('galeria11__full') == true) {
        imagen.classList.replace('galeria11__full','galeria10__full');        
     } 
     else if (imagen.classList.contains('galeria12__full') == true) {
        imagen.classList.replace('galeria12__full','galeria11__full');        
     }   
    
})
