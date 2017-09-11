$(function() {
  
	var blackTop = $("#par5").css('top');
	var bbheight = $("#par5").css('height');
  var par1top = $("#par1").css('top');
  var par1height = $("#par1").css('height');
	var winHeight = $(window).height();
	$("#black").css('top', bbheight);
  $("#aboutdiv").css('top', (parseInt(par1height)*.75) +'px');

  yOffset1=$(window).scrollTop()*.05;
  yOffset2=$(window).scrollTop()*.25;
  yOffset3=$(window).scrollTop()*.5;
  yOffset4=$(window).scrollTop()*1;
  yOffset5=$(window).scrollTop()*2;
  $("#par1").css('top', -yOffset1+'px');
  $("#par2").css('top', -yOffset2+'px');
  $("#par3").css('top', -yOffset3+'px');
  $("#par4").css('top', -yOffset4+'px');
  $("#par5").css('top', -yOffset5+'px');

  $("#idnav").css('top', -yOffset5+'px');
  $("#smallmenu").css('top', -yOffset5+'px');
  $("#mySideNav").css('top', -yOffset5+'px');
  $("#davidlogo").css('top', -yOffset5+'px');
  var halfpar = (parseInt(par1height))*.75; 
  $("#aboutdiv").css('top', (halfpar-parseInt(yOffset5))+'px');

  blackTop = $("#par5").css('top');
  bbheight = $("#par5").css('height');

  var offset = (parseInt(blackTop) + parseInt(bbheight) - 5)+'px';
  $("#black").css('top', offset);

	$(window).scroll(function(){
		$(window).height;
    yOffset1=$(window).scrollTop()*.05;
  	yOffset2=$(window).scrollTop()*.25;
  	yOffset3=$(window).scrollTop()*.5;
  	yOffset4=$(window).scrollTop()*1;
  	yOffset5=$(window).scrollTop()*2;
  	$("#par1").css('top', -yOffset1+'px');
  	$("#par2").css('top', -yOffset2+'px');
  	$("#par3").css('top', -yOffset3+'px');
  	$("#par4").css('top', -yOffset4+'px');
  	$("#par5").css('top', -yOffset5+'px');

    $("#idnav").css('top', -yOffset5+'px');
    $("#smallmenu").css('top', -yOffset5+'px');
    $("#mySideNav").css('top', -yOffset5+'px');
    $("#davidlogo").css('top', -yOffset5+'px');
    var halfpar = (parseInt(par1height))*.75; 
    $("#aboutdiv").css('top', (halfpar-parseInt(yOffset5))+'px');

  	blackTop = $("#par5").css('top');
  	bbheight = $("#par5").css('height');

  	var offset = (parseInt(blackTop) + parseInt(bbheight) - 5)+'px';
  	$("#black").css('top', offset);
    
  })

  $(window).on('resize', function(){
        var win = $(this); //this = window
        winHeight = win.height();
        blackTop = $("#par5").css('top');
        bbheight = $("#par5").css('height');
        par1top = $("#par1").css('top');
        par1height = $("#par1").css('height');
        var offset = (parseInt(blackTop) + parseInt(bbheight) - 5)+'px';
        var halfpar = (parseInt(par1height))*.75; 
        $("#aboutdiv").css('top', (halfpar-parseInt(yOffset5))+'px');
        $("#black").css('top', offset);
  });


})


// $(document).ready(function(){

// 	var $window = $(window); //You forgot this line in the above example

// 	$('section[data-type="background"]').each(function(){
// 		var $bgobj = $(this); // assigning the object
// 		console.log(this);
// 		$(window).scroll(function() {
// 			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
// 			// Put together our final background position
// 			var coords = '50% '+ yPos + 'px';
// 			// Move the background
// 			$bgobj.css({ backgroundPosition: coords });
// 		});
// 	});
// });