<?php
	/**
	* 
	*/
	
	class Coms
	{
		private $bdd; 
		function __construct()
		{
			require_once('bdd.php');
			$this->bdd = new Bdd();
		}

		function getComs($cat){
			$res=$this->bdd->execute("select com,date from commentaires where ecole ='".$cat."' order by date desc;");
			return $res;
		}
		function addCom($etab,$com){
			$this->bdd->execute("INSERT INTO `commentaires` (`id`, `ecole`, `date`, `com`) VALUES (NULL, '".$etab."', NOW(), '".$com."')");
		}

	}
?>