$(document).ready(function() {
    $('.nav-button').click(function(event) {
        $('.menu-list ,.btn-navigation-menu, .icon-menu').toggleClass ('active');
        $('body').toggleClass('lock');
    
    }); 

});

