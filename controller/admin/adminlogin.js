function loadContenu(){
	$id01="'id01'";
	$block="'block'";
	$none="'none'";
	$("#Contenu").append('<button onclick="document.getElementById('+$id01+').style.display='+$block+'" style="width:auto;">Login</button>'+
	'<div id="id01" class="modal">'+
	  '<div class="modal-content animate" action="/action_page.php">'+
	    '<div class="imgcontainer">'+
	      '<span onclick="document.getElementById('+$id01+').style.display='+$none+'" class="close" title="Close Modal">&times;</span>'+
	      '<img src="img_avatar2.png" alt="Avatar" class="avatar">'+
	    '</div>'+
	    '<div class="container">'+
	      '<label for="uname"><b>Username</b></label>'+
	      '<input id="user" type="text" placeholder="Enter Username" name="uname" required>'+
	      '<label for="psw"><b>Password</b></label>'+
	      '<input id="pwd" type="password" placeholder="Enter Password" name="psw" required>'+
	      '<button onclick="login()">Login</button>'+
	      '<label id="retour" style="color:red;"></label>'+
	      '<label>'+
	        '<input type="checkbox" checked="checked" name="remember"> Remember me'+
	      '</label>'+
	    '</div>'+
	    '<div class="container" style="background-color:#f1f1f1">'+
	      '<button type="button" onclick="document.getElementById('+$id01+').style.display='+$none+'" class="cancelbtn">Cancel</button>'+
	      '<span class="psw">Forgot <a href="#">password?</a></span>'+
	    '</div>'+
	  '</div>'+
	'</div>');
	var modal = document.getElementById('id01');

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
    	if (event.target == modal) {
        	modal.style.display = "none";
    	}
	}
}
function login(){
	$user=$("#user").val();
	$pwd=$("#pwd").val();
	var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	$t=xhttp.responseText;
    	verifier($t);
    }
  };
  xhttp.open("POST", "../../controller/admin/adminUserManager.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //alert($type);
  xhttp.send("req=login&admin="+$user+"&pwd="+$pwd); 
}

function verifier($t){
	if($t=="false"){
		$("#retour").text("username or password incorrect");
	}
	else{
		$("#retour").text("");
		document.getElementById('id01').style.display='none';
		$.getScript('../../controller/admin/adminContenu.js', function() {
			loadContenuA();
		});
	}
}
