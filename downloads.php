<?php

$title = "Jaxx Liberty | Downloads";

include 'includes/header.php';

?>

    <main role="main" class="animsition" data-animsition-in-class="zoom-in-sm" data-animsition-in-duration="1000" data-animsition-out-class="fade-out-left-sm" data-animsition-out-duration="1500">
        
        <!--jumbotron-->
        <div id="banner" role="banner" class="jumbotron jumbotron-fluid d-flex flex-column justify-content-center align-items-center text-center text-white bg-img-banner-downloads min-70 p-5 mb-0 content-tween">
           <div id="banner" class="row">
               <div class="col-lg-12 d-flex flex-column justify-content-center align-items-center text-center py-5 rellax" data-rellax-speed="-2">
                   <img class="jaxx-navbar-brand" src="/img/Jaxx_Reversed_Icon_Orange_Large_RGB_Screen.png" alt="Jaxx Liberty Support">
                   <h1 class="page-title mt-0 mb-1">
                        <span class="d-inline-block">D</span><span class="d-inline-block">o</span><span class="d-inline-block">w</span><span class="d-inline-block">n</span><span class="d-inline-block">l</span><span class="d-inline-block">o</span><span class="d-inline-block">a</span><span class="d-inline-block">d</span>
                   </h1>
                   <hr class="w-25 bg-white">
                   <h2 class="site-sub-title">
                       <span class="d-inline-block">Try</span>
                       <span class="d-inline-block">Jaxx</span>
                       <span class="d-inline-block">Liberty</span>
                       <span class="d-inline-block">Today</span>
                   </h2>
                </div>
            </div>
        </div>

       <!--container-->
        <div class="container-fluid p-0">
           
            <!--download desktop-->
            <div id="desktop" class="row d-flex bg-white bg-img-downloads content-tween">
                <div class="col-lg-7 d-flex flex-column justify-content-center align-items-center bg-orange bg-img-downloads min-100 arrow-left o-12">
<!--                    <img class="img rellax" src="/img/jaxx-multiple-macbook.png" alt="Jaxx Liberty Desktop" data-rellax-speed="-2">-->
                    <img class="img w-75 absolute z-1 rellax" src="/img/jaxx-samsung-laptop-top-home.png" alt="Jaxx Liberty Desktop" data-rellax-speed="-2">
                </div>
                <div class="col-lg-5 d-flex flex-column justify-content-center align-items-start text-left min-100 py-5 px-0 rellax">
                    <div class="wrap w-100 rellax" data-rellax-speed="-1">
                        <h2 class="section-title x-bold bg-navy orange p-5 shadow-lg slide-in-left skew">
                            <span class="d-inline-block content-stagger-up">Download</span>
                            <span class="d-inline-block content-stagger-up">for</span>
                            <span class="d-inline-block content-stagger-up">Desktop</span>
                        </h2>
                        <div class="px-5 py-3">
                            <p class="border-top border-bottom border-grey py-4 content-stagger-up"><span class="orange font-weight-bold">Jaxx Liberty</span> will soon be available on desktop for Mac, Windows, and Linux operating systems.</p>
                        </div>
                    </div><!--end wrap-->
                    <!--nest row-->
