<?php

	$name = $_POST['name'];
	$name = $_POST['email'];

	$meassage = "Ім'я: $name <br> Email: $email";

	mail('prolaby@info.com',
		'ProlabY_WEB Контакти',
		"$message",
		"Content-type:text/html;charset=utf-8"
	);

	echo "true";

?>