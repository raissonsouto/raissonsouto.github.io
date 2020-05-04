//hamburger button
document.getElementById('hamburger').addEventListener('click', () => {toggleHamburger()})

//header scroll events

document.getElementById('home-h').addEventListener('click', () => {scrollingTo(0)})
document.getElementById('about-h').addEventListener('click', () => {scrollingTo(1)})
document.getElementById('skills-h').addEventListener('click', () => {scrollingTo(2)})
document.getElementById('portifolio-h').addEventListener('click', () => {scrollingTo(3)})
document.getElementById('experience-h').addEventListener('click', () => {scrollingTo(4)})
document.getElementById('contact-h').addEventListener('click', () => {scrollingTo(5)})

// home events

document.getElementById('contact-home').addEventListener('click', () => {scrollingTo(5)})

// scroll event

window.addEventListener('scroll', () => {moveScroll()})

// check if the window width is bigger than 720px to close the toggle

setInterval(() => {
    if (document.getElementById('hamburger').className != "mobile-h" && window.innerWidth > 720) {

        document.getElementById('hamburger').className = "mobile-h";
        document.querySelector('header').style.height = '40px';
        document.getElementById('desktop-h').style.opacity = '1';
        document.getElementById('desktop-h').style.margin = '0px 7%';
        document.getElementById('desktop-h').style.top = '0px';
        document.getElementById('social-networks-h').style.display = 'none';
    }
},1080)

document.getElementById('copy-email-contact').addEventListener('click',() => {
    alertPopup('email copied');
    copyText();
})

document.getElementById('name-contact-form').addEventListener('focus', () => {resetInput('name')})
document.getElementById('email-contact-form').addEventListener('focus', () => {resetInput('email')})
