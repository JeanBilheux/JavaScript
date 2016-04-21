$(document).ready(function(){

  $(".button").click(function() {
//      $(this).css({"background-color": "green"}).delay(3000).fadeOut("3000");
      echo($(this).css({"background-color"}));
  })
	
var h = window.innerHeight;
var w = window.innerWidth;
    
var number_button = $(".button").length;
    
$(".button").css({"height": (h/number_button)*0.95,
                 "width": w*0.95});    

window.setInterval(checkWidgetsHidden, 1000);
    
function checkWidgetsHidden() {
    
}
    
    
function nameOfPage() {
    var path = window.location.pathname;
    var page = path.split('/').pop();
    return page;
}


    
});