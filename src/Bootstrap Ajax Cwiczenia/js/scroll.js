$(document).ready(function(){
	// progress bar 
	
	$(window).scroll(function() {

		var documentHeight = $(document).height();
		var windowHeight   = $(window).height();
		var distanceToTop  = $(window).scrollTop();

		var percentScrolled = distanceToTop/(documentHeight - windowHeight) * 100;
		$('div.progress-bar').text(percentScrolled.toFixed(0) + '%');
		$('div.progress-bar').css('width',percentScrolled.toFixed(0) + '%');
		});
	
	//slide
	$(window).scroll(function() {
	$(".slideanim").each(function(){
		var pos = $(this).offset().top;

		var winTop = $(window).scrollTop();
		if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
	});
	}); 
	
	//scroll
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

  
  if (this.hash !== "") {

  
    event.preventDefault();

  
    var hash = this.hash;

 
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

    
      window.location.hash = hash;
      });
    } 
  });
})