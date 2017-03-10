
function sendInscription()
{
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;
    var food = document.getElementById("food").value;
    var type = "";
    var email = document.getElementById("email").value;
    
    var livraison = document.getElementById("livraison").checked;
    var aEmporter = document.getElementById("aEmporter").checked;
    var surPlace = document.getElementById("surPlace").checked;
    
    if(livraison == true){
    	type = type + "livraison;";
    }
    if(aEmporter == true){
    	type = type + "aEmporter;";
    }
    if(surPlace == true){
    	type = type + "surPlace;";
    }
    
    if(name =="" || city =="" || address =="" || food =="" || email ==""){
    	alert("Veuillez remplir tous les champs !")
    }else{
        document.getElementById("divRegister").style.display="none";
        document.getElementById("titleToHide").style.display="none";
        document.getElementById("divRegisterDone").style.display="block";
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/ECOM3/rest/demandes');
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
        xhr.onreadystatechange = function() {
        	console.log("onreadystatechange");
            if(xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        }
        
        xhr.send('name=' + name + '&city=' + city + '&address=' + address + '&food=' + food + '&type=' + type + '&email=' + email);
    }
}    
