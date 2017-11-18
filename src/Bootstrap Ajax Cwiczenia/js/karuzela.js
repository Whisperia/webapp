$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel("pause");

    // Click on the button to start sliding 
    $("#myBtnPlay").click(function(){
        $("#myCarousel").carousel("cycle");
    });

    // Click on the button to stop sliding 
    $("#myBtnPause").click(function(){
        $("#myCarousel").carousel("pause");
    });
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
   
    
    // Enable Carousel Controls
    $("#myBtnPrev").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $("#myBtnNext").click(function(){
        $("#myCarousel").carousel("next");
    });
	
});