var buttonElement1 = document.getElementById('carrie')
var buttonElement2 = document.getElementById('harrison')
var buttonElement3 = document.getElementById('blaster')



const music2 = new Audio('bad_feeling.wav');
const music3 = new Audio('blaster.wav');

var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "dont_like.wav"

var sound_play = function (sound) {
    if (sound == 'carrie') {
        audio.play();
    }
    else if (sound == 'harrison') {
        
        music2.play();
    }
    else {
        music3.play();
    }

}


