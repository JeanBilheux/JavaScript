$(document).ready(function() {
   $('#datepicker').datepicker(
       {
       changeMonth: true,
        changeYear: true
       });
    
    $('#type_select').buttonset();
    
    $("#slide_dist").slider({
        slide: function(event, ui) {
          $("#distance").val(ui.value);
        },
        value: 0,
        min: 0,
        max: 500,
        step: 10,
        orientation: 'horizontal'
    });

    $("#slide_weight").slider({
        slide: function(event, ui) {
          $("#weight").val(ui.value);
        },
        value: 0,
        min: 0,
        max: 5000,
        step: 5,
        orientation: 'horizontal'
    });

    $("#slide_height").slider({
        slide: function(event, ui) {
          $("#height").val(ui.value);
        },
        value: 0,
        min: 0,
        max: 20,
        step: 1,
        orientation: 'horizontal'
    });

    $("#slide_lat").slider({
        slide: function(event, ui) {
          $("#latitude").val(ui.value);
        },
        value: 0,
        min: -90,
        max: 90,
        step: 0.00001,
        orientation: 'horizontal'
    });

    $("#slide_long").slider({
        slide: function(event, ui) {
          $("#longitude").val(ui.value);
        },
        value: 0,
        min: -90,
        max: 90,
        step: 0.00001,
        orientation: 'horizontal'
    });

    $("#green, #blue, #red").slider({
        value: 127,
        range: "min",
        max: 255,
        step: 1,
        slide: refreshSwatch,
        change: refreshSwatch
    });

    function refreshSwatch() {
        var red = $("#red").slider("value");
        var green = $("#green").slider("value");
        var blue = $("#blue").slider("value");
        
        var my_rgb = "rgb(" + red + "," + green + "," + blue + ")";
        
        $("#swatch").css("background-color", my_rgb);
        $("#red_val").val(red);
        $("#green_val").val(green);
        $("#blue_val").val(blue);
        $("#color_val").val(my_rgb);
        
    };
    
    // to init sliders
    $("#red").slider("value", 127);
    $("#green").slider("value", 127);
    $("#blue").slider("value", 127);
   
    $("button:submit").button();
    
    
});