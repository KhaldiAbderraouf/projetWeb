<?php
	/**
	* 
	*/
	class User
	{
		private $bdd; 
		function __construct()
		{
			require_once("bdd.php");
			$this->bdd = new Bdd();
		}
		function isUser($id,$pwd){
			$isu="false";
			if(!empty($id)){
				$res=$this->bdd->execute("select pwd from user where name='".$id."';");
				foreach ($res as $row) {
					if($pwd==$row['pwd']){
			    		$_SESSION['name']=$id;
			    		$isu="true";
			    	}
				}
			}
			if($isu=="true"){return $_SESSION['name'];}
			else{session_destroy();return "false";}
		}
		function addUser($id,$pwd){
			$isu="false";
			if(!empty($id)&&!empty($pwd)){
				$res=$this->bdd->execute("insert into user values ('".$id."','".$pwd."');");
			}
		}
		function isAdmin($id,$pwd){
			$isu="false";
			if(!empty($id)){
				$res=$this->bdd->execute("select pwd from user where name='".$id."';");
				foreach ($res as $row) {
					if($pwd==$row['pwd']){
			    		$_SESSION['admin']=$id;
			    		$isu="true";
			    	}
				}
			}
			if($isu=="true"){return $_SESSION['admin'];}
			else{return "false";}
		}
	}
?>