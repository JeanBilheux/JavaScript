$(document).ready(function(){
	
    var headclix = 0;
    var eyesclix = 0;
    var noseclix = 0;
    var mouthclix = 0;
    
    lightning_one();
    lightning_two();
    lightning_three();
    
    $("#head").click(function() {
        if (headclix < 9) {
            $(this).animate({left:"-=367px"}, 500);
            headclix += 1;
        } else {
            $(this).animate({left:"0px"}, 500);
            headclix = 0;
        }
    }); //end head click

    $("#eyes").click(function() {
        if (eyesclix < 9) {
            $(this).animate({left:"-=367px"}, 500);
            eyesclix += 1;
        } else {    
            $(this).animate({left:"0px"}, 500);
            eyesclix = 0;
        }
    }); //end eyes click

    $("#nose").click(function() {
        if (noseclix < 9) {
            $(this).animate({left:"-=367px"}, 500);
            noseclix += 1;
        } else {
            $(this).animate({left:"0px"}, 500);
            noseclix = 0;
        }
    }); //end nose click

    $("#mouth").click(function() {
        if (mouthclix < 9) {
            $(this).animate({left:"-=367px"}, 500);
            mouthclix += 1;
        } else {
            $(this).animate({left:"0px"}, 500);
            mouthclix = 0;
        }
    }); //end mouth click

    
});//end doc.onready function

 
  function lightning_one() {
      $("#lightning1").fadeIn(250).fadeOut(250);
        setTimeout("lightning_one()", 3000);
    };
    
    function lightning_two() {
      $("#lightning2").fadeIn("fast").fadeOut("fast");
        setTimeout("lightning_two()", 5000);
    };
    
    function lightning_three() {
      $("#lightning3").fadeIn("fast").fadeOut("fast");
        setTimeout("lightning_three()", 7000);
    };
    