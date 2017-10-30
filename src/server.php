<?php

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$street = $_POST['user-street'];
$bld = $_POST['user-bld'];
$part = $_POST['user-part'];
$appt = $_POST['user-appt'];
$floor = $_POST['user-floor'];
$message = $_POST['message'];
$pay = $_POST['pay-option'];

    $disturb = $_POST['dont-disturb'];
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА'; 

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя: ' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Номер дома: ' . $bld . '</li>
            <li>Корпус: ' . $part . '</li>
            <li>Квартира: ' . $appt . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарии к заказу: ' . $message . '</li>
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>    
    ';

    $headers = "From: Администратор сайта <stanislav-mikhnev@yandex.ru>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('stanislav.mikhniev@gmail.com', 'Заказ', $mail_message, $headers);

    $data = array(

        );

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

    ?>