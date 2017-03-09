
function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var name;
    var id;
    var city;
    var address;
    var food;
    var type;
    var imageURL;
    var htmlText = "";
    
    for (i = 0; i< xmlDoc.getElementsByTagName("id").length; i++){
        city = xmlDoc.getElementsByTagName("city")[i].childNodes[0].nodeValue;        	
        	 name = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
             id = xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue;
             address = xmlDoc.getElementsByTagName("address")[i].childNodes[0].nodeValue;
             food = xmlDoc.getElementsByTagName("food")[i].childNodes[0].nodeValue;
             type = xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue;
             imageURL = xmlDoc.getElementsByTagName("imageURL")[i].childNodes[0].nodeValue;
         	
             	htmlText = htmlText + 
             	"<div class=\"Popular-Restaurants-grid wow fadeInRight\" data-wow-delay=\"1.4s\">" +
     	"<div class=\"col-md-3 restaurent-logo\">" +
     		"<img src="+ imageURL + " class=\"img-responsive\" alt=\"\" />"+
     	"</div>"+
     	"<div class=\"col-md-2 restaurent-title\">"+
     		"<div class=\"logo-title\">"+
     			"<h4 id=\"test\"><a href=\"#\">" + name + "</a></h4>"+
     		"</div>"+
     		"<div class=\"rating\">"+
     			"<span>Note</span>"+
     		"	<a href=\"#\"> <img src=\"images/star1.png\" class=\"img-responsive\" alt=\"\">(004)</a>"+
     	"	</div>"+
     	"</div>"+
     	"<div class=\"col-md-7 buy\">"+
     		"<span></br></span>"+
     	"	<a class=\"morebtn hvr-rectangle-in\" href=\"orders-list.html\">Commander</a>"+
     	"</div>"+
     	"<div class=\"clearfix\"></div>"+
     "</div>"
         	
         
         document.getElementById("restaurantsContainer").innerHTML = htmlText;
        	
        }
    	
       

}

var getDataFromURL = function(){

	var url = window.location.search;

	var t = location.search.substring(1).split('&');
	var f = [];
	for (var i=0; i<t.length; i++){
		var x = t[ i ].split('=');
		f[x[0]]=x[1];
	}
	
	var cityFromURL = f["inputCity"];
	var restaurantFromURL = f["inputRestaurant"];
	var foodFromURL = f["inputFood"];
	
	cityFromURL = cityFromURL.replace("+", " ");
	restaurantFromURL = restaurantFromURL.replace("+", " ");
	foodFromURL = foodFromURL.replace("+", " ");

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        myFunction(this);
	    }
	};
	console.log(cityFromURL);
	console.log(restaurantFromURL);
	console.log(foodFromURL);
	
	if(cityFromURL != "" && restaurantFromURL == "" && foodFromURL== ""){
		xhttp.open("GET", "rest/restaurants/city/" + cityFromURL, true);
	}else if(cityFromURL == "" && restaurantFromURL != "" && foodFromURL== ""){
		xhttp.open("GET", "rest/restaurants/name/" + restaurantFromURL, true);
	}else if(cityFromURL == "" && restaurantFromURL == "" && foodFromURL!= ""){
		xhttp.open("GET", "rest/restaurants/food/" + foodFromURL, true);
	}else if(cityFromURL != "" && restaurantFromURL != "" && foodFromURL== ""){
		xhttp.open("GET", "rest/restaurants/cityAndName/"  +cityFromURL + "&" + restaurantFromURL, true);
	}else if(cityFromURL != "" && restaurantFromURL == "" && foodFromURL!= ""){
		xhttp.open("GET", "rest/restaurants/cityAndFood/" + cityFromURL + "&" + foodFromURL, true);
	}else if(cityFromURL == "" && restaurantFromURL != "" && foodFromURL!= ""){
		xhttp.open("GET", "rest/restaurants/nameAndFood/" + restaurantFromURL + "&" + foodFromURL, true);
	}else if (cityFromURL != "" && restaurantFromURL != "" && foodFromURL!= ""){
		xhttp.open("GET", "rest/restaurants/cityAndNameAndFood/" + cityFromURL + "&" + restaurantFromURL + "&" + foodFromURL, true);
	}else{
		//tous les champs sont vides
		
	}

	xhttp.send();	
	myFunction(xml);
	
}

