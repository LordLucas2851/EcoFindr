import emailjs from 'emailjs-com';

export const sendEmail = async (toEmail, fromName, message) => {
    try {
        const templateParams = {
            to_name: toEmail,
            from_name: fromName,
            message: message,
        };

        const response = await emailjs.send("service_8bwgvkk", "template_fy5gkdz", templateParams, "euggqJf1pklcQY6Uo");
        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
