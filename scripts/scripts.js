var sectionActive = "home"

window.addEventListener('load',() => {
    document.getElementById(sectionActive+"-header").style.color = "red";
    document.getElementById(sectionActive+"-nav").style.backgroundColor = "green";
});

function scrolling(to){ 

    window.scrollTo(0, document.getElementById(to+'-main').offsetTop);
}

document.getElementById("home-header").addEventListener("click", () => {scrolling("home")});
document.getElementById("about-header").addEventListener("click", () => {scrolling("about")});
document.getElementById("experience-header").addEventListener("click", () => {scrolling("experience")});
document.getElementById("skills-header").addEventListener("click", () => {scrolling("skills")});
document.getElementById("portifolio-header").addEventListener("click", () => {scrolling("portifolio")});
document.getElementById("contact-header").addEventListener("click", () => {scrolling("contact")});

document.getElementById("home-nav").addEventListener("click", () => {scrolling("home")});
document.getElementById("about-nav").addEventListener("click", () => {scrolling("about")});
document.getElementById("experience-nav").addEventListener("click", () => {scrolling("experience")});
document.getElementById("skills-nav").addEventListener("click", () => {scrolling("skills")});
document.getElementById("portifolio-nav").addEventListener("click", () => {scrolling("portifolio")});
document.getElementById("contact-nav").addEventListener("click", () => {scrolling("contact")});