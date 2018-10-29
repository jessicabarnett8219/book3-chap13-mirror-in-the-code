const messageInput = document.getElementById("message");
const article1 = document.getElementById("article1");
const article2 = document.getElementById("article2")

messageInput.addEventListener("keyup", (event) => {
  article1.textContent = messageInput.value
  article2.textContent = messageInput.value

})