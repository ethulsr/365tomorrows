// Get the elements
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submit");
// Add an event listener to the submit button
submitButton.addEventListener("click", (event) => {
  // Get the values from the inputs
  const email = emailInput.value;
  const message = messageInput.value;
  // Send the data to the server
  fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, message }),
  });
  // Clear the inputs
  emailInput.value = "";
  messageInput.value = "";
});
<script>
  document.getElementById('create-account-link').addEventListener('click', function() {
    this.classList.add('clicked')};
    event.preventDefault(); // Prevents the link from navigating
        this.classList.add('clicked');
  
</script>
