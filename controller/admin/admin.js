$(document).ready(function() {
	$diap=1;
    loadAccueil();

});


setInterval(function(){ 
  changeDiapo();
}, 1000);

function loadAccueil(){
	loadEntete();
	loadSideNav();
	initContenu();
	//loadPied();
	loadContenu();
}

function initContenu(){
	$contenuS=$("<div></div>").attr("id","ContenuS");
	$contenuB=$("<div></div>").attr("id","ContenuB");
	$contenu=$("<div></div>").attr("id","Contenu");
	$contenuS.append($contenu);
	$contenuS.append($contenuB);
	$("body").append($contenuS);
}

function loadEntete(){
	$head=$("<div></div>").attr("id","head");
	$head.height($(window).height()*0.3);
	$("body").append($head);
	loadLogo();
	loadDiapo();
}

function loadLogo(){
	$logo=$("<div></div>").attr("id","logo");
	$logo.css('background-image', 'url(../images/logo.jpg)');
	$("#head").append($logo);
}

function loadDiapo(){
	$diapo=$("<div></div>").attr("id","diapo");
	$diapo.css('background-image', 'url(../images/diapo1.jpg)');
	$diapo.css('background-size','100% 100%');
	$diapo.css("background-repeat"," no-repeat");
	$("#head").append($diapo);
}


function changeDiapo(){
	
	$diap=(($diap+1)%3)+1;
	$diapo.css('background-image', 'url(../images/diapo'+$diap+'.jpg)');
	$diapo.css('background-size','100% 100%');
	$diapo.css("background-repeat"," no-repeat");
}

function Log(){
	var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	$t=xhttp.responseText;
	    $("table tbody").html($t);
    }
  };
  xhttp.open("POST", "../controller/usermanager.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  $p=location.pathname.split('/').slice(-1)[0];
  $id=$("#iname").val();
  $pwd=$("#ipwd").val();
  alert($p);
  xhttp.send("p="+$p+"&id="+$id+"&pwd="+$pwd); 
}

function loadSideNav(){
	$navbar=$("<div></div>").attr("id","navbar");
	if($("#login").val()=="false"){
		$btn=('<form class="divlogin" method="post" action="../../controller/usermanager.php">'+
	        '<input id="iname" placeholder="name" name="id">'+
	        '<input id="ipwd" type="password" placeholder="password" name="pwd">'+
	        '<input type="submit" class="ajouter" id="login" value="login">'+
	        '<input id="p" name="p" type="hidden" value="'+location.pathname.split('/').slice(-1)[0]+'">'+
	    	'</form>');
	}
	else{
		$btn=('<p>'+$("#login").val()+'</p>')
	}
	$navbar.append($btn);

	$btn=("<a href='../utilisateur/index.php' class='lien'>accueil</a>");
	$navbar.append($btn);
	$btn=("<a href='../utilisateur/Univ.php' class='lien'>Formations Universitaires</a>");
	$navbar.append($btn);
	$btn=("<a href='../utilisateur/prof.php' class='lien'>Formations professionnelles</a>");
	$navbar.append($btn);
	$btn=("<a href='../utilisateur/seco.php' class='lien'>Formations secondaires</a>");
	$navbar.append($btn);
	$btn=("<a href='../utilisateur/moy.php' class='lien'>Formations moyennes</a>");
	$navbar.append($btn);
	$btn=("<a href='../utilisateur/prim.php' class='lien'>Formations primaires</a>");
	$navbar.append($btn);
	$btn=("<a href='../utilisateur/mate.php' class='lien'>Formations maternelles</a>");
	$navbar.append($btn);
	$btn=("<a href='../utilisateur/comparer.php' class='lien'>comparer</a>");
	$navbar.append($btn);
	$btn=("<a href='../utilisateur/apropos.php' class='lien'>à propos</a>");
	$navbar.append($btn);

	$("body").append($navbar);
}


function addCat(form){
	$cat=("<Button class='categorie'>"+form+"</Button>");
	$("#Contenu").append($cat);
	//addCat2(form);
}

function addCat2(form){
	$cat=(form);
	$("#piedM").append($cat);
}

function loadPied(){
	$pied=$("<div></div>").attr("id","pied");
	$pied.height($(window).height()*0.1);
	$("#ContenuB").append($pied);
	loadMenuPied();
	loadPub();
}

function loadMenuPied(){
	$pied=$("<div></div>").attr("id","piedM");
	$("#pied").append($pied);
	addCat2("<a href='../utilisateur/Univ.php' class='lien'>Formations Universitaires</a>");
	addCat2("<a href='../utilisateur/prof.php' class='lien'>Formations professionnelles</a>");
	addCat2("<a href='../utilisateur/seco.php' class='lien'>Formations secondaires</a>");
	addCat2("<a href='../utilisateur/moy.php' class='lien'>Formations moyennes</a>");
	addCat2("<a href='../utilisateur/prim.php' class='lien'>Formations primaires</a>");
	addCat2("<a href='../utilisateur/mate.php' class='lien'>Formations maternelles");
}

function loadPub(){
	$pied=$("<div></div>").attr("id","piedPUB");
	$pied.append('<img src="../images/logo.jpg">');
	$("#pied").append($pied);
}

function loadContenuFormation(){

}