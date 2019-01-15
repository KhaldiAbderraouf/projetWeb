<?php
	/**
	* 
	*/
	class Etablissement
	{
		private $bdd; 
		function __construct()
		{
			require_once('bdd.php');
			$this->bdd = new Bdd();
		}

		function getCat(){
			$res=$this->bdd->execute("select nom from typeformation sorted;");
			return $res;
		}
		function getEtab($cat){
			$res=$this->bdd->execute("select nom,typef,wilaya,commune,adresse,tel,link from etablissement where typef =".$cat.";");
			
			return $res;
		}
		function getEtabU($cat){
			$res=$this->bdd->execute("select * from etablissement where typef =".$cat.";");
			
			return $res;
		}
		function getURL($etab,$typef){
			$res=$this->bdd->execute("select link from  etablissement where nom ='".$etab."' and typef ='".$typef."';");
			return $res;
		}
		function getEtabSel($typef){
			$res=$this->bdd->execute("select nom from etablissement where typef ='".$typef."';");
			return $res;
		}
		function getTableAdmin(){
			$res=$this->bdd->execute("select * from etablissement ;");
			return $res;
		}
		function delete($etab,$type){
			$res=$this->bdd->execute("delete from etablissement where nom='".$etab."' and typef='".$type."' ;");
		}
		function add($etab,$type,$domaine,$wilaya,$commune,$adresse,$telephone,$lien){
			if(!empty($domaine)){$domaine="NULL";}
			$lien="http://127.0.0.1/madrassa2";
			$val="'".$etab."',"."'".$type."',"."'".$domaine."',"."'".$wilaya."',"."'".$commune."',"."'".$adresse."',"."'".$telephone."',"."'".$lien."'";
			$res=$this->bdd->execute("insert into etablissement values (".$val.");");
		}
	}
?>