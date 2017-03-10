var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "rest/restaurants", true);
xhttp.send();

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
        name = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
        id = xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue;
        city = xmlDoc.getElementsByTagName("city")[i].childNodes[0].nodeValue;
        address = xmlDoc.getElementsByTagName("address")[i].childNodes[0].nodeValue;
        food = xmlDoc.getElementsByTagName("food")[i].childNodes[0].nodeValue;
        type = xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue;
        imageURL = xmlDoc.getElementsByTagName("imageURL")[i].childNodes[0].nodeValue;
    	
        console.log(imageURL);

        	htmlText = htmlText + 
        	"<div class=\"Popular-Restaurants-grid wow fadeInRight\" data-wow-delay=\"1.4s\">" +
	"<div class=\"col-md-3 restaurent-logo\">" +
		"<img src="+ imageURL + " class=\"img-responsive\" alt=\"\" />"+
	"</div>"+
	"<div class=\"col-md-2 restaurent-title\">"+
		"<div class=\"logo-title\">"+
			"<h4><a href=\"#\">" + name + "</a></h4>"+
		"</div>"+
 		"<div class=\"address\">"+
 		"	<p>" + address + " " + city +"</p>"+
 	"	</div>"+
	"</div>"+
	"<div class=\"col-md-7 buy\">"+
		"<span></br></span>"+
	"	<a class=\"morebtn hvr-rectangle-in\" href=\"orders-list.html\">Commander</a>"+
	"</div>"+
	"<div class=\"clearfix\"></div>"+
"</div>"
    	
    }
    document.getElementById("restaurantsContainer").innerHTML = htmlText;

}