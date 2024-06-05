const titreSpans = document.querySelectorAll('h1 span'),
    btns = document.querySelectorAll('.btn-first'),
    logo =  document.querySelectorAll('.logo'),
    medias = document.querySelectorAll('.bulle'),
    l1 = document.querySelectorAll('l1'),
    l2 = document.querySelectorAll('l2');

window.addEventListener('load', ()=>{
    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .staggerFrom(medias, 1, {rigth: -200, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {with: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {with: 0, ease: "power2.out"}, '-=2')
    .from(logo, .4, {transform: "scale(0)", ease: "power2.out"}, '-=2')

    TL.play();
})




