
var geoLibMsg = document.getElementById('geolib');
if (geolib){
    geoLibMsg.innerHTML = "geolib is ready!";
}
else{
    geoLibMsg.innerHTML = "geolib is NOT ready!";
}

// utility functions
var print = function(msg){
    var results = document.getElementById('results');
    results.innerHTML = msg;
};

var clickButton = function(id, func){
    document.getElementById(id).addEventListener('click', func)
}

//utility functions end

// write your geolib code here

print("<strong>let's get going!</strong>");
clickButton("clickMe", function(){
    print("You clicked me!");
});

//geolib.getDistance()
