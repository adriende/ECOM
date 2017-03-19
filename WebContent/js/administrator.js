var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "rest/demandes", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var name;
    var id;
    var city;
    var address;
    var food;
    var type;
    var email;
    var image;
    var htmlText = "";
    
    for (i = 0; i< xmlDoc.getElementsByTagName("id").length; i++){
        name = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
        id = xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue;
        city = xmlDoc.getElementsByTagName("city")[i].childNodes[0].nodeValue;
        address = xmlDoc.getElementsByTagName("address")[i].childNodes[0].nodeValue;
        food = xmlDoc.getElementsByTagName("food")[i].childNodes[0].nodeValue;
        type = xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue;
        email = xmlDoc.getElementsByTagName("email")[i].childNodes[0].nodeValue;
        image = xmlDoc.getElementsByTagName("image")[i].childNodes[0].nodeValue;
        htmlText = htmlText + 
        	
  	
		 "<div class=\"cart-header"+id+"\" id=\"cart-header"+id+"\" style=\"position: relative;\">"+
			 "<div class=\"close"+id+"\" onClick=\"$('.cart-header"+id+"').fadeOut('slow', function(c){$('.cart-header"+id+"').remove();deleteDemande("+id+")});\" id=\"close"+id+"\"  style=\"background: url('https://s3-us-west-2.amazonaws.com/ecom.ecom/images/close_1.png') no-repeat 0px 0px;cursor: pointer;width: 28px;height: 28px;position: absolute;right: 0px;top: 0px;-webkit-transition: color 0.2s ease-in-out;-moz-transition: color 0.2s ease-in-out;-o-transition: color 0.2s ease-in-out;transition: color 0.2s ease-in-out;\"> </div>"+
			" <div class=\"cart-sec simpleCart_shelfItem\">"+
					"<div class=\"cart-item cyc\">"+
					"	 <img src=\""+ image +"\" class=\"img-responsive\" alt=\"\">"+
					"</div>"+
				  " <div class=\"cart-item-info\">"+
				"	<h3><a href=\"#\">"+ name + "</a><span>" + food + "</span></h3>"+
				"	<ul class=\"qty\">"+
				"		<li><p>"+ address + " " + city +"</p></li>"+
					"</ul>"+
					"	<ul class=\"qty\">"+
					"		<li><p>"+ email +"</p></li>"+
						"</ul>"+
						"	<ul class=\"qty\">"+
						"		<li><p>"+ type +"</p></li>"+
							"</ul>"+
						" <div class=\"delivery\">"+
						"<div class=\"col-md-7 buy\">"+
						"<span></br></span>"+
				     	"	<a class=\"morebtn hvr-rectangle-in\" onClick=\"$('.cart-header"+id+"').fadeOut('slow', function(c){$('.cart-header"+id+"').remove();addRestaurantOnDemande("+id+")});\">Ajouter</a>"+
					"</div>"+
					"	 <div class=\"clearfix\"></div>"+
			      "  </div>	"+
				 "  </div>"+
				"   <div class=\"clearfix\"></div>"+
										
			"  </div>"+
		" </div>";
    	
    }

    document.getElementById("demandesContainer").innerHTML = htmlText;
}

function deleteDemande(id){
	
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp.open("DELETE", "rest/demandes/deleteDemande/" +id, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send();
    
}

//add a restaurant in the list of restaurant and delete the demande
//get datas from the id on the demande and post these datas on restaurants
function addRestaurantOnDemande(id){
    var xmlDoc2;
    var name;
    var city;
    var address;
    var food;
    var type;
    var email;
    var image;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	xmlDoc2 = this.responseXML;
	        for (i = 0; i< xmlDoc2.getElementsByTagName("id").length; i++){
	        	if(xmlDoc2.getElementsByTagName("id")[i].childNodes[0].nodeValue == id){
	    	        name = xmlDoc2.getElementsByTagName("name")[i].childNodes[0].nodeValue;
	    	        city = xmlDoc2.getElementsByTagName("city")[i].childNodes[0].nodeValue;
	    	        address = xmlDoc2.getElementsByTagName("address")[i].childNodes[0].nodeValue;
	    	        food = xmlDoc2.getElementsByTagName("food")[i].childNodes[0].nodeValue;
	    	        type = xmlDoc2.getElementsByTagName("type")[i].childNodes[0].nodeValue;
	    	        email = xmlDoc2.getElementsByTagName("email")[i].childNodes[0].nodeValue;
	    	        image = xmlDoc2.getElementsByTagName("image")[i].childNodes[0].nodeValue;
	    	        break	    	    
	        	};	        	
	    	}
	        var xhr = new XMLHttpRequest();
	        xhr.open('POST', 'rest/restaurants');
	        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	        
	        xhr.onreadystatechange = function() {
	        	console.log("onreadystatechange");
	            if(xhr.readyState == 4 && xhr.status == 200) {
	                alert(xhr.responseText);
	            }
	        }
	        xhr.send('name=' + name + '&ville=' + city + '&address=' + address + '&type=' + food + '&food=' + type + '&image=' + image);
	        deleteDemande(id);
	    }
	};
	xhttp.open("GET", "rest/demandes", true);
	xhttp.send();

		
}   