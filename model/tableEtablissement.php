<?php
	/**
	* 
	*/
	

	class EtablissementTable
	{
		private $nom;
		function __construct($name)
		{
			require_once('etablissement.php');
			$this->nom = $name;
		}
		function getEtabTable($etab){
			$res=new Etablissement();
			$tab=$res->getEtab("'".$etab."'");
			$table="";
			$i=0;
			foreach ($tab as $row ) {
				$ligne="<tr>";
				$ligne=$ligne."<td><a href= '".$row['link']."'>".$row['nom']."</a></td><td>".$row['typef']."</td><td>".$row['wilaya']."</td><td>".$row['commune']."</td><td>".$row['adresse']."</td><td>".$row['tel']."</td>";
				if($this->nom=="true"){
					$t="'".$row['nom']."'";
					$ligne=$ligne."<td><button id='".$row['nom']."' onClick= 'tocomment(this.id)'>commenter</button></td>";
					$i++;
				}
				$ligne=$ligne."</tr>";
				$table=$table.$ligne;
			}
			return $table;
		}
		function getEtabTableU($etab){
			$res=new Etablissement();
			$tab=$res->getEtabU("'".$etab."'");
			$table="";
			$i=0;
			foreach ($tab as $row ) {
				$ligne="<tr>";
				$ligne=$ligne."<td><a href= '".$row['link']."'>".$row['nom']."</a></td><td>".$row['typef']."</td><td>".$row['domaine']."</td><td>".$row['wilaya']."</td><td>".$row['commune']."</td><td>".$row['adresse']."</td><td>".$row['tel']."</td>";
				if($this->nom=="true"){
					$t="'".$row['nom']."'";
					$ligne=$ligne."<td><button id='".$row['nom']."' onClick= 'tocomment(this.id)'>commenter</button></td>";
					$i++;
				}
				$ligne=$ligne."</tr>";
				$table=$table.$ligne;
			}
			return $table;
		}
		function getURL($etab,$typef){
			$res=new Etablissement();
			$tab=$res->getURL($etab,$typef);
			$link="";
			foreach ($tab as $row ) {
				$link=$row['link'];
				break;
			}
			return $link;
		}
		function getCat(){
			$res=new Etablissement();
			$tab=$res->getCat();
			$options="";
			foreach ($tab as $row ) {
				$options=$options."<option>".$row['nom']."</option>";
			}
			return $options;
		}
		function getEtabSel($typef){
			$res=new Etablissement();
			$tab=$res->getEtabSel($typef);
			$options="";
			foreach ($tab as $row ) {
				$options=$options."<option>".$row['nom']."</option>";
			}
			return $options;
		}
		function getTableAdmin(){
			$res=new Etablissement();
			$tab=$res->getTableAdmin();
			$tbody="";
			foreach ($tab as $row ) {
				$ligne="<tr>";
				$ligne=$ligne."<td><a href= '".$row['link']."'>".$row['nom']."</a></td><td>".$row['typef']."</td><td>".$row['domaine']."</td><td>".$row['wilaya']."</td><td>".$row['commune']."</td><td>".$row['adresse']."</td><td>".$row['tel']."</td>";
				$ligne=$ligne."<td><button id='".$row['nom'].",".$row['typef']."' onClick= 'deleting(this.id)' style='background-color:red;'>supprimer</button></td>";
				$ligne=$ligne."</tr>";
				$tbody=$tbody.$ligne;
			}
			return $tbody;
		}
		function delete($etab,$type){
			$res=new Etablissement();
			$res->delete($etab,$type);
		}
		function add($etab,$type,$domaine,$wilaya,$commune,$adresse,$telephone,$lien){

		}
	}
?>