$("#plus-hover").hover(function(){
    $(".black-circle").addClass("abcd");
    }, function(){
    $(".black-circle").removeClass("abcd");
});

$(document).ready(function() {
   
    $('#someID').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        return false;
    });

});

