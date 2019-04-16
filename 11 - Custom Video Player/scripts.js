//Get Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');

//Build functions
function togglePlay() {
    video[ (video.paused === true) ? 'play' : 'pause']();
}

function updateButton() {
    toggle.textContent = (this.paused === true) ? '►' : '❚ ❚';
}

function skip(){
    video.currentTime += Number(this.dataset.skip);
}

//Bind Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(element => {
    element.addEventListener('click', skip);
});
