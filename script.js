const botResponses = {
  greeting: [
    "Hey! What's up? 😎",
    "Yo! How’s it going? 🙌",
    "Sup! What’s on your mind?",
  ],
  mood: [
    "I’m just a bot, but I feel great! How about you?",
    "Feeling awesome! You?",
  ],
  joke: [
    "Why did the computer catch a cold? It left its Windows open! 😂",
    "What do you call fake spaghetti? An impasta! 🍝",
  ],
  unknown: [
    "I’m still learning... Maybe try asking something else? 🤔",
    "Not sure about that, but I’m always up for a chat! 💬",
    "Please refer to out special counciling members to make yourself better",
  ],
  depression: [
    "I'm really sorry you're feeling this way. 💙 You're not alone, and talking to someone can really help.",
    "It's okay to not be okay. Please reach out to someone you trust, or a counselor. You're important. 💙",
    "Remember, tough times don’t last, but tough people do. Please consider speaking to a professional who can help.",
  ],
};

function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  if (userInput.trim() === "") return;

  addUserMessage(userInput);
  simulateTypingEffect();

  setTimeout(() => {
    const botResponse = getBotResponse(userInput);
    addBotMessage(botResponse);
    scrollToBottom();
  }, 1200);

  document.getElementById("userInput").value = "";
}

function addUserMessage(message) {
  const chatbox = document.getElementById("chatbox");
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.textContent = message;
  chatbox.appendChild(userMessage);
}

function addBotMessage(message) {
  const chatbox = document.getElementById("chatbox");
  const botMessage = document.createElement("div");
  botMessage.classList.add("bot-message");
  botMessage.textContent = message;
  document.getElementById("typing-indicator").style.display = "none";
  chatbox.appendChild(botMessage);
}

function getBotResponse(input) {
  input = input.toLowerCase();
  if (input.includes("hi") || input.includes("hello")) {
    return randomResponse(botResponses.greeting);
  } else if (
    input.includes("depressed") ||
    input.includes("sad") ||
    input.includes("lonely")
  ) {
    return randomResponse(botResponses.depression);
  } else if (
    input.includes("how are you") ||
    input.includes("how’s it going")
  ) {
    return randomResponse(botResponses.mood);
  } else if (input.includes("joke")) {
    return randomResponse(botResponses.joke);
  } else {
    return randomResponse(botResponses.unknown);
  }
}

function randomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

function simulateTypingEffect() {
  const typingIndicator = document.getElementById("typing-indicator");
  typingIndicator.style.display = "block";
}

function scrollToBottom() {
  const chatbox = document.getElementById("chatbox");
  chatbox.scrollTop = chatbox.scrollHeight;
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}
