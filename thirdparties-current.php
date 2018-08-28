<?php

$title = "Jaxx Liberty | Third Party Agreements";

include 'includes/header.php';

?> 
    
    <main role="main">

        <!--jumbotron-->
        <div class="jumbotron jumbotron-fluid d-flex flex-column justify-content-center align-items-center text-center bg-img-1 min-70 p-5 mb-0 content-tween">
            <img class="jaxx-logo-text mt-5 pt-5 relative z-2 content-stagger-up" src="/img/JaxxLiberty_Logo_RGB_Screen%20(white%20Liberty%20white%20X).svg" alt="Jaxx Liberty">
            <h1 class="site-title x-bold text-white mt-0 mb-5 content-stagger-up">Third Party Agreements</h1>
        </div>
        
       <!--container-->
        <div class="container-fluid bg-white bg-dots py-5 px-3">
        <div id="thirdPartyIntegrations" class="col-sm-12">
            <h2 class="font-weight-bold border-bottom pb-2">Third Party Integrations & Contractors</h2>
            <p class="py-2">The following is a list of third-party integrations and contractors that may be exposed to Jaxx users’ personal information.</p>
            <div class="table-responsive-sm rellax" data-rellax-speed="1">
                <table class="table table-striped table-bordered w-100">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Party (Jurisdiction)</th>
                      <th scope="col">Functionality</th>
                      <th scope="col">Data Exposed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="3" class="font-weight-bold">1. Jaxx integrations</td>
                    </tr>
                    <tr>
                      <td>ShapeShift AG (Switzerland)</td>
                      <td>Application transferring Digital Assets between coin and token types.</td>
                      <td>IP address; blockchain address; transaction information.</td>
                    </tr>
                    <tr>
                      <td colspan="3" class="font-weight-bold">2. User communications</td>
                    </tr>
                    <tr>
                      <td>Zendesk Inc. (United States)</td>
                      <td>Track, prioritize, and solve customer support tickets.</td>
                      <td>Name and email address (optional and as presented: not tied to Jaxx instance); ticket information (free text).</td>
                    </tr>
                     <tr>
                      <td>SendGrid Inc. (United States)</td>
                      <td>Store and send emails to myJaxx users.</td>
                      <td>myJaxx display name; email address; IP address in use at time of subscription.</td>
                    </tr>
                    <tr>
                      <td colspan="3" class="font-weight-bold">3. Cloud platform</td>
                    </tr>
                    <tr>
                      <td>Amazon Web Services Inc. (United States).</td>
                      <td>Cloud hosting for the Jaxx service.</td>
                      <td>All Jaxx data flows (encrypted).</td>
                    </tr>
                    <tr>
                      <td colspan="3" class="font-weight-bold">4. Web site</td>
                    </tr>
                    <tr>
                      <td>Cloudflare Inc. (United States)</td>
                      <td>Cookie for Web security.</td>
                      <td>Browsing habits.</td>
                    </tr>
                     <tr>
                      <td>Google Inc. (United States)</td>
                      <td>Cookie for Web security.</td>
                      <td>Browsing habits.</td>
                    </tr>
                  </tbody>
                </table>
            </div><!--end table-->
            
        </div><!--end thirdParty-->
    </div><!--end container-->
   
    <!--footer-->
        
    <?php include 'includes/footer.php';?>