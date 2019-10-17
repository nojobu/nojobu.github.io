$(document).ready(function(){
/*$('.toggle').click(function(){
$('.toggle').toggleClass('active')
})*/

/* Toggle Selection (navigation) */
let mainNav = document.getElementById('js-toggle-menu');
/* Humburger */
let navBarToggle = document.getElementById('js-navbar-toggle');


navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    navBarToggle.classList.toggle('toggle-active');
});
navBarToggle.addEventListener('touchstart', function () {
    mainNav.classList.toggle('active');
    navBarToggle.classList.toggle('toggle-active');
});

mainNav.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    navBarToggle.classList.toggle('toggle-active');
}); 
                                                              //a[href*="#"]:not([href="#"])
   /* $('.main-toggle-menu .main-toggle-menu-link> a.nav-links-toggle:not(a[href="#"])').on('click', function() {
    self.location = $(this).attr('href'); */
    $('.main-toggle-menu .main-toggle-menu-link> a[href*="#"]:not([href="#"])').on('click touchstart', function() {
    self.location = $(this).attr('href');
        
});
    
});


