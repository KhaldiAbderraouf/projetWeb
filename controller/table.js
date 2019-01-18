function getHeaderUF(){
    $table="<input type='text' id='i0' onkeyup='myFunction(0)' placeholder='names..' title='Type in a name'>"+
    "<input type='text' id='i2' onkeyup='myFunction(2)' placeholder='wilayas..' title='Type in a name'>"+
    "<input type='text' id='i3' onkeyup='myFunction(3)' placeholder='communes..' title='Type in a name'>"+
    "<table id='myTable'><thead><tr><th onclick='sortTable(0)'>Nom</th>"+
    "<th>catégorie</th>"+
    "<th onclick='sortTable(2)'>wilaya</th>"+
    "<th onclick='sortTable(3)'>commune</th>"+
    "<th>adresse</th><th>téléphones</th>";
    if($("#login").val()!="false"){
        $table=$table+"<th>commenter</th>";
    }
    $table=$table+"</tr></thead><tbody></tbody></table>";
    $tab=$($table);
    return $table;
}

function getHeaderUFC(){
    $table=$("<input type='text' id='i0' onkeyup='myFunction(0)' placeholder='names..' title='Type in a name'>"+
    "<input type='text' id='i2' onkeyup='myFunction(2)' placeholder='wilayas..' title='Type in a name'>"+
    "<input type='text' id='i3' onkeyup='myFunction(3)' placeholder='communes..' title='Type in a name'>"+
    "<table id='myTable'><thead><tr><th onclick='sortTable(0)'>Nom</th>"+
    "<th>catégorie</th>"+
    "<th onclick='sortTable(2)'>wilaya</th>"+
    "<th onclick='sortTable(3)'>commune</th>"+
    "<th>adresse</th><th>téléphones</th><th>commenter</th>"+
    "</tr></thead><tbody></tbody></table>");
    return $table;
}

function tocomment($etab){
    //$e='<input id="etablissement" name="etablissement" type="hidden" value="'+$etab+'">';
    //alert($etab);
    link($etab);
}

function link($type){
    //alert($type);
    var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       window.location.replace("../utilisateur/comment.php");
    }
  };
  xhttp.open("POST", "../../controller/commentlinker.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //alert($type);
  xhttp.send("etablissement="+$type); 
}

function sortTable(n) {
    if(n!=0){
        if($("#myTable thead tr th:eq(2)").html()=="domaine"){n++;}
    }
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            if(n==0){
                x = rows[i].getElementsByTagName("TD")[n].getElementsByTagName("a")[0];
                y = rows[i + 1].getElementsByTagName("TD")[n].getElementsByTagName("a")[0];
            }else{
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
            }
            
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
function myFunction(n) {
    var id=n;
    if(n!=0){
        if($("#myTable thead tr th:eq(2)").html()=="domaine"){n++;}
    }

    //alert(n);
    var input, filter, table, tr, td, i;
    input = document.getElementById("i"+id);
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        if(n==0){
            td = tr[i].getElementsByTagName("td")[0].getElementsByTagName("a")[0];
        }else{
            td = tr[i].getElementsByTagName("td")[n];
            //alert(td);
        }
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
