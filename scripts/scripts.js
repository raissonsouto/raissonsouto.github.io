var sectionActive = 'home';

function scrollingTo(section) { 

  document.getElementById(sectionActive+"-header").querySelector('a').style.color = "#000";
  document.getElementById(sectionActive+"-nav").style.backgroundColor = "#aaa";

  sectionActive = section;

  document.getElementById(section+"-header").querySelector('a').style.color = "#000aaa";
  document.getElementById(section+"-nav").style.backgroundColor = "#000aaa";

}

//  toggle hamburguer

document.getElementById('hamburguer').addEventListener('click', () => {
  if (document.getElementById('hamburguer').className == "") {

    document.getElementById('hamburguer').className == "open";
  } else {
    document.getElementById('hamburguer').className == "";
  }
});