<?php

if(count($_POST))
{
	//parse login txt
	$logindata = file('db.txt');
	$accessdata = array();
	
	foreach($logindata as $line){
		list($username, $password) = explode(',',$line);
		$accessdata[trim($username)] = trim($password);
	}
	
    // Parse form input
    $lusername = isset($_POST['#musername']) ? $_POST['musername'] : '';
    $lpassword = isset($_POST['mpassword']) ? $_POST['mpassword'] : '';

    // Check input versus login.txt data
    if (array_key_exists($lusername, $accessData) && $lpassword == $accessData[$lusername]) {
        echo "Username and Password is correct";
    } else {
        echo "Invalid username and/or password";
    }
}

?>
