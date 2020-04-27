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