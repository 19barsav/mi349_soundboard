
var buttonElement2 = document.getElementById('harrison')
var buttonElement3 = document.getElementById('blaster')




var sound_play = function (sound) {
    if (sound == 'c') {
        var x = document.getElementById("carrie_wav");
       
        x.play();
    }
    else if (sound == 'h') {
        var x = document.getElementById("harrison_wav");
        x.play();
    }
    else {
        var x = document.getElementById("blaster_wav");
        x.play();
    }

}


buttonElement2.addEventListener('click', sound_play('h'))
buttonElement3.addEventListener('click', sound_play(''))


