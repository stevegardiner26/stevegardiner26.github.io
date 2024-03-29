<?php
/**
 * Created by PhpStorm.
 * User: steve
 * Date: 1/17/2019
 * Time: 8:30 PM
 */
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$option = $_POST['work-type'];
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

$mail->Body = '<h4>' . $name . ' submitted a form on your site for' . $option . '!</h4><p>Reply Email: ' . $visitor_email . '</p><h6>Message:</h6><p>' . $message . '</p>';

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
    <meta charset="utf-8">
    <title>Steven Gardiner</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="shortcut icon" type="image/x-icon" href="resources/img/logo.png" />
    <script src="./js/index.js"></script>
</head>
<body onload="document.getElementsByClassName('home-contact')[0].scrollIntoView({ behavior: 'smooth', block: 'center' })">
<div class="container-fluid" style="padding: 0;">
    <nav class="navdes navbar navbar-expand-sm bg-dark2 navbar-dark">
        <ul class="navbar-nav">
            <li class="nav-item logo" style="background-image: url('resources/img/logo.png');" onclick="location.href='index.html'">
            </li>
            <li class="nav-item">
                <a href="index.html" class="nav-link active">Home</a>
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
                <a href="contact.html" class="nav-link">Contact</a>
            </li>
        </ul>
    </nav>
    <nav class="navm navbar bg-dark2 navbar-dark">
        <ul class="navbar-nav">
            <li class="nav-item logo" onclick="toggleHeight(this)">
                <i class="fa fa-bars" style="font-size:28px; color: white;"></i>
            </li>
            <li class="nav-item">
                <a href="index.html" class="nav-link active">Home</a>
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
                <a href="contact.html" class="nav-link">Contact</a>
            </li>
        </ul>
    </nav>
    <div class="backgroundImage" style="background-image: url('resources/img/new-york-1745087_1920.jpg');"></div>
    <section class="row justify-content-center no-gutters home-main">
        <div class="container col-md-6">
            <div class="row no-gutters justify-content-center">
                <h1>Steven Gardiner</h1>
            </div>
            <div class="row no-gutters justify-content-center head2">
                <h2 class="text-center">Full Stack Developer <br>     UI Design & Development</h2>
            </div>
            <div class="row no-gutters">
                <div class="col-md-6">
                    <button class="btn btn2 mx-auto" style="display: block;" onclick="navTo('contact.html')">Contact Me</button>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-success mx-auto" style="display: block;" onclick="navTo('projects.html')">Check Out My Work</button>
                </div>
            </div>
        </div>
    </section>
    <section class="row no-gutters home-about">
        <div class="col-md-8">
            <!--Wrap this in a container below-->
            <div class="container">
                <h1>About Me...</h1>
                <hr style="background: rgb(2,148,0);">
                <p style="font-size: 20px;">I am a 19 year old web developer. I have been in the development world for over 3 years now.
                    I specialize in Javascript development including Node.js, Vue.js, and React.js, and I also do
                    front end development with HTML and CSS and a bit of backend with PHP and mySQL. I am always
                    looking for new opportunities to work and expand my knowledge and bring the best service I can
                    to anyone I work with. I bring my best work each and everytime and I am willing to put in
                    the hard work and dedication for hours on end to achieve success. I am always around for contact
                    and also available to work on most weekends.</p>
                <br>
                <p style="font-size: 20px;">
                    I currently develop with MacOS and Unix however I do have extensive experience with Windows development and some
                    development on Ubuntu and Linux.
                </p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="mx-auto profile-pic"></div>
        </div>
    </section>
    <!--<section class="row no-gutters parallax" style="background-image: url('img/lamborghini-huracan-2975652_1920.jpg');">
        <h1 class="parallax-text">Bold and Efficient</h1>
    </section>-->
    <!--<section class="row no-gutters home-testimonials">
        Gallery of Testimonials
    </section>-->
    <section class="row no-gutters home-skills">
        <div class="container-fluid">
            <div class="row no-gutters">
                <h2 class="text-center mx-auto" style="margin-top: 20px;">Top Skills</h2>
            </div>
            <div class="row no-gutters">
                <div class="col-md" onclick="location.href='https://vuejs.org/'">
                    <div class="innerCard">
                        <div class="row no-gutters">
                            <img class="mx-auto" src="resources/img/vuejs-logo.png" alt="VueJs" width="140" height="140">
                        </div>
                        <div class="row no-gutters text-center">
                            <h1 class="mx-auto">Vue Js</h1>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="innerCard">
                        <div class="row no-gutters">
                            <img class="mx-auto" src="resources/img/js-logo.png" alt="Javascript" width="140" height="140">
                        </div>
                        <div class="row no-gutters text-center">
                            <h1 class="mx-auto">Javascript</h1>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="innerCard">
                        <div class="row no-gutters">
                            <img class="mx-auto" src="resources/img/css-logo.png" alt="CSS" width="140" height="140">
                        </div>
                        <div class="row no-gutters text-center">
                            <h1 class="mx-auto">CSS</h1>
                        </div>
                    </div>
                </div>
                <div class="col-md" onclick="skillMore()">
                    <div class="more">
                        Click to See More!
                    </div>
                    <div class="arrow2 mx-auto">
                        <i class="arrow-right"></i>
                    </div>
                </div>
            </div>
    </section>
    <section class="row no-gutters parallax" style="background-image: url('resources/img/backgroundImage.jpg')">
        <h1 class="parallax-text">Responsive and Reliable</h1>
    </section>
    <section class="row no-gutters home-projects">
        <div class="col-md-7">
            <div class="container">
                <h1 style="padding: 20px 20px 0px 20px;">Projects</h1>
                <hr style="background: rgb(2,148,0); margin: 10px 20px;">
                <h5 style="padding: 5px 15px;">This Site: Fully Designed and Developed from Scratch by me. <br>
                    Feel free to check out <a href="https://github.com/stevegardiner26/stevegardiner26.github.io">the repository</a>. <br>
                    (Currently developing a Vue.js equivalent of this site)
                </h5>
                <p>
                    I worked on many projects in my career so far including this very website where you will be able
                    to see all of my other projects.
                </p>
                <p style="margin-bottom: 0px; margin-top: 40px;">I worked on a multitude of front-end things including:</p>
                <ul style="margin: 10px 20px 50px 20px;">
                    <li>Responsive Ad Formats</li>
                    <li>Websites</li>
                    <li>User Interface (Both Designed and Developed)</li>
                </ul>
                <p>
                    In all of my projects I keep the end user in mind to make things simple and easy to navigate but also
                    unique and pleasing to the mind which adds a natural flow to my creations.
                </p>
            </div>
        </div>
        <div class="col-md-5">
            <div class="mx-auto col-md-8 project-preview" style="background-image: url('./resources/img/projectPreview.PNG');" onclick="location.href='projects.html'">
                <h2 class="text-stripe">Check out my Projects</h2>
            </div>
        </div>
    </section>
    <section class="row no-gutters home-contact" style="position: relative; overflow: hidden;">
        <div class="row no-gutters" style="position: absolute; width: 100vw; overflow: hidden; top: -10px; left: -10px; height: 820px; filter: blur(5px); z-index: -1; background-image: url('resources/img/new-york-1745087_1920.jpg'); background-attachment: fixed;"></div>
        <div class="container mx-auto">
            <div class="row">
                <div class="col-md">
                    <?php
                    if(!$mail->send()) {
                        echo "
							    <h4 class=\"text-center\" style=\"margin-top: 35px;\">There was an error with sending your email!</h4>
							", $mail->ErrorInfo , PHP_EOL;
                    } else {
                        echo "
								<h4 class=\"text-center\" style=\"margin-top: 170px;\">Your Email was Sent!</h4>
                                <h4 class=\"text-center\" style=\"margin-top: 35px;\">Thank you for Contacting Us! Keep an eye on your email, we will be in touch!</h4>
							", PHP_EOL;
                    }
                    ?>
                </div>
                <div class="col-md">
                    <div class="row">
                        <div class="col-md-12 cnt" id="linkedin" style="background: lightskyblue;" onclick="location.href='https://www.linkedin.com/in/steven-gardiner/'">
                            <div class="mx-auto" style="background-image:url('resources/img/linkedin-logo.png')"></div>
                        </div>
                        <div class="col-md-6 cnt" id="github" style="background: #ffffff;" onclick="location.href='https://github.com/stevegardiner26'">
                            <div class="mx-auto" style="background-image:url('resources/img/GitHub_Logo.png')"></div>
                        </div>
                        <div class="col-md-6 cnt" id="upwork" style="background: lightgreen;" onclick="location.href='https://www.upwork.com/o/profiles/users/_~01604c87965b6a6f64/'">
                            <div class="mx-auto" style="background-image:url('resources/img/upwork.png')"></div>
                        </div>
                        <div class="col-md-6 cnt" id="misc" style="background: #F77A62;">
                            <div class="mx-auto" style="background-image:url('resources/img/99.png')"></div>
                        </div>
                        <div class="col-md-6 cnt" id="email" style="background: white; padding: 20px 10px;">
                            <a href="mailto:stevegardiner526@gmail.com?Subject=Web%20Development%20Work">
                                <div class="mx-auto" style="background-image:url('resources/img/email.png'); height: 180px; width: 180px;"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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
<script>
    function skillMore() {
        document.getElementsByClassName('arrow2')[0].style.transform = "translateX(250px)";
        setTimeout(function() {
            location.href = "skills.html";
        },800);
    }
    function navTo(locat) {
        location.href = locat;
    }
</script>
</html>
