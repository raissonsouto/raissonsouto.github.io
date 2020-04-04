var sectionActive = 'home';

function scrollingTo(section) { 

  document.getElementById(sectionActive+"-header").querySelector('a').style.color = "#000";
  document.getElementById(sectionActive+"-nav").style.backgroundColor = "#aaa";

  sectionActive = section;

  document.getElementById(section+"-header").querySelector('a').style.color = "#000aaa";
  document.getElementById(section+"-nav").style.backgroundColor = "#000aaa";

}

function closeOptionsBar() {
  
  if (document.getElementById('hamburger').className == "mobile") {

    document.getElementById('hamburger').className = "mobile open";
    document.getElementById('options-bar-div').style.height = "100vh";
    document.getElementById('options-bar').style.display = "block";
  } else {

    document.getElementById('hamburger').className = "mobile";
    document.getElementById('options-bar-div').style.height = "0px";
    document.getElementById('options-bar').style.display = "none";
  }
}
//  toggle hamburguer

document.getElementById('hamburger').addEventListener('click', () => {
  closeOptionsBar();
});