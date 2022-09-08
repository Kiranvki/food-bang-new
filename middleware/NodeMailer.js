const nodeMailer = require("nodemailer");

const sendMail = async (to, subject, content) => {
  const transporter = await nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "kiranvki25@gmail.com",
      pass: process.env.PASS,
    },
  });

  let info = await transporter.sendMail({
    from: "kiranvki25@gmail.com",
    to,
    subject,
    html: `<div>${content}</div>`,
  });

  return info;
};

module.exports = sendMail;