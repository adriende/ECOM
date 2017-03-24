
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
    var url ="";
    
    if(xmlDoc.getElementsByTagName("id").length>0){
    	//S'il y a des restaurants disponibles après la recherche
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
	     		"<div class=\"address\">"+
	     		"	<p>" + address + " " + city +"</p>"+
	     	"	</div>"+
	     	"</div>"+
	     	"<div class=\"col-md-7 buy\">"+
	     		"<span></br></span>"+
	     	"	<a class=\"morebtn hvr-rectangle-in\"  href=\"someMenus.html?restaurant="+ name +"\" >Commander</a>"+
	     	"</div>"+
	     	"<div class=\"clearfix\"></div>"+
	     "</div>"
	         	
	
	        }
    }else{
    	//Si aucun restaurant n'est disponible
      	htmlText = htmlText + 
			"<div class=\"order-form-head text-center\" >"+
    		"<p>Pas de restaurants disponibles</p>"+
    	"</div>";
    }
    
    document.getElementById("restaurantsContainer").innerHTML = htmlText;


}

var getDataFromURL = function(){
	updateCart();
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
	
	cityFromURL = cityFromURL.replaceAll("+", " ").replaceAll("%27", "'").replaceAll("%C3%A8", "è").replaceAll("%C3%A9", "é");
	restaurantFromURL = restaurantFromURL.replaceAll("+", " ").replaceAll("%C3%A9", "é").replaceAll("%C3%A8", "è");
	console.log(restaurantFromURL);
	foodFromURL = foodFromURL.replaceAll("+", " ");

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        myFunction(this);
	    }
	};

	
	if(cityFromURL != "" && restaurantFromURL == "" && foodFromURL== ""){
		xhttp.open("GET", "rest/restaurants/city/" + cityFromURL, true);
		document.getElementById("idRecherche").innerHTML = cityFromURL;
	}else if(cityFromURL == "" && restaurantFromURL != "" && foodFromURL== ""){
		xhttp.open("GET", "rest/restaurants/name/" + restaurantFromURL, true);
		document.getElementById("idRecherche").innerHTML = restaurantFromURL;
	}else if(cityFromURL == "" && restaurantFromURL == "" && foodFromURL!= ""){
		xhttp.open("GET", "rest/restaurants/food/" + foodFromURL, true);
		document.getElementById("idRecherche").innerHTML = foodFromURL;
	}else if(cityFromURL != "" && restaurantFromURL != "" && foodFromURL== ""){
		xhttp.open("GET", "rest/restaurants/cityAndName/"  +cityFromURL + "&" + restaurantFromURL, true);
		document.getElementById("idRecherche").innerHTML = cityFromURL + " - " + restaurantFromURL;
	}else if(cityFromURL != "" && restaurantFromURL == "" && foodFromURL!= ""){
		xhttp.open("GET", "rest/restaurants/cityAndFood/" + cityFromURL + "&" + foodFromURL, true);
		document.getElementById("idRecherche").innerHTML = cityFromURL + " - " + foodFromURL;
	}else if(cityFromURL == "" && restaurantFromURL != "" && foodFromURL!= ""){
		xhttp.open("GET", "rest/restaurants/nameAndFood/" + restaurantFromURL + "&" + foodFromURL, true);
		document.getElementById("idRecherche").innerHTML = restaurantFromURL + " - " + foodFromURL;
	}else if (cityFromURL != "" && restaurantFromURL != "" && foodFromURL!= ""){
		xhttp.open("GET", "rest/restaurants/cityAndNameAndFood/" + cityFromURL + "&" + restaurantFromURL + "&" + foodFromURL, true);
		document.getElementById("idRecherche").innerHTML = cityFromURL + " - " + restaurantFromURL + " - " + foodFromURL;
	}else{
		//tous les champs sont vides
		document.getElementById("idRecherche").innerHTML = "Aucun résultat";

	}

	xhttp.send();	
	myFunction(xml);
	
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

