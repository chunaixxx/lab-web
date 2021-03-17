const getEl = sel => document.querySelector(sel)


const play = getEl('.play'),
      pause = getEl('.pause');


const cloud1 = getEl('.cloud1');
const clouds = getEl('.clodu');


const sun = getEl('.sun');
const car = getEl('.car');


const cloudAnim1 = anime({
    targets: '.cloud1',
    left: '125%',
    autoplay: false,
    loop: true,
    easing: 'linear',
    duration: 30000,
});

const cloudAnim2 = anime({
    targets: '.cloud2',
    left: '125%',
    autoplay: false,
    loop: true,
    easing: 'linear',
    duration: 35000,
});

const cloudAnim3 = anime({
    targets: '.cloud3',
    left: '125%',
    autoplay: false,
    loop: true,
    easing: 'linear',
    duration: 45000,
});


const cloudAnim4 = anime({
    targets: '.cloud4',
    left: '125%',
    autoplay: false,
    loop: true,
    easing: 'linear',
    duration: 28000,
});


play.addEventListener('click', () => {
    cloudAnim1.play();
	cloudAnim2.play();
	cloudAnim3.play();
	cloudAnim4.play();
    sun.classList.remove('paused');
	car.classList.remove('paused');
});

pause.addEventListener('click', () => {
    cloudAnim1.pause();
	cloudAnim2.pause();
	cloudAnim3.pause();
	cloudAnim4.pause();
    sun.classList.add('paused');
	car.classList.add('paused');
})