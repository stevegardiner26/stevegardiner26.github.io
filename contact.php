<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
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

$mail->Body = '<h4>' . $name . ' submitted a form on your site!</h4><p>Reply Email: ' . $visitor_email . '</p><h6>Message:</h6><p>' . $message . '</p>';

$mail->SMTPAuth = true;

$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->isHTML(true);

$mail->AltBody = "Email:\r\nThis email was sent from your site form!";

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">
	<title>Contact Me</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<link rel="stylesheet" href="css/index.css">
	<link rel="stylesheet" href="./css/contact.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="shortcut icon" type="image/x-icon" href="resources/img/logo.png" />
	<script src="./js/index.js"></script>
</head>
<body>
<div class="container-fluid" style="padding: 0;">
	<nav class="navdes navbar navbar-expand-sm bg-dark2 navbar-dark" style="position: fixed;">
		<ul class="navbar-nav">
			<li class="nav-item logo" style="background-image: url('resources/img/logo.png');" onclick="location.href='index.html'">
			</li>
			<li class="nav-item">
				<a href="index.html" class="nav-link">Home</a>
			</li>
			<li class="nav-item">
				<a href="about.html" class="nav-link">About</a>
			</li>
			<li class="nav-item">
				<a href="skills.html" class="nav-link">Skills</a>
			</li>
			<li class="nav-item">
				<a href="projects.html" class="nav-link">Projects</a>
			</li>
			<li class="nav-item">
				<a href="courses.html" class="nav-link">Courses</a>
			</li>
			<li class="nav-item active">
				<a href="css/contact.css" class="nav-link">Contact</a>
			</li>
		</ul>
	</nav>
	<nav class="navm navbar bg-dark2 navbar-dark">
		<ul class="navbar-nav">
			<li class="nav-item logo" onclick="toggleHeight(this)">
				<i class="fa fa-bars" style="font-size:28px; color: white;"></i>
			</li>
			<li class="nav-item">
				<a href="index.html" class="nav-link">Home</a>
			</li>
			<li class="nav-item">
				<a href="about.html" class="nav-link">About</a>
			</li>
			<li class="nav-item">
				<a href="skills.html" class="nav-link">Skills</a>
			</li>
			<li class="nav-item">
				<a href="projects.html" class="nav-link">Projects</a>
			</li>
			<li class="nav-item">
				<a href="courses.html" class="nav-link">Courses</a>
			</li>
			<li class="nav-item">
				<a href="contact.html" class="nav-link active">Contact</a>
			</li>
		</ul>
	</nav>
	<section class="">
		<div class="background-fade"></div>
		<div class="container" style="position: relative;">
			<div class="row no-gutters">
				<h1>Contact Me</h1>
			</div>
			<div class="row no-gutters">
				<h4 class="col-md">Email: stevegardiner526@gmail.com </h4>
				<h4 class="col-md"> Text or Call: (848) 225-7040</h4>
			</div>
			<hr>
			<div class="row no-gutters">
				<div class="col-md-6 offset-3 form-container" style="height: 600px;">
					<?php
						if(!$mail->send()) {
							echo "
								<h4 class=\"text-center\" style=\"margin-top: 35px;\">There was an error with sending your email!</h4>
							", $mail->ErrorInfo , PHP_EOL;
						} else {
							echo "
								<h4 class=\"text-center\" style=\"margin-top: 35px;\">Your Email was Sent!</h4>
                    			<h4 class=\"text-center\" style=\"margin-top: 35px;\">Thank you for Contacting Us! Keep an eye on your email, we will be in touch!</h4>
							", PHP_EOL;
						}
					?>
				</div>
			</div>
			<a href="https://www.linkedin.com/in/steven-gardiner/" target="_blank" class="socialBtn linkedIn"></a>
			<a href="https://github.com/stevegardiner26" target="_blank" class="socialBtn github"></a>
			<a href="mailto:stevegardiner526@gmail.com?Subject=Freelance%20Inquiry" target="_blank" class="socialBtn email"></a>
			<a href="https://www.upwork.com/o/profiles/users/_~01604c87965b6a6f64/" target="_blank" class="socialBtn upwork"></a>
		</div>
	</section>
	<footer class="page-footer font-small blue pt-4" style="background: #5b5b5b; color: white;">
		<!-- Footer Links -->
		<div class="container-fluid text-center text-md-left">
			<!-- Grid row -->
			<div class="row">
				<!-- Grid column -->
				<div class="col-md-6 mt-md-0 mt-3">
					<!-- Content -->
					<h5 class="text-uppercase">Steven Gardiner</h5>
					<p>I am a 19 year old freelance Front-End Developer and User Interface Creator.
						I live in the New York City Area and love to develop front-end. If you need a website or additions
						to your current site or want to offer development opportunities I am always available to connect with.
						I mostly program in HTML, CSS, Javascript but I am always open to learning new languages.
					</p>
				</div>
				<!-- Grid column -->
				<hr class="clearfix w-100 d-md-none pb-3">
				<!-- Grid column -->
				<div class="col-md-3 mb-md-0 mb-3">
					<!-- Links -->
					<h5 class="text-uppercase">Connect with Me</h5>
					<ul class="list-unstyled">
						<li>

						</li>
						<li>
							<a href="https://github.com/stevegardiner26" target="_blank">Github</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/steven-gardiner/" target="_blank">Linked In</a>
						</li>
						<li>
						</li>
					</ul>

				</div>
				<!-- Grid column -->

				<!-- Grid column -->
				<div class="col-md-3 mb-md-0 mb-3">

					<!-- Links -->
					<h5 class="text-uppercase">Want to Work with Me?</h5>

					<ul class="list-unstyled">
						<li>
							<a style="margin-left: 45px;" href="mailto:stevegardiner526@gmail.com?Subject=Web%20Development%20Work" target="_top">Click Here to Email Me!</a>
						</li>
						<li style="margin-left: 45px;">
							Or Text (848) 225-7040
						</li>
					</ul>
				</div>
				<!-- Grid column -->
			</div>
			<!-- Grid row -->
		</div>
		<!-- Footer Links -->
		<!-- Copyright -->
		<div class="footer-copyright text-center py-3" style="background: #333;">© 2018 Copyright: Steve Gardiner LLC
		</div>
		<!-- Copyright -->
	</footer>
</div>
</body>
<script
	src="https://code.jquery.com/jquery-3.3.1.js"
	integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
	crossorigin="anonymous"></script>
</html>
