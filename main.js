const keylist = document.querySelectorAll('.tecla');

function playSound (idAudioElement){

    document.querySelector(idAudioElement).play();
}

for(index = 0;index < keylist.length; index++){
    const key = keylist[index];
    const sound = key.classList[1];
    //console.log(sound)

    const idSound = `#sonido_${sound}`;
    //console.log(idSound)

    key.onclick = function (){
        playSound(idSound);
    }; //funcion anonima
  
    key.onkeydown = function(event){
        //console.log(event.code == 'Space');
        if(event.code === 'Space' ||  event.code === 'Enter'){
            key.classList.add('activa');
        }
    }
    key.onkeyup = function(){
        key.classList.remove('activa');
    }
}
