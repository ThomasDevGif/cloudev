var elem = document.querySelector('.carousel');
var instance = M.Carousel.init(elem, null);

$( document ).ready(function() {
  // Load html pages
  $("#SkillsComponent").load("cloudev.fr/components/profile/skills/skills.html");
  $('.carousel').carousel();
});
