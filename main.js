function toca_som(seletorAudio){
    const elemento =  document.querySelector(seletorAudio);
    if(elemento && elemento.localName === 'audio' ){
        elemento.play()
    }
    else{
        console.log('Elemento não encontrado ou seletor invalido')
    }
}

const lista_de_teclas = document.querySelectorAll('.tecla');


for( let contador = 0; contador < lista_de_teclas.length; contador++){
    
    const tecla = lista_de_teclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const IdAudio = `#som_${instrumento}`;

    lista_de_teclas[contador].onclick = function(){
        toca_som(IdAudio)
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Enter' || evento.code == 'Space'){
            console.log(evento.code)
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
