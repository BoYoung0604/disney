$(function() {
    $("html,body").animate({scrollTop: 0}, 100);
      var wd = $(window);
      $('div[data-type="background"]').each(function(){
        var bg = $(this);
        $(window).scroll(function() {
            var yPos = -(wd.scrollTop() / bg.data('speed'));
            var coords = yPos +1024+ 'px';
            bg.css({top: coords});
        });
    });
});
