
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
		console.log(JSON.stringify(loc1))
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




// print("<strong>let's get going!</strong>");
// clickButton("clickMe", function(){
//     print("You clicked me!");
// });

//geolib.getDistance()
