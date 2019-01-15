<!DOCTYPE html>
<head>
    <title>PROJET WEB</title>
    <link rel="stylesheet" href="cssprojet.css">
    <script type="text/javascript" src="../../jquery/jquery-3.3.1.js"></script>

    <script src="../../controller/comment.js"></script>
    <script src="../../controller/viewcontroller.js"></script>
</head>
<body >
	<?php
    	session_start();
    	if(!empty($_SESSION["name"])){
            echo '<input id="login" name="login" type="hidden" value="'.$_SESSION["name"].'">';
        }
        else{
            echo '<input id="login" name="login" type="hidden" value="false">';
        }
        if(!empty($_SESSION["etablissement"])){
            echo '<input id="etablissement" name="etablissement" type="hidden" value="ksbkefbj">';
        }
        else{
            echo '<input id="etablissement" name="etablissement" type="hidden" value="false">';
        }
	?>
</body>
</html>