<!--
                    <div class="row px-3">
                        <div class="col-xs-4 mr-2">
                             Button trigger modal 
                            <button type="button" class="btn btn-lg btn-orange my-2" data-toggle="modal" data-target="#downloadMac">Mac OSX</button>
                             Modal 
                            <div class="modal animated fade" id="downloadMac" tabindex="-1" role="dialog" aria-labelledby="downloadMac" aria-hidden="true">
                              <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="Download Mac OSX">Mac OSX</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">X</span>
                                    </button>
                                  </div>
                                  <div class="modal-body p-3">
                                      <h4 class="font-weight-bold">Checksums</h4>
                                      <p class="border-top pt-3">The checksum below is a simple way for you to double-check the copy of Jaxx you are installing is genuine. You can match the checksum in your instance of Jaxx with the data below.</p>
                                      <h4 class="font-weight-bold">Jaxx requires OS X 10.9 (or later)</h4>
                                      <p class="border-top pt-3">Note: Depending on your system settings, the system might warn you that "Jaxx can't be opened because it comes from an unidentified developer." You can either change your system settings to allow apps from unknown developers in your "Security & Privacy" settings, or simply right click Jaxx -> Open (as administrator), which will prompt you with a warning.</p>
									  mac checksum
                                      <h4 class="font-weight-bold">$ sha1sum LibertyBeta-2.0.7.dmg</h4>
                                      <p class="word-break border-top pt-3">7df6eecd26c5992b969550b33faa88ed4080e798</p>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-orange" data-dismiss="modal">Close</button>
                                    mac desktop download
                                    <a type="button" onclick="googleAnalyticsTrigger('OS X - Beta', 'Table')" href="https://download-liberty.jaxx.io/LibertyBeta-2.0.7.dmg">
                                        <button class="btn btn-orange">Download</button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>end mac modal
                    </div>end nest col
                    
                    windows desktop
                    <div class="col-xs-4 mr-2">
                         Button trigger windowns modal 
                        <button type="button" class="btn btn-lg btn-orange my-2" data-toggle="modal" data-target="#downloadWindows">Windows</button>
                         Modal 
                        <div class="modal animated fade" id="downloadWindows" tabindex="-1" role="dialog" aria-labelledby="downloadWindows" aria-hidden="true">
                          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="Download Mac OSX">Windows Desktop x64 / x86</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">X</span>
                                </button>
                              </div>
                              <div class="modal-body p-3">
                                  <h4 class="font-weight-bold">Checksums</h4>
                                  <p class="border-top pt-3">The checksum below is a simple way for you to double-check the copy of Jaxx you are installing is genuine. You can match the checksum in your instance of Jaxx with the data below.</p>
                                  <h4 class="font-weight-bold">Jaxx requires Windows 7 (or later)</h4>
                                  windows checksum
                                  <h4 class="font-weight-bold">$ sha1sum LibertyBeta-setup-2.0.7.exe (edited)</h4>
                                  <p class="word-break border-top pt-3">907699130bbb64d5137d21a9a27f83ee66c91adb</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-outline-orange" data-dismiss="modal">Close</button>
                                <a type="button" onclick="googleAnalyticsTrigger('Windows x64 - Beta', 'Table')" href="https://download-liberty.jaxx.io/LibertyBeta-setup-2.0.7.exe">
                                    <button class="btn btn-orange">Download</button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>end windows modal
                    </div>end nest col
                 
                    linux desktop
                    <div class="col-xs-4 mr-3">
                         Button trigger linux modal 
                        <button type="button" class="btn btn-lg btn-orange my-2" data-toggle="modal" data-target="#downloadLinux">Linux</button>
                         Modal 
                        <div class="modal animated fade" id="downloadLinux" tabindex="-1" role="dialog" aria-labelledby="downloadWindows" aria-hidden="true">
                          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="downloadLinux">Linux Desktop x64 / x86</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">X</span>
                                </button>
                              </div>
                              <div class="modal-body p-3">
                                  <h4 class="font-weight-bold">Checksums</h4>
                                  <p class="border-top pt-3">The checksum below is a simple way for you to double-check the copy of Jaxx you are installing is genuine. You can match the checksum in your instance of Jaxx with the data below.</p>
                                  <h4 class="font-weight-bold">Jaxx requires Windows 7 (or later)</h4>
                                  windows checksum
                                  <h4 class="font-weight-bold">$ sha1sum LibertyBeta-setup-2.0.7.exe (edited)</h4>
                                  <p class="word-break border-top pt-3">907699130bbb64d5137d21a9a27f83ee66c91adb</p>            
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-outline-orange" data-dismiss="modal">Close</button>
                                <a type="button" onclick="googleAnalyticsTrigger('Windows x64 - Beta', 'Table')" href="https://download-liberty.jaxx.io/LibertyBeta-setup-2.0.7.exe">
                                    <button class="btn btn-orange">Download</button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>end linux modal
                    </div>end button group nest cols
