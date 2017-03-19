

function myFunction(xml, usernameInput, passwordInput) {
    var xmlDoc = xml.responseXML;
    var name;
    var id;
    var email;
    var address;
    var password;
    
    name = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    id = xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue;
    email = xmlDoc.getElementsByTagName("email")[0].childNodes[0].nodeValue;
    address = xmlDoc.getElementsByTagName("address")[0].childNodes[0].nodeValue;
    password = xmlDoc.getElementsByTagName("password")[0].childNodes[0].nodeValue;
    
    if(usernameInput == "admin" && passwordInput == password){
    	window.location = "administrator.html?id=" + id;

    }


}

var loginPro = function(){
	var usernameInput = document.getElementById('emailLogin').value;
	var passwordInput = document.getElementById('passwordLogin').value;
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        myFunction(this, usernameInput, passwordInput);
	    }
	};
	xhttp.open("GET", "rest/users/name/" + usernameInput, true);
	xhttp.send();

}

