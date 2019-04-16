//Get Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const sliders = player.querySelectorAll('.player__slider');
const progressBar = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');

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

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//Bind Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(element => element.addEventListener('click', skip));

sliders.forEach(element => element.addEventListener('change', handleSliders));

//progress.addEventListener('click', scrub);

let progressMouseDown = false;
progress.addEventListener('mousedown', () => progressMouseDown = true);
progress.addEventListener('mouseup', () => progressMouseDown = false);
progress.addEventListener('mousemove', (e) => progressMouseDown && scrub(e));
