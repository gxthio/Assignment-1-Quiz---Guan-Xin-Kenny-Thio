<?php 
//open txt file
$f = fopen("db.txt","w");

//write txt
fwrite($f, $_POST["#username"]);
fwrite($f, $_POST["#psw"]);
fwrite($f, $_POST["#email"]);

//close txt file
fclose($f);


?>