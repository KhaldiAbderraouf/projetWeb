<?php
	session_start();
    if(!empty($_SESSION["name"])){
		$etab=$_POST['etab'];
		if(isset($_POST['com'])){
			$com=$_POST['com'];
		}	
		if(!empty($etab)){
			require_once('../model/Comment.php');
			if((empty($com))){
				$ess=new Coms();
				$res=$ess->getComs($etab);
				$tbody="";
				foreach ($res as $row) {
					$ligne="<tr>";
					$ligne=$ligne."<td>".$row['com']."</td>"."<td>".$row['date']."</td></tr>";
					$tbody=$tbody.$ligne;
				}
				echo $tbody;
			}else{
				$ess=new Coms();
				$res=$ess->addCom($etab,$com);
				$res=$ess->getComs($etab);
				$tbody="";
				foreach ($res as $row) {
					$ligne="<tr>";
					$ligne=$ligne."<td>".$row['com']."</td>"."<td>".$row['date']."</td></tr>";
					$tbody=$tbody.$ligne;
				}
				
				echo $tbody;
			}
		}
	}
?>