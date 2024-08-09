// src/lib/renderEmailContent.tsx

export default function forgetPass(username: string, basePath: string): string {
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
          .mob-p{
          margin:10px}
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
                      <p style="max-width:279px;text-align:center;margin-left:60px;" >CMC Maritime Academy Chennai </p>
                      </div>
                  </td>
              </tr>
          </table>
          <div className="">
          <td align="center" class="esd-block-banner" style="position: relative;" esdev-config="h2"><a target="_blank" href="https://viewstripo.email">
        <img class="adapt-img esdev-stretch-width esdev-banner-rendered" src="
          https://img.freepik.com/premium-vector/concept-man-thinking-laptop-forgot-your-password-account-login_505620-922.jpg
                        " alt title width="100%">
    </a></td>
          </div>
             <table width="100%" cellpadding="0" cellspacing="0" style="border-bottom: 0.3px solid #672013C7;padding-bottom:20px">
            <tr>
                <td class="section" align="center">
                <p  style="font-size:26px;font-weight:600;text-align:center">Forgot Your Password?</p>
                 <p style="max-width:333px;text-align:center;font-size:24px;font-weight:300;">That’s Ok, It happens! Come let’s get you a New Password</a>.</p>

               

                </td>
                <tr>
               <td align="center" class="esd-block-button">
 
<a href="http://localhost:3000/"><button style="width:200px;height:39px;border:none;background:#f9ab70;border-radius:10px;font-size:16px;color:#ffffff;font-weight:400">Reset Password</button></a>
</td>
                </tr>
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
  </body>
  </html>
  
    `;
}
