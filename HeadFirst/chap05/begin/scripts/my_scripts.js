$(document).ready(function(){
	
    var headclix = 0;
    var eyesclix = 0;
    var noseclix = 0;
    var mouthclix = 0;
    
    $("#head").click(function() {
        if (headclix < 9) {
            headclix += 1;
        } else {
            headclix = 0;
        }
    }); //end head click

    $("#eyes").click(function() {
        if (eyesclix < 9) {
            eyesclix += 1;
        } else {    
            eyesclix = 0;
        }
    }); //end eyes click

    $("#nose").click(function() {
        if (noseclix < 9) {
            noseclix += 1;
        } else {
            noseclix = 0;
        }
    }); //end nose click

    $("#mouth").click(function() {
        if (mouthclix < 9) {
            mouthclix += 1;
        } else {
            mouthclix = 0;
        }
    }); //end mouth click

});//end doc.onready function

 