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

  // checking if all the buttons have been disabled
  setInterval(check_button_left, 1000);
  function check_button_left() {
      $(".button").each(function() {
          if ($(this).css('display') != null) {
              console.log("still one visible !")
          }
      })
  }
  
    var h = window.innerHeight;
    var w = window.innerWidth;

    var number_button = $(".button").length;

    $(".button").css({"height": (h/number_button)*0.95,
                     "width": w*0.95});    
  
});