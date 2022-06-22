



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



