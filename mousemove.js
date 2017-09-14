$(function() {
	$('#banner').mousemove(function(event){
		var q = $('#banner').css('backgroundPosition').split(" ");
		var x = q[0];
		var y = q[1];
		$('#banner').css({
			'backgroundPosition':
			(-event.pageX)/10+'px '+(-event.pageY/10)+'px'
		});
	})
});

$(function() {
	$('#soon').mousemove(function(event){
		var q = $('#banner').css('backgroundPosition').split(" ");
		var x = q[0];
		var y = q[1];
		$('#banner').css({
			'backgroundPosition':
			(-event.pageX)/10+'px '+(-event.pageY/10)+'px'
		});
	})
});