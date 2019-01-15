<?php
	session_start();
	if(isset($_POST['req'])){$req=$_POST['req'];}else{$req="";}
	if(isset($_POST['type'])){$type=$_POST['type'];}else{$type="";}
	if(isset($_POST['etab'])){$etab=$_POST['etab'];}else{$etab="";}
	$t="false";
	if (!empty($_SESSION['name'])) {
		$t="true";
	}
	
	if(!empty($req)){
		require_once('../model/tableEtablissement.php');
		if(!empty($type)&& ($req=="table")){
			$ess=new EtablissementTable($t);
			echo $ess->getEtabTable($type);
		}
		elseif(!empty($type)&& ($req=="table2")){
			$ess=new EtablissementTable($t);
			echo $ess->getEtabTableU($type);
		}
		elseif((!empty($type))&&($req=="ecolesSel")){
			$ess=new EtablissementTable($t);
			
			echo $ess->getEtabSel($type);
		}
		elseif($req=="categories"){
			$ess=new EtablissementTable($t);
			echo $ess->getCat();
		}elseif ($req=="tableadmin") {
			$ess=new EtablissementTable($t);
			echo $ess->getTableAdmin();
		}
		elseif ($req=="delete") {
			if(!empty($type)&&!empty($etab)){
				$ess=new EtablissementTable($t);
				$ess->delete($etab,$type);
			}
		}
	}
?>