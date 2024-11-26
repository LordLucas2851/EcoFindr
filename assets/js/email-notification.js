import emailjs from 'https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js';

//Function to send an email
export const sendEmail = async (toEmail, fromName, message) => {
    try {
        const templateParams = {
            to_name: toEmail,
            from_name: fromName,
            message: message,
        };

        await emailjs.send("service_8bwgvkk", "template_fy5gkdz", templateParams, "euggqJf1pklcQY6Uo");
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
