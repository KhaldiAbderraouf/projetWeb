function loadContenu(){
	partie1();
	partie2();
	partie3();
}

function partie1(){
	$div=$("<div id='partie1'></div>");
	$type=$("<select id='type' onchange='initselect()'></select>");
	$ecole1=$("<select id='ecole1' onchange='initdeuxcoter()'></select>");
	$ecole2=$("<select id='ecole2' onchange='initdeuxcoter()'></select>");
	$div.append($type,$ecole1,$ecole2);
	$("#Contenu").append($div);
	intitselectType();
	
}

function intitselectType(){
	var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	$t=xhttp.responseText;
    	$("#type").html($t);
    	initselect();
    	//initdeuxcoter();
    }
  };
  xhttp.open("POST", "../../controller/EtablissementManager.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("req=categories");
}

function initselect(){
	intitselectEcole(1);
	intitselectEcole(2);
}

function intitselectEcole($i){
	var xhttp;
  	xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	if (xhttp.readyState == 4 && xhttp.status == 200) {
    		$t=xhttp.responseText;
    		//alert($t);
    		$("#ecole"+$i).html($t);
    	}
  	};
  	xhttp.open("POST", "../../controller/EtablissementManager.php", true);
  	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  	xhttp.send("req=ecolesSel&type="+$("#type").val());
}

function partie2(){
	$div=$("<div id='partie2'></div>");
	$divd=$("<div id='droite'></div>");
	$tab1=$("<div id='tab1'></div>");
	$divd.append($tab1);
	$divg=$("<div id='gauche'></div>");
	$tab2=$("<div id='tab2'></div>");
	$div.append($divg,$divd);
	$divg.append($tab2);
	$("#Contenu").append($div);
}

function partie3(){

}

function initdeuxcoter(){
	initcoter($("#ecole1").val(),$("#type").val(),1);
	initcoter($("#ecole2").val(),$("#type").val(),2);
}

function initcoter($ecole,$typef,$i){
	getURL($ecole,$typef,$i);
	getComs($type,$i);
}

function getURL($ecole,$typef,$i){
	var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	$t=xhttp.responseText;
    	//alert($t);
    	$("#tab"+$i).load($t+" #mytable");
    }
  };
  xhttp.open("POST", "../../controller/ComparerManager.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("etab="+$ecole+"&type="+$typef);
}

function getComs($type,$i){
	var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	$t=xhttp.responseText;
	    $tab="<table><thead><tr><th>commentaire</th><th>date</th></tr></thead><tbody>"+$t+"</tbody></table>";
	    if($i==1){
	    	$("#droite table").remove();
	    	$("#droite").append($tab);
	    }
	    else{
	    	$("#gauche table").remove();
			$("#gauche").append($tab);
	    }
    }
  };
  xhttp.open("POST", "../../controller/CommentManager.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("etab="+$type);
}
