<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $option = $_POST['work-type'];
    $message = $_POST['message'];

function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}
if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

    $email_from = 'gps5269@gmail.com';
    $email_subject = "Freelance Work: $name";
    $email_body = "You have received a new message from the user $name for $option.\n".
                            "Here is the message:\n $message".

    $to = "stevegardiner26@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);

?>
