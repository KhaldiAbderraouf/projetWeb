<?php
	session_start();
	$p=$_POST['p'];
	$id=$_POST['id'];
	$pwd=$_POST['pwd'];

	if(!empty($id)&&!empty($pwd)){
		require_once('../model/user.php');
		$user = new User();
		$t=$user->isUser($id,$pwd);
		if($t=="false"){
			session_destroy();
		}
		//echo $_SESSION['name'];
		header('location: ../view/utilisateur/'.$p);	
	}
	else{
		session_destroy();
		header('location: ../view/utilisateur/'.$p);
	}
?>