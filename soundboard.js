var buttonElement1 = document.getElementById('carrie')
var buttonElement2 = document.getElementById('harrison')
var buttonElement3 = document.getElementById('blaster')

buttonElement1.addEventListener('click', sound_play("carrie"))
buttonElement2.addEventListener('click', sound_play("harrison"))
buttonElement3.addEventListener('click', sound_play("blaster"))

const music1 = new Audio('dont_like.wav');
const music2 = new Audio('bad_feeling.wav');
const music3 = new Audio('blaster.wav');
        
        

var sound_play = function (sound) {
    if (sound == 'carrie') {
        music1.muted = true;
        music1.play();
    }
    else if (sound == 'harrison') {
        
        music2.play();
    }
    else {
        music3.play();
    }

}


