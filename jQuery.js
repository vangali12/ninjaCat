$(document).ready( function() {

	$("img").click(function() {
		var temp = $(this).attr("src");
		console.log(temp);
		$(this).attr('src', $(this).data('altSrc'));
		$(this).data('altSrc', temp);
	})

})