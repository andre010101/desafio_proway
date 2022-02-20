/**
 * 
 *  Esconder e mostrar o password, trocando quando o type do input
 */
 let container = document.querySelector('div');
 let input = document.querySelector('input');
 let icon = document.querySelector('img');
 
 icon.addEventListener('click', function() {
      container.classList.toggle('visible');
     if(container.classList.contains('visible')) {
         icon.src = 'assets/eye-off.svg';
         input.type = 'text';  
     } else {
         icon.src = 'assets/eye.svg';
         input.type = 'password';
     }
 
 });

 /**
  * Define a força em que a senha deve possuir para que seja forte
  */
function ValidarSenha() {
    var senha = document.getElementById('password').value;

    var forca = 0;

    if ((senha.length >= 4) && (senha.length <= 7)) {
        forca += 10;
    } else if (senha.length > 7) {
        forca += 25;
    }

    if((senha.length >= 5) && (senha.match(/[a-z]+/))){
        forca += 10;
    }
    if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
        forca += 20;
    }

    if((senha.length >= 7) && (senha.match(/[!@#$%^&*()-+]+/))){
        forca += 25;
    }
    
    mostrarForca(forca);
}

/**
 * 
 * mostra na tela de acordo com a força da senha
 * podendo ser FRACA, MEDIA, FORTE e EXCELENTE
 */

function mostrarForca(forca) {
    document.getElementById('SenhaForte').innerHTML = 'Força: ' + forca;

    if (forca < 30) {
        document.getElementById('ErroSenha').innerHTML = "<span style='color:red'>Fraca!</span>"
    }else if ((forca < 30) && (forca < 50) ){
        document.getElementById('ErroSenha').innerHTML = "<span style='color:yellow'>Media!</span>"
    }else if ((forca < 50) && (forca < 70) ){
        document.getElementById('ErroSenha').innerHTML = "<span style='color:green'>Forte! </span>"
    }else if ((forca < 70) && (forca < 100) ){
        document.getElementById('ErroSenha').innerHTML = "<span style='color:blue'>Excelente! </span>"
    }
}

