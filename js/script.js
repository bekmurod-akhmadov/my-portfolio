let menuBtn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
button.addEventListener('click', function () {
    alert("Sorry, the site is not yet fully operational!")
})

menuBtn.onclick = function () {
    menuBtn.classList.toggle('fa-times');
    header.classList.toggle('active');
}
window.onscroll = function () {
    menuBtn.classList.remove('fa-times');
    header.classList.remove('active');

    if (window.scrollY > 40) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = function () {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

window.addEventListener('scroll', function () {
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 70;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }

    }
})

let navbar = document.querySelectorAll(".navbar a");
navbar.forEach(navItem => {
    navItem.addEventListener('click', function () {
        menuBtn.classList.remove('fa-times');
        header.classList.remove('active');
    })
});

