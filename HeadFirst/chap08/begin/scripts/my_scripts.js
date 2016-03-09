$(document).ready(function () {

    var FREQ = 10000;  // 10s
    
    function startAJAXcalls() {
        setTimeout(function() {
            getXMLRacers(); 
            startAJAXcalls();
        }, FREQ);
    }; // end of startAJAXcalls
    
    function getXMLRacers() {
    
        $.ajax({
            url: "finishers.xml",   // file to load
            cache: false,   // this caches the results locally
            dataType: "xml",   // the data type we are expecting to get back from the server
            success: function(xml) {
                $("#finishers_all").empty();
                $("#finishers_f").empty();
                $("#finishers_m").empty();
                
                $(xml).find("runner").each(function() {
                    
                    var info = '<li>Name: ' + $(this).find("fname").text() + ' ' +
                        $(this).find("lname").text() + '. Time: ' +
                        $(this).find("time").text() + '</li>';
                    
                    if ($(this).find("gender").text() == 'm') {
                        // male
                        $('#finishers_m').append(info);
                        
                    } else if ( $(this).find("gender").text() == 'f') {
                        // female
                        $('#finishers_f').append(info);
                        
                    } //end of if(gender)
                
                    $("#finishers_all").append(info);
                }); // end of each
                
            }
    
        }); // end of ajax
    
        getTime();
        
    } //end of function getXMLracers
	
    getXMLRacers();
    startAJAXcalls();
    
	function getTime() {
        var a_p = "";
        var d = new Date();
        var curr_hour = d.getHours();
        
        (curr_hour < 12) ? a_p = "AM" : a_p = "PM";
        (curr_hour == 0) ? curr_hour = 12 : curr_hour = curr_hour;
        (curr_hour > 12) ? curr_hour = curr_hour - 12 : curr_hour = curr_hour;
        
        var curr_min = d.getMinutes().toString();
        var curr_sec = d.getSeconds().toString();
        
        if (curr_min.length == 1) { curr_min = "0" + curr_min; }
        if (curr_sec.length == 1) { curr_sec = "0" + curr_sec; } 
        
        $('#updatedTime').html(curr_hour + ":" + curr_min + ":" + curr_sec + " " + a_p );
    }
    
    getTime();
});
