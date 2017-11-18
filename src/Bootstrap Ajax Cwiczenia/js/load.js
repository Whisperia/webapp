$(document).ready(function(){
	// wyłączenie przycisków z menu
	$('li.load a').on('click', function(e){e.preventDefault(); return false;});
	
	
	$('.load').on('click', function(e){
		var siteNumber = this.id;
		
		$('li.load.active').removeClass('active');
		$('li#' + siteNumber +'.load').addClass('active');
		
		$('#load_container').remove();
		$('#load_content').load('load/strona' + siteNumber + '.html#load_content').hide().fadeIn('slow');
	});
});