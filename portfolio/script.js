



// Toggle responsive navigation
// Toggle responsive navigation
function toggleNav() {
  var nav = document.querySelector("nav");
  var navbar = document.querySelector("ul#navbar");
  navbar.style.display = (navbar.style.display === "none") ? "block" : "none";
  nav.classList.toggle("responsive");
}



document.getElementById('discover-button').addEventListener('click', function() {
  
  document.getElementById('intro-screen').style.display = 'none';
  document.getElementById('map').style.display = 'block';

});

  




document.querySelectorAll('.destination').forEach(function(destination) {
  destination.addEventListener('click', function() {
    document.getElementById('plane').style.top = destination.offsetTop + 'px';
    document.getElementById('plane').style.left = destination.offsetLeft + 'px';
    //get the id of the clicked destination : here is how it looks <div class="destination" id="assignment1">
    var clickedScreenId = destination.getAttribute('id');
    
    //make goto = clickedScreenId + html extension
    var goTo = clickedScreenId + '.html';
    setTimeout(function(){
      window.location = goTo;
    }, 1200);  
  });
});
document.getElementById('navbar').addEventListener('click', function(event) {
  // Prevent the default link click behavior
  event.preventDefault();
  
  // do something while timeOut ticks ...        
  // Hide all screens
  var screens = document.querySelectorAll('#intro-screen, #about-me, #assignment1, #assignment2, #assignment3, #assignment4');
  screens.forEach(function(screen) {
    screen.style.display = 'none';
  });

  // Get the id of the clicked link
  var clickedScreenId = event.target.getAttribute('href').substring(1); // remove the leading #
  // if (clickedScreenId === '#assignment1') {
  //   clickedScreenId = 'assignment1';
  // }
  // if (clickedScreenId === '#assignment2') {
  //   clickedScreenId = 'assignment2';
  // }
  // if (clickedScreenId === '#assignment3') {
  //   clickedScreenId = 'assignment3';
  // }
  // if (clickedScreenId === '#assignment4') {
  //   clickedScreenId = 'assignment4';
  // }
  // if (clickedScreenId === '#about-me') {
  //   clickedScreenId = 'about-me';
  // }
  // if (clickedScreenId === '#intro-screen') {
  //   clickedScreenId = 'intro-screen';
  // }




  goTo = clickedScreenId + '.html';
  setTimeout(function(){
   window.location = goTo;
 }, 500);
 //make goto = clickedScreenId + html extension
 
    

  // If the Home link was clicked, show the map and all destinations. Otherwise, show the clicked screen.
  if (clickedScreenId === 'intro-screen') {
    goTo = "index" + '.html' + "#intro-screen";
    setTimeout(function(){
      window.location = goTo;
    }, 500); 
    document.getElementById('map').style.display = 'block';
    var destinations = document.querySelectorAll('.destination');
    destinations.forEach(function(destination) {
      destination.style.display = 'block';
      
    });
    
  } else {
    document.getElementById(clickedScreenId).style.display = 'block';
  }
  

  // Move the plane to the clicked destination
  var clickedDestination = document.querySelector('.destination[data-destination="' + clickedScreenId + '"]');
  if (clickedDestination) {
    document.getElementById('plane').style.top = clickedDestination.offsetTop + 'px';
    document.getElementById('plane').style.left = clickedDestination.offsetLeft + 'px';
    
  }
  
});