import { getHeading } from './lib/header';
import { getLastMeme } from './lib/memes';

setInterval(getHeading, 200);
setInterval(getLastMeme, 1000);

const element = document.getElementById('x') as HTMLDivElement;

document.addEventListener('keydown', event => {
  element.innerHTML = event.key;
});
