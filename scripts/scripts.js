function toggleHamburguer() {
  
  if (document.getElementById('hamburger').className == "mobile-header") {

    document.getElementById('hamburger').className = "mobile-header open";
    document.getElementById('header').style.height = '100vh';
    document.getElementById('list-header').style.opacity = '1';
    document.getElementById('list-header').style.margin = '50px 7%';
    document.getElementById('list-header').style.top = '0px';
  } else {

    document.getElementById('hamburger').className = "mobile-header";
    document.getElementById('header').style.height = '50px';
    document.getElementById('list-header').style.opacity = '0';
    document.getElementById('list-header').style.margin = '0px 7%';
    document.getElementById('list-header').style.top = '-320px';
  }
}

function scrollingTo(index) {
  
  scrollControl = 1;

  document.getElementById(items[index]+'-main').scrollIntoView();
  switchViewAdvertise(index);

  if (window.innerWidth <= 720) {
    toggleHamburguer();
  }

  setTimeout(() => {scrollControl = 0}, 1000)
}

const items = ['home','about','experience','skills','portifolio','contact'];
var sectionIndex = 0;

function switchViewAdvertise(index) {

  if (index < 6 && index > -1) {

    document.getElementById(items[sectionIndex]+"-header").style.color = "#eee";

    sectionIndex = index;

    document.getElementById(items[index]+"-header").style.color = "#08f";
  }
}

var listMain = [
  document.getElementById("home-main"),
  document.getElementById("about-main"),
  document.getElementById("experience-main"),
  document.getElementById("skills-main"),
  document.getElementById("portifolio-main"),
  document.getElementById("contact-main")
];

var scrollControl = 0;

function moveScroll(){

  var scrollPosY = window.pageYOffset || window.scrollTop;

  if (scrollControl == 0) {
    for(var index in listMain){
      if (scrollPosY+10 >= listMain[index].offsetTop){
        switchViewAdvertise(index);
      }
    }
  }
}

function submitEmail() {

  var name = document.getElementById('name-contact-form');
  var email = document.getElementById('email-contact-form');
  var message = document.getElementById('message-contact-form');

  if(!name.value || !email.value || !message.value) {
    alert('erro! algum campo está vazio')
  } else {
    alert('message sent')
  }
}