
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
var loc1 = {};
var loc2 = {};
var dis ={};
//finds current location
	var button =document.getElementById("btn");
	btn.addEventListener("click",function(){
		navigator.geolocation.getCurrentPosition(function(location){
			var loc = document.getElementById("location");
			loc.innerHTML = "Latitude: " + location.coords.latitude +
				"," +"<br>Longitude: " + location.coords.longitude;
			loc1.latitude = location.coords.latitude;
			loc1.longitude = location.coords.longitude;
		});
	});	
// find the second location
	var button2 =document.getElementById("btn2");
	btn2.addEventListener("click",function(){
		navigator.geolocation.getCurrentPosition(function(location){
			var lc = document.getElementById("location2");
			lc.innerHTML = "Latitude: " + location.coords.latitude +
				"," + "<br>Longitude: " + location.coords.longitude;
			loc2.latitude = location.coords.latitude;
			loc2.longitude =location.coords.longitude;
		});
	});	
// clears the location1
	var clear = document.getElementById("clr");
	clear.addEventListener("click",function(){
		var loc = document.getElementById("location");
		loc.innerHTML =" ";
	});
//clears the location2
	var clear2 = document.getElementById("clr2");
	clear2.addEventListener("click",function(){
		var loc = document.getElementById("location2");
		loc.innerHTML =" ";
	});
//calculate distance
	var calc =document.getElementById("calc");
	calc.addEventListener("click",function(){
		//console.log(JSON.stringify(loc1))
		var distance = geolib.getDistance(
			loc1, loc2
		);
		dis = document.getElementById("Distance");
		dis.innerHTML = distance ;
		//calc.innerHTML=distance; //calc.innerHTML=distance;
	});

	var clearDistance = document.getElementById("clearD");
	clearDistance.addEventListener("click",function(){
		var distance = document.getElementById("calc");
		dis.innerHTML =" ";
	});





var theCenter = {};
var workshopSeventeen = {
    
        "W17 @ drydock corner":{
        "latitude": "-33.9098908",
        "longitude": "18.4185275"
    },
    
       
         "W17 @ Wooden doors":{
        "latitude": "-33.9068621",
        "longitude": "18.4186983"
    },
    
        "W17 @ big door corner":{
        "latitude": "-33.9073852",
        "longitude": "18.417981"
    },

     "W17 @ play area":{
        "latitude": "-33.907215",
        "longitude": "18.4185805"
    },
       "Two oceans aquarium entrance":{
        "latitude": "-33.9075261",
        "longitude": "18.4175586"
    },
    
        "W17 cafe":{
        "latitude": "-33.9071121",
        "longitude": "18.4184286"
    }

}

var getCenter =document.getElementById("w17");
	getCenter.addEventListener("click",function(){
 var center = geolib.getCenter(workshopSeventeen);

geolib.getCenter([
    {latitude: -33.9098908, longitude: 18.4185275},
    {latitude: -33.9068621, longitude: 18.4186983},
    {latitude: -33.9073852, longitude: 18.417981},
    {latitude: -33.907215, longitude: 18.4185805},
    {latitude: -33.9075261, longitude: 18.4175586},
    {latitude: -33.9071121, longitude: 18.4184286}
]);
theCenter = document.getElementById("centerW17");
		theCenter.innerHTML = center;
		//console.log(theCenter);
});

// print("<strong>let's get going!</strong>");
// clickButton("clickMe", function(){
//     print("You clicked me!");
// });

//geolib.getDistance()
