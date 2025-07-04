// ===== EmailJS Contact Form Handler =====
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "your_service_id",      // 🔁 Replace with your EmailJS Service ID
        "your_template_id",     // 🔁 Replace with your EmailJS Template ID
        contactForm,
        "your_public_key"       // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        function () {
          alert("Message sent successfully ✅");
          contactForm.reset();
        },
        function (error) {
          alert("Something went wrong. Please try again ❌");
          console.error("EmailJS Error:", error);
        }
      );
    });
  }
});
