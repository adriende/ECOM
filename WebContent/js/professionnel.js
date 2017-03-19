
function sendInscription()
{
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;
    var food = document.getElementById("food").value;
    var type = "";
    var email = document.getElementById("email").value;
    var image = document.getElementById("image").value;
    
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
    
    if(name =="" || city =="" || address =="" || food =="" || email =="" || image ==""){
    	alert("Veuillez remplir tous les champs !")
    }else{
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'rest/demandes');
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
        xhr.onreadystatechange = function() {
        	console.log("onreadystatechange");
            if(xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }else{
                document.getElementById("divRegister").style.display="none";
                document.getElementById("titleToHide").style.display="none";
                document.getElementById("divRegisterDone").style.display="block";
            }
        }
        
        xhr.send('name=' + name + '&city=' + city + '&address=' + address + '&food=' + food + '&type=' + type + '&email=' + email + '&image=' + image);
    }
}    
