
$(function() {

  
  $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
  })

  var show = function() {
    $("#spinner1").fadeOut(500);
    $("#spinner2").fadeOut(500);
    $("#overlay").fadeOut(1500);

    $('html, body').css({
      'overflow': 'auto',
      'height': 'auto'
    })
  }

  setTimeout(show, 2000);


  
  var par1height = $("#par1").css('height');
  $("#titlediv").css('top', (parseInt(par1height)*.75) +'px');

  var par5height = $("#par5").css('height');
  $("#about").css('top', par5height);

  var aboutheight = $("#about").css('height');
  $("#experience").css('top', (parseInt(aboutheight) + parseInt(par5height)));

  var experienceheight = $("#experience").css('height');
  var experiencetop = $("#experience").css('top');
  $("#projects").css('top', (parseInt(experienceheight) + parseInt(experiencetop)))

  var projheight = $("#projects").css('height');
  var projtop = $("#projects").css('top');
  $("#footspace").css('top', (parseInt(projheight) + parseInt(projtop)))

  $(window).on('resize', function(){
    var par1height = $("#par1").css('height');
    $("#titlediv").css('top', (parseInt(par1height)*.75) +'px');

    var par5height = $("#par5").css('height');
    $("#about").css('top', par5height);

    var aboutheight = $("#about").css('height');
    $("#experience").css('top', (parseInt(aboutheight) + parseInt(par5height)));

    var experienceheight = $("#experience").css('height');
    var experiencetop = $("#experience").css('top');
    $("#projects").css('top', (parseInt(experienceheight) + parseInt(experiencetop)))

    var projheight = $("#projects").css('height');
    var projtop = $("#projects").css('top');
    $("#footspace").css('top', (parseInt(projheight) + parseInt(projtop)))

  });


  $(window).scroll(function(){
    var scroll = $(this).scrollTop();
    $("#par1").css({
      'transform' : 'translate(0px, -'+ scroll / 8+'%)'
    });

    $("#par2").css({
      'transform' : 'translate(0px, '+ scroll / 8+'%)'
    });

    $("#par3").css({
      'transform' : 'translate(0px, '+ scroll / 16+'%)'
    });

    $("#par4").css({
      'transform' : 'translate(0px, '+ scroll / 32+'%)'
    });

    $("#par5").css({
      'transform' : 'translate(0px, '+ scroll / 128+'%)'
    });

    $("#titlediv").css({
      'transform' : 'translate(0px, '+ scroll / 16+'%)'
    });

    if(scroll > $('.aboutinfo').offset().top - ($(window).height() / 1.4)) {
      $('.aboutinfo div').each(function(i){
        var currdiv = $(this);
        setTimeout(function() {
          currdiv.addClass('is-showing');
        }, 200 * (i+1));
      });
    }

    if(scroll > $('.expgrid').offset().top - ($(window).height() / 1.4)) {
      $('#exptitle').addClass('is-showing');
    }


    if(scroll > $('.expgrid').offset().top - ($(window).height() / 1.4)) {
      $('.expgrid div').each(function(i){
        var currdiv = $(this);
        setTimeout(function() {
          currdiv.addClass('is-showing');
        }, 200 * (i+1));
      });


    }

    if(scroll > $('.projgrid').offset().top - ($(window).height()) ) {
      var offset = scroll - $('.projgrid').offset().top + $(window).height() - 400;
      $('#proj1').css({'transform': 'translate(' + Math.min(0, offset) +'px, 0px'}); 
      $('#proj3').css({'transform': 'translate(' + Math.min(0, offset - 150) +'px, 0px'}); 

      $('#proj2').css({'transform': 'translate(' + Math.abs(Math.min(0, offset)) +'px, 0px'}); 
      $('#proj4').css({'transform': 'translate(' + Math.abs(Math.min(0, offset - 150)) +'px, 0px'}); 

      var transparency = offset / 400 + .8;
      $('#proj1').css({'opacity': transparency })
      $('#proj2').css({'opacity': transparency })
      $('#proj3').css({'opacity': transparency })
      $('#proj4').css({'opacity': transparency })

    }

  })
})



