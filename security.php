<?php

$title = "Jaxx Liberty | Security";

include 'includes/header.php';

?>

    <main role="main" class="animsition" data-animsition-in-class="fade-in-left-sm" data-animsition-in-duration="1000" data-animsition-out-class="fade-out-left-sm" data-animsition-out-duration="1500">

        <!--jumbotron-->
        <div id="security" role="banner" class="jumbotron jumbotron-fluid d-flex flex-column justify-content-center align-items-center text-center bg-img-banner-security text-white min-70 p-5 mb-0 content-tween">
            <img class="security-shield mt-5 pt-5 mb-3 rellax" src="/img/jaxx-shield-orange.png" alt="Jaxx Liberty Security" data-rellax-speed="-2">
            <!--<h1 class="site-title relative z-1 pb-2">Your Security is Our Mission.</h1>-->
            <h1 class="site-title relative z-1 x-bold m-0 mb-1">
                <span class="d-inline-block">We</span>
                <span class="d-inline-block">Value</span>
                <span class="d-inline-block">Your</span>
                <span class="d-inline-block">Security</span>
            </h1>
            <hr class="w-25 bg-white">
            <h2 class="site-sub-title relative z-1 pt-1 pb-3">
                <span class="d-inline-block">Explore</span>
                <span class="d-inline-block">our</span>
                <span class="d-inline-block">new</span>
                <span class="d-inline-block">and</span>
                <span class="d-inline-block">improved</span>
                <span class="d-inline-block">security</span>
                <span class="d-inline-block">model</span>
            </h2>
        </div>
        
        <!--container-->
        <div class="container-fluid p-0">
           
            <!--row 1 security intro-->
<!--
            <div id="sec-features" class="row d-flex bg-img-banner-security bg-dots p-4 shadow-lg content-tween">
                <div class="col-lg-12 d-flex flex-column justify-content-center align-items-center text-center min-70 p-3 rellax" data-rellax-speed="-1">
                    <div class="wrap d-flex flex-column justify-content-center align-items-center bg-white-op p-5 w-100 h-100 border rellax" data-rellax-speed="3">
                        <h2 class="section-title x-bold relative z-1 m-0 content-stagger-up">Millions of Users Already Trust Jaxx.</h2>
                        <p class="font-weight-bold relative z-1 py-3 content-stagger-up">We take security seriously. <span class="orange">Jaxx Liberty</span> does not require users to provide personal information to interact with their digital assets. Explore the enhanced security features found in <span class="orange">Jaxx Liberty</span> below.</p>
                        <i class="fa fa-angle-double-down p-0 display-4 content-stagger-up"></i>
                    </div>
                    <img class="img-shield absolute z-0 fade-in-slow" src="/img/jaxx-shield-navy.png" alt="Jaxx Liberty Security">
                </div>
            </div>end row
