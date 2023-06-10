// Script.js
(function () {
    emailjs.init("user_your_user_id"); // Substitua "your_user_id" pelo seu User ID do EmailJS
  
    const form = document.getElementById("email-form");
    const emailInput = document.getElementById("email-input");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Verifica se o campo de e-mail é válido
      if (emailInput.checkValidity()) {
        // Envie o e-mail usando o serviço EmailJS
        emailjs.send("your_service_id", "your_template_id", {
          to_email: emailInput.value,
        })
          .then(function () {
            // Limpa o campo de e-mail após o envio bem-sucedido
            emailInput.value = "";
            alert("E-mail enviado com sucesso!");
          })
          .catch(function (error) {
            console.error("Erro ao enviar o e-mail:", error);
            alert("Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.");
          });
      } else {
        // Se o campo de e-mail não for válido, exiba uma mensagem de erro
        emailInput.reportValidity();
      }
    });
  })();
  