const navContainerId = "navigation-container";
const navContainerBaseClass = "wp-block-navigation__responsive-container";

function isResponsiveMenuOpen(){
  var navContainer = document.getElementById(navContainerId);
  return navContainer.className != navContainerBaseClass;
}

// shows the menu when the hamburger icon is clicked
function showMenu() {
  var navContainer = document.getElementById(navContainerId);
  navContainer.className = navContainerBaseClass + " has-modal-open is-menu-open";

  document.querySelector(".menu-control").focus();
}

// hides the menu on the (x) button or on focus lost
function hideMenu() {
  var navContainer = document.getElementById(navContainerId);
  navContainer.className = navContainerBaseClass;
}

// hides the menu when the focus is out of the menu controls
function hideWhenFocusOut(e){
  if (isResponsiveMenuOpen() &&
      (e.relatedTarget === null || 
       (!e.relatedTarget.classList.contains("menu-control") && e.relatedTarget.id != navContainerId))){
    hideMenu();
  }
}

// handles key events on responsive menu container: keep focus on container controls, handle "Esc"
function menuContainerKeyDown(e){
  if (e.target === null || !isResponsiveMenuOpen())
    return;
  var isEscPressed = (e.key === "Escape" || e.keyCode === 27);
  if (isEscPressed)
  {
    e.preventDefault();
    hideMenu();
    return;
  }
  var isTabPressed = (e.key === "Tab" || e.keyCode === 9);
  if (isTabPressed){
    var controls = document.querySelectorAll(".menu-control");
    if (!e.shiftKey && e.target == controls[controls.length - 1]){
      controls[0].focus();
      e.preventDefault();
      return;
    }
    if (e.shiftKey && e.target == controls[0]){
      controls[controls.length - 1].focus();
      e.preventDefault();
      return;
    }
  }
}