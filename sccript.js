console.log("Welcome to Spotify");
let songindex = 0;
let audioelement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');

let songs = [
    { songName: "salaam -e ishq", filepath: "1.mp3", coverpath: "cover.jpg" }
];

masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Change play button to pause button
    } else {
        audioelement.pause();
        masterplay.innerHTML = '<i class="fa-solid fa-circle-play"></i>'; // Change pause button to play button
    }
});

myprogressbar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
});
