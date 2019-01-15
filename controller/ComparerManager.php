<?php
session_start();
	$etab=$_POST['etab'];
	$typef=$_POST['type'];
	$t="false";
	if (!empty($_SESSION['name'])) {
		$t="true";
	}
	if(!empty($etab)&&!empty($typef)){
		require_once('../model/tableEtablissement.php');
		$ess=new EtablissementTable($t);
		echo $ess->getURL($etab,$typef);
	}
?>