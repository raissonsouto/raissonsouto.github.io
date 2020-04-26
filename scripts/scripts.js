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

function moveScroll() {

  var scrollPosY = window.pageYOffset || window.scrollTop;

  if (scrollControl == 0) {
    for(var index in listMain){
      if (scrollPosY+10 >= listMain[index].offsetTop){
        switchViewAdvertise(index);
      }
    }
  }
}

function validateName() {
  var name = document.getElementById('name-contact-form').value;

  if(name.length == 0) {
    document.getElementById('error-form').innerHTML = "Name can't be blank" ;
    return false;

  }
  if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
    alert("Please enter your correct name") ;//Validation Message
    return false;
  }
  return true;
}

function validateEmail () {

var email = document.getElementById('email-contact-form').value;
if(email.length == 0) {
  alert("Email can't be blank") ;//Validation Message
  return false;

}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  alert("Please enter a correct email address") ;//Validation Message
  return false;

}

return true;
}

function validateForm() {
if (!validateName() || !validatePhone() || !validateEmail()) {

  alert("Form not submitted");//Validation Message
  return false;
}
else {
  submitted=true;
  return true;
}
}