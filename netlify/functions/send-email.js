const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    // We only care about POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { name, email, phone, course_interest, message } = JSON.parse(event.body);

    // IMPORTANT: You must configure these environment variables in your Netlify dashboard
    // Go to Site settings > Build & deploy > Environment > Environment variables
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Or your email provider
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // Use an "App Password" for Gmail
        },
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER, // The email address you want to receive messages on
        subject: `New Inquiry from Agnidhra Website: ${course_interest}`,
        html: `
            <h2>New Course Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Course of Interest:</strong> ${course_interest}</p>
            <hr>
            <h3>Message:</h3>
            <p>${message}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email.' }),
        };
    }
};
