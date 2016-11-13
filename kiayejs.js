//down syndrome stuff
var paragraph = 0;

$(document).ready(function(){
        
        $('#intro').css('display', 'none');
        $('#causes').css('display', 'none');
        $('#effets').css('display', 'none');
        $('#traitements').css('display', 'none');
        $('#conclusion').css('display', 'none');
        $('#sources').css('display', 'none');
        
        $("#intro").fadeIn();
        $("#title").fadeIn();
    	
    	
    	
    	
});


$(document).ready(function(){
    $("button").click(function(){
    
    paragraph = paragraph + 1;
    	
        $("#causes").fadeIn();
        
        
        
        if (paragraph > 1) {
        	$("#effets").fadeIn();
        }
        
        if (paragraph > 2) {
        	$("#traitements").fadeIn();
        }
        
        if (paragraph > 3) {
        	$("#conclusion").fadeIn();
        }
        
        if (paragraph > 4) {
        	$("#sources").fadeIn();
        	$('#bouton').css('visibility', 'hidden');
        }

        
        
    
    
    });
});


$(window).on("scroll", function() {

    
    
    
    /*if ($(this).scrollTop() > 700) {
        $("#traitements").fadeIn();
    }  else {
        $("#traitements").stop().fadeOut();
    } 
    
    
    
    if ($(this).scrollTop() > 700) {
        $("#conclusion").fadeIn();
    } /* else {
        $("#conclusion").stop().fadeOut();
    }
    
    
    
    if ($(this).scrollTop() > 700) {
        $("#sources").fadeIn();
    } /* else {
        $("#sources").stop().fadeOut();
    } */
});