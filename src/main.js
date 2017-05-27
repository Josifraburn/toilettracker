window.activate= function() {
  var circleClassArray = document.getElementsByClassName('circle');
  var circleClass = circleClassArray[0];
  circleClass.classList.add('animating');
  var toiletLogoArray = document.getElementsByClassName('logo-img');
  var toiletLogo = toiletLogoArray[0];
  toiletLogo.classList.add('animated');
}
