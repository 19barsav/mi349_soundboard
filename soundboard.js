var buttonElement1 = document.getElementById('carrie')
var buttonElement2 = document.getElementById('harrison')
var buttonElement3 = document.getElementById('blaster')


buttonElement1.addEventListener('mouseover', sound_play("carrie"))
buttonElement2.addEventListener('mouseover', sound_play("harrison"))
buttonElement3.addEventListener('mouseover', sound_play("blaster"))


sound_play = function (sound) {
    if (sound == 'carrie') {
        const music = new Audio('dont_like.wav');
        music.play();
    }
    else if (sound == 'harrison') {
        const music = new Audio('bad_feeling.wav');
        music.play();
    }
    else {
        const music = new Audio('blaster.wav');
        music.play();
    }

}