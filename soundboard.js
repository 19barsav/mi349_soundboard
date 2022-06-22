var buttonElement1 = document.getElementById('carrie')
var buttonElement2 = document.getElementById('harrison')
var buttonElement3 = document.getElementById('blaster')




var sound_play = function (sound) {
    if (sound == 'carrie') {
        var x = document.getElementById("carrie_wav");
        x.play();
    }
    else if (sound == 'harrison') {
        var x = document.getElementById("harrison_wav");
        x.play();
    }
    else {
        var x = document.getElementById("blaster_wav");
        x.play();
    }

}

buttonElement1.addEventListener('click', sound_play('carrie'))
buttonElement2.addEventListener('click', sound_play('harrison'))
buttonElement3.addEventListener('click', sound_play(''))


