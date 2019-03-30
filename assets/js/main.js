
function initJS() {
    AOS.init({
        once: true
    });
    var scroll = new SmoothScroll('a[href*="#"]');
    var lazyLoadInstance = new LazyLoad({  
      callback_load: function () {
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

    var FadeTransition = Barba.BaseTransition.extend({
        start: function() {
            /**
             * This function is automatically called as soon the Transition starts
             * this.newContainerLoading is a Promise for the loading of the new container
             * (Barba.js also comes with an handy Promise polyfill!)
             */

            // As soon the loading is finished and the old page is faded out, let's fade the new page
            Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
        },

        fadeOut: function() {
            return $(this.oldContainer).animate({ opacity: 0 }).promise();
        },

        fadeIn: function() {
            var _this = this;
            var $el = $(this.newContainer);

            $(this.oldContainer).hide();

            $el.css({
                visibility: 'visible',
                opacity: 0
            });

            $el.animate({ opacity: 1 }, 400, function() {
                _this.done();
                initJS();
            });
        }
    });

    Barba.Pjax.getTransition = function() {
        /**
         * Here you can use your own logic!
         * For example you can use different Transition based on the current page or link...
         */

        return FadeTransition;
    };

    Barba.Pjax.start();
});

initJS()