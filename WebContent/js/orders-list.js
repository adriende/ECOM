var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};

xhttp.open("GET", "rest/menus", true);
xhttp.send();

function isInArray(value, array) {
	  return array.indexOf(value) > -1;
	}

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
    
    
    var restaurantFinal = [];
    for(i=0; i<restaurant.length;i++){
    	if(restaurantFinal.indexOf(restaurant[i])==-1){
    		restaurantFinal.push(restaurant[i]);
    	}   	 	
    }

    
	    		
	    		
	    	for (j=0; j<restaurantFinal.length; j++){
	    		
	    		htmlText = htmlText + 
	    		"<div class=\"order-top\">"+

				"<li class=\"item-lists\"><h4>Menus "+restaurantFinal[j]+"</h4>";
	        	for (i = 0; i< name.length; i++){
	        		if(restaurant[i] == restaurantFinal[j]){
		        		htmlText = htmlText + "<p>"+ name[i] + "</p>"
	        		}
	        	}
	        	
	        	htmlText = htmlText + 
					"</li>"+
					"<li class=\"item-lists\">"+
						"<div class=\"special-info grid_1 simpleCart_shelfItem\">"+
						"	<h4>Prix</h4>";
	        	
	        	for (i = 0; i< name.length; i++){
	        		if(restaurant[i] == restaurantFinal[j]){
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
	        	}

	        	

	        		htmlText = htmlText +

						"	</div>"+
					"	</li>"+
				"<div class=\"clearfix\"></div>"+
	    			"</div>";

				
				
	    	}

	    	
    	
    
    document.getElementById("menusContainer").innerHTML = htmlText;

}