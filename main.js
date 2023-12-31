let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx bx-x');
    navbar.classList.toggle('active');
};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

const typed = new Typed('.multiple-text', {
    strings: ['3D artist', 'Youtuber' , 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})




ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .art-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        }
    });


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};






var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');
var video4 = document.getElementById('video4');


video1.onended = function () {
    video2.play();
    video1.style.opacity= 0;
    video2.style.opacity= 1;
}

video2.onended = function () {
    video3.play();
    video2.style.opacity= 0;
    video3.style.opacity= 1;
}

video3.onended = function () {
    video4.play();
    video3.style.opacity= 0;
    video4.style.opacity= 1;
}

video4.onended = function () {
    video1.play();
    video4.style.opacity= 0;
    video1.style.opacity= 1;
}