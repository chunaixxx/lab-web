const getEl = sel => document.querySelector(sel)


const play = getEl('.play'),
      pause = getEl('.pause');


const cloud1 = getEl('.cloud1');
const clouds = getEl('.clodu');


const sun = getEl('.sun')

// const cloud1Anim = anime({ 
//     targets: cloud1, 
//     left: 'calc(100% - 200px)',
//     loop: true,
//     duration: 21000,
//     easing: 'linear',
//     direction: 'alternate',
//     autoplay: false,
// });


const cloudsAnim = anime({
    targets: '.cloud',
    left: '125%',
    direction: 'alternate',
    autoplay: false,
    loop: true,
    easing: 'linear',
    duration: (el, i, l) => i * 5000 + 20000,
});


play.addEventListener('click', () => {
    cloudsAnim.play();
    sun.classList.remove('paused');
});

pause.addEventListener('click', () => {
    cloudsAnim.pause();
    sun.classList.add('paused');
})