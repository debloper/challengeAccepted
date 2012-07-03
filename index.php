<?php
	$now = new DateTime;
	$now = $now->format("Y-m-d H:i:s T");

	if (array_key_exists('callback', $_GET)) {
		header('Content-Type: text/javascript; charset=utf8');
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

		echo $_GET['callback'] . '(' . json_encode($now) . ');';
	} else {
		header('Content-Type: text/plain; charset=utf8');
		echo $now;
	}
?>
