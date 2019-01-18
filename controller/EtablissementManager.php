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
		elseif ($req=="add") {
			if(isset($_POST['domaine'])){$domaine=$_POST['domaine'];}else{$domaine="";}
			if(isset($_POST['wilaya'])){$wilaya=$_POST['wilaya'];}else{$wilaya="";}
			if(isset($_POST['commune'])){$commune=$_POST['commune'];}else{$commune="";}
			if(isset($_POST['adresse'])){$adresse=$_POST['adresse'];}else{$adresse="";}
			if(isset($_POST['telephone'])){$telephone=$_POST['telephone'];}else{$telephone="";}
			if(isset($_POST['lien'])){$lien=$_POST['lien'];}else{$lien="";}
			echo $domaine." ".$etab." ".$type." ".$wilaya." ".$commune." ".$adresse." ".$telephone." ".$lien;
			if(!empty($type)&&!empty($etab)&&!empty($type)&&!empty($etab)&&!empty($type)&&!empty($etab)){
				$ess=new EtablissementTable($t);
				$ess->add($etab,$type,$domaine,$wilaya,$commune,$adresse,$telephone,$lien);
			}
		}
		elseif ($req=="update") {
			if(isset($_POST['domaine'])){$domaine=$_POST['domaine'];}else{$domaine="";}
			if(isset($_POST['wilaya'])){$wilaya=$_POST['wilaya'];}else{$wilaya="";}
			if(isset($_POST['commune'])){$commune=$_POST['commune'];}else{$commune="";}
			if(isset($_POST['adresse'])){$adresse=$_POST['adresse'];}else{$adresse="";}
			if(isset($_POST['telephone'])){$telephone=$_POST['telephone'];}else{$telephone="";}
			echo $domaine." ".$etab." ".$type." ".$wilaya." ".$commune." ".$adresse." ".$telephone." ".$lien;
			if(!empty($type)&&!empty($etab)&&!empty($type)&&!empty($etab)&&!empty($type)&&!empty($etab)){
				$ess=new EtablissementTable($t);
				$ess->update($etab,$type,$domaine,$wilaya,$commune,$adresse,$telephone,$lien);
			}
		}
	}
?>