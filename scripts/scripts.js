var sectionActive = 'home';

function scrollingTo(section) {

  alert(section+'-main')
  window.scrollTo(0, document.getElementById(section+'-main').offsetTop); 

  document.getElementById(sectionActive+"-header").style.color = "#eee";
  document.getElementById(sectionActive+"-nav").style.backgroundColor = "#aaa";

  sectionActive = section;

  document.getElementById(section+"-header").style.color = "#08f";
  document.getElementById(section+"-nav").style.backgroundColor = "#08f";

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