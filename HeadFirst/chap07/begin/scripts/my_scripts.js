$(document).ready(function(){
	
window.onfocus = goLightning;
window.onblur = stopLightning;
    
var int1, int2, int3;
    
function goLightning() {
    int1 = setInterval(function() {
        lightning_one()}, 
                    4000 );
    
    int2 = setInterval(function() {
        lightning_two()},
                       5000);

    int3 = setInterval(function() {
        lightning_three()},
                       7000);
    
}; //end of go lightning
    
function stopLightning() {

    window.clearInterval(int1);
    window.clearInterval(int2);
    window.clearInterval(int3);
    
} // #end of stopLightning

function lightning_one() {
    console.log("lightning one");
    $("#container #lightning1").fadeIn(250).fadeOut(250);
};

function lightning_two() {
    $("#container #lightning2").fadeIn(250).fadeOut(250);
};

function lightning_three() {
    $("#container #lightning3").fadeIn(250).fadeOut(250);
};
    
var click = [0, 0, 0, 0]; //head, eyes, nose, mouth
    
    $("#head").click(function() {
        moveMe(0, this);
    }); //end of head

    $("#eyes").click(function() {
        moveMe(1, this);
    }); //end of eyes

    $("#nose").click(function() {
        moveMe(2, this);
    }); //end of nose

    $("#mouth").click(function() {
        moveMe(3, this);
    }); //end of mouth
    
    function moveMe(i, obj) {
        if (click[i] < 9) {
            $(obj).animate({left:"-=367px"}, 500);
            click[i] = click[i]+1;
        } else {
            click[i] = 0;
            $(obj).animate({left:"0px"}, 500);
        }
    }
    
    var w = 367; // width of the face strip
    var m = 10; // number of the monster face strip we are on
    
    $("#btnRandom").click(randomize);
    $("#btnReset").click(reset);
    
    function getRandom(num) {
        var my_random_num = Math.floor(Math.random()*num);
        return my_random_num
    }; //end of getRandom

    function reset() {
        $(".face").each(function(index) {
            click[index] = 0;
            $(this).animate({left: "0px"}, 500);
        }); //end of function
        
    }; //end of reset
    
    function randomize() {
        $(".face").each(function(index) {
            var target_position = getRandom(m);
            var current_position = click[index];
            click[index] = target_position;
            var move_to = target_position * w;
            $(this).animate({left: "-" + move_to +"px"}, 500);
            
        }); //end of function
        
        
    }; // end of randomize
    
    
    
});//end doc.onready function





