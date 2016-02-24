$(document).ready(function(){

    var v = false;
    
    $("button#vegOn").click(function() {
        if (v == false) {
            
            $(".meat").detach();
                
            v = true;
        };     
    }); //end of button vegOn
    
    $("button#restoreMe").click(function() {
        if (v == true) {
            

            
            v = false;
        }
        
    }) // end of button restoreMe
	
});