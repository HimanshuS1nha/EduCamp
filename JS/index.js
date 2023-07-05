let btn = document.getElementById('hamburger');
let navbar = document.getElementById('navbar-list');

btn.addEventListener('click', () => {
    console.log("clicked");
    if (navbar.style.display === '' || navbar.style.display === 'none') {
        navbar.style.display = 'flex';
        btn.classList.remove('bx-menu');
        btn.classList.add('bx-x');
    }
    else {
        navbar.style.display = 'none';
        btn.classList.remove('bx-x');
        btn.classList.add('bx-menu');
    }
})


const animateLeftOnScroll = document.getElementsByClassName("animate-left-on-scroll");
const animateRightOnScroll = document.getElementsByClassName("animate-right-on-scroll");
const animateInView = document.getElementsByClassName("animate-in-view");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
        else {
            entry.target.classList.remove("animate");
        }
    })
}, {
    root: document,
});

for (let i = 0; i < animateLeftOnScroll.length; i++) {
    observer.observe(animateLeftOnScroll[i]);
}

for (let i = 0; i < animateRightOnScroll.length; i++) {
    observer.observe(animateRightOnScroll[i]);
}

for (let i = 0; i < animateInView.length; i++) {
    observer.observe(animateInView[i]);
}