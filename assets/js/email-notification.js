// Include the EmailJS library (make sure this script is in your HTML file)
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>

<script>
  // Initialize EmailJS with your Public Key
  (function() {
    emailjs.init("euggqJf1pklcQY6Uo"); // Replace with your Public Key
  })();

  // Function to send an email
  async function sendEmail(toEmail, question, answer) {
    const templateParams = {
      to_name: toEmail,
      question: question,
      answer: answer,
    };

    try {
      const result = await emailjs.send(
        "service_8bwgvkk", // Your Service ID
        "template_fy5gkdz", // Your Template ID
        templateParams
      );
      console.log("Email sent successfully:", result.status, result.text);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  // Example usage: Call this when an answer is added to a question
  // Replace with actual values from your app
  const toEmail = "user@example.com"; // The user's email address
  const question = "How can I reduce plastic waste?";
  const answer = "Use reusable shopping bags, bottles, and containers.";

  sendEmail(toEmail, question, answer);
</script>
