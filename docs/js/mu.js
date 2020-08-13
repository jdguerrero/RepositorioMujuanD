function desplegarDatos(){

    var notitias = document.getElementsByClassName('datoPersonal');

    for ( i = 0; i < notitias.length; i++) {
        notitias[i].classList.toggle('ocultar');
        
    }
}

function desplegarPerfil(){

    var perfil = document.getElementsByClassName('perfil');

    for ( i = 0; i < perfil.length; i++) {
        perfil[i].classList.toggle('ocultar');
        
    }
    
        
}

function desplegarInformacion(){

    var perfil = document.getElementsByClassName('datosAdicionales');

    for ( i = 0; i < perfil.length; i++) {
        perfil[i].classList.toggle('ocultar');
        
    }
    
        
}

var clic = 0;

function cambiarFoto(){


    console.log(clic);

    var foto = document.getElementsByClassName('foto');

    

    for ( i = 0; i < foto.length; i++) {

        if(clic==0){
            foto[i].setAttribute("src", "imagenes/img1.png");
            clic++;
        }else{
            if(clic==1){
                foto[i].setAttribute("src", "imagenes/img2.png");
                clic++;
            }else{
                if(clic==2){
                    foto[i].setAttribute("src", "imagenes/img3.png");
                    clic++;
                }else{
                    
                    foto[i].setAttribute("src", "imagenes/img0.png");
                    clic=0;
                    
                }
            }
        }
    }
         
}
    
        


