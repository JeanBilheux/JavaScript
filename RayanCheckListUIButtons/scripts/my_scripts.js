$(document).ready(function(){

  $(".button").click(function() {
      $(this).css({"background-color": "green"}).delay(3000).fadeOut("3000");
  })
	
    var h = window.innerHeight;
    var w = window.innerWidth;

    var number_button = $(".button").length;

    $(".button").css({"height": (h/number_button)*0.95,
                     "width": w*0.95});    
  
});