//Get Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const sliders = player.querySelectorAll('.player__slider');
const progressBar = player.querySelector('.progress__filled');

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

function handleSliders() {
    video[this.name] = this.value;
}

function handleProgress() {
    const progressPercentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${progressPercentage}%`;
}

//Bind Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(element => element.addEventListener('click', skip));

sliders.forEach(element => element.addEventListener('change', handleSliders));
