    $(window).scroll(function() {
        var pageH = $('#page').height() - $(this).height();
        var pageT = this.scrollY - $('#page').offset().top;
        
        $('#block').scrollTop(pageT / pageH * ($('#blockLength').height() - $(this).height()));
    });