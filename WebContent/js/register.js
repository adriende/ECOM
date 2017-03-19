
function sendNewUser()
{
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var passwordRepeat = document.getElementById("passwordRepeat").value;
    var email = document.getElementById("email").value;
    

    
    if(name =="" || password =="" || passwordRepeat =="" || email ==""){
    	alert("Veuillez remplir tous les champs !")
    }else{
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'rest/users');
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");      
        xhr.onreadystatechange = function() {
        	console.log("onreadystatechange");
            if(xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        }
        
        xhr.send('name=' + name + '&password=' + password + '&address=""' + '&email=' + email);
    	window.location = "index.html";

    }
}    
