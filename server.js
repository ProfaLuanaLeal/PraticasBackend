function sendMessage() {
  const input = document.getElementById('userMessage');
  const messages = document.getElementById('messages');
  const userText = input.value;

  if (userText) {
      messages.innerHTML += `<div><strong>Você:</strong> ${userText}</div>`;
      input.value = '';

      // Simulação de resposta do bot
      setTimeout(() => {
          messages.innerHTML += `<div><strong>Bot:</strong> Eu recebi sua mensagem!</div>`;
          messages.scrollTop = messages.scrollHeight; // rolar para baixo
      }, 1000);
  }
}