var sectionActive = 'home';

function scrollingTo(section) { 

  document.getElementById(sectionActive+"-header").querySelector('a').style.color = "#000";
  document.getElementById(sectionActive+"-nav").style.backgroundColor = "#aaa";

  sectionActive = section;

  document.getElementById(section+"-header").querySelector('a').style.color = "#000aaa";
  document.getElementById(section+"-nav").style.backgroundColor = "#000aaa";

  if (window.innerWidth <= 720) {
    toggleHamburguer();
  }

}

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