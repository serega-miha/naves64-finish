<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('boss@naves64.ru', 'новый клиент'); 
	//Кому отправить
	$mail->addAddress('naves64-test@mail.ru');
	//Тема письма
	$mail->Subject = 'новый клиент';

	

	//Тело письма
	$body = '<h3>Новый клиент</h3>';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
    if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Номер:</strong> '.$_POST['phone'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
    if(trim(!empty($_POST['shirina']))){
		$body.='<p><strong>shirina:</strong> '.$_POST['shirina'].'</p>';
	}
    if(trim(!empty($_POST['dlina']))){
		$body.='<p><strong>dlina:</strong> '.$_POST['dlina'].'</p>';
	}
	
	
	if(trim(!empty($_POST['text']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['text'].'</p>';
	}
	
	
	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>