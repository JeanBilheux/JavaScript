$(document).ready(function(){

    var v = false;
    
    $("button#vegOn").click(function() {
        if (v == false) {
            
            $f = $(".fish").parent().parent().detach();
            $(".meat").after('<li class="tofu"><em>tofu</em></li>');
            $m = $(".meat").detach();
            $("li.hamburger").replaceWith('<li class="portobello">Portobello Mushroom</li>');
            $(".tofu").parent().parent().addClass("veg_leaf");
            v = true;
        };     
    }); //end of button vegOn
    
    $("button#restoreMe").click(function() {
        if (v == true) {
            $("li.portobello").replaceWith('<li class="hamburger">hamburger</li>');
            $(".menu_entrees li").first().before($f);
            $(".tofu").each(function(i) {
               $(this).after($m[i]); 
            }); // end each
            $(".tofu").parent().parent().removeClass("veg_leaf");
            $(".tofu").remove();
            v = false;
        }
        
    }) // end of button restoreMe
	
});