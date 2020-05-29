
function initJS() {
    AOS.init({
        once: true
    });
    
    var scroll = new SmoothScroll('a[href*="#"]');
    
    $(".lazy").unveil(100, function() {
      $(this).on('load', function() {
        this.style.opacity = 1;
      });
    });

    // $(".video-container").fitVids();

    if (window.location.pathname != '/') {
        $('.nav-link-x').css({
            opacity: 1,
            cursor: 'pointer'
        });
        scroll.animateScroll(0);
    } else {
        $('.nav-link-x').css({
            opacity: 0,
            cursor: 'default'
        });
    }

}
// executes this stuff before load
$(function() {
    const swup = new Swup();
    swup.on('contentReplaced', function() {
        initJS()
    });
});

initJS()