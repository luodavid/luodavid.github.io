// var origWidth = document.getElementById("smallmenu").style.width;

function openNav() {
    document.getElementById("mySidenav").style.width = "180px";
    document.getElementById("smallmenu").style.width = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("smallmenu").style.width = origWidth;
}

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

  $('.back-bird').css({
    'transform' : 'translate(0px, -'+ wScroll /4 +'%)'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
  });

  if(wScroll > $('.gallery-pics').offset().top - ($(window).height() / 1.2)) {

    $('.gallery-pics figure').each(function(i){

      setTimeout(function(){
        $('.gallery-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }

});