<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = array_key_exists('name', $_POST) ? $_POST['name'] : null;
$phone = array_key_exists('phone', $_POST) ? $_POST['phone'] : null;
$message = array_key_exists('message', $_POST) ? $_POST['message'] : null;
$email = array_key_exists('email', $_POST) ? $_POST['email'] : null;

// Формирование самого письма
$title = "Новая заявка UNV-Universal";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Почта:</b> $email<br>
<b>Сообщение:</b><br>$message
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'testaccamanuilov@gmail.com'; // Логин на почте
    $mail->Password   = 'Borland96'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('testaccamanuilov@gmail.com', 'Andrey Manuilov'); // Адрес самой почты и имя отправителя
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // Получатель письма
    $mail->addAddress('li0nheartus@yandex.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);