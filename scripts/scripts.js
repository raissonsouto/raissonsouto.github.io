var sectionActive = 'home';

function scrollingTo(section) { 

  document.getElementById(sectionActive+"-header").querySelector('a').style.color = "#000";
  document.getElementById(sectionActive+"-nav").style.backgroundColor = "#aaa";

  sectionActive = section;

  document.getElementById(section+"-header").querySelector('a').style.color = "#000aaa";
  document.getElementById(section+"-nav").style.backgroundColor = "#000aaa";

}

//  toggle hamburguer

document.getElementById('hamburger').addEventListener('click', () => {

  if (document.getElementById('hamburger').className == "") {

    document.getElementById('hamburger').className = "open";
    document.getElementById('nav-header').style.height = "100vh";
  } else {

    document.getElementById('hamburger').className = "";
    document.getElementById('nav-header').style.height = "0px";
  }
});