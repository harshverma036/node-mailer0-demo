const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.PORT, process.env.HOST)
const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
});


transport.sendMail({
    from: process.env.SMTP_FROM,
    to: ["harsh@onepercentstartups.com"],
    subject: "new mail",
    html: "<h1>Hello World</h1>"
}, (err, info) => {
    if (err) console.log(err)
    console.log(info)
})