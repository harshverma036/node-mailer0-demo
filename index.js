const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.PORT, process.env.HOST)
const transport = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  },
});


transport.sendMail({
    from: process.env.FROM,
    to: "harsh@onepercentstartups.com",
    subject: "new mail",
    html: "<h1>Hello World</h1>"
}, (err, info) => {
    if (err) console.log(err)
    console.log(info)
})