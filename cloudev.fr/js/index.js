// Load html pages
$("#NavbarComponent").load("cloudev.fr/components/navbar/navbar.html");
$("#SidenavComponent").load("cloudev.fr/components/sidenav/sidenav.html");
$("#ParallaxHomeComponent").load("cloudev.fr/components/parallax-home/parallax-home.html");
$("#ProfileCardComponent").load("cloudev.fr/components/profile/profile-card/profile-card.html");
$("#AboutComponent").load("cloudev.fr/components/profile/about/about.html");
$("#SkillsComponent").load("cloudev.fr/components/profile/skills/skills.html");
$("#DiplomasComponent").load("cloudev.fr/components/profile/diplomas/diplomas.html");
$("#ExperiencesComponent").load("cloudev.fr/components/profile/experiences/experiences.html");
$("#MySitesComponent").load("cloudev.fr/components/my-sites/my-sites.html");

$( document ).ready(function() {
  // Scroll to profile
  var profile = $('#profile');
  $('#ParallaxHomeComponent').click(function() {
    document.getElementById('profile').scrollIntoView({block: 'start', behavior: 'smooth'});
  })

  // Scroll to top
  var body = $("html, body");
  $('#fabToTop').click(function() {
    body.stop().animate({scrollTop: 0}, 700, 'swing');
  })
});
