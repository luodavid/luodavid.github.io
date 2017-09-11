var exp1 = {obj:$("#exp1"), animated:false};
var exp2 = {obj:$("#exp2"), animated:false};
var exp3 = {obj:$("#exp3"), animated:false};
var exp4 = {obj:$("#exp4"), animated:false};

var anim1 = false;
var anim2 = false;
var anim3 = false;
var anim4 = false;


$(window).scroll(function(){
    console.log(isElementInViewport(exp1.obj[0]));
});

function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop) && ($elem.animated == false));
}

function slideIntoView(elem) {
    var $elem = $(elem);
    if ($elem.animated == false) {
        $elem.slideDown('slow');
        $elem.animated = true;
    }
}


