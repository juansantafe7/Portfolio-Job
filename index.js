let menuVisible = false;

function mostrarOcultarMenu(){

    if(menuVisible){

        document.getElementById('nav').classList = '';
        menuVisible = false;

    }else{

        document.getElementById('nav').classList = 'responsive';
        menuVisible = true;

    }

}

function seleccionar(){

    // Oculto el menu cuando selecciono una opcion
    document.getElementById('nav').classList = '';
    menuVisible = false;

}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades(){

    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){

        let habilidades = document.getElementsByClassName('progreso');
        habilidades[0].classList.add('htmlcss');
        habilidades[1].classList.add('javascript');
        habilidades[2].classList.add('bootstrap');
        habilidades[3].classList.add('github');
        habilidades[4].classList.add('react');
        habilidades[5].classList.add('creativity');
        habilidades[6].classList.add('teamwork');
        habilidades[7].classList.add('dedication');
        habilidades[8].classList.add('proyect');

    }

}

// Detectar scrolling para aplicar animación
window.onscroll = function(){

    efectoHabilidades();

}