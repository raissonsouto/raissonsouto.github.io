function toggleHamburger() {
  
    if (document.getElementById('hamburger').className == "mobile-h") {
  
        document.getElementById('hamburger').className = "mobile-h open";
        document.querySelector('header').style.height = '100vh';
        document.getElementById('desktop-h').style.opacity = '1';
        document.getElementById('desktop-h').style.margin = '50px 7%';
        document.getElementById('desktop-h').style.top = '50px';
        document.getElementById('social-networks-h').style.display = 'flex';
    } else {
  
        document.getElementById('hamburger').className = "mobile-h";
        document.querySelector('header').style.height = '50px';
        document.getElementById('desktop-h').style.opacity = '0';
        document.getElementById('desktop-h').style.margin = '0px 7%';
        document.getElementById('desktop-h').style.top = '-320px';
        document.getElementById('social-networks-h').style.display = 'none';
    }
}

const items = ['home','about','skills','portifolio','experience','contact'];
var sectionIndex = 0;
  
function scrollingTo(index) {

    scrollControl = 1;
    document.getElementById(items[index]+'-m').scrollIntoView();
    switchViewAdvertise(index);
  
    if (window.innerWidth <= 720) {
        toggleHamburguer();
    }
    setTimeout(() => {scrollControl = 0},1000)
}
  
function switchViewAdvertise(index) {

    console.log(window.pageYOffset)
    document.getElementById(items[sectionIndex]+"-h").style.color = "#eee";
    sectionIndex = index;
    document.getElementById(items[index]+"-h").style.color = "#08f";
}
  
  var scrollControl = 0;
  
function moveScroll() {
  
    var scrollPosY = window.pageYOffset;
  
    if (scrollControl == 0) {
        for(var cont = 0; cont <= 6; cont++){
            if (scrollPosY+1 < document.getElementById('home-m').offsetHeight*cont) {
                switchViewAdvertise(cont-1);
                break;
            }
        }
    }
}

function validateName() {

    var name = document.getElementById('name-contact-form').value;

    if(name.length == 0) {
      
      errorInput("name","Name can´t be blank")
      return false;

    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {

      errorInput("name","Oops, maybe you put an invalid character")
      return false;
    }
    return true;
  }

 function validateEmail () {

  var email = document.getElementById('email-contact-form').value;

  if(email.length == 0) {

    errorInput("email","Email can´t be blank")
    return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    errorInput("email","Please enter a valid email address")
    return false;

  }

  return true;

}

function validateMessage () {

  var message = document.getElementById('message-contact-form').value;

  if(message.length == 0) {

    errorInput("message","message can´t be blank")
    return false;

  }

  return true;

}

function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()) {
    return false;
  } else {

    submitted=true;
    return true;
  }
}

function resetInput (element) {
    document.getElementById('error-message-form').innerHTML = "";
    document.getElementById('error-image-form').style.display = 'none';
    document.getElementById(element+'-contact-form').style.borderBottom = '1px #fff solid';
    document.getElementById(element+'-contact-form').style.color = '#fff';
}

function errorInput (element, message) {
  document.getElementById('error-message-form').innerHTML = message;
  document.getElementById('error-image-form').style.display = 'block';
  document.getElementById(element+'-contact-form').style.borderBottom = '1px #a20 solid';
  document.getElementById(element+'-contact-form').style.color = '#f20';
}