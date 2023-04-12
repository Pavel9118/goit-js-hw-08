
import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', _throttle(onRunPlayer, 1000));
function onRunPlayer(event) {
    console.log(event.seconds);
    localStorage.setItem('videoplayer-current-time', event.seconds);
};
function setCurrentTime() {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
};
setCurrentTime();

