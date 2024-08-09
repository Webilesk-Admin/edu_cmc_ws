// import nodemailer from "nodemailer";
// import { renderSignUpComponent } from "@/component/renderedEmailComponent/signRendered/page"; // Ensure the path is correct

// export async function POST(req: Request) {
//   try {
//     const { email, username } = await req.json();

//     // Create a transporter
//     const htmlContent = renderSignUpComponent(username); // Pass the necessary parameters
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587, // Or 465 for SSL
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Send mail
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Hello Suriya",
//       html: htmlContent, // Ensure you're passing the correct HTML content
//     });

//     return new Response("Email sent successfully", { status: 200 });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response("Failed to send email: " + error.message, {
//       status: 500,
//     });
//   }
// }

// import nodemailer from "nodemailer";
// import ejs from "ejs";
// import path from "path";
// import fs from "fs/promises";

// export async function POST(req: Request) {
//   try {
//     const { email, username } = await req.json();

//     // Load and render the HTML template
//     const templatePath = path.resolve(process.cwd(), "mail.html");
//     const template = await fs.readFile(templatePath, "utf-8");

//     const htmlContent = ejs.render(template, {
//       name: username,
//       logoUrl: "http://example.com/images/cmc_mailer_signup_logo.png", // Adjust as needed
//     });

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Welcome to CMC Maritime Academy",
//       html: htmlContent, // Pass the rendered HTML string
//     });

//     return new Response("Email sent successfully", { status: 200 });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response("Failed to send email: " + error.message, {
//       status: 500,
//     });
//   }
// }

// app/api/send-email/route.ts
import nodemailer from "nodemailer";
import { renderSignUpComponent } from "@/lib/renderEmailContent"; // Adjust path as necessary

export async function POST(req: Request) {
  try {
    const { email, username } = await req.json();

    // Generate the HTML content for the email
    const htmlContent = renderSignUpComponent(
      username,
      "https://localhost.com" // This should be a real URL in production
    );

    // Create the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587, // For TLS
      secure: false, // Use true for SSL (port 465)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to CMC Maritime Academy!",
      html: htmlContent, // Use the rendered HTML string
    });

    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(`Failed to send email: ${error.message}`, {
      status: 500,
    });
  }
}
