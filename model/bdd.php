<?php
	class Bdd{
		private $db;
		private $id;
		private $mdp;
		function __construct()
		{
			$this->db="projetweb";
			$this->id="root";
			$this->mdp="";
		}
		function connexion(){
			try {
		    	$bdd = new PDO('mysql:host=localhost;dbname='.$this->db.';charset=utf8',
		    	$this->id,$this->mdp,array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
			} 
			catch (Exception $e) {

		    	die('Erreur : '.$e->getMessage());
			}
			return $bdd;
		}
		function execute($req){
			$bdd = $this->connexion();
			$res= $bdd->query($req);
			return $res;

		}
	}
?>