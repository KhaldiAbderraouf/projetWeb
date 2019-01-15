function loadContenu(){

	$.getScript('../../controller/table.js', function() {
   $("#Contenu").append(getHeaderUF());
  });
	addToTable("Formations secondaires");
}

function addToTable($type){
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
  xhttp.send("req=table&type="+$type); 
}
