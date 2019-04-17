$(document).ready(function(){
/*$('.toggle').click(function(){
$('.toggle').toggleClass('active')
})*/

let mainNav = document.getElementById('js-toggle-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');


navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    navBarToggle.classList.toggle('toggle-active');
});

mainNav.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    navBarToggle.classList.toggle('toggle-active');
}); 
        
    $('.toggle-menu .main-toggle-menu > a:not(a[href="#"])').on('click', function() {
    self.location = $(this).attr('href');
        
});
    
});


