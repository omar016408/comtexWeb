
$(document).ready(function(){

    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        dot:false,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    }); 
    
    $('a').on('click', function(event) {
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
           }, 40, function(){
               window.location.hash = hash;
            });//end of html and body tag
  
        }
    });

   
});

