$(window).scroll(function() {
    
    var diff = $("#blockLength").outerHeight() / $("#page").outerHeight();
    var blocktoSet = $(window).scrollTop() * diff;
    
    $("#block").scrollTop(blocktoSet);
    
    console.log()
    
    
    
});