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
    		$("#myTable tbody").empty();
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
	alert($args0+" "+$args1+" "+$args2+" "+$args3+" "+$args4+" "+$args5+" "+$args6+" "+$args7);

	var xhttp;
  	xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	if (xhttp.readyState == 4 && xhttp.status == 200) {
    		$t=xhttp.responseText;
    		//alert($t);
    		$("#myTable tbody").empty();
    		addToTable();
    		document.getElementById('id01').style.display='none';
    	}
  	};
  	xhttp.open("POST", "../../controller/EtablissementManager.php", true);
  	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  	//alert($type);
  	xhttp.send("req=add&etab="+$args1+"&type="+$args1+"&domaine="+$args2+"&wilaya="+$args3+"&commune="+$args4+"&adresse="+$args5+"&telephone="+$args6+"&lien="+$args7);
}

function modifier($id){
	$("#"+$id).closest('tr').attr('contenteditable', 'true');
	$("#"+$id).parent().append("<button id='c"+$id+"' onclick='update(this.id)'></button>");
}

function update($id){
	$tr=$("#"+$id).closest('tr');
	$tr.attr('contenteditable', 'false');
	//.children( ".selected" ).css( "color", "blue" );
	//alert($tr.children("td:eq(1)").text());
	$args0=$tr.children("a").text();
	$args1=$tr.children("td:eq(1)").text();
	$args2=$tr.children("td:eq(2)").text();
	$args3=$tr.children("td:eq(3)").text();
	$args4=$tr.children("td:eq(4)").text();
	$args5=$tr.children("td:eq(5)").text();
	$args6=$tr.children("td:eq(6)").text();
	var xhttp;
  	xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	if (xhttp.readyState == 4 && xhttp.status == 200) {
    		$t=xhttp.responseText;
    		$("#"+$id).remove();
    		//alert($t);
    		$("#myTable tbody").empty();
    		addToTable();
    		
    	}
  	};
  	xhttp.open("POST", "../../controller/EtablissementManager.php", true);
  	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  	//alert($type);
  	xhttp.send("req=update&etab="+$args1+"&type="+$args1+"&domaine="+$args2+"&wilaya="+$args3+"&commune="+$args4+"&adresse="+$args5+"&telephone="+$args6);
}