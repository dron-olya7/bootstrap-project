$(document).ready(function() {  
     $('.in img').click(function(){
        let imgSrc = $(this).attr("src");
        $('#img_container img').attr({src: imgSrc});
        $('#img_container').fadeIn('slow');
    });
   
    $('#img_container').click(function(){
        $(this).fadeOut();
    });
});