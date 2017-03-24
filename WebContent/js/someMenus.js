
function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var name = [];
    var id = [];
    var price = [];
    var description = [];
    var restaurant = [];
    var htmlText = "";

    
    for (i = 0; i< xmlDoc.getElementsByTagName("id").length; i++){
        name[i] = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
        id[i] = xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue;
        price[i] = xmlDoc.getElementsByTagName("price")[i].childNodes[0].nodeValue;
        description[i] = xmlDoc.getElementsByTagName("description")[i].childNodes[0].nodeValue;
        restaurant[i] = xmlDoc.getElementsByTagName("restaurant")[i].childNodes[0].nodeValue;
    }

	  if(name.length !== 0){	
	    	//S'il y a au moins un menu disponible
    		htmlText = htmlText + 
    		"<div class=\"order-top\">"+

			"<li class=\"item-lists\">";
        	for (i = 0; i< name.length; i++){
	        		htmlText = htmlText + "<p>"+ name[i] + "</p>"
        	}
        	
        	htmlText = htmlText + 
				"</li>"+
				"<li class=\"item-lists\">"+
					"<div class=\"special-info grid_1 simpleCart_shelfItem\">";
        	
        	for (i = 0; i< name.length; i++){
        		htmlText = htmlText +
				"	<div class=\"pre-top\">"+

					"<div class=\"pr-left\">"+

					"<div class=\"item_add\"><span class=\"item_price\"><h6>" + price[i] + " € </h6></span></div>"+
					"</div>"+
					"<div class=\"pr-right\">"+
					"<div class=\"item_add\"><span class=\"item_price\"><a href=\"#\">Ajouter</a></span></div>"+
					"</div>"+
					"		<div class=\"clearfix\"></div>"+
					"	</div>";
        	}

     
            htmlText = htmlText +
					"	</div>"+
				"	</li>"+
			"<div class=\"clearfix\"></div>"+
    			"</div>";
	  }else{
	    //Si aucun menu n'est disponible
      	htmlText = htmlText + 
      			"<div class=\"order-form-head text-center\" >"+
	        		"<p>Pas de menus disponibles</p>"+
	        	"</div>";
	  }
    
    document.getElementById("menusContainer").innerHTML = htmlText;

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
	
	
	var restaurantFromURL = f["restaurant"];

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        myFunction(this);
	    }
	};

	
	xhttp.open("GET", "rest/menus/restaurant/" + restaurantFromURL, true);
	restaurantFromURL = restaurantFromURL.replaceAll("%20", " ");
	restaurantFromURL = restaurantFromURL.replaceAll("%C3%A9", "é");
	document.getElementById("idRecherche").innerHTML = restaurantFromURL;

	xhttp.send();	
	myFunction(xml);
	
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
