$(document).ready(function(){

var rayan_color = "blue";
var daddy_color = "green";
    
  $(".button").click(function() {
      if ($(this).css("background-color") == "rgb(255, 0, 0)") {
          $(this).css({"background-color": rayan_color});
      } else {
          $(this).css({"background-color": daddy_color});
      }

//      $(this).css({"background-color": "green"})
  })
	
});