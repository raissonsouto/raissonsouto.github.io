function scrolling(to){

    window.scrollTo(0, document.getElementById(to+'-main').offsetTop);
    document.getElementById(to+'-nav').classList
}

document.getElementById("home-header").addEventListener("click", () => {scrolling("home-main")});
document.getElementById("about-header").addEventListener("click", () => {scrolling("about-main")});
document.getElementById("experience-header").addEventListener("click", () => {scrolling("experience-main")});
document.getElementById("skills-header").addEventListener("click", () => {scrolling("skills-main")});
document.getElementById("portifolio-header").addEventListener("click", () => {scrolling("portifolio-main")});
document.getElementById("contact-header").addEventListener("click", () => {scrolling("contact-main")});
