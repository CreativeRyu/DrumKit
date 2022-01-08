var greenLight = new Audio('sounds/Green Light Ride.mp3');
var isPlaying = false;

// DETECTING BUTTON PRESS

$(".sound").click(function () {

    chooseSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
});

// DETECTING KEYDOWN

$(document).keydown((event) => {

    chooseSound(event.key);
    buttonAnimation(event.key);
});

function chooseSound(key) {
    switch (key) {
        case "s":
            var sound1 = new Audio('sounds/Wrapped Up and Ready to Roll.mp3');
            sound1.play();
            break;
        case "o":
            var sound2 = new Audio('sounds/Titles_dont_win_battles.mp3');
            sound2.play();
            break;
        case "w":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "⏯":
            toggleMusic(greenLight);
            break;

        default:
            console.log(key);
    }
}

function toggleMusic(songToPlay) {
    isPlaying ? songToPlay.pause() : songToPlay.play();
}

greenLight.onplaying = function () {
    isPlaying = true;
};

greenLight.onpause = function () {
    isPlaying = false;
};

function buttonAnimation(currentKey) {
    var activeButton = $("." + currentKey);

    $(activeButton).addClass("pressed");

    setTimeout(function () {
        $(activeButton).removeClass("pressed")
    }, 100);
}