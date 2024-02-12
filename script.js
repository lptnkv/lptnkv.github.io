function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set button position to absolute
    noButton.style.position = "absolute";

    // Change image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide name message
    document.getElementById("question").textContent =
      "Неа! Так не получится)";
    document.getElementById("name").style.display = "none";

  }

  if (response === "Yes") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();
    document.getElementById("question").textContent = '';

    // Update text content, show message, and change image source to "dance.gif"
    const question = document.getElementById("question");
    const yesMessage = document.getElementById("yes-message");
    yesMessage.classList.remove("hidden-message");
    question.style.display = "block";
    question.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Remove yes button
    document.getElementById("yes-button").remove();
  }
}
