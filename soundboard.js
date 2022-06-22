var buttonElement1 = document.getElementById('carrie')
var buttonElement2 = document.getElementById('harrison')
var buttonElement3 = document.getElementById('blaster')


const music1 = new Audio('dont_like.wav');
const music2 = new Audio('bad_feeling.wav');
const music3 = new Audio('blaster.wav');



var sound_play = function (sound) {
    if (sound == 'carrie') {
        music1.play()
    }
    else if (sound == 'harrison') {
        
        music2.play()
    }
    else {
        music3.play()
    }

}


