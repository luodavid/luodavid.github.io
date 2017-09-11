
$(function() {
  $(window).scroll(function(){
    // console.log(isScrolledIntoView($("#aylmaoo")));
    $("#aylmaoo").each(function() {
      var t = $(this);
      console.log(isScrolledIntoView(t));
      // isScrolledIntoView(t);


    });

  })
})

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height() + docViewTop;

    console.log($(window).height()/2);
    console.log(elemTop + docViewTop + $(elem).height());
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $("#img-job").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      console.log(isScrolledIntoView(this));
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});