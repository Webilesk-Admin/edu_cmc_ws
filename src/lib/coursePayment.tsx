// src/lib/renderEmailContent.tsx

export default function coursePymt(username: string, basePath: string): string {
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
              .section p{
              margin :15px;}
          </style>
      </head>
      <body>  
          <div class="container">
              <!-- Header Section -->
              <div className="banner" >
              <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                      <td class="header" align="center">
                         <div class="" style="display:flex;align-items:end; gap:120px;">
                          <img src="https://www.cmcmaritimechennai.com/img/logo.png" style="max-width:74px" alt="CMC">
                          <p style="max-width:279px;text-align:center;margin-left:60px;" >CMC Maritime Academy Chennai </p>
                          </div>
                      </td>
                  </tr>
              </table>
                <table align="center">
                              <td>
              <div className="">
              <td align="center" class="esd-block-banner" style="position: relative;" esdev-config="h2"><a target="_blank" href="https://viewstripo.email">
            <img class="adapt-img esdev-stretch-width esdev-banner-rendered" src="
           https://img.freepik.com/free-vector/wallet-flat-style_78370-7135.jpg?t=st=1723023591~exp=1723027191~hmac=263760cbf4ac69adb6619745b9bfc9921f8384230e0de26614206be24802edbf&w=826
                            " alt title width="100%" height="400px">
        </a></td>
              </div>
              </td>
              </table>
                 <table width="100%" cellpadding="0" cellspacing="0" style="border-bottom: 0.3px solid #672013C7;padding-bottom:20px">
                <tr>
                    <td class="section" align="center">
 <a href="http://localhost:3000/"><button style="font-size:16px;font-weight:500;text-align:center;background:#fecaa3;height:49px;border:none;width:100%;">RECEIPT NO #CMC/2024/RCPT/000037</button></a>
                    <tr>
                    <td align="left">
                     <p style="max-width:333px;text-align:left;font-size:18px;font-weight:600;font-color:#672013">Dear, STEVE ROGER </p>
    
                     <p style="max-width:363px;text-align:left;font-size:18px;font-weight:500;color:#672013">Thank You for your business with us. The Invoice can be Downloaded as PDF from below attachment Link.</p>
                     </td>
                     </tr>
                     <p style="text-align:center;font-size:20px;font-weight:400;">RECEIPT AMOUNT: <span style="font-size:20px;color:#FD6D00;font-weight:700">   :₹ 7,500/- </span></p>
                     <p style="text-align:center;font-size:20px;font-weight:400;">RECEIPT DATE: <span style="font-size:20px;color:#FD6D00;font-weight:700">   : 23/07/2024/-</span></p>
                   <tr>
             
                  </tr>
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
      </body>
      </html>
      
        `;
}
