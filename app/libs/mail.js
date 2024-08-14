"use server"
import nodemailer from "nodemailer";

export const sendEmail = async (data) => {
  console.log("asd")
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USERNAME,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const { name, phone, email, subject, message } = data;

console.log(process.env.MY_MAIL)

  const mailOptions = {
    from: `${name}`,
    to: process.env.MY_MAIL,
    subject: `${subject}`,
    html: `<p>Meno: ${name} </p>
             <p>Email: ${email}, Phone: ${phone}</p>
             <br>
             <h5>${subject}</h5>
             <p>${message}</p> 
      `,
  };
  const result =  await transporter.sendMail(mailOptions);
  console.log(result)
};

export const sendEmailWithAttachment = async (
  email,
  invoiceNumber,
  pdfBytes
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USERNAME,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: "noreply.invoice-system",
    to: email,
    subject: "Faktúra " + invoiceNumber,
    html: html,
    attachments: [
      { filename: "Faktúra.pdf", content: pdfBytes, encodeURI: "base64" },
    ],
  };

  // Odoslanie e-mailu
  await transporter.sendMail(mailOptions);
};