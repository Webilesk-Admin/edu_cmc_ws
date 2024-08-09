export function renderSignUpComponent(
  username: string,
  basePath: string = "http://localhost:3000"
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
        .container { width: 100%; max-width: 600px; margin: auto; padding: 20px; }
        .header, .footer { background-color: #f8f8f8; padding: 20px; }
        .header img { max-width: 100%; height: auto; }
        .section { margin: 20px 0; }
        .section img { max-width: 50px; height: auto; }
        .section p { margin: 10px 0; }
        .highlight { color: #FD6D00; font-weight: bold; }
        .footer img { max-width: 24px; height: auto; }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header Section -->
        <div class="header">
            <img src="${basePath}/path/to/cmc_mailer_signup_logo.png" alt="CMC Maritime Academy Logo">
            <p style="text-align: center; color: #FD6D00; font-size: 20px; font-weight: 800;">CMC Maritime Academy Chennai</p>
        </div>
        
        <!-- Welcome Section -->
        <div class="section">
            <p style="font-size: 20px; font-weight: 600; text-align: left;">
                Hello ${username},<br>
                Welcome to our marine community! Dive in and explore with us.
            </p>
        </div>
        
        <!-- Excellence Section -->
        <div class="section">
            <p style="font-size: 24px; font-weight: 800; text-align: center; color: #FD6D00;">
                <span style="color: #672013;">WELCOME ONBOARD </span>STEVE ROGER!
            </p>
            <p style="font-size: 24px; font-weight: 800; text-align: center; color: #FD6D00;">
                <span style="color: #672013;">INDos No -</span> 22FD2341
            </p>
            <p style="font-size: 20px; font-weight: 800; text-align: center;">Our Excellence</p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="text-align: center;">
                    <img src="${basePath}/path/to/cmc_excellence_1_img.png" alt="Teaching Academy">
                    <p style="color: #672013; font-size: 18px;">Teaching Academy</p>
                </div>
                <div style="text-align: center;">
                    <img src="${basePath}/path/to/cmc_excellence_2_img.png" alt="Marine Courses">
                    <p style="color: #672013; font-size: 18px;">Marine Courses</p>
                </div>
                <div style="text-align: center;">
                    <img src="${basePath}/path/to/cmc_excellence_3_img.png" alt="License Renewal">
                    <p style="color: #672013; font-size: 18px;">License Renewal</p>
                </div>
            </div>
        </div>
        
        <!-- Courses We Offer Section -->
        <div class="section">
            <p style="font-size: 20px; font-weight: 800;">Courses We Offer</p>
            <ul style="list-style: none; padding: 0;">
                <li style="display: flex; align-items: center; margin: 5px 0;">
                    <img src="${basePath}/path/to/cmc_mailer_signup_bullet.png" alt="Bullet">
                    <p style="margin-left: 10px; font-size: 14px; color: #672013;">Personal Safety And Social Responsibilities (PSSR)</p>
                </li>
                <li style="display: flex; align-items: center; margin: 5px 0;">
                    <img src="${basePath}/path/to/cmc_mailer_signup_bullet.png" alt="Bullet">
                    <p style="margin-left: 10px; font-size: 14px; color: #672013;">Basic Safety Training (BST)</p>
                </li>
                <li style="display: flex; align-items: center; margin: 5px 0;">
                    <img src="${basePath}/path/to/cmc_mailer_signup_bullet.png" alt="Bullet">
                    <p style="margin-left: 10px; font-size: 14px; color: #672013;">Refresher training in PST (Part - B) - RPST (Practical)</p>
                </li>
                <li style="display: flex; align-items: center; margin: 5px 0;">
                    <img src="${basePath}/path/to/cmc_mailer_signup_bullet.png" alt="Bullet">
                    <p style="margin-left: 10px; font-size: 14px; color: #672013;">High Voltage Safety & Switch Gear Course - Management Level (HV - M)</p>
                </li>
            </ul>
            <p style="text-align: right; margin-top: 10px;">
                <a href="http://localhost:3000" style="color: #FD6D00; text-decoration: none;">Visit Website</a>
                <img src="${basePath}/path/to/cmc_mailer_signup_right_arrow.png" alt="Right Arrow">
            </p>
        </div>
        
        <!-- Contact Section -->
        <div class="section">
            <p style="font-size: 16px; font-weight: 500;">Contact Us:</p>
            <p style="font-size: 16px;">admission@cmcacademy.ac.in</p>
            <p style="font-size: 16px;">044-4269-1188 / 044-4265-1199</p>
            <p style="font-size: 16px;">+91 9445 031 188 / +91 7305 150 111 / +91 9843 655 985</p>
        </div>
        
        <!-- Footer Section -->
        <div class="footer">
            <div style="text-align: center; margin-bottom: 10px;">
                <img src="${basePath}/path/to/cmc_footer_gmail_icon.png" alt="Gmail Icon">
                <img src="${basePath}/path/to/cmc_footer_insta_icon.png" alt="Instagram Icon">
                <img src="${basePath}/path/to/cmc_footer_facebook_icon.png" alt="Facebook Icon">
                <img src="${basePath}/path/to/cmc_footer_linkedin_icon.png" alt="LinkedIn Icon">
            </div>
            <p style="font-size: 13px; color: #672013; text-align: center;">Copyright © 2024 CMC All Rights Reserved</p>
            <p style="font-size: 14px; color: #672013; text-align: center;">Powered By Webilesk</p>
        </div>
    </div>
</body>
</html>
  `;
}
