// 1. import nodemailer

const nodemailer = require('nodemailer');

// 2. Configure email and send it .

async function sendMail() {


    // 1. Create an email transporter.
    // SMTP (simple Mail Transfer Protocol)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rahulverma9559@gmail.com',
            pass: 'ydze zhrd ksml qjvp',
        },
    });

    // 2. Configure email content
    const mailOptions = {
        from: 'rahulverma9559@gmail.com',
        to: 'rahulverma9559@gmail.com',
        subject: 'Welcome to nodeJS App',
        text: 'This is an email using nodemailer in nodejs',
    };

    // 3. Send the email.
    try {
        const result = await transporter.sendMail(
            mailOptions
        );
        console.log("Email sent Successfully");
    } catch (error) {
        console.log('Email send failed with Error: ' + err);
    }
}

sendMail();