-->
                </div><!--end nest row-->
            </div><!--end col-->
            </div><!--end row-->
            
            <!--download mobile-->
            
            <div id="mobile" class="row d-flex bg-white bg-img-downloads content-tween">
                <div class="col-lg-5 d-flex flex-column justify-content-center align-items-start text-left min-100 py-5">
                    <div class="wrap w-100 rellax" data-rellax-speed="-3">
                        <h2 class="section-title x-bold bg-navy orange p-5 shadow-lg slide-in-right skew">
                            <span class="d-inline-block content-stagger-up">Download</span>
                            <span class="d-inline-block content-stagger-up">for</span>
                            <span class="d-inline-block content-stagger-up">Mobile</span>
                        </h2>
                        <div class="px-5 py-3">
                            <p class="border-top border-bottom border-grey py-4 content-stagger-up">Download <span class="orange font-weight-bold">Jaxx Liberty</span> for Android and Tablet.</p>
                        </div>
                        <!--button nest row-->
                        <div class="row pl-5 content-stagger-up">
                        <!--future apple store button-->
                        <!--
                            <div class="col-xs-6 mr-2">
                                <a onclick="googleAnalyticsTrigger('iOS', 'Banner')" href="https://itunes.apple.com/us/app/jaxx-bitcoin-ethereum-wallet/id1084514516?mt=8" target="_blank"><img title="iTunes Store Button" class="store-logo" src="img/appleStoreButton.png" alt="iTunes Store Button"/></a>
                            </div>
                        -->
                        <!--google store button-->
                            <div class="col-xs-12">
                                <a onclick="googleAnalyticsTrigger('Android', 'Banner')" href="https://play.google.com/store/apps/details?id=com.kryptokit.jaxx&hl=en" target="_blank"><img title="Play Store Button" class="w-100" src="img/googleStoreButton.png" alt="Google Store Button"/></a>
                            </div>
                        </div><!--end button nest row-->  
                    </div><!--end wrap-->                
                </div>
                <div class="col-lg-7 d-flex flex-column justify-content-center align-items-center bg-orange bg-img-downloads min-100 arrow-right">
                    <img class="img w-75 rellax" src="/img/jaxx-multiple-phones.png" alt="Jaxx Liberty Mobile" data-rellax-speed="-2">
                </div>
            </div><!--end mobile row-->
            
             <!--download google chrome ext-->
             
            <div id="chrome" class="row d-flex bg-orange bg-img-downloads content-tween">
                <div class="col-lg-7 d-flex flex-column justify-content-center align-items-center text-left min-100 o-12">
                    <img class="img rellax" src="/img/jaxx-samsung-laptop-side.png" alt="Jaxx Google Chrome" data-rellax-speed="-2">
                </div>
                <div class="col-lg-5 d-flex flex-column justify-content-center align-items-start text-left min-100 py-5">
                   <div class="wrap w-100 rellax" data-rellax-speed="-1">
                        <h2 class="section-title x-bold bg-navy orange p-5 shadow-lg slide-in-left skew">
                            <span class="d-inline-block content-stagger-up">Add</span>
                            <span class="d-inline-block content-stagger-up">to</span>
                            <span class="d-inline-block content-stagger-up">Chrome</span>
                        </h2>
                        <div class="px-5 py-3">
                            <p class="py-3 border-top border-bottom border-grey content-stagger-up">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ab, esse, labore minus odio dolor reiciendis, corrupti pariatur adipisci numquam ex! Quos ab, aperiam assumenda vitae aspernatur quas odit rem!</p>
                            <a onclick="googleAnalyticsTrigger('Chrome Extension', 'Banner')" href="https://chrome.google.com/webstore/detail/jaxx-blockchain-wallet/ancbofgphhmhcchnaognahmjfajaecmo" target="_blank">
                            <img class="store-logo-2 pt-2 content-stagger-up" src="/img/jaxx-chrome.png" alt="Download Jaxx Liberty on Google Play">
                            </a>
                        </div>
                    </div>
				</div>
            </div><!--end chrome ext row-->
            
            <!--footer-->
        
            <?php include 'includes/footer.php';?>
