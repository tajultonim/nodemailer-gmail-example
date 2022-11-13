require("dotenv").config();
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: process.env.FROM_GMAIL,
    pass: process.env.GMAIL_APP_PASS,
  },
});

transport
  .sendMail({
    from: process.env.FROM_GMAIL,
    to: process.env.TO_GMAIL,
    subject: "Some text subject",
    body: "Some test body",
    html: "<b>Some test HTML</b>",
  })
  .then((res) => {
    console.log("Mail sent successfully!");
  })
  .catch((err) => {
    console.log("something went wrong!");
  });
