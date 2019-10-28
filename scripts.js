function getClientHeight()
{
  return document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientHeight:document.body.clientHeight;
}

var clientHeight = getClientHeight();

$(window).scroll(function() {
    
    var diff = ($("#blockLength").height() - clientHeight) / ($("#page").height() - clientHeight);
    var blocktoSet = $(window).scrollTop() * diff;
    
    $("#block").scrollTop(blocktoSet);
    
    console.log()
    
    
    
});