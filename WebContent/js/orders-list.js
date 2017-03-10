var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "rest/menus", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var name = [];
    var id = [];
    var price = [];
    var description = [];
    var htmlText = "";
    
    for (i = 0; i< xmlDoc.getElementsByTagName("id").length; i++){
        name[i] = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
        id[i] = xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue;
        price[i] = xmlDoc.getElementsByTagName("price")[i].childNodes[0].nodeValue;
        description[i] = xmlDoc.getElementsByTagName("description")[i].childNodes[0].nodeValue;
    	
    }
    
        	htmlText = htmlText + 
	    		"<div class=\"order-top\">" + 
				"<li class=\"item-lists\"><h4>Menus</h4>";
        	
        	for (i = 0; i< name.length; i++){
        		htmlText = htmlText + "<p>"+ name[i] + "</p>"
        	}
        	
        	htmlText = htmlText + 
				"</li>"+
				"<li class=\"item-lists\">"+
					"<div class=\"special-info grid_1 simpleCart_shelfItem\">"+
					"	<h4>Prix</h4>"+
					"	<div class=\"pre-top\">"+
					"		<div class=\"pr-left\">";
        	
        	for (i = 0; i< name.length; i++){
        		htmlText = htmlText +
						"		<div class=\"item_add\"><span class=\"item_price\"><h6>" + price[i] + " € </h6></span></div>";
        	}
        	htmlText = htmlText +
						"	</div>"+
						"	<div class=\"pr-right\">";
        	
        	for (i = 0; i< name.length; i++){
        		htmlText = htmlText +
						"		<div class=\"item_add\"><span class=\"item_price\"><a href=\"#\">Ajouter</a></span></div>";
        	}
        		htmlText = htmlText +
						"	</div>"+
						"		<div class=\"clearfix\"></div>"+
					"	</div>"+
					"	</div>"+
				"	</li>"+
				"<div class=\"clearfix\"></div>"+
			"</div>"
        	
    	
    
    document.getElementById("menusContainer").innerHTML = htmlText;

}