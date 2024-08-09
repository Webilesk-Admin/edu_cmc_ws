// src/lib/renderEmailContent.tsx

export default function renderSignUpComponent(
  username: string,
  basePath: string
): string {
  return `
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        body {   font-family: "Jost", sans-serif; margin: 0; padding: 0; background-color: #f8f8f8; }
        .container { width: 100%; max-width: 600px; margin: auto; padding: 20px; background-color: #ffffff; }
        .header, .footer { padding: 20px; }
        .header img { max-width: 150px; height: auto; }
        .header p { text-align: center; color: #FD6D00; font-size: 20px; font-weight: 800; margin: 0; }
        .section { margin: 20px 0; }
        .section img { max-width: 50px; height: auto; }
        .section p { margin: 10px 0; }
        .highlight { color: #FD6D00; font-weight: bold; }
        .footer img { max-width: 24px; height: auto; }
        .button { display: inline-block; padding: 10px 20px; font-size: 16px; color: #ffffff; background-color: #007bff; text-decoration: none; border-radius: 5px; }
        .button:hover { background-color: #0056b3; }
        .social-icons img { margin: 0 5px; }
         .footer-content {
            display: flex;
            justify-content: space-between !important;
            align-items: center !important;
            flex-wrap: wrap; /* Allows wrapping on smaller screens */
            max-width: 600px;
            width:100%;
            margin: auto;
            padding: 0 20px; /* Horizontal padding */
        }
      .linear{
              background: linear-gradient(
    90deg,
    #f3f4f8 0%,
    #dfe8ef 26.5%,
    #dae4ee 62%,
    #dfe9f3 77%,
    #eef1f8 100%
  );}
    </style>
</head>
<body>  
    <div class="container">
        <!-- Header Section -->
        <div className="banner" >
        <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td class="header" align="center">
                   <div class="" style="display:flex; gap:120px;">
                    <img src="https://www.cmcmaritimechennai.com/img/logo.png" style="max-width:74px" alt="CMC">
                    <p style="max-width:279px;text-align:center" >CMC Maritime Academy Chennai </p>
                    </div>
                </td>
            </tr>
        </table>
        
        <!-- Welcome Section -->
        <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td class="section" align="left" style="padding-left: 40px;">
                    <p style="font-size: 20px; font-weight: 600; max-width: 161px;">
                        Welcome to our marine community! Dive in and explore with us.
                    </p>
                </td>
            </tr>
        </table>
        </div>
        <!-- Excellence Section -->
        <div class="linear">
        <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td class="section" align="center">
                    <p style="font-size: 24px; font-weight: 800; color: #FD6D00; max-width: 280px;">
                        <span style="color: #672013;">WELCOME ONBOARD </span>STEVE ROGER!
                    </p>
                    <p style="font-size: 24px; font-weight: 800; color: #FD6D00;">
                        <span style="color: #672013;">INDos No -</span> 22FD2341
                    </p>
                    <p style="font-size: 20px; font-weight: 800;">Our Excellence</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td align="center" style="width: 33%;">
                            <div className="display:flex;flex-direction:column;align-items:center;gap:10px"><img src="${basePath}/path/to/cmc_excellence_1_img.png" alt="Teaching Academy"><p style="color: #672013; font-size: 18px;max-width:77px;">Teaching Academy</p></div></td>
                            <td align="center" style="width: 33%;"><img src="${basePath}/path/to/cmc_excellence_2_img.png" alt="Marine Courses"><p style="color: #672013; font-size: 18px; max-width:77px;">Marine Courses</p></td>
                            <td align="center" style="width: 33%;"><img src="${basePath}/path/to/cmc_excellence_3_img.png" alt="License Renewal"><p style="color: #672013; font-size: 18px; max-width:77px;">License Renewal</p></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        
        <!-- Courses We Offer Section -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: auto;  border-bottom: 0.3px solid #672013c7;box-shadow: 0px 2px 2.5px 0px #00000040;">
        <tr>
            <td style="padding: 20px; text-align: center;">
                <p style="font-size: 20px; font-weight: 800; margin: 0;">Courses We Offer</p>
                <div style="display: inline-block; text-align: left; margin: 20px 0;">
                    <ul style="list-style: none; padding: 0; margin: 0; text-align: center;">
                        <li style="display: flex; align-items: center; justify-content: center; margin: 10px 0;">
                            <img src="${basePath}/path/to/cmc_mailer_signup_bullet.png" alt="Bullet" style="width: 20px; height: 20px; margin-right: 10px;">
                            <p style="font-size: 14px; color: #672013; margin: 0;">Personal Safety And Social Responsibilities (PSSR)</p>
                        </li>
                        <li style="display: flex; align-items: center; justify-content: center; margin: 10px 0;">
                            <img src="${basePath}/path/to/cmc_mailer_signup_bullet.png" alt="Bullet" style="width: 20px; height: 20px; margin-right: 10px;">
                            <p style="font-size: 14px; color: #672013; margin: 0; font-weight:500">Basic Safety Training (BST)</p>
                        </li>
                        <li style="display: flex; align-items: center; justify-content: center; margin: 10px 0;">
                            <img src="${basePath}/path/to/cmc_mailer_signup_bullet.png" alt="Bullet" style="width: 20px; height: 20px; margin-right: 10px;">
                            <p style="font-size: 14px; color: #672013; margin: 0; font-weight:500">Refresher training in PST (Part - B) - RPST (Practical)</p>
                        </li>
                        <li style="display: flex; align-items: center; justify-content: center; margin: 10px 0;">
                            <img src="${basePath}/path/to/cmc_mailer_signup_bullet.png" alt="Bullet" style="width: 20px; height: 20px; margin-right: 10px;">
                            <p style="font-size: 14px; color: #672013; margin: 0; font-weight:500">High Voltage Safety & Switch Gear Course - Management Level (HV - M)</p>
                        </li>
                    </ul>
                </div>
                <p style="text-align: right; margin-top: 10px;">
                    <a href="http://localhost:3000" style="text-decoration:none;font-size:15px;font-weight:500;color:#FD6D00">Visit Website</a>
                </p>
            </td>
        </tr>
    </table>
        
   
      <table width="100%" align="center" cellpadding="0" cellspacing="0" style="padding-bottom:20px;padding-top:10px;">
                                <tbody>
                                    <tr>
                                        <td class="esd-block-button" align="center">
                                            <a href="#" style="color:black;text-decoration:none;font-size:16px;font-weight:500;">admission@cmcacademy.ac.in</a>
                                        </td>
                                    </tr>
                                    </table>
                                    <table  width="100%" cellpadding="0" cellspacing="0" style="padding-bottom:20px">
                                    <tr >
                            
                                   <td align="right" style="margin-left:45px">
                                      <div class="mob-p" >
                                          <p >##</p>
                                          <td>
                                            <p>044-4269-1188 </p>
                                            <p> 044-4265-1199</p>
                                        </td>
                                     <td>
                                            <p>+91 9445 031 188</p>
                                            <p> +91 7305 150 111 </p>
                                            <p> +91 9843 655 985</p>
                                            </td>
                                      </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td class="footer" align="center">
                    <div class="social-icons">
                        <img src="${basePath}/path/to/cmc_footer_insta_icon.png" alt="Instagram Icon"style="margin:0px 10px;">
                        <img src="${basePath}/path/to/cmc_footer_facebook_icon.png" alt="Facebook Icon"style="margin:0px 10px;">
                        <img src="	http://localhost:3000/_next/image?url=%2F_next%2Fs…ia%2Fcmc_footer_insta_icon.e560dc57.png&w=32&q=75" alt="LinkedIn Icon"style="margin:0px 10px;">
                    </div>
                    </td>
                    </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="margin-left:20px;">
            <tbody>
                <tr>
                    <td width="100%" class="es-m-p20b esd-container-frame" align="left">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="left" class="esd-block-text">
                                        <p><a target="_blank" href="https://webilesk.com/" style="font-size: 12px;color:#672013;text-decoration:none;font-weight:600">Copyright © 2024 CMC All Rights Reserved</a></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
           <table cellpadding="0" cellspacing="0" class="es-right" align="center">
            <tbody>
                <tr>
                    <td width="100%" class="es-m-p20b esd-container-frame" align="left">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="right" class="esd-block-text">
                                        <p><a target="_blank" href="https://webilesk.com/" style="font-size: 12px;color:#672013;text-decoration:none;font-weight:900">Powered By Webilesk</a></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
         
    </div>
    </div>
</body>
</html>

  `;
}
