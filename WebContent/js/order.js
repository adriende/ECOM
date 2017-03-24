
function sendOrder()
{
    var name = document.getElementById("inputName").value;
    var address = document.getElementById("inputAddress").value;
    var email = document.getElementById("inputMail").value;
    var phone = document.getElementById("inputPhone").value;
    var e = document.getElementById("inputType");
    var type = e.options[e.selectedIndex].value;
    var date="";

    
    if(name =="" || address =="" || email =="" || phone =="" || type ==""){
    	alert("Veuillez remplir tous les champs !")
    }else{
    /*    var xhr = new XMLHttpRequest();
        xhr.open('POST', 'rest/commandes');
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
        xhr.onreadystatechange = function() {
        	console.log("onreadystatechange");
            if(xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        }
        
        xhr.send('name=' + name + '&address=' + address + '&type=' + type + '&email=' + email + '&telephone=' + phone);*/
    	alert('Commande validée');
    	window.location="/ECOM3/index.html";
    }
}    
