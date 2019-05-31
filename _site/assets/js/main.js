function initJS() {
    AOS.init({
        once: true
    });
    var scroll = new SmoothScroll('a[href*="#"]');
    var lazyLoadInstance = new LazyLoad({
        callback_load: function() {
            AOS.refresh();
        }
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