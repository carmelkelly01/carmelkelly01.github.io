 $( document ).ready()
$(window).scroll(function(){
    if($(document).scrollTop()>=$(document).height()/5)
        $("#newsletter").show("slow");else $("#newsletter").hide("slow");
});
function closeSPopup(){
    $('#newsletter').hide('slow');
}
   });