-->

           <!--row 2 security features-->
            <div class="row d-flex bg-img-banner-security relative z-1 content-tween">
                <div class="col-lg-6 d-flex flex-column justify-content-start align-items-start min-50 bg-white-op p-5 content-stagger-up">
                    <div class="wrap d-flex flex-column justify-content-center align-items-start p-4 border border-dark min-50 content-stagger-up">
                        <img class="jaxx-navbar-brand content-stagger-up" src="/img/Jaxx_Icon_Reversed_Large_RGB_Screen.png" alt="Jaxx Liberty Security">
                        <h2 class="font-weight-bold bg-navy orange skew shadow-lg p-3 mb-4 relative z-1 content-stagger-up">Verified before you start</h2>
                        <p class="border-top border-dark py-3 content-stagger-up">Even before you launch Jaxx Liberty, we’re hard at work making sure you haven’t been compromised. Before publication we use state-of-the-art static and dynamic analysis code inspection tools to check for security vulnerabilities. Afterwards, software integrity checksums and code signing help prevent man-in-the-middle attacks The code we publish is signed to prevent it from being changed or corrupted. the alteration and corruption of code, while checksums further ensure the integrity of data during transmission.</p>
                    </div>
                </div>
                <div class="col-lg-6 bg-img-hand-device p-0 slide-in-left"></div>
            </div><!--end row-->
               
            <div class="row d-flex bg-img-banner-security relative z-1 content-tween">
                <div class="col-lg-6 bg-img-people-1 p-0 o-12 content-stagger-up"></div>
                <div class="col-lg-6 d-flex flex-column justify-content-start align-items-start min-50 bg-orange text-light p-5 o-3 content-stagger-up">
                    <div class="wrap d-flex flex-column justify-content-center align-items-start p-4 border border-light min-50 content-stagger-up">
                        <img class="jaxx-navbar-brand content-stagger-up" src="/img/Jaxx_Icon_Reversed_Large_RGB_Screen.png" alt="Jaxx Liberty Security">
                        <h2 class="font-weight-bold bg-navy orange skew shadow-lg p-3 mb-4 relative z-1 content-stagger-up">It starts with a seed</h2>
                        <p class="border-top border-light py-3 content-stagger-up">Jaxx Liberty creates a 12-word phrase, then applies one-way encryption to generate private keys from it. Those private keys are the basis to managing your digital assets, and can be derived from your backup phrase. But it only works one way. Your backup phrase can’t feasibly be derived from the private keys.</p>
                    </div>
                </div>
            </div><!--end row-->

            <div class="row d-flex bg-img-banner-security bg-dots shadow-lg content-tween">
                <div class="col-lg-6 d-flex flex-column justify-content-center align-items-start text-light bg-orange p-5 content-stagger-up">
                    <div class="wrap d-flex flex-column justify-content-center align-items-start w-100 p-4 border border-light min-50 content-stagger-up">
                        <img class="jaxx-navbar-brand content-stagger-up" src="/img/Jaxx_Icon_Reversed_Large_RGB_Screen.png" alt="Jaxx Liberty Security">
                        <h2 class="font-weight-bold p-3 mb-4 bg-navy orange relative z-1 skew shadow-lg content-stagger-up">Everything stays on-device</h2>
                        <p class="border-top border-light py-3 content-stagger-up">Users' secret 12-word backup phrase is stored on-device only. It isn’t exposed to anyone, even Decentral employees. That’s why you’ll want to back up your backup phrase — and why, until you do, Jaxx Liberty will remind you often.</p>
                    </div>
                </div>
                <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center bg-orange-angle p-4 o-12 content-stagger-up">
                    <img class="img rellax" src="/img/jaxx-android-markets.png" alt="Jaxx Liberty Security">
                </div>
            </div><!--end row-->
                
            <div class="row d-flex bg-img-banner-security bg-dots shadow-lg content-tween">
                <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center bg-img-encryption p-0 o-12 content-stagger-up">
                </div>
               <div class="col-lg-6 d-flex flex-column justify-content-center align-items-start min-50 bg-white-op p-5 o-4 content-stagger-up">
                    <div class="wrap d-flex flex-column justify-content-center align-items-start p-4 border border-dark min-50 content-stagger-up">
                        <img class="jaxx-navbar-brand content-stagger-up" src="/img/Jaxx_Icon_Reversed_Large_RGB_Screen.png" alt="Jaxx Liberty Security">
                        <h2 class="font-weight-bold bg-navy orange relative z-1 skew shadow-lg p-3 mb-4 content-stagger-up">Now add encryption</h2>
                        <p class="border-top border-dark py-3 content-stagger-up">Your backup phrase and private keys are stored on-device, and shouldn’t be shared with anyone. But Jaxx Liberty goes a step further by letting you set out password. That encrypts Jaxx Liberty within your device to keep your other software away from it, too.</p>
                   </div>
                </div>
            </div><!--end row-->
            
             <div class="row d-flex bg-img-banner-security bg-dots shadow-lg content-tween">                
                <div class="col-lg-6 d-flex flex-column justify-content-start align-items-start bg-orange text-light p-5 content-stagger-up">
                    <div class="wrap d-flex flex-column justify-content-center align-items-start w-100 p-4 border border-light min-50 content-stagger-up">
                        <img class="jaxx-navbar-brand content-stagger-up" src="/img/Jaxx_Icon_Reversed_Large_RGB_Screen.png" alt="Jaxx Liberty Security">
                        <h2 class="font-weight-bold bg-navy orange p-3 mb-5 shadow-lg relative z-1 skew content-stagger-up">Secure across platforms</h2>
                        <p class="border-top border-light py-3 content-stagger-up">When we say Jaxx Liberty is multi-platform, we mean it. Use the same 12-word phrase to manage your digital assets from iOS, Android, Chrome Extension, Windows, Mac, and Linux installs in parallel. Each builds in the same level of security, interacting directly with your digital assets.</p>
                    </div>
                </div>
                <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center bg-orange-angle p-0 o-12 content-stagger-up">
                    <img class="img-full rellax" src="/img/jaxx-multi-platform.png" alt="Jaxx Liberty Security">
                </div>
            </div><!--end row-->

           <!-- row 5 download reminder CTA-->
           <div class="row bg-orange text-white min-70 content-tween">
               <div class="col-sm-12 d-flex flex-column justify-content-center align-items-center text-center bg-download-gradient p-4 parallelo">
                   <img class="jaxx-logo-text content-stagger-up" src="/img/JaxxLiberty_Logo_RGB_Screen%20(white%20Liberty%20white%20X).svg" alt="">
                   <h4 class="font-weight-bold w-75 pb-3 pt-2 content-stagger-up">Jaxx. Used by millions. Join now.</h4>
                   <div class="content-stagger-up">
                       <a href="/downloads.php" class="btn btn-lg btn-orange animsition-link" data-animsition-out-class="fade-out-down-sm" data-animsition-out-duration="800">Download</a>
                   </div>
               </div>
           </div><!--end row-->
       
        </div><!--end main container-->

        <!--footer-->
        <?php include 'includes/footer.php';?>

