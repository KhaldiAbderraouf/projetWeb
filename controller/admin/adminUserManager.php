<?php
	session_start();
	//$_SESSION['name']="";
	$p=$_POST['req'];
	$id=$_POST['admin'];
	$pwd=$_POST['pwd'];

	if(!empty($id)&&!empty($pwd)){
		require_once('../../model/user.php');
		$user = new User();
		$t=$user->isAdmin($id,$pwd);
		if($t=="false"){
			session_destroy();
		}
		echo $t;
		//header('location: ../../view/admin/');	
	}
	else{
		session_destroy();
		//header('location: ../../view/admin/');
	}
?>