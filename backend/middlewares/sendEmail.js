const nodeMailer =require("nodemailer")

exports.sendEmail = async(options)=>{
    const transporter = nodeMailer.createTransport({
        //sending mail using gmail but due to security reasons gmail sometimes doesnt work 
        host:process.env.SMPT_HOST,
        port:process.env.SMPT_PORT,
        auth:{
            user:process.env.SMPT_MAIL,
            pass:process.env.SMPT_PASSWORD,
        },
        service:process.env.SMPT_SERVICE

        //sending mail using mailtrap.com 
        // host: "sandbox.smtp.mailtrap.io",
        // port: 2525,
        // auth: {
        //   user: "f8da9038ceb8c1",
        //   pass: "e3995562dea339"
        // }
    });

    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(mailOptions)
}