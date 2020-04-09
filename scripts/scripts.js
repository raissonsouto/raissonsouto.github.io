function toggleHamburguer() {
  
  if (document.getElementById('hamburger').className == "mobile-header") {

    document.getElementById('hamburger').className = "mobile-header open";
    document.getElementById('header').style.height = '100vh';
    document.getElementById('list-header').style.opacity = '1';
    document.getElementById('list-header').style.margin = '50px 7%';
    document.getElementById('list-header').style.display = 'block';
  } else {

    document.getElementById('hamburger').className = "mobile-header";
    document.getElementById('header').style.height = '50px';
    document.getElementById('list-header').style.opacity = '0';
    document.getElementById('list-header').style.margin = '0px 7%';
    document.getElementById('list-header').style.display = 'none';
  }
}

function scrollingTo(index) {

  document.getElementById(items[index]+'-main').scrollIntoView();
  switchViewAdvertise(index);

  if (window.innerWidth <= 720) {
    toggleHamburguer();
  }
}

const items = ['home','about','experience','skills','portifolio','contact'];
var sectionIndex = 0;

function switchViewAdvertise(index) {

  if (index < 6 && index > -1) {

    document.getElementById(items[sectionIndex]+"-header").style.color = "#eee";
    document.getElementById(items[sectionIndex]+"-nav").style.backgroundColor = "#555";

    sectionIndex = index;

    document.getElementById(items[index]+"-header").style.color = "#08f";
    document.getElementById(items[index]+"-nav").style.backgroundColor = "#08f";
  }
}

function moveUp() {switchViewAdvertise(sectionIndex-1)}

function moveDown() {switchViewAdvertise(sectionIndex+1)}

/* var lastScrollTop = 0;
var vartotrytosolvthetwiceactiveyoffset = 0;

window.addEventListener("scroll", function(){

  var st = window.pageYOffset || window.scrollTop;

  if (vartotrytosolvthetwiceactiveyoffset == 0) {
    if (st > lastScrollTop){

      moveDown();
  
    } else if (st < lastScrollTop) {
  
      moveUp();
    }

    vartotrytosolvthetwiceactiveyoffset = 1
  } else {
    vartotrytosolvthetwiceactiveyoffset = 0;
  }

  lastScrollTop = st <= 0 ? 0 : st;

}, false); */

var home = document.getElementById("home-main");
var about = document.getElementById("about-main");
var experience = document.getElementById("experience-main");
var skills = document.getElementById("skills-main");
var portifolio = document.getElementById("portifolio-main");
var contact = document.getElementById("contact-main");

var allMains = [home, about, experience, skills, portifolio, contact];

function checarDiv(){
  var st = window.pageYOffset || window.scrollTop;
  for(var i in allMains){
    if (st+10 >= allMains[i].offsetTop && i != allMains.length){
      switchViewAdvertise(i);
      console.log(i);
    }
  }
}

window.addEventListener("scroll", () => checarDiv());

