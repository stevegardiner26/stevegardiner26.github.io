<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$option = $_POST['work-type']; //not on contact page
$message = $_POST['message'];

require '/var/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer;

$mail->isSMTP();

$mail->setFrom('stevegardiner526@gmail.com', 'From Amazon');
$mail->addAddress('stevegardiner526@gmail.com', 'To Steve');

$mail->Username = 'AKIAJJY63ACKVPFHU7WA';
$mail->Password = 'AhwqCCDkqiXovEPc7ndmdOMZiKNnRORi2/vkibUOwbVw';

$mail->Host = 'email-smtp.us-east-1.amazonaws.com';

$mail->Subject = 'Freelance Work From stevegardiner.org';

$mail->Body = '<h4>' . $name . ' submitted a form on your site!</h4><br><p>Reply Email: ' . $visitor_email . '</p><br><h6>Message:</h6><br><p>' . $message . '</p>';

$mail->SMTPAuth = true;

$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->isHTML(true);

$mail->AltBody = "Email Test\r\nThis email was sent through Aamzon";

if(!$mail->send()) {
	echo "Email not sent. ", $mail->ErrorInfo , PHP_EOL;
} else {
	echo "Email Sent!", PHP_EOL;
}
?>
