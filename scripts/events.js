document.getElementById('home-header').addEventListener('click', () => {scrollingTo(0)})
document.getElementById('about-header').addEventListener('click', () => {scrollingTo(1)})
document.getElementById('experience-header').addEventListener('click', () => {scrollingTo(2)})
document.getElementById('skills-header').addEventListener('click', () => {scrollingTo(3)})
document.getElementById('portifolio-header').addEventListener('click', () => {scrollingTo(4)})
document.getElementById('contact-header').addEventListener('click', () => {scrollingTo(5)})

document.getElementById('contact-home').addEventListener('click', () => {document.getElementById('contact-main').scrollIntoView();})