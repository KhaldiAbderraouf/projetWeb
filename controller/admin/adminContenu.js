function loadContenuA () {
	$.getScript('../../controller/table.js', function() {
   		$("#Contenu").append(getHeaderUF());
   		$("#myTable thead tr th:eq(1)").after("<th>domaine</th>");
   		$("#myTable thead tr").append("<th><button onClick='lancerAjout()' >ajouter</button></th>");
   		$id01="'myModal'";
   		$none="'none'";
   		$("#Contenu").append('<div id="myModal" class="modal">'+
						  		'<div class="modal-content">'+
						    		'<div class="modal-header">'+
						   		 		'<label for="title"><b>Ajouter Ecole</b></label>'+
						   			'</div>'+
						   			'<div class="modal-body">'+
					    				'<label><b>etablbissemet</b></label>'+
									    '<input id="etab" type="text" placeholder="Enter name" name="uname" required>'+
									    '<label><b>categorie</b></label>'+
									    '<input id="cat" type="text" placeholder="Enter categorie" name="uname" required>'+
									    '<label><b>domaine</b></label>'+
									    '<input id="domaine" type="text" placeholder="Enter domaine" name="uname" required>'+
									    '<label><b>wilaya</b></label>'+
									    '<input id="wilaya" type="text" placeholder="Enter wilaya" name="uname" required>'+
									    '<label><b>commune</b></label>'+
									    '<input id="commune" type="text" placeholder="Enter commune" name="uname" required>'+
									    '<label><b>adresse</b></label>'+
									    '<input id="adresse" type="text" placeholder="Enter adresse" name="uname" required>'+
									    '<label><b>telephone</b></label>'+
									    '<input id="telephone" type="text" placeholder="Enter telephone" name="uname" required>'+
									    '<label><b>lien</b></label>'+
									    '<input id="lien" type="text" placeholder="Enter lien" name="uname" required>'+
					    			'</div>'+
					    			'<div class="modal-footer">'+
								  		'<button type="button" onclick="document.getElementById('+$id01+').style.display='+$none+'" class="cancelbtn">Cancel</button>'+
					    				'<button onClick="ajouter()" style="width:10%; float:right;" >ajouter</button></th>'+
					    			'</div>'+
						  		'</div>'+
							'</div>');
							});
	addToTable();
}


function addToTable(){
	var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	$t=xhttp.responseText;
	    $("table tbody").html($t);
    }
  };
  xhttp.open("POST", "../../controller/EtablissementManager.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //alert($type);
  xhttp.send("req=tableadmin"); 
}

function deleting($arg){
	$args=$arg.split(",");
	
	$args[0];
	$args[1];
	var xhttp;
  	xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	if (xhttp.readyState == 4 && xhttp.status == 200) {
    		$t=xhttp.responseText;
    		$("#myTable tbody").clear();
    		addToTable();
    	}
  	};
  	xhttp.open("POST", "../../controller/EtablissementManager.php", true);
  	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  	//alert($type);
  	xhttp.send("req=delete&type="+$args[1]+"&etab="+$args[0]);
}

function lancerAjout(){
	//alert($("#myModal").html());
	$("#myModal").css("display","block");
}

function ajouter(){
	$args0=$("#etab").val();
	$args1=$("#cat").val();
	$args2=$("#domaine").val();
	$args3=$("#wilaya").val();
	$args4=$("#commune").val();
	$args5=$("#adresse").val();
	$args6=$("#telephone").val();
	$args7=$("#lien").val();
	//alert($args0+" "+$args1+" "+$args2+" "+$args3+" "+$args4);

	var xhttp;
  	xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	if (xhttp.readyState == 4 && xhttp.status == 200) {
    		$t=xhttp.responseText;
    		$("#myTable tbody").clear();
    		addToTable();
    	}
  	};
  	xhttp.open("POST", "../../controller/EtablissementManager.php", true);
  	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  	//alert($type);
  	xhttp.send("req=ajouter&arg0="+$args1+"&arg1="+$args1+"&arg2="+$args2+"&arg3="+$args3+"&arg4="+$args4+"&arg5="+$args5+"&arg6="+$args6+"&arg7="+$args7);

}