<?php

$serverName = "localhost";
$dBUsername = "root";
$dBPassword = "";
$dBName = "Azzemble login";

$conn = msqli_connect($serverName, $dBUsername, $dBPassword, $dBName);

if (!$conn) {
   die("Connection failed: " . mysqli_connect_error());
}
