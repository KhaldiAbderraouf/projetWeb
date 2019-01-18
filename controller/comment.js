function loadContenu(){
	if($("#etablissement").val()=="false"){
		$titre="<h3 id='titre'>vide</h3>";
	}else{
		$titre="<h3 id='titre'>"+$("#etablissement").val()+"</h3>";
	}
	$rech=("<input type='text' id='rech' onkeyup='recherche()' placeholder='Cherchez..' title='Type in a name'>");
	$com=("<input type='text' id='com' placeholder='Commentez..' title='Type in a name'><button id='commenter' onClick='ajouter()'>commenter</button>");
	$table=("<table><thead><tr><th>commentaire</th><th>date</th></tr></thead><tbody></tbody></table>");

	$("#Contenu").append($titre);
	$("#Contenu").append($rech);
	$("#Contenu").append($com);
	$("#Contenu").append($table);
	getComs($("#etablissement").val());
	/*.click(function(){
        //ajouter_local();
        ajouter();
    });*/

}

function getComs($type){
	var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	$t=xhttp.responseText;
    	//alert($t+" "+$type);
	    $("table tbody").html($t);
    }
  };
  xhttp.open("POST", "../../controller/CommentManager.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("etab="+$type);
}

function recherche() {
    var id=n;
    var input, filter, table, tr, td, i;
    input = document.getElementById("rech");
    filter = input.value.toUpperCase();
    table = document.getElementById("commentaire");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[n];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function ajouter(){
	$type=$("#titre").text();
  $commentaire=$("#com").val();
  //alert($type+" "+$commentaire);
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	$t=xhttp.responseText;
    	//alert($t);
	    $("table tbody").html($t);
    }
  };
  xhttp.open("POST", "../../controller/CommentManager.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("etab="+$type+"&com="+$commentaire);
}
