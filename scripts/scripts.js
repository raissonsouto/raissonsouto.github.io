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
    document.querySelector("header").style.height = "100vh";
    document.querySelector(".desktop").style.display = "block";
  } else {
    document.getElementById('hamburger').className = "";
    document.querySelector("header").style.height = "40px";
    document.querySelector(".desktop").style.display = "none";
  }
});