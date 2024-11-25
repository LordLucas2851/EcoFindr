import emailjs from 'https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js';

const sendEmail = async (toEmail, fromName, message) => {
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

// Example usage: Call this when an answer is added to a question
sendEmail("user@example.com", "Admin", "Your question has been answered.");
