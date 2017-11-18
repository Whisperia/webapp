$(document).ready(function(){

	 $("#image_load").click(function(){
     
		$('.no-image div.thumbnail').each(function(){
			var id = this.id;
			
			$(this).empty();
			
			$(this).append('<img src="img/' + id + '.gif"/>');
			
			setTimeout(function(){
					
							var image = new Image();
			
							image.onload = imagesLoaded(id); 
			
							image.src = 'img/img/' + id + '.jpg';
						
							function imagesLoaded(id){
								$('#' + id + '.thumbnail').empty();
							$('#' + id + '.thumbnail').append(image);	
					
							}
		
			}, ((Math.random() * 5 + 1).toFixed(0) * 1000));
						
		});
	
    });
	
});
